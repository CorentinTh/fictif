<template>
  <div>
    <Title class="title" msg="Bienvenue chez Fict'If!"/>
    <div class="form">
      <Form />
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import Form from '../components/Form.vue';

export default {
  name: 'app',
  components: {
    Title,
    Form
  }
};
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .title{
    margin-top: 26px;
  }

  .form{
    margin: 0 auto;
    height: 400px;
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
