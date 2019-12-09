/* eslint-disable quotes */
import React, { useState } from 'react';
import { Switch } from 'antd';
import EditableTable from './EditableTable';

const WrapperEditableTable = () => {
  const [loading, setLoading] = useState(false);
  const [editStatus, setEditStatus] = useState(true);
  const [contractList, setContractList] = useState([
    {
      amount: 110,
      clausetype: '1',
      date: ['2019-01-09', '2019-12-09'],
      id: '',
      key: 0,
      paymentAmount: 0,
      paymentNumber: 0,
      price: 10,
      receivablestype: '1',
      remarks: '',
      serialNumber: 1,
      totalNumber: 11,
      type: 'add',
    },
  ]);
  console.log('TCL: WrapperEditableTable -> contractList', contractList);

  const filterList = contractList.filter(item => item.type !== 'del');

  const handleSetList = list => {
    setContractList(list);
  };

  const onChangeLoading = checked => {
    setLoading(checked);
  };

  const onChangeEdit = checked => {
    setEditStatus(checked);
  };

  return (
    <>
      加载中：
      <Switch onChange={onChangeLoading} />
      可编辑：
      <Switch defaultChecked onChange={onChangeEdit} />
      <EditableTable
        loading={loading}
        editStatus={editStatus}
        list={filterList}
        setList={handleSetList}
      />
    </>
  );
};

export default WrapperEditableTable;
