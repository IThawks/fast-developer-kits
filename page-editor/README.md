# 项目描述：
项目启动：  npm  run  start
项目打包：  npm  run  build

这个是一个模板程序
---------------------------------------------------
# Webpack：构建工具
	1.模块化:commonjs规范
	2.编译：es6 -> es5   jsx -> js  ts -> js
	3.他可以完成gulp和grunt完成的工作
	4.自带服务器（基于node的服务器）
	5.那些前端工程常用webpack？react、vue
	6.Webpack版本：1.x、2.x、3.x

## 安装Webpack
	1.全局安装
		npm install -g webpack
	2.初始化package.json
		npm init
	3.安装项目依赖的webpack
		npm install --save webpack
	4.创建两个文件夹src和dist
		src:源码
		dist：编译之后
	5.app与hello文件中编写代码
		hello：
			module.exports = function() {
				var hello = document.createElement("p");
				hello.innerHTML = "hello";
				return hello;
			}
		app:
			var hello = require("./hello.js");
			document.getElementById("root").append(hello());
		index:
			引入编译只有的bundle.js文件
	6.webpack编译
		webpack 路径/入口文件  路径/出口文件
		webpack src/app.js     dist/bundle.js
	7.添加webpack的配置文件：webpack.config.js
		入口：entry
		出口：output
		获取当前路径:dirname
		完整代码：
			module.exports = {
				entry: dirname + "/src/app.js",
				output: {
					path: dirname + "/dist",
					filename: "bundle.js"
				}
			}
	 8.配置快捷执行方案
	 	 在package.json文件中配置
		 "scripts": {
	     "dev":"webpack"
	   }
		 运行：npm run dev
   9.调试：
	 		生成错误信息文件
			配置webpack.config.js文件
			添加devtool:"eval-source-map"
					devtool:
						eval
						source-map
						hidden-source-map
						inline-source-map
						eval-source-map
						cheap-source-map
						cheap-module-source-map
	 10.配置webpack的服务器
	 		1.全局安装webpack服务器
				npm install -g webpack-dev-server
			2.安装项目依赖
				npm install --save-dev webpack-dev-server
			3.运行webpack服务器
				webpack-dev-server
			4.配置快捷执行方案
				"scripts": {
					"dev": "webpack-dev-server",
					"build": "webpack"
				}
				运行：npm  run dev
			5.热更新：
				webpack-dev-server --content-base dist  --inline
			6.服务器的配置
				content-base:指定服务器根目录
				--inline:在线热更新
				--port: 修改端口
		11.Loaders：
			loader是webpack可以通过配置脚本，或者外部依赖来执行一些功能
			1.配置loaders文件
	      	1.test：一个匹配loader要做操作的文件的一个正则表达式（必须）
	      	2.loader：loader要执行的任务的名字（必须）
	      	3.query:为loader提供一些外部选项配置(可选项)
			2.json格式的数据转化成js的对象
				注意：当前的json-loader只是为了测试，我们当前安装的webpack的版本
				     是3.x版本，在2.x版本之后，webpack已经集成了次方案。
				1.安装依赖：
					npm install --save-dev json-loader
				2.配置loaders:在webpack.config.js中进行配置
					module:{
						loaders:[
							// json数据转化为js对象
							{
								test:/\.json$/,
								loader:"json-loader"
							}
						]
					}
				3.编写代码
					1.创建data.json文件
					2.在hello.js文件中引入
					3.直接按照js对象形式读取数据

	   12.Babel
		 	  提供给我用来对es6进行编译成es5，jsx语法他也可以进行编译
				1.babel安装：
					npm install --save-dev babel-core babel-loader babel-preset-es2015
				2.配置webpack.config.js
					{
						test:/\.(js|jsx)$/,
						loader:"babel-loader",
						query:{
							presets:["es2015","react"]
						}
					}
				3.安装React
					npm install --save react react-dom
					npm install --save-dev babel-preset-react
				4.编写代码
					app:
					import React from "react";
					import ReactDOM from "react-dom";
					import Hello from "./hello.jsx";
					class App extends React.Component{
						render(){
							return(
								<div>
									<Hello />
								</div>
							)
						}
					}
					ReactDOM.render(<App />,document.getElementById("root"))

			 		hello：
					import React from "react";
					export default class Hello extends React.Component{
						render(){
							return(
								<div>
									我是Hello!
								</div>
							)
						}
					}

--------------------------------------------------------------------------------
		13.CSS处理
			1.安装依赖
				命令：npm install --save-dev style-loader  css-loader
			2.修改配置文件
				{
					test:/\.css$/,
					loader:"style-loader!css-loader"
				}
--------------------------------------------------------------------------------
		14.图片处理
			1.webpack提供了图片的处理方案
				命令：npm install --save-dev file-loader url-loader
			2.loader的编写
				{
					test:/\.(png|jpg|gif|jpeg)$/,
					loader:"url-loader?limit=2048" // 小于2M的图片，进行base64编码
				}
--------------------------------------------------------------------------------
		15.less处理
			1.安装less处理依赖
				npm install --save-dev less less-loader
			2.loader的编写
				{
					test:/\.less$/,
					loader:"style-loader!css-loader!less-loader"
				}
--------------------------------------------------------------------------------
		16.关于JSX语法
		   官方为了能明确jsx文件和js文件的区别，特意指定，jsx语法的文件的后缀名为jsx

--------------------------------------------------------------------------------
		17.关于babel的配置文件，直接写在webpack配置文件中不合理，所以单独提取.babelrc文件
--------------------------------------------------------------------------------
		18.添加git忽略文件：.gitignore
--------------------------------------------------------------------------------
		19.插件
			1.服务器运行自动打开浏览器插件
				1.安装：npm install --save-dev open-browser-webpack-plugin
				2.配置：
					var openBrowser = require("open-browser-webpack-plugin");
					plugins:[
						// 自动打开浏览器
						new openBrowser({
							url:"http://localhost:8080"
						})
					]
			2.配置HTML模板
	       1.在app创建index.tmpl.html文件
	       2.安装依赖：
	         命令：npm install --save-dev html-webpack-plugin
	       3.修改配置文件
	         var htmlWebpackPlugin = require("html-webpack-plugin");
	         new htmlWebpackPlugin({
	           template:dirname+"app/index.tmpl.html"
	         })
		20.关于--save-dev与--save的区别
		    意思就是安装的时候能否独立打包
		    --save：等于-S，能
		    --save-dev：等于-D，不能
		21.省略后缀：
					resolve: {
						extensions: [".js", ".jsx", ".json"]
					},
	  22.webpack1.x版本迁移到webpack2.x版本
			擦考站点：http://www.css88.com/doc/webpack2/guides/migrating/
			1.module.loaders 改成了 module.rules
      旧的 loader 配置被更强大的 rules 系统取代，后者允许配置 loader 以及其他更多项。为了兼容旧版，module.loaders 语法被保留，旧的属性名依然可以被解析。新的命名约定更易于理解并且是升级配置使用 module.rules 的好理由。

       module: {
        -   loaders: [
        +   rules: [
              {
                test: /\.css$/,
        -       loaders: [
        +       use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
        -           query: {
        +           options: {
                      modules: true
                    }
                  }
                ]
              }
            ]
          }

    2.链式 loaders
      与 v1 版本相同，loaders 可以链式调用，上一个 loader 的输出被作为输入传给下一个 loader。使用 rule.use 配置项，use 可以设置为一个 loaders 的列表。在 v1 版本中，loaders 通常被用 ! 连写。这一写法在新版中只在使用旧的 module.loaders 时有效。

      module: {
      -   loaders: {
      +   rules: [{
            test: /\.less$/,
      -     loader: "style-loader!css-loader!less-loader"
      +     use: [
      +       "style-loader",
      +       "css-loader",
      +       "less-loader"
      +     ]
          }]
        }

    3.取消了在模块名中自动添加 -loader 后缀
        module: {
            rules: [
              {
                use: [
        -         "style",
        +         "style-loader",
        -         "css",
        +         "css-loader",
        -         "less",
        +         "less-loader",
                ]
              }
            ]
          }

    4.json-loader 不再需要手动添加
        如果没有为 JSON 文件配置 loader，webpack 将自动尝试通过 加载 json-loader JSON 文件。
          module: {
              rules: [
          -     {
          -       test: /\.json/,
          -       loader: "json-loader"
          -     }
              ]
            }

    5.UglifyJsPlugin sourceMap
        UglifyJsPlugin 的 sourceMap 配置项现在默认为 false 而不是 true。 这意味着如果你在压缩代码时启用了 source map，或者想要让 uglifyjs 的警告能够对应到正确的代码行，你需要将 UglifyJsPlugin 的 sourceMap 设为 true。
          devtool: "source-map",
            plugins: [
              new UglifyJsPlugin({
          +     sourceMap: true
              })
            ]
