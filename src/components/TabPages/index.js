import React from 'react';
import { Tabs, Button } from 'antd';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import './style.less';

const TabPane = Tabs.TabPane;

/**
 * tab控制
 */
@connect(({ tabPages }) => ({
  tabPages,
}))
class TabPages extends React.Component {
  onChange = activeKey => {
    this.props.dispatch(
      routerRedux.push({
        pathname: activeKey,
      }),
    );
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = targetKey => {
    const { dispatch } = this.props;
    dispatch({
      type: 'tabPages/removeTag',
      payload: {
        targetKey,
      },
    });
  };

  removeOther = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'tabPages/removeOther',
    });
  };

  render() {
    const {
      location,
      match,
      tabPages: { panes, activeKey },
    } = this.props;

    const operations = (
      <Button size="small" onClick={this.removeOther}>
        关闭其它页面
      </Button>
    );

    return (
      <Tabs
        hideAdd
        onChange={this.onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        className="page-tags"
        tabBarExtraContent={operations}
      >
        {panes.map(pane => (
          <TabPane tab={pane.name} key={pane.key}>
            <pane.component tabPaneKey={pane.key} location={location} match={match} />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default TabPages;
