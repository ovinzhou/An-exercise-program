<template>
	<div>
		<p>我是路由组件</p>
	<ul>
        <li v-for="article in articles">
        	{{article.title}}
        </li>
    </ul>
	</div>
</template>

<script>
	export default {
		name: 'textrouter',
		data () {
			return {
				articles: [],
			}
		},
		mounted: function() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
		        headers: {

		        },
		        emulateJSON: true
		    }).then(function(response) {
		      // 这里是处理正确的回调
		        this.articles = response.data.subjects
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });

		    // var xhr = new XMLHttpRequest()
		    // xhr.open('get','https://api.douban.com/v2/movie/top250?count=10',false)
		    // xhr.onreadystatechange = function(){
		    // 	if( xhr.readyState == 4 ){
		    // 		if(xhr,status == 200){
		    // 			alert(xhr.responseText)
		    // 		}
		    // 	}
		    // }
		    // xhr.send(null)
		}
	}
</script>

<style scoped>
	
</style>