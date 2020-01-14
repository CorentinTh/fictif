<template>
  <div class="form">
    <form id="form-recherche" class="form">
      <div class="input-group form-line-one">
        <input type="text" class="form-input" placeholder="Quel personnage cherchez-vous?">
        <button class="btn btn-primary input-group-btn">Chercher</button>
      </div>
      <div class="button-lucky">
        <button class="btn btn-primary input-group-btn">I'm feeling lucky!</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
