/* eslint-disable prefer-destructuring */
/* eslint-disable comma-dangle */
import React from 'react';
import { Table, Checkbox, Input, Button, Divider, message } from 'antd';
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import styles from './style.less';

let dragingIndex = -1;

class BodyRow extends React.PureComponent {
  render() {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      currentSelectRow,
      ...restProps
    } = this.props;
    const style = {
      ...restProps.style,
      cursor: 'move',
    };
    // 选择行添加背景
    if (currentSelectRow === restProps['data-row-key']) {
      style.background = '#e6f7ff';
    }

    let { className } = restProps;
    if (isOver) {
      if (restProps.index > dragingIndex) {
        className += ' drop-over-downward';
      }
      if (restProps.index < dragingIndex) {
        className += ' drop-over-upward';
      }
    }

    return connectDragSource(
      connectDropTarget(<tr {...restProps} className={className} style={style} />),
    );
  }
}

const rowSource = {
  beginDrag(props) {
    dragingIndex = props.index;
    return {
      index: props.index,
    };
  },
};

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    // eslint-disable-next-line no-param-reassign
    monitor.getItem().index = hoverIndex;
  },
};

const DragableBodyRow = DropTarget('row', rowTarget, (connectDragable, monitor) => ({
  connectDropTarget: connectDragable.dropTarget(),
  isOver: monitor.isOver(),
}))(
  DragSource('row', rowSource, connectDragable => ({
    connectDragSource: connectDragable.dragSource(),
  }))(BodyRow),
);

const columns = [
  {
    title: '序号',
    dataIndex: 'seqIndex',
    key: 'seqIndex',
    width: 150,
  },
  {
    title: '方案',
    dataIndex: 'scheme',
    key: 'scheme',
    width: 150,
  },
  {
    title: '选中',
    dataIndex: 'isHidden',
    key: 'isHidden',
    width: 150,
    checkbox: true,
  },
  {
    title: '宽度',
    dataIndex: 'width',
    key: 'width',
    width: 150,
    input: true,
  },
];

const HeaderCheckboxCell = props => {
  const { onCheckboxAll, editable, ...restProps } = props;
  if (editable === 'checkbox') {
    return (
      <th {...restProps}>
        <Checkbox onChange={onCheckboxAll} />
        显示
      </th>
    );
  }
  return <th {...restProps} />;
};

const EditableCell = props => {
  const { record, onChange, editable, ...restProps } = props;
  if (editable === 'input') {
    return (
      <td {...restProps}>
        <Input
          size="small"
          maxLength={3}
          value={record.width}
          onChange={e => onChange(record, e)}
        />
      </td>
    );
  }
  if (editable === 'checkbox') {
    return (
      <td {...restProps}>
        <Checkbox checked={!record.isHidden} onChange={e => onChange(record, e)} />
      </td>
    );
  }
  return <td {...restProps}>{restProps.children}</td>;
};

// eslint-disable-next-line react/no-multi-comp
class DragSortingTable extends React.Component {
  state = {
    currentSelectRow: '',
  };

  onCheckboxAll = e => {
    const { handleChangeList, listData } = this.props;
    const newArray = listData.map(item => ({
      ...item,
      isHidden: !e.target.checked,
    }));
    handleChangeList(newArray);
  };

  onCheckboxChange = (record, e) => {
    const { handleChangeList, listData } = this.props;
    const newArray = listData.map(item => {
      if (item.id === record.id) {
        return {
          ...item,
          isHidden: !e.target.checked,
        };
      }
      return item;
    });
    handleChangeList(newArray);
  };

  onInputChange = (record, e) => {
    const { handleChangeList, listData } = this.props;
    const newArray = listData.map(item => {
      if (item.id === record.id) {
        return {
          ...item,
          width: e.target.value,
        };
      }
      return item;
    });
    handleChangeList(newArray);
  };

  moveRow = (dragIndex, hoverIndex) => {
    const { handleChangeList, listData } = this.props;
    const dragRow = listData[dragIndex];
    const spliceArray = update(listData, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
    });

    const sortArray = spliceArray.map((item, index) => ({
      ...item,
      seqIndex: index + 1,
    }));
    handleChangeList(sortArray);
  };

  // 选择行
  selectRow = record => {
    console.log('TCL: DragSortingTable -> record', record);
    this.setState({
      currentSelectRow: record.id,
    });
  };

  // 移动行
  handleMoveRow = (type, value) => {
    const { currentSelectRow } = this.state;
    if (!currentSelectRow) return;

    const { handleChangeList, listData } = this.props;

    // 获取移动行的index
    let arrIndex = '';
    listData.forEach((item, index) => {
      if (item.id === currentSelectRow) {
        arrIndex = index;
      }
    });

    let params = [];
    if (type === 'up') {
      params = this.upGo(listData, arrIndex);
    }
    if (type === 'down') {
      params = this.downGo(listData, arrIndex);
    }
    if (type === 'jump') {
      params = this.jumpGo(listData, arrIndex, value);
    }
    // 重排序号
    const sortArray = params.map((item, index) => ({
      ...item,
      seqIndex: index + 1,
    }));

    handleChangeList(sortArray);
  };

  // 上移数组元素
  upGo = (fieldData, index) => {
    const resArr = [...fieldData];
    if (index !== 0) {
      resArr[index] = resArr.splice(index - 1, 1, resArr[index])[0];
    } else {
      resArr.push(resArr.shift());
    }
    return resArr;
  };

  // 下移数组元素
  downGo = (fieldData, index) => {
    const resArr = [...fieldData];
    if (index !== fieldData.length - 1) {
      resArr[index] = resArr.splice(index + 1, 1, resArr[index])[0];
    } else {
      resArr.unshift(resArr.splice(index, 1)[0]);
    }
    return resArr;
  };

  // 直接移动
  jumpGo = (fieldData, index, value) => {
    if (value > fieldData.length || value < 1) {
      message.warning('请输入正确的范围');
      return fieldData;
    }
    const resArr = [...fieldData];
    const rawData = resArr[index];
    // 删除原位置
    resArr.splice(index, 1);
    // 插入指定位置
    resArr.splice(value - 1, 0, rawData);

    return resArr;
  };

  render() {
    const components = {
      header: {
        cell: HeaderCheckboxCell,
      },
      body: {
        row: DragableBodyRow,
        cell: EditableCell,
      },
    };
    const columnsTable = columns.map(col => {
      if (col.checkbox) {
        return {
          ...col,
          onCell: record => ({
            record,
            editable: 'checkbox',
            onChange: this.onCheckboxChange,
          }),
          onHeaderCell: () => ({
            editable: 'checkbox',
            onChange: this.onCheckboxAll,
          }),
        };
      }
      if (col.input) {
        return {
          ...col,
          onCell: record => ({
            record,
            editable: 'input',
            onChange: this.onInputChange,
          }),
        };
      }
      return {
        ...col,
      };
    });
    const { listData } = this.props;
    const { currentSelectRow } = this.state;
    return (
      <>
        <div style={{ marginBottom: '8px' }}>
          <Button type="primary" size="small" onClick={() => this.handleMoveRow('up')}>
            上移
          </Button>
          <Divider type="vertical" />
          <Button type="primary" size="small" onClick={() => this.handleMoveRow('down')}>
            下移
          </Button>
          <Divider type="vertical" />
          <Input.Search
            prefix="调至第"
            suffix="行"
            enterButton="确定"
            onSearch={value => this.handleMoveRow('jump', value)}
            style={{ width: 200 }}
            className={styles.searchInput}
            size="small"
          />
        </div>
        <DndProvider backend={HTML5Backend}>
          <Table
            columns={columnsTable}
            dataSource={listData}
            components={components}
            onRow={(record, index) => ({
              index,
              moveRow: this.moveRow,
              currentSelectRow,
              onClick: () => this.selectRow(record),
            })}
            size="small"
            rowKey="id"
            pagination={false}
            scroll={{ y: 220 }}
            bordered
            className={styles.editableDragTable}
          />
        </DndProvider>
      </>
    );
  }
}

export default DragSortingTable;
