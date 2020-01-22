<template>
  <div class="title">
    <h1>- Fict<span>IF</span> -</h1>
    <div class="subtitle">Fictional character search engine</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.title{
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-family: 'Lobster Two', cursive;
    font-size: 100px;
    color: rgb(53, 53, 53);
    margin: 0;

    span {
      color: #585bd9;
    }
  }

  .subtitle{
    font-size: 20px;
    opacity: 0.5;
    margin-top: -10px;
  }
}

</style>
