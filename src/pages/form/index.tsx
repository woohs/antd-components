import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Button, Form, Row, Col, DatePicker, Input } from 'antd';
import moment from 'moment';
import GenerateApp from '@/components/GenerateForm';

const { Title, Paragraph, Text } = Typography;
const FormItem = Form.Item;
const dateFormat = "YYYY-MM-DD";

const App: React.FC = props => {

  const { form } = props;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
      md: { span: 14 },
    },
  };

  const initialRowValue = {
    breachAmount: 1,
    auditDate: "2019-01-01"
  }

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
  ];

  return (
    <PageHeaderWrapper>
      <Card>
        <Typography>
          <Title>
            介绍
          </Title>
          <Paragraph>
            封装表单组件，通过json数据格式，就可以生成表单
          </Paragraph>
        </Typography>

        <Form className=".generate-advanced-search-form">
          <GenerateApp 
            form={form}
            formItemData={formItemData}
          />
        </Form>
      </Card>

    </PageHeaderWrapper>
  )
}

export default Form.create()(App);

