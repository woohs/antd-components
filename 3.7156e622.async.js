(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"9lcd":function(e,t,a){"use strict";var I=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var n=I(a("2/Rp")),g=I(a("2Taf")),M=I(a("vZ4D")),u=I(a("MhPg")),c=I(a("l4Ni")),l=I(a("ujKo"));a("Znn+");var r,i,o,N=I(a("ZTPi")),d=I(a("q1tI")),D=a("7DNP"),A=a("MuoO");function C(e){var t=s();return function(){var a,I=(0,l.default)(e);if(t){var n=(0,l.default)(this).constructor;a=Reflect.construct(I,arguments,n)}else a=I.apply(this,arguments);return(0,c.default)(this,a)}}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}a("gPNS");var T=N.default.TabPane,j=(r=(0,A.connect)(function(e){var t=e.tabPages;return{tabPages:t}}),r((o=function(e){(0,u.default)(a,e);var t=C(a);function a(){var e;(0,g.default)(this,a);for(var I=arguments.length,n=new Array(I),M=0;M<I;M++)n[M]=arguments[M];return e=t.call.apply(t,[this].concat(n)),e.onChange=function(t){e.props.dispatch(D.routerRedux.push({pathname:t}))},e.onEdit=function(t,a){e[a](t)},e.remove=function(t){var a=e.props.dispatch;a({type:"tabPages/removeTag",payload:{targetKey:t}})},e.removeOther=function(){var t=e.props.dispatch;t({type:"tabPages/removeOther"})},e}return(0,M.default)(a,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.match,I=e.tabPages,g=I.panes,M=I.activeKey,u=d.default.createElement(n.default,{size:"small",onClick:this.removeOther},"\u5173\u95ed\u5176\u5b83\u9875\u9762");return d.default.createElement(N.default,{hideAdd:!0,onChange:this.onChange,activeKey:M,type:"editable-card",onEdit:this.onEdit,className:"page-tags",tabBarExtraContent:u},g.map(function(e){return d.default.createElement(T,{tab:e.name,key:e.key},d.default.createElement(e.component,{tabPaneKey:e.key,location:t,match:a}))}))}}]),a}(d.default.Component),i=o))||i),f=j;t.default=f},CWS2:function(e,t,a){"use strict";var I=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var n=I(a("W9HT"));a("Telt");var g=I(a("Tckk"));a("Pwec");var M=I(a("CtXQ"));a("lUTK");var u=I(a("BvKs")),c=I(a("2Taf")),l=I(a("vZ4D")),r=I(a("MhPg")),i=I(a("l4Ni")),o=I(a("ujKo")),N=a("Y2fQ"),d=I(a("q1tI")),D=a("MuoO"),A=I(a("3a4m")),C=I(a("uZXw")),s=I(a("h3zL"));function T(e){var t=j();return function(){var a,I=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;a=Reflect.construct(I,arguments,n)}else a=I.apply(this,arguments);return(0,i.default)(this,a)}}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var f=function(e){(0,r.default)(a,e);var t=T(a);function a(){var e;return(0,c.default)(this,a),e=t.apply(this,arguments),e.onMenuClick=function(t){var a=t.key;if("logout"!==a)A.default.push("/account/".concat(a));else{var I=e.props.dispatch;I&&I({type:"login/logout"})}},e}return(0,l.default)(a,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=void 0===t?{avatar:"",name:""}:t,I=e.menu,c=d.default.createElement(u.default,{className:s.default.menu,selectedKeys:[],onClick:this.onMenuClick},I&&d.default.createElement(u.default.Item,{key:"center"},d.default.createElement(M.default,{type:"user"}),d.default.createElement(N.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),I&&d.default.createElement(u.default.Item,{key:"settings"},d.default.createElement(M.default,{type:"setting"}),d.default.createElement(N.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),I&&d.default.createElement(u.default.Divider,null),d.default.createElement(u.default.Item,{key:"logout"},d.default.createElement(M.default,{type:"logout"}),d.default.createElement(N.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"})));return a&&a.name?d.default.createElement(C.default,{overlay:c},d.default.createElement("span",{className:"".concat(s.default.action," ").concat(s.default.account)},d.default.createElement(g.default,{size:"small",className:s.default.avatar,src:a.avatar,alt:"avatar"}),d.default.createElement("span",{className:s.default.name},a.name))):d.default.createElement(n.default,{size:"small",style:{marginLeft:8,marginRight:8}})}}]),a}(d.default.Component),y=(0,D.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})(f);t.default=y},QyDn:function(e,t,a){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},bx7e:function(e,t,a){"use strict";var I=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var g=n(a("gWZ8"));a("Pwec");var M=n(a("CtXQ")),u=n(a("p0pE"));a("+L6B");var c=n(a("2/Rp"));a("J+/v");var l=n(a("MoRW")),r=I(a("Hx5s")),i=I(a("q1tI")),o=n(a("wY1l")),N=a("MuoO"),d=a("Y2fQ"),D=n(a("eTk0")),A=n(a("sgkG")),C=a("c+yx"),s=n(a("mxmt")),T=n(a("9lcd")),j=i.default.createElement(l.default,{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:i.default.createElement(c.default,{type:"primary"},i.default.createElement(o.default,{to:"/user/login"},"Go Login"))}),f=function e(t){return t.map(function(t){var a=(0,u.default)({},t,{children:t.children?e(t.children):[]});return D.default.check(t.authority,a,null)})},y=i.default.createElement(r.DefaultFooter,{links:[{key:"github",title:i.default.createElement(M.default,{type:"github"}),href:"https://github.com/woohs/demo",blankTarget:!0},{key:"Ant Design",title:"woohs",href:"https://github.com/woohs",blankTarget:!0}]}),w=function(){return(0,C.isAntDesignPro)()?i.default.createElement(i.default.Fragment,null,y,i.default.createElement("div",{style:{padding:"0px 24px 24px",textAlign:"center"}},i.default.createElement("a",{href:"https://www.netlify.com",target:"_blank",rel:"noopener noreferrer"},i.default.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-bg.svg",width:"82px",alt:"netlify logo"})))):y},z=function(e){var t=e.dispatch,a=e.settings,I=e.route,n=e.match,M=e.location,u=void 0===M?{pathname:"/"}:M;(0,i.useEffect)(function(){t&&(t({type:"tabPages/setState",payload:{routerData:I.routes}}),t({type:"tabPages/changePage"}),t({type:"user/fetchCurrent"}),t({type:"settings/getSetting"}))},[]);var c=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},l=(0,C.getAuthorityFromRouter)(e.route.routes,u.pathname||"/")||{authority:void 0};return i.default.createElement(r.default,Object.assign({logo:s.default,menuHeaderRender:function(e,t){return i.default.createElement(o.default,{to:"/"},e,t)},onCollapse:c,menuItemRender:function(e,t){return e.isUrl||e.children?t:i.default.createElement(o.default,{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:(0,d.formatMessage)({id:"menu.home",defaultMessage:"Home"})}].concat((0,g.default)(e))},itemRender:function(e,t,a,I){var n=0===a.indexOf(e);return n?i.default.createElement(o.default,{to:I.join("/")},e.breadcrumbName):i.default.createElement("span",null,e.breadcrumbName)},footerRender:w,menuDataRender:f,rightContentRender:function(e){return i.default.createElement(A.default,Object.assign({},e))},siderWidth:200},e,a),i.default.createElement(D.default,{authority:l.authority,noMatch:j},i.default.createElement(T.default,{location:u,match:n})))},m=(0,N.connect)(function(e){var t=e.global,a=e.settings;return{collapsed:t.collapsed,settings:a}})(z);t.default=m},gPNS:function(e,t,a){},h3zL:function(e,t,a){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},sgkG:function(e,t,a){"use strict";var I=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=I(a("q1tI")),g=a("MuoO"),M=I(a("CWS2")),u=I(a("h3zL")),c=function(e){var t=e.theme,a=e.layout,I=u.default.right;return"dark"===t&&"topmenu"===a&&(I="".concat(u.default.right,"  ").concat(u.default.dark)),n.default.createElement("div",{className:I},n.default.createElement(M.default,null))},l=(0,g.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(c);t.default=l},uZXw:function(e,t,a){"use strict";var I=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var n=I(a("jsC+")),g=I(a("Y/ft")),M=I(a("q1tI")),u=I(a("TSYQ")),c=I(a("QyDn")),l=function(e){var t=e.overlayClassName,a=(0,g.default)(e,["overlayClassName"]);return M.default.createElement(n.default,Object.assign({overlayClassName:(0,u.default)(c.default.container,t)},a))},r=l;t.default=r}}]);