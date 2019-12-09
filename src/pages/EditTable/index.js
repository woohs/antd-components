import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Form } from 'antd';
import DemoBox from '@/components/DemoBox';
import WrapperEditableTable from './WrapperEditableTable';
import WrapperEditableDragTable from './WrapperEditableDragTable';

const { Paragraph } = Typography;

const App = () => (
  <PageHeaderWrapper>
    <Card>
      <Typography>
        <Paragraph>展示几种业务中常用的table组件。</Paragraph>
      </Typography>
      <DemoBox title="可编辑列表" paragraph="可编辑单元格，单元格联动">
        <WrapperEditableTable />
      </DemoBox>
      <DemoBox title="拖拽列表" paragraph="列表行可拖拽，单元格可编辑">
        <WrapperEditableDragTable />
      </DemoBox>
    </Card>
  </PageHeaderWrapper>
);

export default Form.create()(App);
