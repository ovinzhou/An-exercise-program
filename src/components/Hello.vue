<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a v-bind:title="msg">qwe</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
