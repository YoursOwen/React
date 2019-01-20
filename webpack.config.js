const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

//需要new一个plugin实例对象,j将这个实例丢到下面的plugin数组中
const htmlPlugin = new HtmlWebpackPlugin({
  template:path.join(__dirname,"./src/index.html"),//指定模板文件的绝对路径
  filename:'index.html' //生成的文件名
})



module.exports = {
  mode: "development",
  plugins: [
    htmlPlugin,
  ],
  module:{
    rules:[
      {
        test:/\.js|jsx$/,use:"babel-loader",exclude:/node_modules/
      } // 千万别忘记添加 exclude 排除项
    ]
  },
  resolve:{  //需要修改默认的规则
    extensions: [".js",".jsx",".json"], // 表示，这几个文件的后缀名，可以省略不写
    alias: {
      "@": path.join(__dirname,"./src") // 这样，@ 就表示 项目根目录中 src 的这一层路径
    }
  }
}