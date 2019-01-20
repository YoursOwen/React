#React概念
##虚拟Dom
	Dom：浏览器中为了表现页面结构使用js对象对元素进行摸拟。
	虚拟DOM：框架中为了表示Dom元素使用js对象，对Dom进行模拟。
	虚拟DOM的本质：js的对象，用于模拟页面Dom的嵌套结构。
	虚拟DOM的目的：实现页面的高效更新。
	虚拟DOM实现高效更新的过程：
		1.页面在第一次渲染时，内存中存在对象A（虚拟DOM）
		2.当页面发生变化时，内存中生成一个新的对象B（虚拟DOM）
		3.对象A和对象B进行对比，找出不一样的地方，后->存储到内存中C（虚拟DOM对象）
		4.页面进行渲染时，只渲染C即可，实现高效更新
##Diff算法（html，css和js混写）

	tree属性相当于TreeDiff
	属性名相当于componentDiff
	属性值的对比，相当于ELementDiff
	


	const obj1 = {
		tree:"A"
		
		name:"zs"		
	}
	
	
	const obj2 = {
		tree:"B"
		
		name:"ls"		
	}
	

	TreeDiff:最顶层的对比，判断两个虚拟DOM树类型是否一样，如果不一样，则直接渲染新虚拟DOM，如果一样在实现componentDiff
	
	componentDiff:如果虚拟dom类型一样，再对比组件类型是否一样，如果不一样，直接记录当前组件，接着对比下一个；如果一样，再实现ElementDiff

	ELementDiff:如果组件类型一样，在对比组件中的元素是否一样，如果不一样记录下来，找到所有的记录的内容（虚拟Dom），最后渲染这个虚拟DOM
##JXS语法
##单向数据流


#webpack4.0
	webpack4.0版本中还需要额外装webpack-cli
	webpack4.x新特性：约定大于配置的概念，目的是为了尽量减少配置文件的体积
		1.默认打包入口是："./src/main.js"
		2.webpack.config.js是基于node执行的，而node是chrome的V8引擎进行解析的，v8暂时不支持ES6语法的。


##渲染react语法
	1.forEach遍历组装一个虚拟DOM数组
	2.使用map函数（本身会返回一个数组）遍历返回一个虚拟DOM数组
	
	类名：用 className 替代name
			htmlfor 替代 for （label中的for属性）
		class、for都是关键字

##扩展运算符 ... [ES6]
	常用环境：合并数组
	let arr1 = [1,2,3,4,5,6]
	let arr2 = [,6,8,90,4,33]

	let arr = [...arr1,...arr2]

##组件化
###无状态组件
	使用构造函数的方式创建
###有状态组件
	使用ES6中的Class关键字创建
	
	class
	
	function Person（name,age）{
		this.name = name
		this.age = age
	不推荐在里面this.say=function(){}
	因为每次new都会重新生成函数，对内存不友好，建议挂载到原型上
	}
	const p = new Person("zs",18)
	
	//类
	//类模板中只允许书写函数和静态成员
	class Person {
		//构造器（构造函数）
		constructor() {
			this.name=name
			this.age=age
		}
		//静态属性
		static desc = "可恶的人类"
 	}
	const p = new Person("ls",20) new的时候优先执行construtor构造器

		
	
