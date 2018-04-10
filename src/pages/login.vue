<template>
  <div id="box">
    <div class="back" @click="back">
      <img src="/static/img/x.png"/>
    </div>
    <div class="login">
      <p class="user"><label>账号</label><input type="text" v-model="username"   placeholder="请输入手机号/邮箱"/><img class="dele" src="/static/img/delete.png"/><span></span></p>
      <p class="pass"><label>密码</label><input type="password" v-model="userpass"   placeholder="请输入登录密码"/><img class="dele" src="/static/img/delete.png"/><span></span><img class="eye" src="/static/img/eye.png"/></p>
      <p class="forget">忘记登录密码</p>
      <div class="log"  @click="submit($event)">登录</div>
      <div class="reg">
        <div class="rego"><a href="./rego.html">快速注册</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'navs',
    data () {
      return {
          username:"",
          userpass:""
      }
    },
    methods:{
      back:function(){
        this.$store.state.id=0;
        this.$router.push({
          path: '/',
          name: 'index'
        });
      },
       
      submit:function(ev){
        if (this.$store.state.users.username&&this.$store.state.users.userpass=="") {
         this.$store.state.users.userpass= this.userpass;
         this.$store.state.userfaker=this.username;
          this.$router.push({
                 path:"/user"
             }) 
        }else if(this.$store.state.users.username&&this.$store.state.users.userpass){
            if(this.$store.state.users.username==this.username&&this.$store.state.users.userpass==this.userpass){
              this.$store.state.userfaker=this.username;

                this.$router.push({
                 path:"/user"
             }) 
            }else{
              alert("登录失败");
            }



        }else{
              alert("登录失败");              
            }
            
        },
      

    },
    mounted(){
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      let isShow=true;
      $(".eye").click(function () {
        if(isShow){
          $(".pass input").prop({"type":"text"});
          $(".eye").attr({"src":"/static/img/eyeo.png"});
          isShow=false;
        }else{
          $(".pass input").prop({"type":"password"});
          $(".eye").attr({"src":"/static/img/eye.png"});
          isShow=true;
        }
      });
      $("input").eq(0).focus();
      for(let i=0;i<$("input").length;i++){
        $("input").eq(i).keyup(dele);
        $("input").eq(i).focus(dele);
        function dele() {
          if($("input").eq(i).val()==""){
            $(".dele").eq(i).css({"opacity":0});
          }else{
            $(".dele").eq(i).css({"opacity":1});
          }
        }
        $("input").eq(i).blur(function () {
          $(".dele").eq(i).css({"opacity":0});
        });
        $(".dele").eq(i).click(function () {
          $("input").eq(i).val("");
          $("input").eq(i).focus();
        });
      }
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
    height: 100%; }

  .back {
    padding: 0.7rem 0 3.45rem 0.6rem; }
  .back img {
    width: 0.33rem; }

  .login {
    padding: 0 0.48rem; }
  .login .user, .login .pass {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    align-items: center;
    height: 1.5rem;
    color: #333333;
    font-size: 0.38rem; }
  .login .user label, .login .pass label {
    display: block;
    line-height: 1.5rem;
    height: 1.5rem;
    width: 1.4rem;
    padding-left: 0.2rem; }
  .login .user input, .login .pass input {
    flex: 1;
    height: 1.5rem;
    border: 0;
    padding: 0;
    outline: none; }
  .login .user .dele, .login .pass .dele {
    opacity: 0;
    width: 0.41rem;
    margin: auto 0;
    margin-right: 0.6rem; }
  .login .user .eye, .login .pass .eye {
    width: 0.7rem;
    margin: auto 0;
    margin-right: 0.5rem; }
  .login .forget {
    line-height: 1rem;
    padding-bottom: 0.2rem;
    text-align: right;
    font-size: 0.3rem;
    color: #049abf; }
  .login .log {
    height: 1.44rem;
    line-height: 1.44rem;
    width: 100%;
    color: #fff;
    background: #a6a6a6;
    font-size: 0.4rem;
    text-align: center;
    border-radius: 0.2rem; }
  .login .reg {
    height: 0.7rem;
    border-bottom: 1px solid #e0e0e0;
    position: relative; }
  .login .reg .rego {
    color: #333333;
    background: #fff;
    font-size: 0.3rem;
    width: 3.2rem;
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -1.6rem; }

</style>
