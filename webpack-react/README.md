## webpack-react 仓库说明

这是一个基础的webpack for react 配置，基于bael7.x + ，开箱即用，如果不会TS可以自行屏蔽


### 打包命令

```
yarn build 打包
yarn dev 启动前端开发环境
```


### 配置列表

开发环境模块依赖

react + less + antd + ts + ES6/ES7（ async + decorator + arrow ）+ devserver

```
    "@babel/core": "^7.1.0",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-proposal-decorators": "^7.1.0",
    "@babel/plugin-proposal-function-bind": "^7.0.0",
    "@babel/plugin-syntax-export-default-from": "^7.0.0",
    "@babel/plugin-transform-runtime": "^7.1.0",
    "@babel/preset-env": "^7.1.0",
    "@babel/preset-react": "^7.0.0",
    "@babel/preset-stage-0": "^7.0.0",
    "@babel/runtime": "^7.0.0",
    "@types/react": "^16.4.14",
    "@types/react-dom": "^16.0.7",
    "antd": "^3.9.2",
    "babel-loader": "^8.0.2",
    "babel-plugin-transform-decorators-legacy": "^1.3.5",
    "css-loader": "^1.0.0",
    "devserver": "^0.2.5",
    "file-loader": "^2.0.0",
    "koa": "^2.5.3",
    "less": "^3.8.1",
    "less-loader": "^4.1.0",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "react-router-dom": "^4.3.1",
    "style-loader": "^0.23.0",
    "ts-loader": "^5.1.1",
    "typescript": "^3.0.3",
    "url-loader": "^1.1.1",
    "webpack": "^4.19.1",
    "webpack-dev-server": "^3.1.8"
```
