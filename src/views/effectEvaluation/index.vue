<template>

  <div id="evalContainer">
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

  /*html body {*/
    /*height: 100%;*/
    /*width: 100%;*/
  /*}*/
  /*#app {*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  html,body,#app,#evalContainer {
    height: 100%;
    color: white;
    background-color: #04243E;
  }

  .effLeft{
    margin-left: 5%;
  }

  .effRight{
    margin-right: 5%;
  }

  .effBox1{
    position: relative;
    /*border:1px solid #bfd1eb;*/
    /*background:#f3faff;*/
    height: 400px;
    /*height: 41%;*/
    margin-top: 6%;
    margin-bottom: 6%;
  }

  .effBox2{
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
    margin-left: 20%;
    border:1px solid #2b92d4;
    background-image:-webkit-gradient(linear,left top,left bottom,from(#6cc3fe),to(#21a1d0));
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
    border:1px solid #e12945;
    background-image:-webkit-gradient(linear,left top,left bottom,from(#f7734e),to(#e12945));
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

</style>
