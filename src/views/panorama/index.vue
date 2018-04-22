<template>
<div id="bodyContainer" class="backgroundStyle" :style="backgroundStyle">
  <el-row :gutter="20">
    <el-col :span="4">
      <div id="box1" class="colBox0 grid-content bg-purple left" >
        <div class="title">
          <span>主机设备数量总览</span>
        </div>
        <div class="container0" >
          <cross-bar :device-count="deviceCount" width="100%" height="100%" style="margin: auto;"></cross-bar>npm
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box2" class="colBox0 grid-content bg-purple" >
        <div class="title">
          <span>存储设备数量总览</span>
        </div>
        <div class="container0" >
          <cross-bar width="100%" height="100%" style="margin: auto;"></cross-bar>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div id="box3"  class="colBox0 grid-content bg-purple" >
        <div class="title">
          <span>网络设备数量总览</span>
        </div>
        <div class="container0" >
          <cross-bar width="100%" height="100%" style="margin: auto;"></cross-bar>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="box4" class="colBox0 grid-content bg-purple" >
        <div class="title">
          <span>折线图</span>
        </div>
        <div class="container0" >
          <!--<number-bar width="100%" height="100%" style="margin: auto;"></number-bar>-->
        </div>
      </div>
    </el-col>
    <!--<el-col :span="4">-->
      <!--<div id="box5" class="colBox0 grid-content bg-purple container0" >-->
        <!--&lt;!&ndash;<div class="resourceNumber">556</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="warning">1</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="resourceName">存储设备</div>&ndash;&gt;-->
      <!--</div>-->
    <!--</el-col>-->
    <!--<el-col :span="4">-->
      <!--<div id="box6" class="colBox0 grid-content bg-purple container0 right" >-->
        <!--&lt;!&ndash;<div class="resourceNumber">99</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="warning">12</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="resourceName">网络设备</div>&ndash;&gt;-->
      <!--</div>-->
    <!--</el-col>-->
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">
      <div id="middleBox1" class="colBox2 grid-content bg-purple left" >
        <div class="title">
          <span>存储增量图</span>
        </div>
        <div class="container2" >
          <pictorial-bar width="100%" height="100%" style="margin: auto;"></pictorial-bar>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="box7" class="colBox2 grid-content bg-purple">
        <div class="title">
          <span>设备警告数</span>
        </div>
        <div class="mainContainer">
          <div class="radar"> </div>
          <!--<raddar-chart width="100%" height="100%" style="margin: auto" class="radar"/>-->
        <!--</div>-->
        <!--<div class="mainContainer2 radar">-->
          <!--<raddar-chart  width="100%" height="100%" style="margin: auto"></raddar-chart>-->
        <!--</div>-->
        <!--<div class="mainContainer3 radar">-->
          <!--<raddar-chart  width="100%" height="100%" style="margin: auto"></raddar-chart>-->
        <!--</div>-->

        <!--<div class="container2" id="radar1">-->
          <!--<raddar-chart  width="100%" height="100%" style="margin: auto"></raddar-chart>-->
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="middleBox2" class="colBox2 grid-content bg-purple right">
        <div class="title">
          <span>网络设备总览</span>
        </div>
        <div class="containerTie" >
          <pie-chart width="90%" height="90%" style="margin: auto;"></pie-chart>
        </div>
        <div class="title">
          <span>服务器总览</span>
        </div>
        <div class="containerTie" >
          <pie-chart width="90%" height="90%" style="margin: auto;"></pie-chart>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">
      <!-- v-dragging="{ item: smallBoxs[0], list: smallBoxs, group: 'smallBox' }" :key="1" -->
      <div id="smallBox1" class="colBox1 grid-content bg-purple left" >
        <div class="title">
          <span>主机设备CPU利用率Top10</span>
        </div>
        <div class="container1" >
          <chart :type="'bar'" :data="waveData3" :options="options" style="width: 100%; height: 100%"></chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox2" class="colBox1 grid-content bg-purple">
        <div class="title">
          <span>主机设备内存利用率Top10</span>
        </div>
        <div class="container1" >
          <chart :type="'bar'" :data="waveData4" :options="options" style="width: 100%; height: 100%"></chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox3" class="colBox1 grid-content bg-purple" >
        <div class="title">
          <span>网络设备CPU利用率Top10</span>
        </div>
        <div class="container1 chartContainer">
          <chart :type="'bar'" :data="waveData" :options="options" style="width: 100%; height: 100%"></chart>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox4" class="colBox1 grid-content bg-purple right" >
        <div class="title">
          <span>网络设备内存利用率Top10</span>
        </div>
        <div class="container1">
          <chart :type="'bar'" :data="waveData2" :options="options" style="width: 100%; height: 100%"></chart>
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
  import CrossBar from './components/CrossBar'
  import PieChart from './components/PieChart'
  import BreakPie from './components/PieChart2'
  import LineChart from './components/LineChart'
  import GuageChart from './components/GuageChart'
  import PictorialBar from './components/PictorialBar'
  import Chart from 'vue-bulma-chartjs'
  import getHostPanorama from '@/api/customView/index'
  import RaddarChart from './components/RaddarChart'

  export default {
    name: 'customView',
    components: {
      RaddarChart,
      BarChart,
      PieChart,
      BreakPie,
      Chart,
      LineChart,
      GuageChart,
      PictorialBar,
      CrossBar
    },
    data() {
      return {
        // 设置背景div的样式
        backgroundStyle: {
          background: 'url("/src/assets/customView/background8.jpg") no-repeat center fixed ',
          backgroundSize: 'cover'
        },
        jsonData: [], //  取出的json数据
        deviceCount: [], // 设备总量和被监控数
        // waringCount: undefined, // 警告数
        // monitorCount: undefined, // 已监控数量
        // cpuUsedRates: [], // CPU使用率TOP10
        // memoryUsedRates: [], // 内存使用率TOP10
        // disks: [], // 存储设备使用率TOP10
        // 动态柱状图数据
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
        // label_1: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
        label_1: ['', '', '', '', '', '', '', ''],
        data_1: [1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => (Math.sin(e) * 25) + 25),
        data_2: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (Math.sin(e) * 25) + 25),
        data_3: [],
        data_4: [],
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
          labels: this.label_1,
          datasets: [{
            label: '内存',
            data: this.data_2,
            backgroundColor: this.backgroundColor[1]
          }]
        }
      },
      waveData3() {
        return {
          labels: this.label_1,
          datasets: [{
            label: '带宽',
            data: this.data_3,
            backgroundColor: this.backgroundColor[2]
          }]
        }
      },
      waveData4() {
        return {
          labels: this.label_1,
          datasets: [{
            label: '带宽',
            data: this.data_4,
            backgroundColor: this.backgroundColor[3]
          }]
        }
      },
      ...mapGetters([
      ])
    },
    created() {
    },
    mounted() {
      getHostPanorama()
        .then(response => {
          const allData = response.data
          for (var k in allData) {
            this.jsonData.push(allData[k])
          }
          const totalCount = this.jsonData[0]
          // this.waringCount = this.jsonData[1]
          const monitered = this.jsonData[2]
          const cpu = this.jsonData[3]
          // const memory = this.jsonData[4]
          // const disk = this.jsonData[5]
          // console.log(cpu)
          this.deviceCount.push(monitered)
          this.deviceCount.push(totalCount)
          // console.log(this.deviceCount)
          for (var index in cpu) {
            this.data_3.push(cpu[index].usedRate)
          }
        })
      setInterval(() => {
        this.data_1.unshift(this.data_1.pop())
        this.data_2.unshift(this.data_2.pop())
        this.data_3.unshift(this.data_3.pop())
        this.data_4.unshift(this.data_4.pop())
      }, 2000)
    },
    method: {
    }
  }
</script>

<style>
  #bodyContainer{
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
    background: linear-gradient(to left, #f00, #f00) left top no-repeat,
    linear-gradient(to bottom, #f00, #f00) left top no-repeat,
    linear-gradient(to left, #f00, #f00) right top no-repeat,
    linear-gradient(to bottom, #f00, #f00) right top no-repeat,
    linear-gradient(to left, #f00, #f00) left bottom no-repeat,
    linear-gradient(to bottom, #f00, #f00) left bottom no-repeat,
    linear-gradient(to left, #f00, #f00) right bottom no-repeat,
    linear-gradient(to left, #f00, #f00) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
    /*background:#f3faff;*/
    /*background:rgba(255,255,255,0.1);*/
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
    height: 250px;
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

  .container0 {
    width: 90%;
    height: 80%;
    margin: auto;
    /*position: relative*/
  }

  #box7 {
    position: relative;
  }

  .container1{
    width: 98%;
    height: 98%;
    margin: auto;
  }


  .mainContainer1 {
    float: left;
    left: 0.5%;
    width: 30%;
    height: 30%;
  }

  .mainContainer2 {
    float: left;
    left: 35%;
    width: 30%;
    height: 30%;
  }
  .mainContainer3 {
    float: left;
    left: 70%;
    width: 30%;
    height: 30%;
  }


  .containerTie{
    width: 98%;
    height: 44%;
    margin: 5px auto
  }
  .container2{
    width: 98%;
    height: 550px;
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


  .resourceNumber{
    width: 100%;
    height: 60%;
    /*margin: auto;*/
    line-height: 200%;
    font-size: 250%;
    font-weight:bold;
    padding: 5px;
    background:transparent;
    color: #1D4D8F;
    text-align: center;
    /*position: relative;*/
    /*text-shadow: #aaaaaa;*/
  }

  #box6{
    position: relative;
  }


  .mainContainer {
    left: 10%;
    top: 10%;
    background-image: linear-gradient(0deg, transparent 24%, rgba(32, 255, 77, 0.15) 25%, rgba(32, 255, 77, 0.15) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, 0.15) 75%, rgba(32, 255, 77, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(32, 255, 77, 0.15) 25%, rgba(32, 255, 77, 0.15) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, 0.15) 75%, rgba(32, 255, 77, 0.15) 76%, transparent 77%, transparent);
    background-size: 5rem 5rem;
    background-position: -5.2rem -5.2rem;
    width: 80%;
    height: 80%;
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
  }

  .radar {
    /*background: -webkit-radial-gradient(center, rgba(32, 255, 77, 0.3) 0%, rgba(32, 255, 77, 0) 75%)  -webkit-repeating-radial-gradient(rgba(32, 255, 77, 0) 5.8%, rgba(32, 255, 77, 0) 18%, #20ff4d 18.6%, rgba(32, 255, 77, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, #20ff4d 50%, #20ff4d 50%, rgba(32, 255, 77, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, #20ff4d 50%, #20ff4d 50%, rgba(32, 255, 77, 0) 50.2%);*/
    /*background: radial-gradient(center, rgba(32, 255, 77, 0.3) 0%, rgba(32, 255, 77, 0) 75%), repeating-radial-gradient(rgba(32, 255, 77, 0) 5.8%, rgba(32, 255, 77, 0) 18%, #20ff4d 18.6%, rgba(32, 255, 77, 0) 18.9%), linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, #20ff4d 50%, #20ff4d 50%, rgba(32, 255, 77, 0) 50.2%), linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, #20ff4d 50%, #20ff4d 50%, rgba(32, 255, 77, 0) 50.2%);*/
    /*width: 75vw;*/
    /*height: 75vw; */
    width: 75%;
    height: 75%;
    max-height: 75%;
    max-width: 75%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.2rem solid #20ff4d;
    overflow: hidden;
  }
  .radar:before {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: blips 5s infinite;
    animation-timing-function: linear;
    animation-delay: 1.4s;
  }
  .radar:after {
    content: ' ';
    display: block;
    background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #00ff33 100%);
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    animation: radar-beam 5s infinite;
    animation-timing-function: linear;
    transform-origin: bottom right;
    border-radius: 100% 0 0 0;
  }

  @keyframes radar-beam {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes blips {
    14% {
      background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    }
    14.0002% {
      background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    }
    25% {
      background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    }
    26% {
      background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
      opacity: 1;
    }
    100% {
      background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
      opacity: 0;
    }
  }



  /*.radar :after {*/
    /*content: ' ';*/
    /*display: block;*/
    /*background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #00ff33 100%);*/
    /*!*width: 180px;*!*/
    /*!*height: 180px;*!*/
    /*position: absolute;*/
    /*!*top: 20%;*!*/
    /*!*left: 25%;*!*/
    /*animation: radar-beam 5s infinite;*/
    /*animation-timing-function: linear;*/
    /*transform-origin: bottom right;*/
    /*border-radius: 100% 0 0 0;*/
  /*}*/
  /*@keyframes radar-beam {*/
    /*0% {*/
      /*transform: rotate(0deg);*/
    /*}*/
    /*100% {*/
      /*transform: rotate(360deg);*/
    /*}*/
  /*}*/


</style>
