# 如果有帮助到的话，欢迎点个 ⭐️⭐️ Star ⭐️⭐️ & follow https://github.com/ericlee33

## 您的支持就是我的动力~!

# 🦀 使用线上环境，调试本地代码的「黑魔法」

掘金文章：https://juejin.cn/post/7118929960038842381/

# 🏌️‍♂️ 使用方式

## 安装依赖

```sh
安装 pnpm
npm i -g pnpm （如果已经安装 pnpm 可以忽略此步）

安装依赖
pnpm install
```

## 启动项目

**安装依赖完成之后，需要开启浏览器代理插件，之后启动项目**
插件地址：
https://chrome.google.com/webstore/search/switchyomega?hl=en-US
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7fe6207768446149f832f605eae8d85~tplv-k3u1fbpfcp-watermark.image?)

## 启动浏览器代理插件

安装好代理插件之后，我们启动插件，**新增`new profile`**，我们随便起个名字，就叫`test_local`，**设置代理到本地代理服务器的端口**，这里我们使用上面设置的`11111`端口

> 注意，要在`Bypass List`中配置`<-loopback>`，不然代理不到本地接口

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/711fd3c1a8b3440ca88a23689b88d7d5~tplv-k3u1fbpfcp-watermark.image?)

之后我们可以开始启动本地项目

### 进行平台项目目录，启动平台项目

```sh

cd packages/platform

pnpm dev
```

### 进行插件项目目录，启动插件项目

```sh

cd packages/plugin-page

pnpm dev
```

### 进行代理服务器项目目录，启动代理服务

```sh

cd packages/anyproxy-server

pnpm dev
```

### 进行后端项目目录，启动后端项目

```sh

cd packages/egg-server

pnpm dev
```

# 查看效果

**访问平台项目首页，即可看到效果**
http://localhost:9000

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d50319406c79410c85bc24d293ff2a7a~tplv-k3u1fbpfcp-watermark.image?)

> 等待接口返回后，即可加载出远程组件内容

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53d7f9c219b94a038cdbb1dab4f43cf4~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff32ebf4cc34481baad3db5ac05aeccf~tplv-k3u1fbpfcp-watermark.image?)
