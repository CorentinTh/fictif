<template>
  <div class="app-container">
    <div class="page-container">

      <HelloWorld msg="Welcome to Your Vue.js App"/>

      <div class="text-center">
        <router-link to="/" class="btn btn-primary">Home</router-link>&nbsp;
        <router-link to="/about" class="btn btn-primary">A propos</router-link>
      </div>

      <router-view/>

      <div class="push"></div>
    </div>

    <div class="footer">
      <div class="row"><a href="//fictif.now.sh">Fictif</a> has been during the Web semantic course at INSA-Lyon by:
      </div>
      <ul class="row">
        <li><a href="//github.com/theochp">Théo Champion</a></li>
        <li><a href="//github.com/Balthov60">Balthazar Frolin</a></li>
        <li><a href="//github.com/mameillac">Marc Meillac</a></li>
        <li><a href="//github.com/Maxime-Mn">Maxime Mion</a></li>
        <li><a href="//github.com/SteamDragonLady">Tania Oudinet</a></li>
        <li><a href="//github.com/Dante-DaCapo">Nathan Savina</a></li>
        <li><a href="//github.com/CorentinTh">Corentin Thomasset</a></li>
        <li><a href="//github.com/thuyv">Thuy Vu</a></li>
      </ul>
    </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
};
</script>

<style lang="less">
  @footer-height: 100px;

  html, body {
    height: 100%;
    margin: 0;
  }

  .app-container {
    min-height: 100%;
    height: 100%;

    .page-container {
      min-height: 100%;
      margin-bottom: -@footer-height;
    }

    .footer, .push {
      height: @footer-height;
    }

    .footer {
      border-top: 1px solid #e4e4e4;
      background-color: #f2f2f2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .row {
        text-align: center;
        opacity: 0.5;
      }

      ul {
        margin: 0;
        display: flex;
        flex-direction: row;

        li {
          margin: 0;
          list-style-type: none;

          &:not(:last-child) {
            border-right: 1px solid #565656;
            padding-right: 5px;
            margin-right: 5px;
          }
        }
      }
    }
  }

</style>
