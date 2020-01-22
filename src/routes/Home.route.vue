<template>
  <div class="page-content">
    <Title />
    <div class="form">
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
  .page-content{
    padding-top: 200px;

  }

  .form{
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
