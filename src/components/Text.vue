<template>
	<div id="text">
		<span>{{asd}}</span>
		<div v-html="vhtml"></div>
		<div>
		    <span v-bind:title="message">
		    	鼠标悬停几秒钟查看此处动态绑定的提示信息！
		    </span><br>
		    <span v-if="seen">
		    	现在你能看到我<br>
	    	</span>
		    <ul>
		    	<li v-for="todo in todos">
		    		{{todo.text}}
		    	</li>
		    </ul>
		    <button v-on:click="isSeen" class="is-seen">切换</button><br><br>
		    <button @click="isSeen" class="is-seen">v-on缩写</button><br>
		    <span>{{sxmessage}}</span><br>
		    <input type="" name="" v-model="sxmessage"><br>
				<a v-bind:href="url">v-bind绑定URL</a><br>
				<a :href="url">v-bind缩写</a><br>
				<p>Original message: "{{ over }}"</p>
			  <p>Computed reversed message: "{{ reversedOver }}"</p>
				<p>{{now}}</p>
				<p>
			    Ask a yes/no question:<br>
			    请输入我同意：<input v-model="question">
			  </p>
			  <p>{{ answer }}</p>
				<div class="status" v-bind:class="{active:isActive,'text-danger':hasError}">
					<p>动态class</p>
					<button type="button" name="button" v-on:click="isColor()">切换</button>
				</div>
				<my-component class="baz boo"></my-component>
				<share class="baz boo"></share>
				<div v-bind:style="{width:testDiv.divWidth + 'px',height:testDiv.divHeight + 'px','background-color':testDiv.bgColor}"></div>
				<div v-bind:style="styleObject"></div>
				<div v-bind:style="[arrayObject,styleObject]">我是分界线哦</div>
				<div v-if="Math.random() > 0.5"> Now you see me </div><!-- Math.random()小于1的随机数-->
				<div v-else> Now you don't </div><!-- v-else必须在v-if的后面否则不会被识别 -->
				<div v-if="type === 'A'">A</div>
				<div v-else-if="type === 'B'">B</div>
				<div v-else-if="type === 'C'">C</div>
				<div v-else>Not A/B/C</div><!--  v-else-if的用法  -->
				<p v-show="isShow">v-show是否显示,此时v-show为true</p>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Share from './Share'
	export default {
		name:'text',
		data () {
		    return {
		    	asd: '一个测试',
		    	message: '页面加载于 ' + new Date().toLocaleString(),
		    	seen: true,
		    	todos:[
			        { text: '学习 JavaScript' },
			        { text: '学习 Vue' },
			        { text: '整个牛项目' }
		    	],
		    	sxmessage: '双向绑定',
		    	vhtml:'<p>v-html指令的用法</p>',
					url:'www.baidu.com',
					over:'Hello',
					question: '',
					answer: 'Waiting for you to stop typing...',
					isActive: true,
					hasError: false,
					testDiv: {//单个样式的对象语法
						bgColor: 'grey',
						divWidth: '200',
						divHeight: '4',
					},
					styleObject: {//整个对象语法！！注意两者不同
						'background-color': 'yellow',
						width: '200px',
						height: '200px'
					},
					arrayObject: {//样式的数组语法
						color: 'red',
						border: '2px solid blue'
					},
					type: 'A',
					isShow: true,
		    }
		},
		methods:{//方法
			isSeen: function(){
				if(this.seen == true){
					this.seen = false
				}else{
					this.seen = true
				}
			},
			getAnswer(newQuestion){
				if(newQuestion == '我同意'){
					this.answer = '输入正确'
				}
			},
			isColor(){
				this.isActive = false
				this.hasError = true
			},
		},
		computed: {//计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。
			reversedOver: function(){
				return this.over.split('').reverse().join('')//反转字符
			},
			now: function(){
				return new Date().toLocaleString()
			}
		},
		watch: {
			// 如果 question 发生改变，这个函数就会运行
	    question: function (newQuestion) {
	      this.answer = '输入错误'
	      this.getAnswer(newQuestion)
	    }
		},
		components: {
			Share
		}
	}
	Vue.component('my-component', {//设置公共组件
	  template: '<p class="foo bar">我是局部组件</p>'
	})
</script>

<style scoped>
button{
	border: none;
	padding: 10px 20px;
	background-color: #ef5e4a;
	color: white;
	border-radius: 3px;
}
.active{
	color: black;
}
.text-danger{
	color: red;
}
</style>
