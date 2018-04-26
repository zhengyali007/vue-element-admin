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
            <span>核心应用响应时长</span>
          </div>
          <div class="effContainer1">
            <bar-chart height="100%" width="100%"></bar-chart>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div  class="effBox2 effLeft"></div></el-col>
      <el-col :span="12"><div  class="effBox2"></div></el-col>
      <el-col :span="6"><div class="effBox2 effRight"></div></el-col>
    </el-row>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  // 组件
  import GuageChart from './components/GuageChart'
  import CrossBar from './components/BarChart'
  import BarChart from './components/BarChart2'
  import PieChart from './components/PieChart'

  export default {
    name: 'effectEvaluation',
    components: {
      CrossBar,
      GuageChart,
      BarChart,
      PieChart
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
  }

  .effLeft{
    margin-left: 5%;
  }

  .effRight{
    margin-right: 5%;
  }

  .effBox1{
    position: relative;
    border:1px solid #bfd1eb;
    background:#f3faff;
    /*height: 400px;*/
    height: 41%;
    margin-top: 6%;
    margin-bottom: 6%;
  }

  .effBox2{
    position: relative;
    border:1px solid #bfd1eb;
    background:#f3faff;
    /*height: 500px;*/
    height: 41%;
    margin-bottom: 6%;
  }

  .effTitle {
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

</style>
