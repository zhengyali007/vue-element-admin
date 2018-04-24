<template>
  <div id="bodyContainer2" class="backgroundStyle" :style="backgroundStyle">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class=" grid-content2 left" >
          <div class="s_container1">
            <div class="title">
              <span>安全设备环比</span>
            </div>
            <div class="s_mainContainer">
              <pie-chart  width="90%" height="90%"></pie-chart>
            </div>
          </div>
          <div class="s_container2">
            <div class="title">
              <span>安全设备状态</span>
            </div>
            <div class="s_mainContainer">
              <cross-bar width="90%" height="90%"></cross-bar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content2 right" >
          <div class="title">
            <span>应用</span>
          </div>
          <div class="s_mainContainer">
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
  // import BarChart from './components/BarChart'
  import BarLine from './components/BarChart2'
  import PieChart from './components/PieChart2'
  import CrossBar from './components/CrossBar2'
  // import RaddarChart from './components/RaddarChart'
  // import GuageChart from './components/GuageChart'
  // import PictorialBar from './components/PictorialBar'
  // import Chart from 'vue-bulma-chartjs'
  // import getCpu from '@/api/customView/index'

  export default {
    name: 'customView',
    components: {
      // BarChart,
      PieChart,
      CrossBar,
      // Chart,
      // RaddarChart,
      // GuageChart,
      // PictorialBar,
      BarLine
    },
    data() {
      return {
        // 设置背景div的样式
        backgroundStyle: {
          background: 'url("/src/assets/customView/background8.jpg") no-repeat center fixed',
          backgroundSize: 'cover'
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
  /*html body {*/
    /*height: 100%;*/
    /*width: 100%;*/
  /*}*/
  body {
    height: 100%;
    width: 100%;
  }
  #bodyContainer2{
    /*background: #191970;*/
    height: 100%;
    width: 100%;
    color: #fff;
  }

  .grid-content2 {
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
    margin-bottom: 20px;
    /*margin-bottom: 5%;*/
    /*margin-top: 20px;*/
    /*margin-bottom: 20px;*/

  }


  .s_container1{
     height: 60%;
     margin: auto;
   }

  .s_container2{
    height: 40%;
    margin: auto;
  }

  /*.container1 {*/
    /*height: 95%;*/
    /*width: 98%;*/
    /*margin: auto;*/
  /*}*/

  .s_mainContainer {
    height: 95%;
    width: 98%;
    margin: auto;
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
