<template>
  <div class="result" @click="$emit('click')">
    <div class="position" v-if="position">{{position}}</div>
    <div class="result-title-wrapper">
      <div class="result-title">{{character.name.replace('(character)', '')}}</div>
      <div class="result-subtitle">{{character.description}}</div>
    </div>
    <div class="score" v-if="$route.query.score">{{character.score}}</div>
  </div>
</template>

<script>
export default {
  name: 'Result.vue',
  props: {
    position: Number,
    character: {
      name: String,
      description: String,
      thumbnail: String,
      slug: String,
      score: Number
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
    min-height: 70px;
    display: flex;
    flex-direction: row;
    /*justify-content: space-between;*/
    align-items: center;

    &:hover{
      background-color: #fafafa;

      .result-title{
        border-bottom: 2px solid #585bd9;
      }
    }

    .position{
      font-size: 25px;
      opacity: 0.5;
      margin-right: 20px;
    }
    .result-title-wrapper{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
    }

    .score{
      opacity: 0.2;
      min-width: 30px;
      text-align: right;
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
