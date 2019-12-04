import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Form, Divider } from 'antd';
import FormBase from './FormBase';
import styles from './style.less';
import FormAdvanced from './FormAdvanced';

const { Paragraph, Text } = Typography;

const App: React.FC = () => (
  <PageHeaderWrapper>
    <Card>
      <Typography>
        <Paragraph>封装表单组件，隐藏生成表单的程序细节，通过类json数据格式生成表单。</Paragraph>
      </Typography>
      <div className={styles.demoBox}>
        <Text strong>基本类型表单</Text>
        <Paragraph>通过栅格布局，分配表单项的布局样式</Paragraph>
        <Divider />
        <FormBase />
      </div>
      <div className={styles.demoBox}>
        <Text strong>较复杂表单</Text>
        <Paragraph>联动，弹窗取值，布局</Paragraph>
        <Divider />
        <FormAdvanced />
      </div>
    </Card>
  </PageHeaderWrapper>
);

export default Form.create()(App);
