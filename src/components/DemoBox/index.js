import React from 'react';
import styles from './style.less';

const DemoBox = props => <div className={styles.demoBox}>{props.children}</div>;

export default DemoBox;
