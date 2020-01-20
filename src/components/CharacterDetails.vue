<template>
  <Card class="character-container">

    <Spinner v-if="!character"/>

    <div v-if="character">
      <div class="header">
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
          <div class="character-details-list-item"><strong>Gender:</strong> {{ character.gender}}</div>
          <div class="character-details-list-item"><strong>Creator:</strong> {{ character.creator}}</div>
          <div class="character-details-list-item"><strong>First game:</strong> {{ character.first_game}}</div>
        </div>
      </div>
    </div>

  </Card>
</template>

<script>
import Card from './Card';
import Spinner from './Spinner';

export default {
  name: 'CharacterDetails',
  props: {
    name: String
  },
  character: false,
  created () {
    this.character = {
      name: 'Mario',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mario_emblem.svg/100px-Mario_emblem.svg.png',
      description: 'fictional character from Nintendo\'s Mario franchise',
      abstract: 'Mario (Japanese: マリオ Hepburn: Mario, [ma.ɽi.o]) (English /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]) is a fictional character in the Mario video game franchise, owned by Nintendo and created by video game designer Shigeru Miyamoto. Serving as the company\'s mascot and the eponymous protagonist of the series, Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center upon rescuing Princess Peach from the Koopa villain Bowser. His younger brother is Luigi. The Mario franchise is the best-selling video game franchise of all time. Over 210 million units of the overall Mario series of games have been sold. Outside of the Super Mario platform series, other Mario genres include the Mario Kart racing series, sports games such as the Mario Tennis and Mario Golf series, role-playing games such as Super Mario RPG and Paper Mario, and educational games such as Mario Is Missing! and Mario\'s Time Machine. The franchise has branched into several mediums, including television shows, film, comics and licensed merchandise. Since 1995, Mario has been voiced by Charles Martinet. ',
      gender: 'male',
      creator: 'Shigeru Miyamoto',
      first_game: 'Donkey Kong'
    };
  },
  components: {
    Card,
    Spinner
  }
};
</script>

<style lang="less">
  .character-container {
    padding: 30px !important;

    .spinner .loading {
      font-size: 50px;
    }

    hr {
      width: 100%;
      border: none;
      border-bottom: 2px solid rgba(0, 0, 0, 0.25);
      margin: 16px 0;
    }

    .header {
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

        h5{
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
