<template>
  <div class="share">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'share',
    data () {
      return {
        msg: '我是公共组件！'
      }
    }
  }
</script>
