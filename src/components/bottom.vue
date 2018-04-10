<template>
  <footer class="footer">
    <a class="active" @click="index">
      <i class="iconfont">&#xe681;</i>
      首页
    </a>
    <a @click="youxuan" >
      <i class="iconfont">&#xe67d;</i>
      优选
    </a>
    <a class="middle" href="./html/center.html">
      <p class="middle-p">
        <img src="/static/img/iconcenter.png" />
      </p>
      存管
    </a>
    <a @click="find">
      <i class="iconfont">&#xe606;</i>
      发现
    </a>
    <a @click="login">
      <i class="iconfont">&#xe61a;</i>
      我的
    </a>
  </footer>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: 'bottom',
    data () {
      return {
      }
    },
    methods:{
      index:function () {
        this.$store.state.id=0;
        this.$router.push({
          path: '/',
          name: 'index'
        });
      },
      find:function () {
        this.$store.state.id=3;
        this.$router.push({
          path: '/find',
          name: 'find'
        });
      },
      login:function () {
        this.$store.state.id=4;
        this.$router.push({
          path: '/user',
          name: 'user'
        });
      },
      youxuan:function () {
        this.$store.state.id=1;
        this.$router.push({
          path: '/youxuan',
          name: 'youxuan'
        });
      }
    },
    mounted(){
      let a=this.$store.state.id;
      $("footer a").css({color:"#333"});
      $("footer a").eq(a).css({color:"#fd5353"});
      if(a==0||a==1||a==3){
        document.documentElement.style.fontSize ='100px';
      }else{
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      }
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

  header{
    width: 100%;
  }

  section{
    width: 100%;
    flex: 1;
    overflow-y: scroll;
  }

  footer{
    width: 100%;
    height: 0.48rem;
    background: #fff;
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .footer{
    display: flex;
    align-items: center;
    border-top: 1px solid #a6a6a6;
  }
  .footer a{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: .1rem;
    color: #333;
  }
  .footer a i{
    font-size: .22rem;
  }
  .middle{
    padding-top: .3rem;
  }
  .middle-p{
    width: .5rem;
    height: .5rem;
    padding: .05rem;
    border-top: 1px solid #666;
    border-radius: 50%;
    position: absolute;
    bottom: .13rem;
    left: 50%;
    margin-left: -0.25rem;
    background: #fff;
    box-sizing: border-box;
  }
  .middle-p img{
  width: 100%;
  height: 100%;
  }
  a:first-child{
  color: #fd5353;
  }
</style>
