<template>
  <div class="autocomplete" @click="$emit('click')">
    <div class="autocomplete-title">{{character.name.replace('(character)', '')}}</div>
  </div>
</template>

<script>
export default {
  name: 'Autocomplete.vue',
  props: {
    character: {
      name: String,
      description: String,
      thumbnail: String,
      slug: String
    }
  }
};
</script>

<style scoped lang="less">

  .autocomplete{
    border: 1px solid #cfc2c2;
  }

  .autocomplete-title{
    cursor: pointer;
    padding: 8px 16px ;
    transition: all ease 0.2s;

    &:hover{
      background-color: #585bd9;

      .autocomplete-title{
        border-bottom: 2px solid #585bd9;
      }
    }
  }
</style>
