/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prefer-rest-params */
import React from 'react';
import { Modal } from 'antd';
import './style.less';
import {
  ResizeHandleRightTop,
  ResizeHandleRightBottom,
  ResizeHandleLeftBottom,
} from './ResizeHandle';

// 获得随机数
const genNonDuplicateID = length =>
  Number(
    Math.random()
      .toString()
      .substr(3, length) + Date.now(),
  ).toString(36);

// 防抖函数
const throttle = (cb, delay = 10) => {
  const _this = this;
  let now = Date.now();
  return function fn() {
    if (Date.now() - now < delay) return;
    cb && cb.apply(_this, arguments);
    now = Date.now();
  };
};

class DragModal extends React.PureComponent {
  constructor(props) {
    super(props);
    // 设置弹窗默认宽度
    const propsWidth = props.width || 520;
    const width = propsWidth > window.innerWidth * 0.9 ? window.innerWidth * 0.9 : propsWidth;
    this.state = {
      modalWidth: width || window.innerWidth * 0.9,
    };
    this.id = genNonDuplicateID(10);
    this.initLeft = (window.innerWidth - width) / 2; // 初始化位置调整
    this.dragDom = null; // 拖拽的目标元素
    this.dragging = false; // 是否拖拽的开关
    this.tLeft = 0; // ---|
    this.tTop = 0; //  ------> 坐标轴
  }

  componentDidMount() {
    this.getDragDom();
  }

  componentDidUpdate() {
    if (!this.dragDom) {
      this.getDragDom();
    }
  }

  /*
   * 初始渲染时，直接获取 Modal 的 dom 会获取不到。
   * 设置 ref 使用 findDOMNode 也获取不到。
   * 只能在定时器中使用原生方式来获取。
   * */
  getDragDom = () => {
    setTimeout(() => {
      // 获取唯一标示元素
      const dragDom = document.getElementsByClassName(`d_${this.id}`)[0];
      if (dragDom) {
        dragDom.style.left = `${this.initLeft}px`;
        dragDom.style.top = '50px';
        this.dragDom = dragDom;
      }
    });
  };

  onMouseDown = e => {
    e.preventDefault();
    this.dragging = true; // 激活拖拽状态
    /*
     * getBoundingClientRect: 返回一个 DomRect 对象
     *   包含该元素的 top、right、bottom、left 值，对应的是到屏幕上方和左边的距离，单位 px
     * */
    const dragDomRect = this.dragDom.getBoundingClientRect();
    /*
     * e.clientX、e.clientY
     *   获取鼠标的坐标位置
     * */
    this.tLeft = e.clientX - dragDomRect.left; // 鼠标按下时和选中元素的坐标偏移:x坐标
    this.tTop = e.clientY - dragDomRect.top; // 鼠标按下时和选中元素的坐标偏移:y坐标

    this.onMouseMove(this.dragDom);
  };

  onMouseUp = e => {
    e.preventDefault();
    this.dragging = false; // 停止移动状态
    document.onmousemove = null; // 停止鼠标移动事件
  };

  onMouseMove = node => {
    const currentNode = node;

    function setModal(e) {
      if (this.dragging) {
        currentNode.style.left = `${e.clientX - this.tLeft}px`;
        currentNode.style.top = `${e.clientY - this.tTop}px`;
      }
    }
    const throttleScroll = throttle(setModal);

    document.onmousemove = e => {
      e.preventDefault();
      throttleScroll(e);
    };
  };

  TitleDrag = title => (
    <div
      className="drag_modal_header_div"
      onMouseDown={this.onMouseDown}
      onMouseUp={this.onMouseUp}
    >
      {title}
    </div>
  );

  onMouseResize = (event, type) => {
    event.preventDefault();
    this.dragging = true; // 激活拖拽状态

    const dragDomRect = this.dragDom.getBoundingClientRect();
    this.tLeft = dragDomRect.left;
    this.tRight = dragDomRect.right;
    this.tBottom = dragDomRect.bottom;
    this.tTop = dragDomRect.top;

    function setModal(e) {
      let width = 0;
      let height = 0;

      if (this.dragging) {
        if (type === 'rightTop') {
          width = e.clientX - this.tLeft + 10;
          height = this.tBottom - e.clientY - 100;
          if (height > 10) {
            this.dragDom.style.top = `${e.clientY - 10}px`;
          }
        }
        if (type === 'rightBottom') {
          width = e.clientX - this.tLeft + 10;
          height = e.clientY - this.tTop - 100;
        }
        if (type === 'leftBottom') {
          width = this.tRight - e.clientX;
          height = e.clientY - this.tTop - 100;
          if (width > 100) {
            this.dragDom.style.left = `${e.clientX - 10}px`;
          }
        }
        if (width > 100) {
          this.setState({
            modalWidth: width,
          });
        }
        if (height > 10) {
          this.dragDom.getElementsByClassName('ant-modal-body')[0].style.height = `${height}px`;
        }
      }
    }

    const throttleScroll = throttle(setModal);

    document.onmousemove = e => {
      e.preventDefault();
      throttleScroll(e);
    };
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
    this.dragging = false; // 停止移动状态
    document.onmousemove = null; // 停止鼠标移动事件
  };

  render() {
    const { children, title = 'Drag-Modal', wrapClassName = '' } = this.props;
    const { modalWidth } = this.state;
    return (
      <Modal
        {...this.props}
        mask
        keyboard
        wrapClassName={`drag_modal d_${this.id} ${wrapClassName}`}
        title={this.TitleDrag(title)}
        width={modalWidth}
        onMouseUp={this.onMouseUp}
        onCancel={this.handleCancel}
      >
        {children}
        <ResizeHandleRightTop
          onMouseDown={e => this.onMouseResize(e, 'rightTop')}
          onMouseUp={this.onMouseUp}
        />
        <ResizeHandleRightBottom
          onMouseDown={e => this.onMouseResize(e, 'rightBottom')}
          onMouseUp={this.onMouseUp}
        />
        <ResizeHandleLeftBottom
          onMouseDown={e => this.onMouseResize(e, 'leftBottom')}
          onMouseUp={this.onMouseUp}
        />
      </Modal>
    );
  }
}

export default DragModal;
