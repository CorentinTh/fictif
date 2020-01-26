<template>
  <div class="result" @click="$emit('click')">
    <div class="result-title">{{character.name.replace('(character)', '')}}</div>
    <div class="result-subtitle">{{character.description}}</div>
  </div>
</template>

<script>
export default {
  name: 'Result.vue',
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

  .result{
    cursor: pointer;
    padding: 8px 16px ;
    transition: all ease 0.2s;
    border-bottom: 1px solid rgba(200, 200, 200, 0.59);

    &:hover{
      background-color: #fafafa;

      .result-title{
        border-bottom: 2px solid #585bd9;
      }
    }

    .result-title{
      font-weight: 400;
      font-size: 18px;
      color: #585bd9;
      display: inline-block;
      border-bottom: 2px solid transparent;
      transition: all ease 0.2s;
    }
    .result-subtitle{
      opacity: 0.5;
    }
  }
</style>
