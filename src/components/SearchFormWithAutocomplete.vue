<template>
  <div>
    <form class="form" v-on:submit.prevent="onValidated">
      <div class="input-group form-line-one">
        <input type="text" id="search-input" class="form-input" v-model="request" v-on:input="delayedRequest(request)"
               placeholder="What Fictional character are you looking for?" >
        <button class="btn btn-primary input-group-btn"  type="submit">Search</button>
      </div>
      <!--      <div class="button-lucky">-->
      <!--        <button class="btn btn-primary input-group-btn">I'm feeling lucky!</button>-->
      <!--      </div>-->
    </form>

    <div class="results-body">
      <div class="results-container">
        <div v-if="results && results.length > 0">
          <Autocomplete v-for="(character, i) in results.slice(0,3)" v-bind:key="i" :character="character" @click="display(character.name)"/>
        </div>
        <div v-else-if="results === undefined">
          <Spinner/>
        </div>
        <!--<div v-else>
          Pas de résultats
        </div>-->
      </div>
    </div>
  </div>

</template>

<script>
import { getCharactersFromQuery } from '../services/search';
import Autocomplete from './Autocomplete';
import Spinner from './Spinner';

export default {
  name: 'SearchFormWithAutocomplete',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    Autocomplete,
    Spinner
  },
  created () {
    this.character = this.$route.query.display;

    getCharactersFromQuery(this.$route.params.query).then((data) => {
      this.results = data;
    });

    this.request = this.value;
  },
  mounted () {
    if (this.$route.params.query) {
      document.getElementById('search-input').value = this.$route.params.query;
      this.request = this.$route.params.query;
    }
  },
  data () {
    return {
      results: undefined,
      character: undefined,
      request: '',
      timeoutID: null,
      delayedRequest: () => {
        if (this.timeoutID) {
          window.clearTimeout(this.timeoutID);
        }
        if (this.request.length > 2) {
          this.timeoutID = window.setTimeout(this.onChange, 700);
        }
      },
      display: (slug) => {
        this.$router.replace({ query: { display: slug } }).catch(() => {});
        this.character = slug;
        console.log(this.character);
        this.$router.push(`/character/${decodeURIComponent(this.character)}`);
        this.$router.go();
      },
      onChange: () => {
        // TODO : add service that makes request
        this.$router.push(`/autocomp/${decodeURIComponent(this.request)}`);
        this.$router.go();
        console.log(this.request);
        if (this.character) {
          console.log(this.character);
        }
      },
      onValidated: () => {
        console.log(`/query/${decodeURIComponent(this.request)}`);
        console.log(this.request);
        this.$router.push(`/query/${decodeURIComponent(this.request)}`);
        this.$router.go();
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .form {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-input{
    border-radius: 20px;
    padding-left: 15px;
  }

  .form-line-one {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .form-input{
      border-radius: 20px;
      padding-left: 15px;
    }

    button{
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      padding: 0 15px;
    }
  }

  .button-lucky {
    padding-top: 16px;
  }

</style>
