# vue-douban
Vue全家桶仿写移动版豆瓣网页。
## 预览
在线预览地址：https://yongjiexu.github.io/#/pages/home 最好在Chrome浏览器下查看。
## 技术栈
### 已使用
- Vue2.0 构建前端页面
- Vuex 不同组件间数据共享
- Vue-router 单页应用路由切换
- superagent、axios 向后端发起请求
- Express 改造了开发服务器，代理浏览器发出的网络请求
- ES6 客户端、服务端都使用ES6  使用promise/async/await 处理异步
- Webpack 项目打包工具
- scss 预处理css
- CSS3 过渡、动画、转换等
- Flex flex弹性布局，响应不同尺寸的屏幕
- 响应式设计 宽、高、字体大小等使用单位vw/rem，响应不同尺寸的屏幕
- localStorage 本地保存用户信息

### 计划使用
- egg.js 生产环境中替换Express
- MySql/Mongodb 存放后端数据
- Socket.io 实现实时消息推送
- px2rem 实现px到rem的自动转换
## 截图


## 项目分析
- 前端： todo
- 后端： todo

## 开发计划
- 自己实现图片懒加载、无限滚动插件
- 有些组件功能太多，应该拆分
- 开发新组件，如评论、转发等相关的
- 优化已有组件的实现方式
- 把从豆瓣服务器获取的数据逐步应用到组件上(已完成)
- 逐步移除superagent相关代码，统一使用官方推荐的axios
- 用stylus替代scss
- 改造vuex相关代码
- 重构BookView，需要重新写html
- 写豆瓣搜索接口
## note
修改了webpack-dev-server/lib/Server.js中的代码，clone后是不能直接运行的
