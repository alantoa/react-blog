##   Material Design React MarkDown Blog

![](https://img.shields.io/badge/license-MIT-brightgreen)![](https://img.shields.io/badge/virsion-0.0.1-orange)

###  [📝](https://landing.ant.design/edit) 目录 /catalog



[TOC]

### ✨介绍/Introduce

​	⌨️使用React + Koa + MongoDB 全栈开发的个人博客, 纯手工打造^_^, 通过业余时间写了几个月,使用markdown 编写文章. 功能主要有文章的发表,归档, 个人信息技能展示 等.

网站的整体设计风格源自 [Material Design](https://material.io/design/),

UI框架:[Material UI-React](https://material-ui.com/),

前端主要技术栈: react/react-redux/react-router, 

后端技术栈: node.js / koa2 /mongoose,

数据库: MongoDB. 

前端的页面设计灵感主要来源:[Apple](https://www.apple.com/hk/iphone-11/?afid=p238%7CsiVIpQmIV-dc_mtid_20925x0a40395_pcrid_437409266119_pgrid_77699315973_&cid=wwa-hk-kwgo-iphone-slid--Brand-iPhone11-Evergreen-), [Google](https://www.mdui.org/design/),[闪烁之狐](http://blinkfox.com/),

###### 🤝鸣谢!





### **Demo** :

​		https://toa.monster



### 📦 开始/Get Started



##### 前端 / front end:

  1.   ``` npm install  ```      or 	```yarn```

  2. ``` npm run start```      or 	```yarn start```

     ​	

##### 后端 / back end:

 1. 安装MongoDB,并创建一个用户和用户后台登录的账号(执行下面命令即可) / install MongoDb,insert user and back end login account.

    ```db.createUser({user:"toa",pwd:"123456",roles:[{role:"readWrite",db:'blog'}]}) ```

    ```
    db.users.insert({
          "name" : "toa",
          "pwd" : "e10adc3949ba59abbe56e057f20f883e",
          "username" : "admin",
          "roles" : [ 
              "admin"
          ]
      })
    ```

    

    

 2. 进入server目录,安装相应依赖包,这里分开为了方便部署分离. / enter into server catalog.

    ```
    cd server
    npm install 
    /or
    yarn
    
    ```

    

 3. 运行/ run

    `npm run serve` or `yarn serve`





### 🔗项目目录结构

```
react-blog  
├── bundle 
│   ├── build.js	---- 生产环境打包运行文件/ package.json 'build' scripts
│   ├── start.js	---- 生产环境打包运行文件/ package.json 'start' scripts
│   └── test.js		---- 测试/test 	
├── conf			---- docker部署时默认替换的配置文件/ docker nginx config
├── config			---- Webpack & dev & prd config
├── public			---- 公共文件/ public file
├── server			---- 后端项目文件夹/ Backend project folder
│   ├── bin			---- koa 服务运行文件 / package.json 'serve' scripts
│   ├── controller  ---- 路由逻辑 / router method
│   │   ├── admin   ---- 后台controller / Admin controller
│   │   └── client  ---- 前台端接口 / Admin controller
│   ├── middleware  ---- 中间件
│   ├── mongo		---- MongoDB 文件夹
│   │ 	├── models	---- Schema
│   │	├── config.js -- 配置 / config
│   │   └── index.js
│   ├── routes		---- 路由规则 / router rules
│   ├── views		---- body 模板
│   ├── app.js	
│   ├── package.json
│   └── yarn.lock
├── src
│   ├── api			---- 前端接口/ Api
│   ├── assets      ---- 静态资源/ static resource  
│   ├── components	---- 公用组件/ public Component 
│   ├── containers	---- 前台&后台布局 / Client&Admin layout
│   ├── redux		---- redux状态管理/ redux state management
│   ├── routes		---- 路由规则和配置 / router rules and config
│   ├── utils		---- 公用工具 /utils
│   ├── views		---- 视图 / view
│   ├── index.js	---- index
│   ├── serviceWorker.js ----app to work offline
│   └── setupProxy.js	---- api代理
├── .travis.yml		---- 持续集成/ Continuous integration (CI)
├── Dockerfile		---- docker容器配置
```

### 📑 License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2010-present Toa