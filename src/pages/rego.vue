<template>
  <div id="box">
    <div class="rego">
      <p class="user"><label>手机号</label><input class="txt"  type="text" v-model="username"   @blur="blur($event)" placeholder="请输入手机号"/><img class="dele" src="/static/img/delete.png"/><span v-show="show" style="color:red">X</span></p>
      <p class="user user2"><label>验证码</label><input class="txt" v-model="checkMa" @blur="blur1($event)" type="text" placeholder="请输入验证码"/><img class="dele" src="/static/img/delete.png"/><span class="yz" v-bind="numMa">qrtr</span></p>
      <p class="user"><label>邀请码</label><input class="txt" type="text" placeholder="请输入邀请码，无邀请码可不填"/></p>
      <p class="deal"><input id="check" type="checkbox" @click="choosecheck" v-bind="isChecked"/><label for="check">我已阅读并同意金信<span>《注册服务协议》</span></label></p>
      <div class="log" @click="submits">下一步</div>
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
        checkMa:"",
        numMa:"",
        isChecked:false,
        show:false
      }
    },
    methods:{
       	checkAll:function(type,str){
            switch(type){
                // case "email": var reg = /^\w+@\w+\.(com|cn|net|cc|com\.cn)$/;break; //邮箱验证
                case "phoneId": var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;break;//手机号验证
                  default:;
                }
                if(reg){
                    return reg.test(str);	
                  }else{
                    return false;
              }
        },
         checkAllandUI:function(type,str){
                if(this.checkAll(type,str)){
                 this.show=false
                   
                }else{
                 this.show=true
                }
              },
        blur:function(ev){
            this.checkAllandUI("phoneId",this.username);
        },
        blur1:function(ev){
            this.checknumMA(this.checkMa,this.numMa);
        },
        checknumMA:function(str1,str2){
            if(this.checkMa!=this.numMa){
                console.log("验证码有误");
            }
        },
        submits:function(boolean1,boolean2){
          //(!this.checkAll("phoneId",this.username))||
          if((this.checkMa!=this.numMa)||(!this.isChecked)){
              alert("注册失败！请核对注册信息");
          }
          else{
            alert("注册成功");
           this.$store.state.users.username=this.username;
           this.$router.push({
             path:"/login"
           }) 
            
          }
        },
        choosecheck:function(){
            this.isChecked = !this.isChecked
        }
	
    },
    mounted(){
           console.log(this.$store.state.users);

      document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
      verify();
      $(".yz").click(verify);
      function verify() {
        let arr=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let str="";
        for(let i=0;i<4;i++){
          let index = parseInt(Math.random()*arr.length);
          str+=arr[index];
        }
        $(".yz").html(str);
      }
      $(".txt").eq(0).focus();
      for(let i=0;i<$(".txt").length;i++){
        $(".txt").eq(i).keyup(dele);
        $(".txt").eq(i).focus(dele);
        function dele() {
          if($(".txt").eq(i).val()==""){
            $(".dele").eq(i).css({"opacity":0});
          }else{
            $(".dele").eq(i).css({"opacity":1});
          }
        }
        $(".txt").eq(i).blur(function () {
          $(".dele").eq(i).css({"opacity":0});
        });
        $(".dele").eq(i).click(function () {
          $(".txt").eq(i).val("");
          $(".txt").eq(i).focus();
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

  .rego {
    padding: 0 0.48rem; }
  .rego .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    height: 1.5rem;
    color: #333333;
    font-size: 0.38rem; }
  .rego .user label {
    display: block;
    line-height: 1.5rem;
    height: 1.5rem;
    width: 1.9rem; }
  .rego .user .txt {
    flex: 1;
    height: 1.5rem;
    border: 0;
    padding: 0;
    outline: none; }
  .rego .user .dele {
    opacity: 0;
    width: 0.41rem;
    margin: auto 0;
    margin-right: 0.6rem; }
  .rego .user2 .txt {
    width: 4rem; }
  .rego .user2 .dele {
    opacity: 0;
    height: 0.41rem;
    width: 0.41rem;
    margin: auto;
    margin-right: 0.6rem; }
  .rego .user2 .yz {
    display: block;
    height: 1.1rem;
    width: 2rem;
    text-align: center;
    line-height: 1.1rem;
    margin: 0.2rem 0;
    border-left: 1px solid #e0e0e0; }
  .rego .deal {
    height: 1.54rem;
    line-height: 1.54rem;
    color: #666666;
    font-size: 0.28rem; }
  .rego .deal input {
    margin-right: 0.3rem; }
  .rego .deal span {
    color: #f85a59;
    padding-left: 0.45rem; }
  .rego .log {
    height: 1.44rem;
    line-height: 1.44rem;
    width: 100%;
    color: #fff;
    background: #a6a6a6;
    font-size: 0.4rem;
    text-align: center;
    border-radius: 0.2rem; }

</style>
