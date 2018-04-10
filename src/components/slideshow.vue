<template>

  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="#">
          <img src="/static/img/1.png" width="100%"/>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <img src="/static/img/2.png" width="100%"/>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <img src="/static/img/3.png" width="100%"/>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <img src="/static/img/4.png" width="100%"/>
        </a>
      </div>
    </div>
    <!--分页器-->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'slideshow',
    data () {
      return {
      }
    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:{
          stopOnLastSlide:true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
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



  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .swiper-container {
    width: 100%;
    height: 1.86rem;
  }
  .swiper-container img {
    width: 100%;
    height: 100%;
  }

  .ban{
    padding: 0 .1rem;
  }
  .ban a{
    display: block;
    width: 100%;
    height: 1.13rem;
  }
  .ban a img{
    width: 100%;
    height: 100%;
  }
  .product{
    width: 100%;
    padding: 0 .1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .remd-title{
    width: 1.1rem;
    height: .17rem;
    background: url(/static/img/remd-pro.jpg) no-repeat center;
    background-size: 100%;
    margin-top: .05rem;
  }
  .pro-content{
    width: 3.4rem;
    margin-top: .1rem;
    border: 1px solid #e7e7e7;
    padding: .17rem 0 .15rem .13rem;
    box-sizing: border-box;
  }
  .remd-content{
    background: url(/static/img/pro-bg1.jpg) no-repeat right top #fff;
    background-size: 47%;
  }
  .p-c-title{
    display: flex;
    align-items: center;
  }
  .p-c-title h2{
    font-size: .18rem;
  }
  .p-c-title a{
    margin-left: .1rem;
  }
  .new-vip{
    display: block;
    width: .66rem;
    height: .15rem;
    font-size: .1rem;
    color: #fd7e7e;
    border: 1px solid #fd7e7e;
    border-radius: 15px;
    text-align: center;
    line-height: .15rem;
  }
  .p-c-info{
    display: flex;
    margin-top: .25rem;
    align-items: center;
  }
  .info{
    font-size: .1rem;
    color: #727272;
  }
  .info i{
    font-size: .12rem;
    margin-right: .01rem;
  }
  .info-2{
    margin-left: .12rem;
  }
  .info-2 i{
    font-size: .13rem;
  }
  .info-3{
    margin-top: .08rem;
  }
  .save-pro{
    margin-top: .1rem;
  }
  .save-title{
    width: 1.1rem;
    height: .17rem;
    background: url(/static/img/save-pro.jpg) no-repeat center;
    background-size: 100%;
    margin-top: .05rem;
  }
  .save-content{
    background: url(/static/img/pro-bg2.jpg) no-repeat right top #fff;
    background-size: 47%;
  }
  .bank-save{
    width: .55rem;
    height: .15rem;
    font-size: .1rem;
    background: #ff6868;
    color: #fff;
    text-align: center;
    line-height: .15rem;
    border-radius: 12px 12px 12px 0;
  }
  .save-content2{
    background: url(/static/img/pro-bg3.jpg) no-repeat right top #fff;
    background-size: 47%;
  }
  .super-pro{
    margin-top: .1rem;
  }
  .super-content{
    background: url(/static/img/pro-bg4.jpg) no-repeat right top #fff;
    background-size: 47%;
  }
  .super-title{
    width: 1.1rem;
    height: .17rem;
    background: url(/static/img/super-pro.jpg) no-repeat center;
    background-size: 100%;
    margin-top: .05rem;
  }
  .super-content2{
    background: url(/static/img/pro-bg5.jpg) no-repeat right top #fff;
    background-size: 47%;
  }

  .tip{
    padding: .2rem 0 .13rem 0;
  }
  .tip p{
    text-align: center;
    font-size: .11rem;
    color: #6f6f6f;
    line-height: .17rem;
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
    left: 1.54rem;
    background: #fff;
    box-sizing: border-box;
  }
  .middle-p img{
    width: 100%;
    height: 100%;
  }
  .active{


    color: #fd5353 !important;
  }


  .yx-header{
    width: 100%;
    height: .48rem;
    background: #fd5353;
    color: #fff;
    font-size: .17rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .youxuan{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .yx-one{
    width: 3.4rem;
    height: 1.25rem;
    border: 1px solid #e0e0e0;
    background: #fff;
    margin-top: .1rem;
  }
  .yx-tit{
    height: .41rem;
    font-size: .15rem;
    display: flex;
    align-items: center;
    padding-left: .15rem;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
  }
  .yx-tit span{
    margin-left: .11rem;
    font-size: .12rem;
    color: #666;
    margin-bottom: .02rem;
  }
  .yx-tip{
    position: absolute;
    right: -.02rem;
    font-style: normal;
    background: #96c94d;
    color: #fff;
    font-size: .1rem;
    padding: .01rem .09rem;
    border-radius: 12px 0 0 12px;
    border-right: 2px solid #49a32c;
  }
  .yx-con{
    height: .84rem;
    display: flex;
    align-items: center;
  }
  .yx-con-l{
    width: 2.11rem;
    height: .59rem;
    border-right: 1px solid #e0e0e0;
  }
  .yx-con-l h4{
    font-size: .2rem;
    color: #fd5353;
    margin-left: .31rem;
    margin-top: .08rem;
  }
  .yx-con-l h4 span{
    font-size: .12rem;
    margin-left: .025rem;
  }
  .yx-con-l p{
    font-size: .11rem;
    color: #888;
    margin-left: .3rem;
    margin-top: .03rem;
  }
  .yx-con-r{
    width: inherit;
    border: 0;
    margin-left: .1rem;
  }
  .jxb{
    margin-left: .15rem;
  }
  .jxb p{
    font-size: .12rem;
    color: #9f9f9f;
    margin-top: .1rem;
  }

  .yx-two{
    width: 3.4rem;
    height: 7.61rem;
    border: 1px solid #e0e0e0;
    background: #fff;
    margin-top: .1rem;
    margin-bottom: .11rem;
  }
  .yx-two-con{
    height: 1.14rem;
    position: relative;
    border-bottom: 1px solid #e0e0e0;
  }
  .ymj{
    height: .79rem;
    margin-top: .3rem;
  }
  .ymj-tit{
    display: flex;
    margin-bottom: .13rem;
  }
  .ymj-tit-l{
    font-size: .13rem;
    font-weight: 700;
    margin-left: .14rem;
  }
  .ymj-tit-l i{
    font-weight: normal;
  }
  .ymj-tit-r{
    font-size: .12rem;
    background: #ffecec;
    color: #fd5353;
    font-weight: 700;
    margin-left: .1rem;
    border-radius: 12px;
  }
  .ymj-tit-r i{
    font-size: .11rem;
  }
  .yx-tip2{
    position: absolute;
    right: -.02rem;
    top: .12rem;
    font-style: normal;
    background: #96c94d;
    color: #fff;
    font-size: .1rem;
    padding: .01rem .09rem;
    border-radius: 12px 0 0 12px;
    border-right: 2px solid #49a32c;
  }
  .limit{
    margin-top: .4rem;
  }
  .limit h4{
    font-size: .2rem;
    color: #fd5353;
    margin-left: .43rem;
    margin-top: .08rem;
  }
  .limit h4 span{
    font-size: .12rem;
    margin-left: .025rem;
  }
  .limit p{
    font-size: .11rem;
    color: #888;
    margin-left: .4rem;
    margin-top: .03rem;
  }
</style>
