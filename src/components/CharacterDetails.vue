<template>
  <Card class="character-container">

    <Spinner v-if="character === undefined"/>

    <div class="not-found" v-if="character === null">
      <div class="not-found-title">404</div>
      <div class="not-found-apologies">
        Sorry, but we can't find your fictional character, any spelling mistakes? Are you sure it exists ?
      </div>
    </div>

    <div v-if="character">
      <div class="character-header">
        <img :src="character.thumbnail" alt="" class="img-fit-cover header-thumbnail">

        <div class="header-info">
          <h3>{{ character.name }}</h3>
          <div class="subtitle">{{ character.description}}</div>
        </div>
      </div>
      <hr/>
      <div class="character-details-container">
        <p class="character-abstract">{{ character.abstract}}</p>
        <div class="character-details-list">
          <h5>Details</h5>
          <div class="character-details-list-item" v-for="detail in details" v-bind:key="detail.label">
            <div v-if="detail.type === 'string'"><strong>{{detail.label}}:</strong> {{ character[detail.field] }}</div>
            <div v-if="detail.type === 'charList'">
              <strong>{{detail.label}}:</strong>
              <ul class="char-list">
                <li v-for="(char, i) in character[detail.field].split(', ')" v-bind:key="i">{{char}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Card>
</template>

<script>
import Card from './Card';
import Spinner from './Spinner';
import { getCharacterInfo } from '../services/sparql';

export default {
  name: 'CharacterDetails',
  props: {
    name: String
  },
  data () {
    return {
      character: undefined,
      details: []
    };
  },
  async created () {
    this.character = await getCharacterInfo(this.$props.name);
    console.log(this.character);
    this.details = [
      { label: 'Gender', field: 'gender', type: 'string' },
      { label: 'Job', field: 'job', type: 'string' },
      { label: 'Nationality', field: 'nationality', type: 'string' },
      { label: 'Species', field: 'species', type: 'string' },
      { label: 'Country', field: 'country', type: 'string' },
      { label: 'Birth date', field: 'birthDate', type: 'string' },
      { label: 'Creator', field: 'creator', type: 'string' },
      { label: 'Relatives', field: 'relatives', type: 'charList' },
      { label: 'Children', field: 'child', type: 'charList' },
      { label: 'Spouse', field: 'spouse', type: 'charList' }

    ].filter(({ field }) => this.character[field]);
  },
  components: {
    Card,
    Spinner
  }
};
</script>

<style lang="less" >
  .character-container {
    padding: 30px !important;
    background-color: #fafafa !important;

    .char-list, .char-list li{
        margin-top: 0;
    }

    .not-found {
      width: 400px;
      margin: 100px auto;
      text-align: center;

      .not-found-title {
        font-size: 50px;
        color: #585bd9;
      }

      .not-found-apologies {
        font-size: 20px;
        opacity: 0.5;
      }
    }

    .spinner .loading {
      font-size: 50px;
    }

    hr {
      width: 100%;
      border: none;
      border-bottom: 2px solid rgba(0, 0, 0, 0.25);
      margin: 16px 0;
    }

    .character-header {
      display: flex;
      flex-direction: row;
      align-items: center;

      .header-thumbnail {
        border-radius: 100px;
        width: 100px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
        margin-right: 16px;
      }

      .header-info {
        h3 {
          margin-bottom: 0;
        }

        .subtitle {
          opacity: 0.8;
        }
      }
    }

    .character-details-container {
      display: flex;
      flex-direction: row;

      .character-abstract {
        text-align: justify;
      }

      .character-details-list {
        flex: 0 0 240px;
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid rgba(0, 0, 0, 0.25);

        h5 {
          text-align: center;
          margin-bottom: 25px;
        }

        .character-details-list-item {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }

  }
</style>
