<template>
  <div class="app_box">
    <top></top>
    <appcenter></appcenter>
  </div>
</template>
<script>
  import top from "../components/navs";
  import appcenter from "../components/detail";
  import $ from 'jquery';
  export default {
    name: 'index',
    data () {
      return {
        // allDate:[],
        // title:"",
        // imgsrc:""
      } 
    },
    
    components:{
      top,appcenter
    },
   
    mounted(){
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      $(window).resize(function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      });
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
