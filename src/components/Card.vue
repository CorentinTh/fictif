<template>
  <div class="card-material">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card'
};
</script>

<style scoped>
  .card-material{
    padding: 16px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
