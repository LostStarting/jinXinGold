<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide page0">
        <img class="bunner" :src="imgsrc"/>
      </div>
      <div class="swiper-slide page1">
        <div class="box">
          <div class="tit">
            <div class="tit_1">01</div>
            <div class="tit_2">平台综合数据</div>
          </div>
          <div class="int">金信网自2014年3月17日上线至今<br/>安全运营<span class="int_times">{{page1.time}}</span>天总出借额<span class="int_money">{{page1.money}}</span>亿元</div>
          <ul>
            <li>
              <img src="../assets/img/zcyh.png" />
              <p>注册用户</p>
              <div class="person"><span>{{page1.person[0]}}</span>万人</div>
            </li>
            <li>
              <img src="../assets/img/pjje.png" />
              <p>每位用户平均借出额</p>
              <div class="person"><span>{{page1.person[1]}}</span>元</div>
            </li>
            <li>
              <img src="../assets/img/cjyh.png" />
              <p>出借用户量</p>
              <div class="person"><span>{{page1.person[2]}}</span>万人</div>
            </li>
            <li>
              <img src="../assets/img/zcje.png" />
              <p>每笔注册平均金额</p>
              <div class="person"><span>{{page1.person[3]}}</span>元</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide page2">
        <div class="box">
          <div class="tit">
            <div class="tit_1">02</div>
            <div class="tit_2">平台综合数据</div>
          </div>
          <div class="int">累计为出借人发放总收益<span>{{page2.money}}</span>亿元<br/>平均出借时长<span>{{page2.time}}</span>天</div>
          <ul>
            <li>
              <img src="../assets/img/zjkrs.png" />
              <p>总出借笔数</p>
              <div class="person"><span>{{page2.person[0]}}</span>万笔</div>
            </li>
            <li>
              <img src="../assets/img/zkmbsj.png" />
              <p>最快满标时间</p>
              <div class="person"><{{page2.person[1]}}分钟</div>
            </li>
            <li>
              <img src="../assets/img/zjkrs.png" />
              <p>总借款人数</p>
              <div class="person"><span>{{page2.person[2]}}</span>万人</div>
            </li>
            <li>
              <img src="../assets/img/lspj.png" />
              <p>历史平均年化收入率</p>
              <div class="person"><span>{{page2.person[3]}}</span>%</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide page3">
        <div class="box">
          <div class="tit">
            <div class="tit_1">03</div>
            <div class="tit_2">出借人用户画像</div>
          </div>
        </div>
        <div id="container1" class="con1"></div>
        <div id="container2" class="con2"></div>
      </div>
      <div class="swiper-slide page4">
        <div class="box">
          <div class="tit">
            <div class="tit_1">04</div>
            <div class="tit_2">产品出借金额占比</div>
          </div>
        </div>
        <div id="container3" class="con3"></div>
      </div>
      <div class="swiper-slide page5">
        <div class="box">
          <div class="tit">
            <div class="tit_1">05</div>
            <div class="tit_2">累计出借金额TOP10地区占比</div>
          </div>
        </div>
        <div id="container4" class="con4"></div>
      </div>
      <div class="swiper-slide page6">
        <div class="box">
          <div class="tit">
            <div class="tit_1">06</div>
            <div class="tit_2">借款人用户画像</div>
          </div>
        </div>
        <div id="container5" class="con1"></div>
        <div id="container6" class="con2"></div>
      </div>
      <div class="swiper-slide page7">
        <div class="box">
          <div class="tit">
            <div class="tit_1">07</div>
            <div class="tit_2">1月用户活跃度环比</div>
          </div>
        </div>
        <div id="container7" class="con5"></div>
      </div>
      <div class="swiper-slide page8">
        <div class="box">
          <div class="tit">
            <div class="tit_1">08</div>
            <div class="tit_2">1月出借额和收益环比</div>
          </div>
        </div>
        <div id="container8" class="con5"></div>
        <div id="container9" class="con6"></div>
      </div>
      <div class="swiper-slide page9">
        <div class="box">
          <div class="tit">
            <div class="tit_1">09</div>
            <div class="tit_2">1月标的数量和出借笔数环比</div>
          </div>
        </div>
        <div id="container10" class="con5"></div>
        <div id="container11" class="con6"></div>
      </div>
      <div class="swiper-slide page10">
        <div class="box">
          <div class="tit">
            <div class="tit_1">10</div>
            <div class="tit_2">1月出借金额区间人数和各终端出借金额占比</div>
          </div>
        </div>
        <div id="container12" class="con1"></div>
        <div id="container13" class="con2"></div>
      </div>
      <div class="swiper-slide page11">
        <div class="box">
          <div class="tit">
            <div class="tit_1">11</div>
            <div class="tit_2">1月用户星座出借占比</div>
          </div>
          <ul>
            <li>
              <img src='/static/img/one.png' class='king king1'/>
              <img src='/static/img/two.png' class='king king2'/>
              <img src='/static/img/three.png' class='king king3'/>
              <img class="ximg" src="../assets/img/byz.png" />
              <p>白羊座</p>
              <div class="person">{{page11[0]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/jnz.png" />
              <p>金牛座</p>
              <div class="person">{{page11[1]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/szz.png" />
              <p>双子座</p>
              <div class="person">{{page11[2]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/jxz.png" />
              <p>巨蟹座</p>
              <div class="person">{{page11[3]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/sz.png" />
              <p>狮子座</p>
              <div class="person">{{page11[4]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/cnz.png" />
              <p>处女座</p>
              <div class="person">{{page11[5]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/tpz.png" />
              <p>天秤座</p>
              <div class="person">{{page11[6]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/txz.png" />
              <p>天蝎座</p>
              <div class="person">{{page11[7]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/ssz.png" />
              <p>射手座</p>
              <div class="person">{{page11[8]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/mxz.png" />
              <p>摩羯座</p>
              <div class="person">{{page11[9]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/spz.png" />
              <p>水瓶座</p>
              <div class="person">{{page11[10]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/syz.png" />
              <p>双鱼座</p>
              <div class="person">{{page11[11]}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide page12">
        <div class="box">
          <div class="tit">
            <div class="tit_1">12</div>
            <div class="tit_2">1月用户星座出借金额占比</div>
          </div>
          <ul>
            <li>
              <img src='/static/img/one.png' class='king king1'/>
              <img src='/static/img/two.png' class='king king2'/>
              <img src='/static/img/three.png' class='king king3'/>
              <img class="ximg" src="../assets/img/byz.png" />
              <p>白羊座</p>
              <div class="person">{{page12[0]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/jnz.png" />
              <p>金牛座</p>
              <div class="person">{{page12[1]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/szz.png" />
              <p>双子座</p>
              <div class="person">{{page12[2]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/jxz.png" />
              <p>巨蟹座</p>
              <div class="person">{{page12[3]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/sz.png" />
              <p>狮子座</p>
              <div class="person">{{page12[4]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/cnz.png" />
              <p>处女座</p>
              <div class="person">{{page12[5]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/tpz.png" />
              <p>天秤座</p>
              <div class="person">{{page12[6]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/txz.png" />
              <p>天蝎座</p>
              <div class="person">{{page12[7]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/ssz.png" />
              <p>射手座</p>
              <div class="person">{{page12[8]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/mxz.png" />
              <p>摩羯座</p>
              <div class="person">{{page12[9]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/spz.png" />
              <p>水瓶座</p>
              <div class="person">{{page12[10]}}</div>
            </li>
            <li>
              <img class="ximg" src="../assets/img/syz.png" />
              <p>双鱼座</p>
              <div class="person">{{page12[11]}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide page13">
        <div class="box">
          <div class="tit">
            <div class="tit_1">13</div>
            <div class="tit_2">1月地区出借人数和出借金额占比TOP10</div>
          </div>
        </div>
        <div id="container14" class="con5"></div>
        <div id="container15" class="con6"></div>
      </div>
      <div class="swiper-slide page14">
        <div class="box">
          <div class="tit">
            <div class="tit_1">14</div>
            <div class="tit_2">1月用户出借金额TOP5</div>
          </div>
        </div>
        <div id="container16" class="con5"></div>
      </div>
      <div class="swiper-slide page15">
        <div class="box">
          <div class="tit">
            <div class="tit_1">15</div>
            <div class="tit_2">1月大事记</div>
          </div>
          <ul>
            <li v-for="page in page15">
              <img class="storyImg" :src="page.imgsrc" />
              <p><span>{{page.time}}</span><img src="../assets/img/story-bg.png" /></p>
              <div class="person">{{page.title1}}<br/>{{page.title2}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-slide page16">
        <div class="box">
          <div class="qr">
            <ul>
              <li>
                <img src="../assets/img/sj-qr.png"/>
                <p><img src="../assets/img/sjkh.png"/> </p>
              </li>
              <li>
                <img src="../assets/img/dy-qr.png"/>
                <p><img src="../assets/img/jxdy.png"/></p>
              </li>
            </ul>
          </div>
          <div class="thank">
            <p>谢谢阅读！</p>
            <p>Thanks for reading！</p>
          </div>
          <div class="hint">网贷有风险，出借需谨慎，历史、预期回报不代表实际回报！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import math from 'mathjs';
  import 'mathjs/dist/math';
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import Highcharts from 'highcharts';
  let colors=["#00c170","#da4f52","#8c3ef2","#ffca00","#0099ff","#f19049","#58d3d0"];
  export default {
    name: 'deta',
    data () {
      return {
        title:'2018年1月运',
        // page0:'/static/img/bun-1.png',
        imgsrc:'',
        
        page1:{
          time:1417,
          money:546.09,
          person:[202.46,166128,32.87,44481]
        },
        page2:{
          time:663.6,
          money:22.72,
          person:[122.76,1,20.78,8.89]
        },
        page3:{
          json1:{
            tit:'累计用户男女比例',
            data:[{
              name: '男',
              color:colors[0],
              y: 46.14
            },{
              name: '女',
              color:colors[1],
              y: 53.86
            }]
          },
          json2:{
            tit:'累计用户各年龄段占比',
            data:[{
              name: '0-20岁',
              color:colors[0],
              y: 0.03,
              drilldown: null
            },{
              name: '21-30岁',
              color:colors[1],
              y: 30.74,
              drilldown: null
            },{
              name: '31-40岁',
              color:colors[2],
              y: 26.17,
              drilldown: null
            },{
              name: '41-50岁',
              color:colors[3],
              y: 16.26,
              drilldown: null
            },{
              name: '51-60岁',
              color:colors[4],
              y: 13.45,
              drilldown: null
            },{
              name: '60岁以上',
              color:colors[5],
              y: 13.07,
              drilldown: null
            }]
          }
        },
        page4:{
          json3:{
            data:[
              {
                name: '加息宝',
                color:colors[0],
                y: 4.2,
                drilldown: null
              },{
                name: '月满金',
                color:colors[1],
                y: 17.24,
                drilldown: null
              },{
                name: '月度金',
                color:colors[2],
                y: 18.27,
                drilldown: null
              },{
                name: '双季金',
                color:colors[3],
                y: 11.32,
                drilldown: null
              },{
                name: '金元宝',
                color:colors[4],
                y: 45.06,
                drilldown: null
              },{
                name: '金信宝',
                color:colors[5],
                y: 0.74,
                drilldown: null
              },{
                name: '金信盈',
                color:colors[6],
                y: 3.16,
                drilldown: null
              }
            ]
          }
        },
        page5:{
          json4:{
            categories: ['江苏省', '浙江省', '山东省', '安徽省', '黑龙江省', '河北省', '上海市', '福建省', '天津市', '辽宁省'],
            data: [39.24,16.96,8.29,8.15,4.75,2.8,2.36,2.28,2.28,1.56]
          }
        },
        page6:{
          json5:{
            tit:'借款用户男女比例',
            data:[{
              name: '男',
              color:colors[0],
              y: 71.5
            },{
              name: '女',
              color:colors[1],
              y: 28.5
            }]
          },
          json6:{
            tit:'借款用户年龄占比',
            data:[{
              name: '0-20岁',
              color:colors[0],
              y: 0.01,
              drilldown: null
            },{
              name: '21-30岁',
              color:colors[1],
              y: 14.3,
              drilldown: null
            },{
              name: '31-40岁',
              color:colors[2],
              y: 40.75,
              drilldown: null
            },{
              name: '41-50岁',
              color:colors[3],
              y: 35.91,
              drilldown: null
            },{
              name: '51-60岁',
              color:colors[4],
              y: 8.88,
              drilldown: null
            },{
              name: '60岁以上',
              color:colors[5],
              y: 0.15,
              drilldown: null
            }]
          }
        },
        page7:{
          json7:{
            text: '单位：人',
            categories: [
              '十一月',
              '十二月',
              '一月'
            ],
            series: [{
              name: '周期注册人数',
              data: [23335, 50157, 87401],
              color:colors[0]//修改此数据柱状背景色
            }, {
              name: '周期投资人数',
              data: [24197, 22657, 18764],
              color:colors[1]
            }],
            enabled:true
          }
        },
        page8:{
          json8:{
            text: '1月出借额及往期对比 单位：元',
            categories: [
              '十一月',
              '十二月',
              '一月'
            ],
            series: [{
              name: '',
              data: [
                {y:1828679636,color:colors[0]},
                {y:2772555757,color:colors[1]},
                {y:1984493010,color:colors[2]}
              ],
            }],
            enabled:false
          },
          json9:{
            text: '1月为出借者发放的收益及往期对比 单位：元',
            categories: [
              '十一月',
              '十二月',
              '一月'
            ],
            series: [{
              name: '',
              data: [
                {y:108859002,color:colors[0]},
                {y:141862108,color:colors[1]},
                {y:97087476,color:colors[2]}
              ],
            }],
            enabled:false
          }
        },
        page9:{
          json10:{
            text: '1月发标笔数及往期对比 单位：笔数',
            categories: [
              '十一月',
              '十二月',
              '一月'
            ],
            series: [{
              name: '',
              data: [
                {y:706,color:colors[0]},
                {y:677,color:colors[1]},
                {y:708,color:colors[2]}
              ],
            }],
            enabled:false
          },
          json11:{
            text: '1月出借笔数及往期对比 单位：笔数',
            categories: [
              '十一月',
              '十二月',
              '一月'
            ],
            series: [{
              name: '',
              data: [
                {y:36864,color:colors[0]},
                {y:37545,color:colors[1]},
                {y:28170,color:colors[2]}
              ],
            }],
            enabled:false
          }
        },
        page10:{
          json12:{
            tit:'1月各区间出借额占比',
            data:[{
              name: '投资额<1万',
              color:colors[0],
              y: 33.14
            },{
              name: '1万≤投资额<5万',
              color:colors[1],
              y: 34.42
            },{
              name: '5万≤投资额<10万',
              color:colors[2],
              y: 12.86
            },{
              name: '10万≤投资额<30万',
              color:colors[3],
              y: 13.96
            },{
              name: '投资额≥30万',
              color:colors[4],
              y: 5.62
            }]
          },
          json13:{
            tit:'1月各终端出借额占比',
            data:[{
              name: 'app',
              color:colors[0],
              y: 84.33,
              drilldown: null
            },{
              name: 'pc',
              color:colors[1],
              y: 15.33,
              drilldown: null
            },{
              name: 'M站',
              color:colors[2],
              y: 0.34,
              drilldown: null
            }]
          }
        },
        page11:["6.68%","7.00%","6.80%","7.59%","7.96%","8.09%","10.14%","10.06%","8.59%","9.65%","9.08%","8.19%"],
        page12:["6.61%","7.73%","7.54%","7.77%","7.87%","8.29%","10.84%","9.87%","8.63%","8.98%","7.95%","7.94%"],
        page13:{
          json14:{
            text: '人数占比（%）',
            categories: ['江苏省', '浙江省', '山东省', '安徽省', '黑龙江省', '河北省', '上海市', '福建省', '天津市', '辽宁省'],
            series: [{
              name: '',
              color:'#7bc3fe',
              data: [31.38,13.88,11.4,10.9,4.91,3.51,2.94,2.43,1.9,1.79],
            }],
            enabled:false
          },
          json15:{
            text: '金额占比（%）',
            color:'#7bc3fe',
            categories: ['江苏省', '浙江省', '山东省', '安徽省', '黑龙江省', '河北省', '上海市', '福建省', '天津市', '辽宁省'],
            series: [{
              name: '',
              data: [37.89,18.5,9.07,7.97,5.2,3.31,2.4,2.13,1.65,1.33],
            }],
            enabled:false
          }
        },
        page14:{
          json16:{
            text: '单位：元',
            categories: ['徐先生', '陈先生', '苏女士', '杨女士', '叶先生'],
            series: [{
              name: '',
              color:'#7bc3fe',
              data: [10800000,5600000,4900000,4300000,4050000],
            }],
            enabled:false
          }
        },
        page15:[
          {
            imgsrc:"/static/img/story-11.png",
            title1:"金信网受邀出席2018互联网",
            title2:"金融安全高峰论坛",
            time:"1月9日"
          },
          {
            imgsrc:"/static/img/story-12.png",
            title1:"金信网喜获《华夏时报》",
            title2:"第十一届金蝉奖",
            time:"1月19日"
          },
          {
            imgsrc:"/static/img/story-13.png",
            title1:"“金信梦 新征程”--赢战2018",
            title2:"金信网年会举报成功",
            time:"1月22日"
          },
          {
            imgsrc:"/static/img/story-14.png",
            title1:"金信网举办2018年",
            title2:"首次VIP客户见面会",
            time:"1月23日-24日"
          }
        ]
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
              
              this.imgsrc = res[this.$store.state.id].page0;

            })  
          }  
        },  
    mounted(){
      this.getData();
      let _this = this;
      let tl=0;
      let pointWidth=0;
      pointWidth=document.documentElement.clientWidth / 1080*55;
      tl=document.documentElement.clientWidth/2*0.7;
      $(window).resize(function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 1080*100 + 'px';
        tl=document.documentElement.clientWidth/2*0.7;
        pointWidth=document.documentElement.clientWidth / 1080*55;
      });
      let isPage=false;
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        on:{
          slideChangeTransitionEnd:function () {
            if(this.activeIndex==1){
              if(!isPage){
                for(let i=0;i<$(".page1 .person").find("span").length;i++){
                  addNum($(".page1  .person").find("span").eq(i));
                }
                isPage=true;
              }
            }else if(this.activeIndex==2){
              for(let i=0;i<$(".page2 .person").find("span").length;i++){
                addNum($(".page2 .person").find("span").eq(i));
              }
            }else if(this.activeIndex==3){
              let json1=_this.page3.json1;
              let json2=_this.page3.json2;
              pies('container1',json1);
              pies('container2',json2);
            }else if(this.activeIndex==4){
              let json3=_this.page4.json3;
              Highcharts.chart('container3',{
                chart: {
                  backgroundColor:'rgba(255,255,255,0)',
                  type: 'pie',
                },
                title: {
                  text: ''
                },
                credits:{
                  enabled:false
                },
                plotOptions: {
                  series: {
                    dataLabels: {
                      enabled: true,
                      formatter:function () {
                        return '<span style="color:'+this.color+'">'+ Highcharts.numberFormat(this.percentage, 2)+'%</span>';
                      }
                    }
                  }
                },
                legend:{
                  verticalAlign:'top',
                  symbolRadius:0,
                  symbolHeight:4,
                  symbolWidth:4,
                  itemStyle:{
                    fontSize:"0.45rem",
                    color:colors[0],
                    color:colors[1],
                  },
                  labelFormatter:function () {
                    return '<span style="color:'+this.color+'">'+this.name+'</span>';
                  }
                },
                series: [{
                  name: 'Brands',
                  innerSize:'70%',
                  size:'120%',
                  showInLegend:true,
                  colorByPoint: true,
                  dataLabels:{
                    distance:30,
                    style:{
                      fontSize:'0.3rem'
                    }
                  },
                  data: json3.data
                }]
              });
            }else if(this.activeIndex==5){
              let json4=_this.page5.json4;
              Highcharts.chart('container4',{
                chart: {
                  backgroundColor:'rgba(255,255,255,0)',
                  type: 'bar'
                },
                title: {
                  text: ''
                },
                xAxis: {
                  categories: json4.categories,
                  lineWidth :0,
                  tickWidth:0,
                  title: {
                    text: null
                  }
                },
                yAxis: {
                  min: 0,
                  title: {
                    text: '',
                    align: 'high'
                  },
                  labels: {
                    enabled: false
                  }
                },
                plotOptions:{
                  series:{
                    pointWidth:pointWidth,
                    dataLabels:{
                      enabled:true,
                      useHTML:true,
                      color:"#7cb5ec",
                      formatter:function () {
                        return this.y+"%";
                      }
                    }
                  }
                },
                series: [{
                  showInLegend: false,
                  data: json4.data
                }],
                credits: {
                  enabled: false
                }
              });
            }else if(this.activeIndex==6){
              let json5=_this.page6.json5;
              let json6=_this.page6.json6;
              pies('container5',json5);
              pies('container6',json6);
            }else if(this.activeIndex==7){
              let json7=_this.page7.json7;
              columns('container7',json7);
            }else if(this.activeIndex==8){
              let json8=_this.page8.json8;
              columns('container8',json8);
              let json9=_this.page8.json9;
              columns('container9',json9);
            }else if(this.activeIndex==9){
              let json10=_this.page9.json10;
              columns('container10',json10);
              let json11=_this.page9.json11;
              columns('container11',json11);
            }else if(this.activeIndex==10){
              let json12=_this.page10.json12;
              let json13=_this.page10.json13;
              pies('container12',json12);
              pies('container13',json13);
            }else if(this.activeIndex==11){
              ranks($(".page11"));
            }else if(this.activeIndex==12){
              ranks($(".page12"));
            }else if(this.activeIndex==13){
              let json14=_this.page13.json14;
              columns('container14',json14);
              let json15=_this.page13.json15;
              columns('container15',json15);
            }else if(this.activeIndex==14){
              let json16=_this.page14.json16;
              columns('container16',json16);
            };
          }
        }
      });
      function addNum(obj) {
        let numh=parseFloat(obj.html());
        let numa=parseFloat((numh/20).toFixed(1));
        // console.log("-------"+numa);
        let nums=0;
        let times=setInterval(function () {
          // nums+=numa;
          nums = Math.round((nums+numa)*100)/100;
          // console.log(nums);
          obj.html(nums);
          if(nums>=numh){
            obj.html(numh);
            window.clearInterval(times);
          }
        },50)
      }
      function ranks(obj) {
        let arr=[];
        for(let i=0;i<obj.find(".person").length;i++){
          let num=parseFloat(obj.find(".person").eq(i).html());
          arr.push(num);
        }
        let max1=Math.max.apply(null,arr);
        for(let j=0;j<arr.length;j++){
          if(max1==arr[j]){
            obj.find("li").eq(j).append(obj.find(".king1"));
            obj.find("li").eq(j).animate({"opacity":1},500);
            arr[j]=0;
          }
        }
        let max2=Math.max.apply(null,arr);
        for(let j=0;j<arr.length;j++){
          if(max2==arr[j]){
            obj.find(".person").eq(j).append(obj.find(".king2"));
            obj.find("li").eq(j).delay(500).animate({"opacity":1},500);
            arr[j]=0;
          }
        }
        let max3=Math.max.apply(null,arr);
        for(let j=0;j<arr.length;j++){
          if(max3==arr[j]){
            obj.find(".person").eq(j).append(obj.find(".king3"));
            obj.find("li").eq(j).delay(1000).animate({"opacity":1},500);
            arr[j]=0;
          }
        }
        obj.find("li").delay(1500).animate({"opacity":1},500);
      }
      function columns(obj,json) {
        let jsonData={
          chart: {
            backgroundColor:'rgba(255,255,255,0)',//图表背景
            plotBackgroundColor:'#fff',//坐标内背景
            type: 'column'//图表类型
          },
          title: {//标题
            text: json.text,
            style:{
              color:'#2c2f80',
              fontSize:'0.4rem'
            }
          },
          // subtitle: {//副标题
          //     text: ''
          // },
          xAxis: {
            categories: json.categories,
            // tickInterval:10,
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            }
          },
          // tooltip: {
          //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          //     '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          //     footerFormat: '</table>',
          //     shared: true,
          //     useHTML: true
          // },
          plotOptions:{
            column: {
              borderWidth: 0,
            },
            series:{
              // pointWidth:10,//柱状宽度
              dataLabels:{
                enabled:true,
                allowOverlap:true,//允许数据标签重叠，默认false
                useHTML:true,//去文字阴影
                fontSize:"12px",
                // // color:"#7cb5ec",
                itemStyle:{//设置字体样式
                  fontSize:"12px",
                  // color:colors[0],//这样只能设置成一种颜色
                },
                formatter:function () {//显示数据在柱状顶部
                  return'<span style="display:block;-webkit-transform:scale(0.7); color:'+this.color+'">'+this.y+'</span>';
                }
              }
            }
          },
          legend:{
            verticalAlign:'top',//设置对齐方式
            symbolRadius:0,//改变圆角
            symbolHeight:4,//修改图例宽高
            symbolWidth:4,
            x:0,//x轴位置偏移，只能用去单位的像素值
            y:10,
            floating:true,//设置浮动，设置后不占位置（左右浮动图例消失？？？）
            itemStyle:{//设置字体样式
              fontSize:"0.4rem",
              // color:colors[0],//这样只能设置成一种颜色
            },
            labelFormatter:function () {//图例文字显示，且文字颜色与图例背景色一致
              return '<span style="color:'+this.color+'">'+this.name+'</span>';
            },
            enabled:json.enabled//去掉图例
          },
          credits:{//去右下角链接
            enabled:false
          },
          series: json.series
        };
        Highcharts.chart(obj,jsonData);
      }
      function pies(obj,json) {
        let jsonData = {
          chart: {
            backgroundColor:'rgba(255,255,255,0)',
            type: 'pie',
          },
          credits:{
            enabled:false
          },
          title: {
            text: json.tit,
            style:{
              color:'#2c2f80',
              fontSize:'0.4rem'
            }
          },
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
                formatter:function () {
                  return '<span style="color:'+this.color+'">'+ Highcharts.numberFormat(this.percentage, 2)+'%</span>';
                }
              }
            }
          },
          legend:{
            layout:'vertical',
            floating:'left',
            symbolRadius:0,
            symbolHeight:4,
            symbolWidth:4,
            x:tl,
            itemStyle:{
              'fontSize':"0.3rem"
            }
          },
          series: [{
            name: 'Brands',
            innerSize:'70%',
            size:'140%',
            showInLegend:true,
            colorByPoint: true,
            dataLabels:{
              distance:5,
              style:{
                fontSize:'0.3rem'
              }
            },
            data: json.data
          }]
        };
        Highcharts.chart(obj,jsonData);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container{
    width: 100%;
    flex: 1; }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center; }

  .bunner {
    width: 100%;
    height: 100%; }

  .page1 .int, .page2 .int {
    font-size: 0.3rem;
    color: #666666;
    line-height: 0.52rem;
    padding: 1rem 0 0.4rem; }
  .page1 .int span, .page2 .int span {
    color: #2a2e87; }

  .page1 ul, .page2 ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1.16rem; }
  .page1 ul li, .page2 ul li {
    height: 4rem;
    width: 3.6rem;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 0.8rem; }
  .page1 ul li img, .page2 ul li img {
    height: 1.52rem;
    margin: 0.5rem auto 0; }
  .page1 ul li p, .page2 ul li p {
    height: 1rem;
    line-height: 0.9rem;
    color: #292e8c;
    font-size: 0.32rem; }
  .page1 ul li .person, .page2 ul li .person {
    margin: 0 auto;
    color: #fff;
    width: 2.32rem;
    line-height: 0.57rem;
    height: 0.57rem;
    background: #292d90;
    border-radius: 0.3rem;
    font-size: 0.22rem; }

  .page3 .con1, .page6 .con1, .page10 .con1 {
    min-height: 6rem;
    min-width: 10.8rem;
    margin: 0 auto;
    position: absolute;
    top: 3.6rem; }

  .page3 .con2, .page6 .con2, .page10 .con2 {
    min-height: 6rem;
    min-width: 10.8rem;
    margin: 0 auto;
    position: absolute;
    top: 10rem; }

  .page4 .con3 {
    min-height: 8.4rem;
    min-width: 10.8rem;
    margin: 0 auto;
    position: absolute;
    top: 4rem; }

  .page5 #container4 {
    width: 10.8rem;
    height: 9rem; }

  .page7 {
    background: url("../assets/img/bg.png") no-repeat;
    background-size: 100% 100%; }
  .page7 #container7 {
    width: 10.8rem;
    height: 10rem; }

  .page8, .page9, .page13 {
    background: url("../assets/img/bg.png") no-repeat;
    background-size: 100% 100%; }
  .page8 .con5, .page9 .con5, .page13 .con5 {
    min-height: 6.5rem;
    min-width: 10.8rem;
    margin: 0 auto;
    position: absolute;
    top: 3.6rem; }
  .page8 .con6, .page9 .con6, .page13 .con6 {
    min-height: 6.5rem;
    min-width: 10.8rem;
    margin: 0 auto;
    position: absolute;
    top: 10rem; }

  .page11 ul, .page12 ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.7rem; }
  .page11 ul li, .page12 ul li {
    opacity: 0;
    position: relative;
    height: 2.94rem;
    width: 1.98rem;
    box-sizing: border-box;
    border: 0.03rem solid #d1d3e0;
    background: #fff;
    border-radius: 0.2rem;
    margin-bottom: 0.57rem; }
  .page11 ul li .ximg, .page12 ul li .ximg {
    height: 1.3rem;
    margin: 0.25rem auto 0; }
  .page11 ul li .king, .page12 ul li .king {
    width: 1.15rem;
    position: absolute;
    right: -0.6rem;
    top: -0.6rem; }
  .page11 ul li p, .page12 ul li p {
    line-height: 0.5rem;
    color: #6c6c6c;
    font-size: 0.3rem; }
  .page11 ul li .person, .page12 ul li .person {
    line-height: 0.7rem;
    font-size: 0.32rem; }
  .page11 ul li:nth-child(1) .person, .page12 ul li:nth-child(1) .person {
    color: #32d6d7; }
  .page11 ul li:nth-child(2) .person, .page12 ul li:nth-child(2) .person {
    color: #89e7e7; }
  .page11 ul li:nth-child(3) .person, .page12 ul li:nth-child(3) .person {
    color: #73db8e; }
  .page11 ul li:nth-child(4) .person, .page12 ul li:nth-child(4) .person {
    color: #e8d078; }
  .page11 ul li:nth-child(5) .person, .page12 ul li:nth-child(5) .person {
    color: #eba94b; }
  .page11 ul li:nth-child(6) .person, .page12 ul li:nth-child(6) .person {
    color: #fd7f80; }
  .page11 ul li:nth-child(7) .person, .page12 ul li:nth-child(7) .person {
    color: #8b97df; }
  .page11 ul li:nth-child(8) .person, .page12 ul li:nth-child(8) .person {
    color: #678cfe; }
  .page11 ul li:nth-child(9) .person, .page12 ul li:nth-child(9) .person {
    color: #87b7a9; }
  .page11 ul li:nth-child(10) .person, .page12 ul li:nth-child(10) .person {
    color: #e7946c; }
  .page11 ul li:nth-child(11) .person, .page12 ul li:nth-child(11) .person {
    color: #ed6f00; }
  .page11 ul li:nth-child(12) .person, .page12 ul li:nth-child(12) .person {
    color: #f95f3d; }

  .page14 {
    background: url("../assets/img/bg.png") no-repeat;
    background-size: 100% 100%; }
  .page14 #container16 {
    width: 10.8rem;
    height: 10rem; }

  .page15 ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1.28rem; }
  .page15 ul li {
    width: 3.9rem;
    padding-top: 0.7rem; }
  .page15 ul li .storyImg {
    width: 3.9rem;
    border-radius: 0.1rem; }
  .page15 ul li p {
    position: relative;
    padding-top: 0.15rem;
    line-height: 0.85rem;
    color: #292d90;
    font-size: 0.32rem; }
  .page15 ul li p img {
    height: 0.04rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -0.34rem; }
  .page15 ul li .person {
    padding-top: 0.2rem;
    font-size: 0.28rem;
    color: #7a7a7a; }

  .page16 {
    background: #e8e8e8; }
  .page16 .qr ul {
    display: flex;
    justify-content: space-between;
    padding: 3.7rem 2.14rem 0; }
  .page16 .qr ul li {
    width: 2.9rem; }
  .page16 .qr ul li img {
    width: 2.9rem; }
  .page16 .qr ul li p {
    margin: 0.2rem auto; }
  .page16 .qr ul li p img {
    height: 0.59rem; }
  .page16 .thank {
    padding-top: 0.7rem;
    wodth: 5.74rem;
    border-bottom: 1px solid #cfcfcf; }
  .page16 .thank p:first-child {
    font-size: 0.8rem;
    color: #4e4e4e; }
  .page16 .thank p:last-child {
    line-height: 0.9rem;
    font-size: 0.2rem;
    color: #696969; }
  .page16 .hint {
    padding-top: 0.4rem;
    color: #717171;
    font-size: 0.32rem; }

  .box {
    background: url("../assets/img/bg.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; }

  .box:last-child {
    background: #e8e8e8; }

  .tit {
    display: flex;
    margin: 1.75rem 0.57rem 0;
    height: 1.35rem;
    background: url("../assets/img/border.png") repeat-x left bottom;
    background-size: 100% 0.06rem; }
  .tit .tit_1 {
    color: #989898;
    font-size: 0.5rem;
    height: 1.32rem;
    line-height: 1.32rem;
    margin-bottom: 0.03rem;
    left: 0;
    top: 0.03rem;
    background: url("../assets/img/tit.png") repeat-x left bottom;
    background-size: 100% 1.32rem; }
  .tit .tit_2 {
    text-align: left;
    flex: 1;
    height: 1.32rem;
    line-height: 1.32rem;
    padding-left: 0.28rem;
    color: #292d90;
    font-size: 0.44rem; }

</style>
