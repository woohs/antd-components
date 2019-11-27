import React from 'react';
import { Row, Col, Form } from "antd";

const FormItem = Form.Item;

const GenerateApp = (props: { form: any; formItemData: any; formItemLayout?: { labelCol: { xs: { span: number; }; sm: { span: number; }; }; wrapperCol: { xs: { span: number; }; sm: { span: number; }; md: { span: number; }; }; } | undefined; }) => {
  const { 
    form, 
    formItemData, 
    formItemLayout={
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
        md: { span: 14 },
      },
    },
  } = props;
  const { getFieldDecorator } = form;

  const getFields = (data: any[]) => {
    const children = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (!item.invisible) {
        children.push(
          <Col xs={24} md={12} key={i}>
            <FormItem {...formItemLayout} label={item.label}>
              {item.disableGetFieldDecorator
                ? item.itemComponents
                : getFieldDecorator(item.itemName, {
                    rules: item.rules,
                    // 编辑有初始值
                    initialValue: item.initialValue,
                    ...item.decoratorProps,
                  })(item.itemComponents)}
            </FormItem>
          </Col>,
        );
      }
    }
    return children;
  };

  return (
    <Row gutter={8}>{getFields(formItemData)}</Row>
  )
}


export default GenerateApp;