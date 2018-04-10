<template>
  <div class="app_box">
    <div class="mymsg">
      <h4>请绘制解锁图案</h4>
    </div>
    <div class="dot">
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </div>
    <a class="forget" href="#">忘记手势密码？</a>
  </div>
</template>
<script>

  import $ from 'jquery';
  export default {
    name: 'index',
    data () {
      return {
      }
    },
    mounted(){
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
  body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,figure,figcaption{margin:0; padding:0;}
    ul,li,ol{list-style:none;}
    img,fieldset{border:0; }
    img{display:block;}
    a{text-decoration:none;}
    h1,h2,h3,h4,h5,h6{font-weight:100;}
    body{font-size:12px; font-family:"微软雅黑";}
    input,a{outline:none;}
    
    @media screen and (max-width: 320px) {
        html{font-size: 100px;}
    }
    
      html,body{width: 100%;height: 100%;}
    body{display: flex;flex-direction: column;background: #eee;}
    
      .mymsg{
        width: 100%;
        height: 2.12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .mymsg img{
        width: .58rem;
        height: .58rem;
      }
      .mymsg h4{
        margin-top: .1rem;
        font-size: .14rem;
      }
      .dot{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .dot p{
        display: flex;
        margin: .34rem 0;
      }
      .dot p span{
        display: block;
        width: .2rem;
        height: .2rem;
        background: #c9c9c9;
        border-radius: 50%;
        margin: 0 .34rem;
      }
      .dot p:first-child{
        margin-top: 0;
      }
      .forget{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: .1rem;
        font-size: .14rem;
        color: #8b8b8b;
      }
</style>
