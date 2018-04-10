<!--suppress JSAnnotator -->
<template>
  <div id="app">
    <router-view name="top"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery';
  import store from "./store/store"
  export default {
    name: 'App',store,
    mounted(){
      $(window).resize(function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
        // tl=document.documentElement.clientWidth/2*0.7;
        // pointWidth=document.documentElement.clientWidth / 1080*55;
      });
    }
  }

</script>

<style>
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
