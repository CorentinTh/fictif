<template>
  <div class="home-route-container">
    <Title />
    <div class="form-wrapper">
      <SearchForm />
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import SearchForm from '../components/SearchForm';

export default {
  name: 'app',
  components: {
    Title,
    SearchForm
  }
};
</script>

<style lang="less">
  .home-route-container{
    padding-top: 200px;

    .form-wrapper{
      margin: 0 auto;
      width: 500px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

</style>
