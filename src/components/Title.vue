<template>
  <div class="title" v-bind:class="{small}">
    <h1><span v-if="dash">-</span> Fict<span class="colored">IF</span> <span v-if="dash">-</span></h1>
    <div class="subtitle" v-if="!small">Fictional character search engine</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    dash: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    }
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

    .colored {
      color: #585bd9;
    }
  }

  &.small {
    h1{
      font-size: 40px;
    }

    margin: 0;
  }

  .subtitle{
    font-size: 20px;
    opacity: 0.5;
    margin-top: -10px;
  }
}

</style>
