<template>
  <div class="results">
    <Card class="results-header">
      <router-link to="/"><Title class="logo" :dash="false" :small="true"/></router-link>
      <SearchForm class="search-form" :value="$route.params.query"/>
    </Card>

    <div class="results-body">
      <div class="results-container">
        <div v-if="results && results.length > 0">
          <Result v-for="(character, i) in results.slice(page*itemPerPage, (page+1)*itemPerPage)" v-bind:key="i"
                  :character="character" @click="display(character.name)"/>

          <ul class="pagination" v-if="pageMax > 1">
            <li class="page-item" v-bind:class="{disable:page===0}">
              <button class="btn btn-link" @click="changePage(page-1)">Prev</button>
            </li>
            <li class="page-item" v-for="i in pageMax"
                v-bind:class="{active: i===page+1}" v-bind:key="i">
              <button class="btn btn-link" @click="changePage(i-1)">{{i}}</button>
            </li>

            <li class="page-item" v-bind:class="{disable:page===0}">
              <button class="btn btn-link" @click="changePage(page+1)">Next</button>
            </li>
          </ul>
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
      page: 0,
      itemPerPage: 8,
      pageMax: 0,
      display: (slug) => {
        this.$router.push({ query: { ...this.$route.query, display: slug } }).catch(() => {
        });
        this.character = slug;
      },
      changePage (page) {
        if (page >= 0 && page < this.pageMax) {
          this.page = page;
        } else {
          this.page = 0;
        }
        this.$router.push({ query: { ...this.$route.query, page: '' + (this.page + 1) } }).catch(() => {
        });
      }
    };
  },
  created () {
    this.character = this.$route.query.display;

    getCharactersFromQuery(this.$route.params.query)
      .then((data) => {
        this.results = data ?? [];
        this.pageMax = Math.ceil(this.results.length / this.itemPerPage);

        const page = (this.$route.query.page ?? 1) - 1;
        this.page = page > 0 && page < this.pageMax - 1 ? page : 0;

        console.log(this.page, this.pageMax);
      });
  }
};
</script>

<style lang="less">
  .results {
    .results-header {
      display: flex;
      flex-direction: row;
      background-color: #fafafa;
      border-radius: 0;

      .logo {
        padding: 0 46px 0 30px;
      }

      .search-form {
        width: 500px;
      }
    }

    .results-body {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 50px;

      .results-container {
        margin-left: 139px;
        flex: 0 0 20%;
        min-width: 500px;
        margin-bottom: 50px;
        min-height: 720px;
        position: relative;

        .pagination {
          position: absolute;
          bottom: 0;

          .page-item.active button {
            color: #fff;
            background: #5755d9;
          }
        }
      }

      .details-container {
        flex-grow: 1;
        margin: 0 auto;
        max-width: 800px;
        min-width: 600px;
      }
    }
  }
</style>
