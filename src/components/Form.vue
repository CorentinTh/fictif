<template>
  <v-app>

  <div class="form">
    <form id="form-recherche" class="form">
      <div class="input-group form-line-one">

        <v-autocomplete
          class="form-input"
          :items="items"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          placeholder="Quel personnage cherchez-vous?"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>
        <button class="btn btn-primary input-group-btn">Chercher</button>
      </div>
      <div class="button-lucky">
        <button class="btn btn-primary input-group-btn">I'm feeling lucky!</button>
      </div>
    </form>
  </div>
  </v-app>
</template>

<script>
import Vuetify from 'vuetify'
import animals from '../assets/personnage'

export default {
  vuetify: new Vuetify(),
  data: () => ({
    items: animals,
    model: ['Vuetify'],
    search: null
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1 {
    text-align: center;
  }

  .hint{
    text-align: center;
  }

  .form{
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-line-one{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .button-lucky{
    padding-top: 16px;
  }

</style>
