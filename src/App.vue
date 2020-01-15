<template>
<div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div class="text-center">
    <router-link to="/" class="btn btn-primary">Home</router-link>&nbsp;
    <router-link to="/about" class="btn btn-primary">A propos</router-link>
  </div>

  <router-view/>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">

</style>
