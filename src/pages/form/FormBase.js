import React from 'react';
import { Form, DatePicker, Input, Button, message, Divider } from 'antd';
import moment from 'moment';
import GenerateForm from '@/components/GenerateForm';

const dateFormat = 'YYYY-MM-DD';

const App = props => {
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

  // 初始值
  const initialRowValue = {
    breachAmount: 1,
    auditDate: '2019-01-01',
  };

  // formItem 数据
  const formItemData = [
    {
      label: '违约金',
      itemName: 'breachAmount',
      rules: [
        {
          required: true,
          message: '必填项',
        },
      ],
      initialValue: initialRowValue && initialRowValue.breachAmount,
      itemComponents: <Input placeholder="请输入" />,
    },
    {
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
      disableGetFieldDecorator: true, // 按钮不需要绑定form-getFieldDecorator
      formItemLayout: {
        wrapperCol: {
          span: 14,
          offset: 6,
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
    <Form>
      <GenerateForm form={form} formItemData={formItemData} colSpan={24} />
    </Form>
  );
};

export default Form.create()(App);
