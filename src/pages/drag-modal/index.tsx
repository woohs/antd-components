import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Button } from 'antd';
import DragModal from '@/components/DragModal';
import DemoBox from '@/components/DemoBox';

const { Paragraph, Text } = Typography;

const App: React.FC = () => {
  const [state, setState] = useState({
    visible: false,
  });

  return (
    <PageHeaderWrapper>
      <Card>
        <Typography>
          <Paragraph>对弹窗组件进行二次封装，支持拖拽、放大缩小功能。</Paragraph>
        </Typography>
        <DemoBox>
          <Text strong>基本类型弹窗</Text>
          <Paragraph>展示简单的内容，可通过弹窗的右上角、右下角、左下角进行拖拽放大缩小</Paragraph>
          <Button onClick={() => setState({ visible: true })}>打开弹窗</Button>
        </DemoBox>
      </Card>
      <DragModal
        title="弹窗"
        width={550}
        visible={state.visible}
        onOk={() => setState({ visible: false })}
        onCancel={() => setState({ visible: false })}
      >
        我是弹窗
      </DragModal>
    </PageHeaderWrapper>
  );
};

export default App;
