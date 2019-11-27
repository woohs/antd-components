import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Button } from 'antd';
import DragModal from '@/components/DragModal';

const { Title, Paragraph, Text } = Typography;

const App: React.FC = () => {
  const [state, setState] = useState({
    visible: false,
  });

  return (
    <PageHeaderWrapper>
      <Card>
        <Typography>
          <Title>
            介绍
          </Title>
          <Paragraph>
            经过进一步的封装，弹窗组件支持拖拽、放大缩小功能。
          </Paragraph>
        </Typography>
        <Button onClick={() => setState({visible: true})}>显示</Button>
      </Card>
      <DragModal
        title="弹窗"
        width={850}
        visible={state.visible}
        onOk={() => setState({visible: false})}
        onCancel={() => setState({visible: false})}
      >
        我是弹窗
      </DragModal>
    </PageHeaderWrapper>
  )
}

export default App;

