<template>
  <div class="form">
    <form id="form-recherche" class="form">
      <div class="input-group form-line-one">
        <input type="text" class="form-input" v-model="request" v-on:input="delayedRequest(request)"
               placeholder="Quel personnage cherchez-vous?">
        <button class="btn btn-primary input-group-btn">Chercher</button>
      </div>
<!--      <div class="button-lucky">-->
<!--        <button class="btn btn-primary input-group-btn">I'm feeling lucky!</button>-->
<!--      </div>-->
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    msg: String
  },
  created () {
    console.log(this);
  },
  data () {
    return {
      request: '',
      timeoutID: null,
      delayedRequest: () => {
        if (this.timeoutID) {
          window.clearTimeout(this.timeoutID);
        }
        if (this.request.length > 2) {
          this.timeoutID = window.setTimeout(this.onChange, 400);
        }
      },
      onChange: () => {
        // TODO : add service that makes request
        console.log(this.request);
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1 {
    text-align: center;
  }

  .hint {
    text-align: center;
  }

  .form {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-input{
    border-radius: 20px;
    padding-left: 15px;
  }

  .form-line-one {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .form-input{
      border-radius: 20px;
      padding-left: 15px;
    }

    button{
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      padding: 0 15px;
    }
  }

  .button-lucky {
    padding-top: 16px;
  }

</style>
