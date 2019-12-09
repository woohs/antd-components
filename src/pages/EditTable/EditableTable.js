/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Table, Input, Button, Form, Select, DatePicker } from 'antd';
import moment from 'moment';
// import styles from './style.less';

const { RangePicker } = DatePicker;
const dateFormatYMD = 'YYYY-MM-DD';
const { Option } = Select;

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const getMonthDiff = (sTime, eTime) => {
  // 拆分年月日
  const sTimeAry = sTime.split('-');
  // 得到月数
  const sTimeMonth = parseInt(sTimeAry[0], 10) * 12 + parseInt(sTimeAry[1], 10);
  // 拆分年月日
  const eTimeAry = eTime.split('-');
  // 得到月数
  const eTimeMonth = parseInt(eTimeAry[0], 10) * 12 + parseInt(eTimeAry[1], 10);
  let diffMonth = Math.abs(sTimeMonth - eTimeMonth);
  if (eTimeAry[2] > sTimeAry[2]) {
    diffMonth += 1;
  }
  // 最小为1
  if (!diffMonth) {
    diffMonth = 1;
  }
  return diffMonth;
};

class EditableCell extends React.Component {
  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      // 转换时间格式
      const formatValue = values.date && values.date.map(item => item.format(dateFormatYMD));

      // 计算总期数
      const diffMonth = getMonthDiff(formatValue[0], formatValue[1]);
      const receivablestypeObj = {
        1: 1,
        2: 3,
        3: 6,
        4: 12,
      };
      const number = receivablestypeObj[values.receivablestype];
      let totalNumber = parseInt(diffMonth / number, 10);
      if (diffMonth % number !== 0) {
        totalNumber += 1;
      }
      // 一次性
      if (values.receivablestype === '5') {
        totalNumber = 1;
      }

      // 计算单价
      // const price = (values.amount / totalNumber).toFixed(2);
      // 计算金额
      const amount = (values.price * totalNumber).toFixed(2);

      this.form.setFieldsValue({
        totalNumber,
        amount,
      });

      // 合同条款不为租金-收款类型只能为一次性
      if (values.clausetype !== '1') {
        const rPrice = (values.amount / 1).toFixed(2);
        this.form.setFieldsValue({
          receivablestype: '5',
          price: rPrice,
          totalNumber: 1,
        });
      }

      const params = {
        ...values,
        totalNumber,
        startDate: formatValue[0],
        endDate: formatValue[1],
        amount,
      };
      if (error && error[e.currentTarget.id]) {
        return;
      }
      handleSave({ ...record, ...params });
    });
  };

  renderCell = form => {
    this.form = form;
    const { dataIndex, record, editStatus } = this.props;
    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: record[dataIndex],
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
            disabled={!editStatus}
          />,
        )}
      </Form.Item>
    );
  };

  renderNumberCell = form => {
    this.form = form;
    const { dataIndex, record, editStatus } = this.props;
    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: record[dataIndex],
          // 限制两位小数
          rules: [
            {
              pattern: /^\d+(?:\.\d{1,2})?$/,
              message: '格式不正确',
            },
          ],
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
            disabled={!editStatus}
          />,
        )}
      </Form.Item>
    );
  };

  renderSelect1Cell = form => {
    this.form = form;
    const { dataIndex, record, editStatus } = this.props;

    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: String(record[dataIndex]),
        })(
          <Select
            ref={node => (this.input = node)}
            onSelect={this.save}
            onBlur={this.save}
            style={{ width: '100%' }}
            disabled={!editStatus}
          >
            <Option value="1">租金</Option>
            <Option value="2">租赁保证金</Option>
            <Option value="3">其它保证金</Option>
          </Select>,
        )}
      </Form.Item>
    );
  };

  renderSelect2Cell = form => {
    this.form = form;
    const { dataIndex, record, editStatus } = this.props;
    const { clausetype } = record;
    // 只有租金才有选项
    const optionAry = [
      { value: '1', name: '每月' },
      { value: '2', name: '每季' },
      { value: '3', name: '每半年' },
      { value: '4', name: '每年' },
    ];
    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: String(record[dataIndex]),
        })(
          <Select
            ref={node => (this.input = node)}
            onSelect={this.save}
            onBlur={this.save}
            style={{ width: '100%' }}
            disabled={!editStatus}
          >
            {clausetype === '1' &&
              optionAry.map(item => (
                <Option value={item.value} key={item.value}>
                  {item.name}
                </Option>
              ))}
            <Option value="5">一次性</Option>
          </Select>,
        )}
      </Form.Item>
    );
  };

  renderSelect3Cell = form => {
    this.form = form;
    const { dataIndex, record, editStatus } = this.props;

    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: String(record[dataIndex]),
        })(
          <Select
            ref={node => (this.input = node)}
            onSelect={this.save}
            onBlur={this.save}
            style={{ width: '100%' }}
            disabled={!editStatus}
          >
            <Option value="1">已收</Option>
            <Option value="2">未收</Option>
          </Select>,
        )}
      </Form.Item>
    );
  };

  // 月份选择框
  renderDatePickerCell = form => {
    this.form = form;
    const { dataIndex, record, editStatus } = this.props;

    return (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          initialValue: record[dataIndex]
            ? record[dataIndex].map(item => (item ? moment(item, dateFormatYMD) : null))
            : [null, null],
        })(
          <RangePicker
            style={{ width: '100%' }}
            format={dateFormatYMD}
            onChange={this.save}
            onBlur={this.save}
            ref={node => (this.input = node)}
            disabled={!editStatus}
          />,
        )}
      </Form.Item>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      editStatus,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable === 'input' ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : editable === 'number' ? (
          <EditableContext.Consumer>{this.renderNumberCell}</EditableContext.Consumer>
        ) : editable === 'select1' ? (
          <EditableContext.Consumer>{this.renderSelect1Cell}</EditableContext.Consumer>
        ) : editable === 'select2' ? (
          <EditableContext.Consumer>{this.renderSelect2Cell}</EditableContext.Consumer>
        ) : editable === 'select3' ? (
          <EditableContext.Consumer>{this.renderSelect3Cell}</EditableContext.Consumer>
        ) : editable === 'datePicker' ? (
          <EditableContext.Consumer>{this.renderDatePickerCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class EditableTable extends React.Component {
  handleDelete = (e, record, serialNumber) => {
    e.preventDefault();
    const { setList, list } = this.props;

    const newData = list.reduce((prevData, currentData) => {
      if (currentData.serialNumber === serialNumber) {
        // 直接删除前端数据
        if (currentData.type === 'add') {
          return prevData;
        }
        prevData.push({
          ...currentData,
          type: 'del',
        });
        return prevData;
      }
      prevData.push({ ...currentData });
      return prevData;
    }, []);
    if (setList) {
      setList(newData);
    }
  };

  handleAdd = () => {
    const { setList, list } = this.props;
    const lastKey = list.length > 0 ? list[list.length - 1].key + 1 : 0;
    const lastSerialNumber = list.length > 0 ? list[list.length - 1].serialNumber + 1 : 1;

    const newData = {
      id: '',
      key: lastKey,
      serialNumber: lastSerialNumber,
      type: 'add',
      clausetype: '1',
      amount: 0,
      date: [moment().format(dateFormatYMD), moment().format(dateFormatYMD)],
      receivablestype: '1',
      totalNumber: 0,
      paymentNumber: 0,
      paymentAmount: 0,
      price: 0,
      remarks: '',
    };
    const newList = [...list, newData];
    if (setList) {
      setList(newList);
    }
  };

  handleSave = row => {
    const { setList, list } = this.props;
    const newData = [...list];
    const index = newData.findIndex(item => row.serialNumber === item.serialNumber);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    if (setList) {
      setList(newData);
    }
  };

  render() {
    const { list, loading, editStatus } = this.props;

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const aProps = !editStatus ? { disabled: true } : null;
    const selectObj1 = {
      1: '租金',
      2: '租赁保证金',
      3: '其它保证金',
    };
    const selectObj2 = {
      1: '每月',
      2: '每年',
      3: '一次性',
    };
    const rawColumns = [
      {
        title: '合同条款',
        dataIndex: 'clausetype',
        editable: 'select1',
        width: '150px',
        render: text => selectObj1[text],
      },
      {
        title: '日期',
        dataIndex: 'date',
        editable: 'datePicker',
        width: '250px',
      },
      {
        title: '收款类型',
        dataIndex: 'receivablestype',
        editable: 'select2',
        width: '100px',
        render: text => selectObj2[text],
      },
      {
        title: '总期数',
        dataIndex: 'totalNumber',
        editable: 'number',
        width: '100px',
      },
      {
        title: '单价',
        dataIndex: 'price',
        editable: 'number',
        width: '100px',
      },
      {
        title: '金额',
        dataIndex: 'amount',
        editable: 'number',
        width: '100px',
      },
      {
        title: '已支付期数',
        dataIndex: 'paymentNumber',
        editable: 'number',
        width: '100px',
      },
      {
        title: '已支付金额',
        dataIndex: 'paymentAmount',
        editable: 'number',
        width: '100px',
      },
      {
        title: '备注',
        dataIndex: 'remarks',
        editable: 'input',
        width: '200px',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        editable: '',
        width: '150px',
        // fixed: 'right',
        render: (text, record) => (
          <a href="#" onClick={e => this.handleDelete(e, record, record.serialNumber)} {...aProps}>
            删除
          </a>
        ),
      },
    ];

    const columns = rawColumns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
          editStatus,
        }),
      };
    });
    return (
      <div>
        <Table
          bordered
          size="small"
          scroll={{ x: 900, y: 300 }}
          loading={loading}
          components={components}
          columns={columns}
          dataSource={list || []}
          pagination={false}
          rowKey="serialNumber"
        />
        {editStatus && (
          <Button onClick={this.handleAdd} type="dashed" block style={{ marginTop: 8 }}>
            新增条款
          </Button>
        )}
      </div>
    );
  }
}

export default EditableTable;
