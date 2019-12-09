/* eslint-disable quotes */
import React, { useState } from 'react';
import EditableDragTable from './EditableDragTable';

const WrapperEditableDragTable = () => {
  const [list, setList] = useState([
    { id: 1, seqIndex: 1, scheme: '按订单号匹配', isHidden: false, width: 100 },
    { id: 2, seqIndex: 2, scheme: '按收款码匹配', isHidden: false, width: 100 },
    { id: 3, seqIndex: 3, scheme: '按客户+日期+金额匹配', isHidden: false, width: 100 },
    { id: 4, seqIndex: 4, scheme: '按客户+金额匹配', isHidden: false, width: 100 },
    { id: 5, seqIndex: 5, scheme: '按客户+日期匹配', isHidden: false, width: 100 },
    { id: 6, seqIndex: 6, scheme: '按客户匹配', isHidden: false, width: 100 },
    { id: 7, seqIndex: 7, scheme: '按手工核销的非同一客户关系匹配', isHidden: false, width: 100 },
  ]);

  const handleChangeList = data => {
    setList(data);
  };

  return (
    <>
      <EditableDragTable listData={list} handleChangeList={handleChangeList} />
    </>
  );
};

export default WrapperEditableDragTable;
