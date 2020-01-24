<template>
  <div class="results">
    <Card class="results-header">
      <router-link to="/"><Title class="logo" :dash="false" :small="true" /></router-link>
      <SearchForm class="search-form" :value="$route.params.query"/>
    </Card>

    <div class="results-body">
      <div class="results-container">
        <div v-if="results && results.length > 0">
          <Result v-for="(character, i) in results" v-bind:key="i" :character="character" @click="display(character.name)" @mousedown.middle="$router.push(`/details/${character.name}`)"/>
        </div>
        <div v-else-if="results === undefined">
          <Spinner/>
        </div>
        <div v-else>
          Pas de résultats
        </div>
      </div>

      <div class="details-container">
        <CharacterDetails v-if="character" :name="character" :key="character"/>
      </div>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card';
import Result from '../components/Result';
import SearchForm from '../components/SearchForm';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import CharacterDetails from '../components/CharacterDetails';
import { getCharactersFromQuery } from '../services/search';

export default {
  name: 'Results.route',
  components: {
    Card,
    Result,
    SearchForm,
    Spinner,
    Title,
    CharacterDetails
  },
  data () {
    return {
      results: undefined,
      character: undefined,
      display: (slug) => {
        this.$router.replace({ query: { display: slug } }).catch(() => {});
        this.character = slug;
      }
    };
  },
  created () {
    this.character = this.$route.query.display;

    getCharactersFromQuery(this.$route.params.query).then((data) => {
      this.results = data;
    });
  }
};
</script>

<style lang="less">
  .results{
    .results-header{
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

    .results-body{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 50px;

      .results-container{
        margin-left: 139px;
        flex: 0 0 20%;
        min-width: 300px;
        margin-bottom: 50px;
      }

      .details-container{
        flex-grow: 1;
        margin: 0 auto;
        max-width: 800px;
        min-width: 600px;
      }
    }
  }
</style>
