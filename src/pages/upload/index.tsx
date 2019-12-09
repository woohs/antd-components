import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Form, Divider, Button } from 'antd';
import UploadFile from '@/components/UploadFile';
import DemoBox from '@/components/DemoBox';
import { UploadListType } from 'antd/lib/upload/interface';

const { Paragraph } = Typography;

const UploadFileList = () => {
  // 文件 state
  const [fileList, setfileList] = useState([]);
  console.log('TCL: UploadFileList -> fileList', fileList);
  const defaultFileList = [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
  ];

  return (
    <UploadFile
      uploadName="file"
      url="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      refProps={{
        headers: {
          authorization: 'authorization-text',
        },
      }}
      defaultFileList={defaultFileList}
      setfileList={setfileList}
      listType="text"
      buttonName="导入"
      buttonType="primary"
    />
  );
};

const UploadFilePicture = () => {
  const typeAry: UploadListType[] = ['text', 'picture', 'picture-card'];
  const [type, setType] = useState<UploadListType>('picture');
  const [index, setIndex] = useState(0);

  const handleChange = () => {
    setType(typeAry[index % 3]);
    setIndex(index + 1);
  };
  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ];

  return (
    <>
      <Button onClick={handleChange}>切换展示形式</Button>
      <Divider type="vertical" />
      <UploadFile
        uploadName="file"
        url="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        refProps={{
          headers: {
            authorization: 'authorization-text',
          },
        }}
        defaultFileList={fileList}
        listType={type}
        buttonName="导入"
        buttonType="primary"
      />
    </>
  );
};

const App: React.FC = () => (
  <PageHeaderWrapper>
    <Card>
      <Typography>
        <Paragraph>封装上传组件，传入几个关键参数就可完成上传功能。</Paragraph>
      </Typography>
      <DemoBox title="点击上传" paragraph="不展示文件列表">
        <UploadFile
          uploadName="file"
          url="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          refProps={{
            headers: {
              authorization: 'authorization-text',
            },
          }}
          listType="text"
          showUploadList={false}
          buttonName="导入 "
          buttonType="primary"
        />
      </DemoBox>
      <DemoBox title="已上传文件列表" paragraph="展示默认上传文件和已上传文件列表">
        <UploadFileList />
      </DemoBox>
      <DemoBox title="预览图片" paragraph="用户可以上传图片并在列表中显示缩略图。">
        <UploadFilePicture />
      </DemoBox>
    </Card>
  </PageHeaderWrapper>
);

export default Form.create()(App);
