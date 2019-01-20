//这两个包名导入的手，接收的成员名称，必须这么写
import React from 'react' //创建组件、虚拟Dom元素，生命周期
import ReactDom from 'react-dom' //把创建好的组件和虚拟dom放到页面上

// 2.创建虚拟dom
//至少三个参数，最多不限制
// let first = React.createElement("div",{},"哈哈哈，我来了","")

// ReactDom.render(first,document.getElementById("app"))
// const arr = [1,2,3]

// const mydiv = <div>hi~mydiv {arr}</div>
// ReactDom.render(mydiv,document.getElementById("app"))

//创建组件
import Hello from '@/components/Hello'

const person = {
  name:'袁月',
  hobby:"Eat",
  weight:"200kg"
}


ReactDom.render(<Hello {...person}></Hello>,document.getElementById("app"))