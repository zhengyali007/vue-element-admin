<template>
  <div id="bodyContainer" class="backgroundStyle" :style="backgroundStyle">
    <el-row :gutter="20">
      <el-col :span="8">
        <div id="box1" class=" grid-content left" >
          <div class="container"></div>
          <div class="container"></div>
        </div>
      </el-col>
      <el-col :span="16">
        <div id="box2" class="grid-content right" >
          <div class="title">
            <span>应用</span>
          </div>
          <div class="mainContainer">
            <bar-line width="100%" height="100%"></bar-line>
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
  import BarLine from './components/BarChart2'
  import PieChart from './components/PieChart'
  import RaddarChart from './components/RaddarChart'
  import GuageChart from './components/GuageChart'
  import PictorialBar from './components/PictorialBar'
  import Chart from 'vue-bulma-chartjs'
  // import getCpu from '@/api/customView/index'

  export default {
    name: 'customView',
    components: {
      BarChart,
      PieChart,
      Chart,
      RaddarChart,
      GuageChart,
      PictorialBar,
      BarLine
    },
    data() {
      return {
        // 设置背景div的样式
        backgroundStyle: {
          // background: 'url("/src/assets/customView/background5.jpg") no-repeat center fixed',
          // backgroundSize: 'cover'
        }
      }
    },
    computed: {
      ...mapGetters([
      ])
    },
    created() {
    },
    mounted() {
    },
    method: {
    }
  }
</script>

<style>
  html body {
    height: 100%;
    width: 100%;
  }
  /*body {*/
    /*height: 100%;*/
    /*width: 100%;*/
  /*}*/
  #bodyContainer{
    /*background: #191970;*/
    height: 100%;
    width: 100%;
    /*color: white;*/
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

    height: 800px;
    margin-top: 20px;
    /*margin-bottom: 5%;*/
    /*margin-top: 20px;*/
    /*margin-bottom: 20px;*/

  }


  .container{
    height: 44%;
    margin: 10px auto;
  }

  .title{
    font-weight: bold;
    width: 80%;
    height: 30px;
    margin-left: 10px;
    padding: 10px;
    /*margin-top: 15px;*/
  }

  .left{
    margin-left: 20px;
  }

  .right{
    margin-right: 20px;
  }


</style>
