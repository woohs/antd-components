import React from 'react';
import { Row, Col, Form } from 'antd';

export interface Props {
  form: any;
  formItemData: any;
  formItemLayout?:
    | {
        labelCol: { xs: { span: number }; sm: { span: number } };
        wrapperCol: { xs: { span: number }; sm: { span: number }; md: { span: number } };
      }
    | undefined;
}

const FormItem = Form.Item;

const GenerateForm = (props: Props) => {
  const {
    form,
    formItemData,
    formItemLayout = {
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
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      // 表单项布局
      const FormItemLayoutWrapper = item.formItemLayout ? item.formItemLayout : formItemLayout;

      if (!item.invisible) {
        children.push(
          <Col xs={24} md={item.colSpan || 24} key={i}>
            <FormItem {...FormItemLayoutWrapper} label={item.label}>
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

  return <Row gutter={8}>{getFields(formItemData)}</Row>;
};

export default GenerateForm;
