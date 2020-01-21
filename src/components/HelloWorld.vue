<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="hint">Framework css utilisé: <a class="btn btn-primary" href="https://picturepan2.github.io/spectre/index.html">Spectre
      css</a></div>

    <form id="form-recherche" class="form">
      <div class="input-group">
        <span class="input-group-addon">...</span>
        <input type="text" class="form-input" placeholder="Quel personnage cherchez-vous?">
        <button class="btn btn-primary input-group-btn">Chercher</button>
      </div>
    </form>
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

  .form{
    text-align: center;
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 10%;
  }

</style>
