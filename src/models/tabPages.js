import { routerRedux } from 'dva/router';
import pathToRegexp from 'path-to-regexp';
import { message } from 'antd';

const getRouteComponent = (path, routeData) => {
  let currentRouter = false;
  routeData.forEach(route => {
    // match prefix
    if (pathToRegexp(route.path || '').test(path)) {
      currentRouter = route;
    }
    if (route.routes) {
      currentRouter = getRouteComponent(path, route.routes) || currentRouter;
    }
  });
  return currentRouter;
};

export default {
  namespace: 'tabPages',

  state: {
    routerData: [],
    activeKey: null,
    panes: [],
  },

  effects: {
    *changePage(_, { put, select }) {
      const pathname = window.location.pathname;
      // 过滤登录页
      if (pathname === '/user/login') {
        return;
      }

      const { panes, routerData } = yield select(state => state.tabPages);
      const currentRouter = getRouteComponent(pathname, routerData);
      console.log('TCL: *changePage -> routerData', routerData);
      console.log('TCL: *changePage -> pathname', pathname);
      const { name, component } = currentRouter;
      console.log('TCL: *changePage -> currentRouter', currentRouter);
      if (pathname === '/' || !name) {
        return;
      }
      const activeKey = pathname;
      // 判断页签是否已存在-存在就直接切换-否则新增页签
      let isExist = false;
      for (let i = 0; i < panes.length; i += 1) {
        if (panes[i].key === activeKey) {
          isExist = true;
          break;
        }
      }

      if (isExist) {
        yield put({
          type: 'setState',
          payload: {
            activeKey,
          },
        });
      } else {
        panes.push({ name, key: activeKey, component });
        yield put({
          type: 'setState',
          payload: {
            panes,
            activeKey,
          },
        });
      }
    },

    *removeTag({ payload }, { put, select }) {
      const { targetKey } = payload;
      const { panes, activeKey } = yield select(state => state.tabPages);
      if (panes.length === 1) {
        message.warning('窗口不能全部关闭');
        return;
      }
      let lastIndex;
      let newActiveKey = activeKey;
      panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
          if (lastIndex < 0) {
            lastIndex = 0;
          }
        }
      });
      const panesFilter = panes.filter(pane => pane.key !== targetKey);

      if (lastIndex >= 0 && activeKey === targetKey) {
        newActiveKey = panesFilter[lastIndex].key;
      }

      yield put({
        type: 'setState',
        payload: {
          panes: panesFilter,
          activeKey: newActiveKey,
        },
      });

      yield put(routerRedux.replace(newActiveKey));

      /**
       * 关闭页面后，可以在这里进行页面数据的清楚操作
       */
    },

    *removeOther(_, { put, select }) {
      const { panes, activeKey } = yield select(state => state.tabPages);
      const panesFilter = panes.filter(pane => pane.key === activeKey);
      yield put({
        type: 'setState',
        payload: {
          panes: panesFilter,
          activeKey,
        },
      });
    },
  },

  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {
    // 监听页面跳转
    listenPageChange({ history, dispatch }) {
      history.listen(() => {
        dispatch({
          type: 'changePage',
        });
      });
    },
  },
};
