<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="hint">Framework css utilisé: <a class="btn btn-primary" href="https://picturepan2.github.io/spectre/index.html">Spectre
      css</a></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1 {
    text-align: center;
  }

  .hint{
    text-align: center;
  }
</style>
