<template>
  <form class="form" v-on:submit.prevent="onValidated" autocomplete="off">
    <div class="input-group form-line-one"
         v-bind:class="{'autocomplete-on': (isFocused && !(acResults && acResults.length === 0) && request.length>2)}">
      <input type="text" class="form-input" v-model="request" v-on:input="delayedRequest(request)"
             placeholder="Search for a fictional character" autocomplete="off" @focus="onFocused"
             @blur="onBlurred" @keyup.down="onArrowDown" @keyup.up="onArrowUp">
      <button class="btn btn-primary input-group-btn" type="submit">Search</button>

      <div class="autocomplete-result-wrapper">
        <Spinner v-if="!acResults"/>

        <div v-if="acResults">
          <div class="autocomplete-result"
               v-for="(result, i) in acResults"
               v-bind:key="i"
               @click="goTo(result)"
               @mousedown.prevent
               v-bind:class="{'autocomplete-result-active':i===arrowCounter}">
            {{result.replace('(character)', '')}}
          </div>
        </div>
      </div>
    </div>

    <!--      <div class="button-lucky">-->
    <!--        <button class="btn btn-primary input-group-btn">I'm feeling lucky!</button>-->
    <!--      </div>-->
  </form>
</template>

<script>
import { getResultsForAutocomplete } from '../services/autocomplete';
import Spinner from './Spinner';

export default {
  name: 'SearchForm',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    Spinner
  },
  created () {
    console.log(this);
    this.request = this.value;
  },
  data () {
    return {
      request: '',
      timeoutID: null,
      isFocused: false,
      acResults: undefined,
      arrowCounter: -1,
      directNavigation: false,
      onArrowDown: () => {
        console.log(this.arrowCounter);
        if (this.acResults && this.arrowCounter < this.acResults.length) {
          this.arrowCounter++;
          this.request = this.acResults[this.arrowCounter];
          this.directNavigation = true;
        }
      },
      onArrowUp: () => {
        console.log(this.arrowCounter);
        if (this.acResults && this.arrowCounter > 0) {
          this.arrowCounter--;

          this.request = this.acResults[this.arrowCounter];
          this.directNavigation = true;
        }
      },
      onBlurred: () => {
        this.isFocused = false;
      },
      onFocused: () => {
        this.isFocused = true;
        this.delayedRequest();
        this.arrowCounter = -1;
      },
      goTo: (slug) => {
        console.log(slug);
        this.$router.push(`/query/${encodeURIComponent(slug.replace('(character)', ''))}?display=${encodeURIComponent(slug)}`);
        this.$router.go();
      },
      delayedRequest: () => {
        this.directNavigation = false;
        if (this.timeoutID) {
          window.clearTimeout(this.timeoutID);
        }
        if (this.request.length > 2) {
          this.timeoutID = window.setTimeout(this.onChange, 400);
        }
      },
      onChange: async () => {
        this.acResults = undefined;
        this.acResults = await getResultsForAutocomplete(this.request);
      },
      onValidated: () => {
        console.log(this.request);
        this.$router.push(`/query/${encodeURIComponent(this.request)}` + (this.directNavigation ? `?display=${encodeURIComponent(this.request)}` : ''));
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

  .form-input {
    border-radius: 20px;
    padding-left: 15px;
  }

  .form-line-one {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    .form-input {
      border-radius: 20px;
      padding-left: 15px;

      &:focus {
        border-color: #bcc3ce;
        box-shadow: none;
      }
    }

    button {
      border-bottom-right-radius: 20px !important;
      border-top-right-radius: 20px !important;
      padding: 0 15px;
      width: 90px;
    }

    &.autocomplete-on {
      .form-input {
        border-bottom-left-radius: 0;
      }

      button {
        border-bottom-right-radius: 0 !important;
      }

      .autocomplete-result-wrapper {
        visibility: visible;
        opacity: 1;
      }
    }

    .autocomplete-result-wrapper {
      transition: opacity 0.2s linear;
      visibility: hidden;
      opacity: 0;
      z-index: 99;
      position: absolute;
      top: 35px;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      border: .05rem solid #bcc3ce;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;

      .autocomplete-result {
        height: 36px;
        text-align: left;
        line-height: 36px;
        padding: 0 15px;
        cursor: pointer;
        transition: all linear 0.2s;

        &.autocomplete-result-active{
          background-color: #f2f2f2;
          color: #585bd9;
        }
        &:hover {
          .autocomplete-result-active;
        }

        &:not(:last-child) {
          border-bottom: 1px solid #bcc3ce;
        }
      }
    }
  }

  .button-lucky {
    padding-top: 16px;
  }
</style>
