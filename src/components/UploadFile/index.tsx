import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
import { UploadListType } from 'antd/lib/upload/interface';
import { ButtonType } from 'antd/lib/button';

const UploadFile = (props: {
  url: string;
  listType: UploadListType;
  uploadName: string;
  buttonName: string;
  /**
   * 默认文件列表
   */
  defaultFileList?: any[];
  /**
   * 设置文件缓存列表
   */
  setfileList?: any;
  /**
   * 是否展示文件列表
   */
  showUploadList?: any;
  buttonType?: ButtonType;
  refProps?: {};
}) => {
  const {
    url,
    listType,
    uploadName,
    buttonName,
    defaultFileList = [],
    setfileList,
    showUploadList = true,
    buttonType = 'default',
    refProps,
  } = props;

  const uploadProps = {
    name: uploadName,
    listType,
    defaultFileList,
    action: `${url}`,
    showUploadList,
    ...refProps,
    onRemove: (file: any) => {
      if (setfileList) {
        setfileList((prevFileList: any) => {
          const index = prevFileList.indexOf(file);
          const newFileList = prevFileList.slice();
          newFileList.splice(index, 1);
          return newFileList;
        });
      }
    },
    onChange(info: any) {
      let fileList = [...info.fileList];
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.data;
        }
        return file;
      });
      if (setfileList) {
        setfileList(fileList);
      }
      if (info.file.status !== 'uploading') {
        console.log('TCL: onChange -> info.fileList', info.fileList);
        console.log('TCL: onChange -> info.file', info.file);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };

  return (
    <Upload {...uploadProps}>
      <Button type={buttonType}>
        <Icon type="upload" /> {buttonName}
      </Button>
    </Upload>
  );
};

export default UploadFile;
