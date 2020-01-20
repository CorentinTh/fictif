<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'Spinner'
};
</script>

<style scoped lang="less">
  @color: #585bd9;

  .spinner {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: auto;

    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid @color;
      border-color: @color transparent @color transparent;
      animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

</style>
