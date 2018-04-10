<template>
  <div id="box">
    <div class="user">
      <div class="head">
        <img src="/static/img/dian.png"/>
        <!-- src="/static/img/head.png" -->
        <img v-bind:src="imgsrc"/>
      </div>
      <div class="all">
        <p>资产总额（元）<img class="eye" src="/static/img/eyeo0.png"/></p>
        <p class="sur_money"  v-html="totalmoy">110.00</p>
      </div>
      <div class="sur">
        <p>可用余额（元）</p>
        <p class="sur_money" v-html="userablemoy">50.00</p>
      </div>
    </div>
    <section>
      <div class="act">
        <div class="accounts">
          <div class="account">
            <div class="acc_left"><img src="/static/img/icon-yx.png"/><p>金信优选客户</p></div>
            <div class="acc_right"><p>可用余额<span class="sur_money" v-html="userablemoy">0.00</span>元</p><img src="/static/img/jt.png"/></div>
          </div>
          <div class="account">
            <div class="acc_left"><img src="/static/img/icon-cg.png"/><p>金信存款客户</p></div>
            <div class="acc_right"><p>可用余额<span class="sur_money" v-html="userablemoy">0.00</span>元</p><img src="/static/img/jt.png"/></div>
          </div>
        </div>
        <div class="accounts">
          <div class="account">
            <div class="acc_left"><img src="/static/img/icon-yq.png"/><p>邀请好友领现金</p></div>
            <div class="acc_right"><img src="/static/img/jt.png"/></div>
          </div>
        </div>
        <div class="accounts">
          <div class="account">
            <div class="acc_left"><img src="/static/img/icon-safe.png"/><p>账户安全</p></div>
            <div class="acc_right"><p>低</p><img src="/static/img/jt.png"/></div>
          </div>
        </div>
        <div class="accounts">
          <div class="account">
            <div class="acc_left"><img src="/static/img/icon-more.png"/><p>更多</p></div>
            <div class="acc_right"><img src="/static/img/jt.png"/></div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="tit"><img src="/static/img/icon-star.png"/><p>推荐产品</p><img src="/static/img/icon-star.png"/> </div>
        <ul>
          <li>
            <p class="tit">金计划</p>
            <img class="bottom_line" src="/static/img/bg-dian.png"/>
            <p class="per">9%</p>
            <p class="time">锁定期12个月</p>
          </li>
          <li>
            <p class="tit">金计划</p>
            <img class="bottom_line" src="/static/img/bg-dian.png"/>
            <p class="per">9%</p>
            <p class="time">锁定期12个月</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'navs',
    data () {
      return {
        imgsrc:"",
        totalmoy:"",
        userablemoy:""
      }
    },
    methods:{ 
      getData:function(){  
          fetch('api/'+this.$store.state.userfaker,{  
              method:"GET",  
              headers: new Headers({  
                'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON  
              })  
          }) // 返回一个Promise对象，  
        .then((res)=>{  
            return res.json() // res.json()是一个Promise对象  
        })  
        .then((res)=>{  
         
           this.imgsrc = res.imgsrc;
           this.totalmoy = res.totalmoy;
           this.userablemoy = res.userablemoy;
           
      
        })  
      }  
    }, 
    mounted(){
      this.getData();
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      let isShow=true;
      let arr=[];
      for(let i=0;i<$(".sur_money").length;i++){
        arr.push($(".sur_money").eq(i).html());
      }
      $(".eye").click(function () {
        if(isShow){
          $(".eye").attr({"src":"/static/img/eye0.png"});
          $(".sur_money").html("****");
          isShow=false;
        }else{
          $(".eye").attr({"src":"/static/img/eyeo0.png"});
          isShow=true;
          for(let i=0;i<$(".sur_money").length;i++){
            $(".sur_money").eq(i).html(arr[i]);
          }
        }
      });
      $(window).resize(function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      });
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

  img {
    display: block; }

  #box {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column; }

  .user {
    height: 6.36rem;
    background: url("/static/img/bg-gr.png") no-repeat;
    background-size: 100% 100%;
    color: #fff; }
  .user .head {
    padding: 0.25rem 0 0 0.48rem;
    width: 1.25rem;
    display: flex; }
  .user .head img:first-child {
    height: 0.54rem;
    margin: auto 0;
    padding-right: 0.18rem; }
  .user .head img:last-child {
    height: 0.93rem; }
  .user .all {
    padding-top: 0.24rem;
    text-align: center; }
  .user .all p:first-child {
    font-size: 0.4rem;
    line-height: 0.7rem; }
  .user .all p:first-child img {
    display: inline-block;
    height: 0.41rem;
    padding-left: 0.5rem; }
  .user .all p:last-child {
    font-size: 0.82rem;
    line-height: 2rem; }
  .user .sur {
    padding-top: 0.24rem;
    text-align: center; }
  .user .sur p {
    font-size: 0.4rem;
    line-height: 0.7rem; }

  section {
    flex: 1;
    display: flex;
    flex-direction: column; }
  section .act {
    background: #efefef;
    padding-bottom: 0.3rem; }
  section .act .accounts {
    margin-top: 0.3rem;
    padding: 0 0.48rem;
    background: #fff; }
  section .act .accounts .account:first-child {
    border: 0; }
  section .act .accounts .account {
    border-top: 1px solid #e0e0e0;
    height: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    justify-content: space-between; }
  section .act .accounts .account .acc_left {
    display: flex;
    color: #313031;
    font-size: 0.4rem; }
  section .act .accounts .account .acc_left img {
    height: 0.54rem;
    margin: auto 0;
    padding-right: 0.44rem; }
  section .act .accounts .account .acc_right {
    display: flex;
    color: #636563;
    font-size: 0.4rem; }
  section .act .accounts .account .acc_right img {
    height: 0.38rem;
    margin: auto 0;
    padding-left: 0.2rem; }
  section .recommend .tit {
    line-height: 1.3rem;
    color: #ff4d42;
    font-size: 0.42rem;
    display: flex;
    justify-content: center; }
  section .recommend .tit img {
    padding: 0 0.3rem;
    margin: auto 0;
    width: 0.23rem; }
  section .recommend ul {
    padding: 0 0.4rem 0.6rem 0.4rem;
    display: flex; }
  section .recommend ul li:last-child {
    margin: 0; }
  section .recommend ul li {
    margin-right: 0.25rem;
    text-align: center;
    width: 4rem;
    height: 3rem;
    border: 1px solid #e0e0e0; }
  section .recommend ul li .tit {
    line-height: 0.74rem;
    padding-top: 0.2rem;
    color: #393839;
    font-size: 0.36rem; }
  section .recommend ul li .bottom_line {
    height: 0.04rem;
    margin: 0 auto; }
  section .recommend ul li .per {
    line-height: 0.95rem;
    padding-top: 0.3rem;
    color: #ff5152;
    font-size: 0.46rem; }
  section .recommend ul li .time {
    line-height: 0.44rem;
    color: #8c8a8c;
    font-size: 0.22rem; }

</style>
