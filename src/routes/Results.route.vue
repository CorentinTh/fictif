<template>
  <div class="results">
    <Card class="header">
      <Title class="logo" :dash="false" :small="true"/>
      <SearchForm class="search-form"/>
    </Card>

    <div class="results-container">
      <div class="result">
        <div class="result-title"><a href="">Mario</a></div>
        <div class="result-subtitle"><a href="">fictif.now.sh/data</a></div>
      </div>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import Title from '../components/Title';

export default {
  name: 'Results.route',
  components: {
    Card,
    SearchForm,
    Title
  }
};
</script>

<style lang="less">
  .results{
    .header{
      display: flex;
      flex-direction: row;
      background-color: #fafafa;
      border-radius: 0;

      .logo{
        padding: 0 46px 0 30px;
      }

      .search-form{
        width: 500px;
      }
    }

    .results-container{
      margin-top: 50px;
      margin-left: 189px;

      .result{
        .result-title{
          font-weight: 400;
          font-size: 18px;
        }
      }
    }
  }
</style>
