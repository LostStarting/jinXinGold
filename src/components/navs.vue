<template>
  <nav>
    <div class="nav_head">
     <a class="aaa" href="#/find"><div class="back" >
        <img src="../assets/img/icon-back.png"/>
        <p>返回</p>
      </div>
      </a> 
      <p class="times">{{title}}</p>
      <img class="share" src="../assets/img/icon-share.png"/>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navs',
  data () {
    return {
      title: ''
    }
  },
  methods:{ 
      getData:function(){  
          fetch('api/mouth',{  
              method:"GET",  
              headers: new Headers({  
                'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON  
              })  
          }) // 返回一个Promise对象，  
        .then((res)=>{  
            return res.json() // res.json()是一个Promise对象  
        })  
        .then((res)=>{  
          
           this.title = res[this.$store.state.id].title;
      
        })  
      }  
    },  
  // props:["title"],
  mounted(){
      this.getData(); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, div, img, input, ul, li, section, nav, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0; }

  ul, ol {
    list-style: none; }

  html {
    height: 100%;
    width: 100%;
    font-size: 100px; }

  body {
    font-family: "微软雅黑",Arial;
    height: 100%; }

  a {
    text-decoration: none; }
.aaa{
  display: block;
color: white;
}
  img {
    display: block; }
  nav {
    line-height: 1.44rem;
    color: #fff;
    font-size: 0.4rem; }
  nav .nav_head {
    height: 1.44rem;
    background: #ff5152;
    padding: 0 0.48rem;
    display: flex;
    justify-content: space-between; }
  nav .nav_head .back {
    display: flex; }
  nav .nav_head .back img {
    width: 0.34rem;
    margin: auto 0;
    padding-right: 0.34rem; }
  nav .nav_head .share {
    width: 0.45rem;
    margin: auto 0; }
</style>
