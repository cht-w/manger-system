## 1. Node环境安装

http://nodejs.cn/

使用vite需要保证node的版本在 v12以上

## 2.全局安装vue脚手架
npm install @vue/cli -g

版本查看：vue --version 目前4.x以上版本是支持创建vue3项目

## 3.通过vite创建项目
npm init @vitejs/app

## 4.安装项目所需插件
安装项目所需生产依赖
yarn add vue-router@next vuex@next element-plus axios -S
安装项目开发依赖
yarn add sass -D

## 5.制定目录结构
manage-fe
	dist
	node_modules
	public
	src
		api
		assets
		components
		config
		router
		store
		utils
		views
		App.vue
		main.js
	.gitignore
	.env.dev
	.env.test
	.env.prod
	index.html
	package.json
	vite.config.js

## 6.vite为什么快？

1. ES模块化支持的问题

// index.js

import { add } from './add.js'
import { sub } from './sub.js'
console.log(add(1, 2))
console.log(sub(1, 2))

// add.js
export const add = (a, b) => a + b 

// sub.js
export const sub = (a, b) => a - b 

这样一段代码放到浏览器能直接运行吗？
index.js、add.js、sub.js 这三个文件打包在一个 bundle.js 文件里，
然后在项目 index.html 中直接引入 bundle.js, 浏览器加载运行，例如 webpack、
2. 项目启动与代码更新的问题

项目启动：随着项目越来越大，启动个项目可能要几分钟
代码更新：随着项目越来越大，修改一小段代码，保存后都要等几秒才更新


Vite 在打包的时候，将模块分成两个区域 依赖 和 源码 ：

依赖 ：不轻易改变的，比如组件库，大的依赖库，这一部分使用 esbuild 来进行 预构建依赖
源码 ： .JSX、.CSS、.vue 经常被修改。文件并不是一股脑全部加载，而是可以按需加载（例如路由懒加载）。 Vite 会将文件转换后，以 es module 的方式直接交给浏览器，因为现在的浏览器大多数都直接支持 es module ，这使性能提高了很多。


解决更新缓慢
刚刚说了，项目启动时，将模块分成 依赖 和 源码 ，当你更新代码时， 依赖 就不需要重新加载，只需要精准地找到是哪个 源码 的文件更新了，更新相对应的文件就行了。这样做使得更新速度非常快。

Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

