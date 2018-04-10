<template>
  <div class="app_box">
    <top></top>
    <appcenter></appcenter>
    <bottom></bottom>
  </div>
</template>
<script>

  import top from "../components/topyou";
  import appcenter from "../components/yuocenter";
  import bottom from "../components/bottom";
  import $ from 'jquery';
  export default {
    name: 'index',
    data () {
      return {
      }
    },
    components:{
      top,appcenter,bottom
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app_box{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
