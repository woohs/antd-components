import React from 'react';
import styles from './style.less';

const ResizeHandleRightTop = props => <div className={styles.resize_handle_right_top} {...props} />;

const ResizeHandleRightBottom = props => (
  <div className={styles.resize_handle_right_bottom} {...props} />
);

const ResizeHandleLeftBottom = props => (
  <div className={styles.resize_handle_left_bottom} {...props} />
);
export { ResizeHandleRightTop, ResizeHandleRightBottom, ResizeHandleLeftBottom };
