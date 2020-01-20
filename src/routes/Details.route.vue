<template>
  <div>
    <div class="wrapper">
      <CharacterDetails name="Mario"/>
    </div>
  </div>
</template>

<script>
import CharacterDetails from '../components/CharacterDetails';

export default {
  name: 'Details',
  components: {
    CharacterDetails
  }
};
</script>

<style scoped>
  .wrapper{
    margin: auto;
    max-width: 700px;
  }
</style>
