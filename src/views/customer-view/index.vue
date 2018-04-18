<template>
<div id="bodyContainer" class="backgroundStyle" :style="backgroundStyle">
  <el-row :gutter="20">
    <el-col :span="4">
      <div id="box1" class="colBox0 grid-content bg-purple left" >
        <div class="title"><span></span></div>
        <div class="container0" >
          <liquid-chart width="100%" height="100%" style="margin: auto;"></liquid-chart>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box2" class="colBox0 grid-content bg-purple " >
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box3" class="colBox0 grid-content bg-purple " >
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box4" class="colBox0 grid-content bg-purple " >
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box5" class="colBox0 grid-content bg-purple " >
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box6" class="colBox0 grid-content bg-purple right" >
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">
      <div id="middleBox1" class="colBox2 grid-content bg-purple left" >
        <div class="title">
          <span>图</span>
        </div>
        <div class="container2" >
          <pictorial-bar width="100%" height="100%" style="margin: auto;"></pictorial-bar>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="largeBox" class="colBox2 grid-content bg-purple">
        <div class="title">
          <span>雷达图</span>
        </div>
        <div class="container2" >
          <chart :type="'radar'" :data="waveData3" :options="options"></chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6"><div id="middleBox2" class="colBox2 grid-content bg-purple right"></div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">
      <!-- v-dragging="{ item: smallBoxs[0], list: smallBoxs, group: 'smallBox' }" :key="1" -->
      <div id="smallBox1" class="colBox1 grid-content bg-purple left" >
        <div class="title">
          <span>柱状图</span>
        </div>
        <div class="container1" >
          <bar-chart width="90%" height="90%" style="margin: auto;"></bar-chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox2" class="colBox1 grid-content bg-purple">
        <div class="title">
          <span>存储设备利用率</span>
        </div>
        <div class="container1" >
          <guage-chart width="100%" height="100%" style="margin: auto;"></guage-chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox3" class="colBox1 grid-content bg-purple" >
        <div class="title">
          <span>服务器CPU利用率TOP10</span>
        </div>
        <div class="container1">
          <chart :type="'bar'" :data="waveData" :options="options"></chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox4" class="colBox1 grid-content bg-purple right" >
        <div class="title">
          <span>服务器内存利用率TOP10</span>
        </div>
        <div class="container1">
          <chart :type="'bar'" :data="waveData2" :options="options"></chart>
        </div>
      </div>
    </el-col>
  </el-row>
  <!--<el-row :gutter="20">-->
    <!--<el-col :span="6"><div id="middleBox3" class="colBox3 grid-content bg-purple left"></div></el-col>-->
    <!--<el-col :span="6"><div id="middleBox4" class="colBox3 grid-content bg-purple "></div></el-col>-->
    <!--<el-col :span="6"><div id="middleBox5" class="colBox3 grid-content bg-purple "></div></el-col>-->
    <!--<el-col :span="6"><div id="middleBox6" class="colBox3 grid-content bg-purple right"></div></el-col>-->
  <!--</el-row>-->
</div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import BarChart from './components/BarChart'
  import PieChart from './components/PieChart'
  import RaddarChart from './components/RaddarChart'
  import LiquidChart from './components/LiquidChart'
  import GuageChart from './components/GuageChart'
  import PictorialBar from './components/PictorialBar'
  import Chart from 'vue-bulma-chartjs'
  // import getCpu from '@/api/customerView/index'

  export default {
    name: 'customerView',
    components: {
      BarChart,
      PieChart,
      Chart,
      RaddarChart,
      LiquidChart,
      GuageChart,
      PictorialBar
    },
    data() {
      return {
        // 设置背景div的样式
        backgroundStyle: {
          background: 'url("/src/assets/customView/background5.jpg") no-repeat center fixed',
          backgroundSize: 'cover'
        },
        // 动态柱状图数据
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling'],
        data: [65, 59, 90, 81, 56, 55, 40],
        options: {
          legend: {
            labels: {
              fontColor: '#FFFFFF'
            }
          },
          segmentShowStroke: false
        },
        backgroundColor: [
          '#02105B',
          '#FB3B4E',
          '#1D4D8F',
          '#05F1D6',
          '#FAF43D',
          '#FFFFFF'
        ],
        label_1: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
        label_2: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
        label_3: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
        data_1: [1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => (Math.sin(e) * 25) + 25),
        data_2: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (Math.sin(e) * 25) + 25),
        data_3: [6, 9, 3, 7, 5, 6, 5, 1, 2].map(e => (Math.sin(e) * 25) + 25),
        series: ['Product A', 'Product B']
      }
    },
    computed: {
      // 动态柱状图的数据绑定
      waveData() {
        return {
          labels: this.label_1,
          datasets: [{
            label: 'CPU',
            data: this.data_1,
            backgroundColor: this.backgroundColor[0]
          }]
        }
      },
      waveData2() {
        return {
          labels: this.label_2,
          datasets: [{
            label: '内存',
            data: this.data_2,
            backgroundColor: this.backgroundColor[1]
          }]
        }
      },
      waveData3() {
        return {
          labels: this.label_3,
          datasets: [{
            label: '带宽',
            data: this.data_3,
            backgroundColor: this.backgroundColor[2]
          }]
        }
      },
      ...mapGetters([
      ])
    },
    created() {
      setInterval(() => {
        this.data_1.unshift(this.data_1.pop())
        this.data_2.unshift(this.data_2.pop())
        this.data_3.unshift(this.data_3.pop())
      }, 2000)
    },
    mounted() {
      // getCpu()
      //   .then(response => {
      //     console.log(response.data)
      //     const cpuData = response.data
      //     console.log(cpuData[0].usedRate)
      //     for (var i = 0; i < cpuData.length; i++) {
      //       this.data_2.push(cpuData[i].usedRate)
      //     }
      //     console.log(this.data_2)
      //   })
    },
    method: {
    }
  }
</script>

<style>
  #bodyContainer{
    background: #000033;
    height: 100%;
    width: 100%;
    margin: auto;
    color: white;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    /*background-color: rgba(248,248,255,0.3)*/
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /*border:1px solid #bfd1eb;*/
    /*background:#f3faff;*/
    background:rgba(255,255,255,0.1);
    /*border-radius: 4px;*/
    min-height: 36px;
    /*background-color: */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .colBox0{
    margin-top: 20px;
    height: 150px;
  }

  .colBox1{
    /*margin-top: 20px;*/
    height: 250px;
  }
  .colBox2{
    /*margin-top: 10px;*/
    height: 600px;
  }
  .colBox3{
    /*margin-top: 10px;*/
    height: 500px;
  }

  .title{
    font-weight: bold;
    width: 80%;
    height: 30px;
    margin-left: 10px;
    padding: 10px;
    /*margin-top: 15px;*/
  }

  .container1{
    width: 98%;
    height: 200px;
    margin: auto;
  }

  .container2{
    width: 98%;
    height: 550px;
    margin: auto;
  }

  .maxContainer{
    width: 98%;
    height: 450px;
    margin: auto;
  }

  .left{
    margin-left: 20px;
  }

  .right{
    margin-right: 20px;
  }

  canvas.chartjs {
    max-width: 80%;
    max-height: 100%;
  }

  .container1{
    width: 98%;
    height: 98%;
  }
</style>
