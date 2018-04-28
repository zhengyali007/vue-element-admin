<template>
  <div id="evalContainer">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <el-row :gutter="20">
      <el-col :span="6" >
        <div  class="effBox1 effLeft">
          <div class="effTitle">
            <span>应用效能访问量</span>
          </div>
          <div class="effContainer1">
            <cross-bar height="100%" width="100%"></cross-bar>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div  class="effBox1">
          <div class="effTitle">
            <span>基础设施状态</span>
          </div>
          <div class="effContainer1">
            <pie-chart height="100%" width="100%"></pie-chart>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="effBox1">
          <div class="effTitle">
            <span>核心应用状态</span>
          </div>
          <div class="effContainer1">
            <pie-chart height="100%" width="100%"></pie-chart>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="effBox1 effRight">
          <div class="effTitle">
            <span>主机应用状态</span>
          </div>
          <div class="effContainer1">
            <pie-chart height="100%" width="100%"></pie-chart>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div  class="effBox2 effLeft">
          <div class="effTitle">
            <span>数据库使用率概览</span>
          </div>
          <div class="effContainer1">
            <rotate-bar height="100%" width="100%"></rotate-bar>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div  class="effBox2">
          <div class="effTitle">
            <span>是否告警</span>
          </div>
          <div class="effContainer1">
            <div class="breathe breathe1"><div class="breatheTitle">中国裁判文书网</div></div>
            <div class="breathe breathe2"><div class="breatheTitle">最高人民法院机关办公平台</div></div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="effBox2 effRight">
          <div class="effTitle">
            <span>核心应用响应时长</span>
          </div>
          <div class="effContainer1">
            <bar-chart height="100%" width="100%"></bar-chart>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  // 组件
  import GuageChart from './components/GuageChart'
  import CrossBar from './components/BarChart'
  import BarChart from './components/BarChart2'
  import RotateBar from './components/BarChart3'
  import PieChart from './components/PieChart'

  export default {
    name: 'effectEvaluation',
    components: {
      CrossBar,
      GuageChart,
      BarChart,
      PieChart,
      RotateBar
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
      ])
    }
  }
</script>

<style>
  * { margin: 0; padding: 0; border: 0; }
  html,body,#app,#evalContainer {
    height: 100%;
    color: white;
    background-color: #000;
    /*background-color: #04243E;*/
  }

  .effLeft{
    margin-left: 5%;
  }

  .effRight{
    margin-right: 5%;
  }

  .effBox1{
    z-index: 2;
    position: relative;
    /*border:1px solid #bfd1eb;*/
    /*background:#f3faff;*/
    height: 400px;
    /*height: 41%;*/
    margin-top: 6%;
    margin-bottom: 6%;
  }

  .effBox2{
    z-index: 2;
    position: relative;
    /*border:1px solid #bfd1eb;*/
    /*background:#f3faff;*/
    height: 500px;
    /*height: 41%;*/
    margin-bottom: 6%;
  }

  .effTitle {
    position: relative;
    height: 8%;
    width: 90%;
    position: relative;
    margin-top: 2%;
    margin-left: 10%;
  }

  .effContainer1 {
    height: 90%;
    width: 100%;
  }

  /**********告警：呼吸灯效果********/
  .breatheTitle {
    margin-top: 40%;
    left: 50%;
    width: 100%;
  }

  .breathe {
    float: left;
    position: relative;
    width: 200px;
    height: 200px;
    margin: 40px;
    line-height: 40px;
    border-radius:50%;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    box-shadow: 5px 20px 20px rgba(0, 0, 0, .3);
    overflow: hidden;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
  }

  .breathe1 {
    margin-left: 10%;
    border:1px solid #009eff;
    background-image:-webkit-gradient(linear,left top,left bottom,from(#6cc3fe),to(#009eff));
    -webkit-animation-name:breathe1;
    -webkit-animation-duration:3000ms;
  }
  @-webkit-keyframes breathe1 {
    0% {
      opacity: .2;
      box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      border: 1px solid rgba(59, 235, 235, 1);
      box-shadow: 0 1px 30px rgba(59, 255, 255, 1);
    }
  }

  .breathe2 {
    margin-left: 10%;
    border:1px solid #e12945;
    background-image:-webkit-gradient(linear,left top,left bottom,from(#f7734e),to(#C1232B));
    -webkit-animation-name:breathe2;
    -webkit-animation-duration:1000ms;
  }
  @-webkit-keyframes breathe2 {
    0% {
      opacity: .2;
      box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      border: 1px solid rgba(247,115,78, 1);
      box-shadow: 0 1px 30px rgba(255,165,0, 1);
    }
  }


  /******背景动画效果********/
  @keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }

  .stars, .twinkling {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
  }

  .stars {
    background:#000 url(/src/assets/customView/img/stars.png) repeat top center;
    z-index:0;
  }

  .twinkling{
    background:transparent url(/src/assets/customView/img/twinkling.png) repeat top center;
    z-index:1;
    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
  }




</style>
