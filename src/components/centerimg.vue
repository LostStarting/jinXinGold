<template>
  <section class="section">
    <div class="section">
      <img v-for="(find,index) in finds" :src="find.imgsrc" @click="deta(index)">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'indexcenter',
    data () {
      return {
        finds:[
          {
            imgsrc:'/static/img/findImg/1.png',
            id:'01'
          },{
            imgsrc:'/static/img/findImg/2.png',
            id:'02'
          },{
            imgsrc:'/static/img/findImg/3.png',
            id:'03'
          },{
            imgsrc:'/static/img/findImg/4.png',
            id:'04'
          },{
            imgsrc:'/static/img/findImg/5.png',
            id:'05'
          },{
            imgsrc:'/static/img/findImg/6.png',
            id:'06'
          },{
            imgsrc:'/static/img/findImg/7.png',
            id:'07'
          },{
            imgsrc:'/static/img/findImg/8.png',
            id:'08'
          },{
            imgsrc:'/static/img/findImg/9.png',
            id:'09'
          }
        ]
      }
    },
    methods:{
      deta:function (id) {
        this.$store.state.id=id-1;
        this.$router.push({
          path: '/deta',
          name:"deta"
        });
      }
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,figure,figcaption{margin:0; padding:0;}
  ul,li,ol{list-style:none;}
  img,fieldset{border:0; }
  img{display:block;}
  a{text-decoration:none;}
  h1,h2,h3,h4,h5,h6{font-weight:100;}
  body{font-size:12px; font-family:"微软雅黑";}
  input,a{outline:none;}

  @media screen and (max-width: 360px) {
    html{font-size: 100px;}
  }

  @font-face {
    font-family: 'iconfont';
    src: url('/static/font2/iconfont.eot');
    src: url('/static/font2/iconfont.eot?#iefix') format('embedded-opentype'),
    url('/static/font2/iconfont.woff') format('woff'),
    url('/static/font2/iconfont.ttf') format('truetype'),
    url('/static/font2/iconfont.svg#iconfont') format('svg');
  }

  html,body{width: 100%;height: 100%;}
  body{display: flex;flex-direction: column;background: #eee;}

  section {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden; }
  section .section {
    display: flex;
    flex-direction: column; }
  section .section img {
    height: 1.4rem;
    margin-top: 0.1rem; }
</style>
