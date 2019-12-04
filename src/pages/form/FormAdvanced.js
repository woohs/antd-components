import React, { useState } from 'react';
import { Form, DatePicker, Input, Button, message, Divider, Select } from 'antd';
import moment from 'moment';
import lodash from 'lodash';
import GenerateForm from '@/components/GenerateForm';
import DragModal from '@/components/DragModal';

const { debounce } = lodash;
const dateFormat = 'YYYY-MM-DD';

const CompanyListModal = props => {
  const { visible, onClose, onSubmit } = props;
  const [value, setValue] = useState('');
  return (
    <DragModal
      title="公司列表"
      visible={visible}
      onCancel={onClose}
      onOk={() => onSubmit(value)}
      width={580}
    >
      <Select onChange={setValue} style={{ width: '100%' }}>
        <Select.Option value="工商银行">工商银行</Select.Option>
        <Select.Option value="招商银行">招商银行</Select.Option>
      </Select>
    </DragModal>
  );
};

const App = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const { form } = props;

  const handleSubmit = () => {
    form.validateFields((err, fieldsValue) => {
      console.log('TCL: handleSubmit -> fieldsValue', fieldsValue);
      if (err) return;
      const formValue = {
        ...fieldsValue,
        auditDate: fieldsValue.auditDate && fieldsValue.auditDate.format(dateFormat),
      };
      message.success(JSON.stringify(formValue));
    });
  };

  const resetFormValue = () => {
    form.resetFields();
  };

  // 展示公司弹窗
  const showCompanyListModal = () => {
    setModalVisible(true);
  };

  // 设置公司值
  const handleModalSubmit = value => {
    form.setFieldsValue({
      companyName: value,
    });
    setModalVisible(false);
  };

  // 设置合计值
  const setTotalArea = () => {
    const formValue = form.getFieldsValue();
    const totalArea = Number(formValue.measureOne || 0) + Number(formValue.measureTwo || 0);
    form.setFieldsValue({
      totalArea,
    });
  };

  // 初始值
  const initialRowValue = {
    isAmount: '1',
    auditDate: '2019-01-01',
  };

  // formItem 数据
  const formItemData = [
    {
      colSpan: 8,
      label: '签约公司',
      itemName: 'companyName',
      rules: [
        {
          required: true,
          message: '必填项',
        },
      ],
      initialValue: initialRowValue && initialRowValue.companyName,
      itemComponents: (
        <Input.Search readOnly placeholder="请选择" enterButton onSearch={showCompanyListModal} />
      ),
    },
    {
      colSpan: 8,
      label: '是否已付款',
      itemName: 'isAmount',
      rules: [
        {
          required: true,
          message: '必填项',
        },
      ],
      initialValue: initialRowValue && initialRowValue.isAmount,
      itemComponents: (
        <Select>
          <Select.Option value="1">是</Select.Option>
          <Select.Option value="0">否</Select.Option>
        </Select>
      ),
    },
    {
      colSpan: 8,
      label: '审核日期',
      itemName: 'auditDate',
      rules: [
        {
          required: true,
          message: '必填项',
        },
      ],
      initialValue:
        initialRowValue && initialRowValue.auditDate
          ? moment(initialRowValue.auditDate, dateFormat)
          : moment(),
      itemComponents: <DatePicker format={dateFormat} style={{ width: '100%' }} />,
    },
    {
      colSpan: 8,
      label: '总面积',
      itemName: 'totalArea',
      initialValue: initialRowValue && initialRowValue.totalArea,
      itemComponents: <Input placeholder="0" disabled />,
    },
    {
      colSpan: 8,
      label: '面积1',
      itemName: 'measureOne',
      initialValue: initialRowValue && initialRowValue.measureOne,
      itemComponents: (
        <Input placeholder="请输入" onChange={debounce(e => setTotalArea(e, 'measureOne'), 500)} />
      ),
    },
    {
      colSpan: 8,
      label: '面积2',
      itemName: 'measureTwo',
      initialValue: initialRowValue && initialRowValue.measureTwo,
      itemComponents: (
        <Input placeholder="请输入" onChange={debounce(e => setTotalArea(e, 'measureTwo'), 500)} />
      ),
    },
    {
      colSpan: 16,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 3 },
        },
        wrapperCol: {
          xs: { span: 24 },
          md: { span: 19 },
        },
      },
      label: '备注',
      itemName: 'remarks',
      initialValue: initialRowValue && initialRowValue.remarks,
      itemComponents: <Input.TextArea placeholder="请输入" autoSize={{ minRows: 1, maxRows: 6 }} />,
    },
    // {
    //   disableGetFieldDecorator: true,
    //   colSpan: 16,
    //   formItemLayout: {
    //     labelCol: {
    //       xs: { span: 24 },
    //       sm: { span: 4 },
    //     },
    //     wrapperCol: {
    //       xs: { span: 24 },
    //       md: { span: 19 },
    //     },
    //   },
    //   label: '附件',
    //   itemName: 'Upload',
    //   itemComponents: (
    //     <UploadFile
    //       uploadName="image"
    //       name="上传文件 "
    //       url="api/tenant_getUrlFile.action"
    //       defaultFileList={defaultFileList}
    //       setfileList={setfileList}
    //       listType="text"
    //     />
    //   ),
    // },
    {
      disableGetFieldDecorator: true, // 按钮不需要绑定form-getFieldDecorator
      formItemLayout: {
        wrapperCol: {
          span: 14,
          offset: 10,
        },
      },
      itemComponents: (
        <>
          <Button type="primary" onClick={handleSubmit} htmlType="submit">
            提交
          </Button>
          <Divider type="vertical" />
          <Button onClick={resetFormValue}>重置</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Form>
        <GenerateForm form={form} formItemData={formItemData} />
      </Form>
      <CompanyListModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default Form.create()(App);
