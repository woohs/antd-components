import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Typography.Text strong>
        基于Ant Design Pro，实现多页签功能，封装常用业务组件。
      </Typography.Text>
      {/* <Typography.Paragraph>支持多页签功能</Typography.Paragraph> */}
    </Card>
  </PageHeaderWrapper>
);
