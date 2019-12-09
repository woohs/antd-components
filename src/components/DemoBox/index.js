import React from 'react';
import { Typography, Divider } from 'antd';
import styles from './style.less';

const { Paragraph, Text } = Typography;

const DemoBox = props => (
  <div className={styles.demoBox}>
    <Text strong>{props.title}</Text>
    <Paragraph>{props.paragraph}</Paragraph>
    <Divider style={{ margin: '12px 0' }} />
    {props.children}
  </div>
);

export default DemoBox;
