<template>

  <div id="quaContainer" style="height: 100%">
    <el-row :gutter="20" >
      <el-col :span="12">
        <div  class="quaBox1 quaLeft">
          <div class="qua1">
            <div class="quaTitle">
              <span>总体监控情况</span>
            </div>
            <div class="boxContainer">
              <pie-chart width="100%" height="100%"></pie-chart>
            </div>
          </div>
          <div class="qua1">
            <div class="quaTitle">
              <span>应用监控情况</span>
            </div>
            <div class="boxContainer">
              <bar-chart width="100%" height="100%"></bar-chart>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div  class="quaBox1 quaRight">
          <div class="quaTitle">
            <span>应用统计概览</span>
          </div>
          <div class="boxContainer">
            <num-bar width="100%" height="100%"></num-bar>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import PieChart from './components/PieChart'
  import NumBar from './components/BarChart1'
  import BarChart from './components/BarChart2'

  export default {
    name: 'qualityControl',
    components: {
      PieChart,
      BarChart,
      NumBar
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

  html,body,#app,#quaContainer {
    height: 100%;
  }

  .quaLeft{
    margin-left: 5%;
  }

  .quaRight{
    margin-right: 5%;
  }

  .quaBox1 {
    border:1px solid #bfd1eb;
    background:#f3faff;
    height: 900px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .qua1 {
    width: 100%;
    height: 45%;
    margin-top: 5%;
  }

  .quaTitle {
    height: 8%;
    width: 90%;
    position: relative;
    margin-top: 2%;
    margin-left: 5%;
  }

  .boxContainer {
    height: 90%;
    width: 95%;
    margin: auto;
  }

</style>
