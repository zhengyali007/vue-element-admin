<template>
<div id="bodyContainer">
  <el-row :gutter="20">
    <el-col :span="6">
      <!-- v-dragging="{ item: smallBoxs[0], list: smallBoxs, group: 'smallBox' }" :key="1" -->
      <div id="smallBox1" class="colBox1 grid-content bg-purple" >
        <div class="title">
          <span>柱状图</span>
        </div>
        <div class="smallContainer" >
         <bar-chart width="90%" height="100%" style="margin: auto;"></bar-chart>
       </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div id="smallBox2" class="colBox1 grid-content bg-purple">
      </div>
    </el-col>
    <el-col :span="6"><div id="smallBox3" class="colBox1 grid-content bg-purple" ></div></el-col>
    <el-col :span="6"><div id="smallBox4" class="colBox1 grid-content bg-purple" ></div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">
      <div id="middleBox1" class="colBox2 grid-content bg-purple" >
        <div class="title">
          <span>饼状图</span>
        </div>
        <div class="middleContainer" >
          <pie-chart width="90%" height="100%" style="margin: auto;"></pie-chart>
        </div>
      </div>
    </el-col>
    <el-col :span="12"><div id="largeBox" class="colBox3 grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div id="middleBox2" class="colBox3 grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div id="middleBox3" class="colBox3 grid-content bg-purple"></div></el-col>
    <el-col :span="18">
      <div id="maxBox" class="colBox2 grid-content bg-purple">
        <div class="title">
          <span>动态柱状图</span>
        </div>
        <div class="maxContainer">
          <chart :type="'bar'" :data="waveData" :options="options"></chart>
        </div>
      </div>
    </el-col>
  </el-row>
</div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import BarChart from './components/BarChart'
  import PieChart from './components/PieChart'
  import Chart from 'vue-bulma-chartjs'
  import getCpu from '@/api/customerView/index'
  export default {
    name: 'customerView',
    components: {
      BarChart,
      PieChart,
      Chart
    },
    data() {
      return {
        // 动态柱状图数据
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling'],
        data: [65, 59, 90, 81, 56, 55, 40],
        options: {
          segmentShowStroke: false
        },
        backgroundColor: [
          '#1fc8db',
          '#fce473',
          '#42afe3',
          '#ed6c63',
          '#97cd76'
        ],
        labels_2: ['April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November'],
        data_2: [1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => (Math.sin(e) * 25) + 25),
        labels_3: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November'],
        data_3: [
          [65, 59, 90, 81, 56, 55, 40],
          [28, 48, 40, 19, 88, 27, 45]
        ],
        options_3: {
          tooltips: {
            mode: 'label'
          }
        },
        backgroundColor_3: [
          'rgba(31, 200, 219, 1)',
          'rgba(151, 205, 118, 1)'
        ],
        series: ['Product A', 'Product B']
        // smallBoxs: [{
        //   text: '第一个smallBox'
        // }, {
        //   text: '第二个smallBox'
        // }, {
        //   text: '第三个smallBox'
        // }, {
        //   text: '第四个smallBox'
        // }],
        // middleBoxs: [{
        //   text: '第一个middleBox'
        // }, {
        //   text: '第二个middleBox'
        // }, {
        //   text: '第三个middleBox'
        // }]
      }
    },
    computed: {
      // 动态柱状图的数据绑定
      waveData() {
        return {
          labels: this.labels_2,
          datasets: [{
            label: '1',
            data: this.data_2,
            backgroundColor: this.backgroundColor[1]
          }, {
            label: '2',
            data: this.data_2,
            backgroundColor: this.backgroundColor[2]
          }, {
            label: '3',
            data: this.data_2,
            backgroundColor: this.backgroundColor[3]
          }]
        }
      },
      ...mapGetters([
      ])
    },
    created() {
      setInterval(() => {
        // https://vuejs.org/guide/list.html#Mutation-Methods
        this.data_2.unshift(this.data_2.pop())
      }, 2000)
    },
    mounted() {
      getCpu()
        .then(response => {
          console.log(response.data)
          const cpuData = response.data
          console.log(cpuData[0].usedRate)
          for (var i = 0; i < cpuData.length; i++) {
            this.data_2.push(cpuData[i].usedRate)
          }
          console.log(this.data_2)
        })
    //   this.$dragging.$on('dragged', ({ value }) => {
    //     console.log(value.item)
    //     console.log(value.list)
    //     console.log(value.otherData)
    //   })
    //   this.$dragging.$on('dragend', () => {
    //   })
    },
    method: {
      getWaveData() {
        getCpu()
          .then(data => {
            console.log(data)
          })
      }
    }
  }
</script>

<style>
  body{
    /*background-color: #191970;*/
  }
  #bodyContainer{
    height: 98%;
    width: 98%;
    margin: auto;
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
    border:1px solid #bfd1eb;
    background:#f3faff;
    /*background:rgba(238,243,247,0.1);*/
    /*border-radius: 4px;*/
    min-height: 36px;
    /*background-color: */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .colBox1{
    margin-top: 20px;
    height: 250px;
  }
  .colBox2{
    /*margin-top: 10px;*/
    height: 500px;
  }
  .colBox3{
    /*margin-top: 10px;*/
    height: 500px;
  }

  .title{
    width: 100%;
    height: 30px;
    margin-left: 20px;
    margin-top: 10px;
  }

  .smallContainer{
    width: 98%;
    height: 200px;
    margin: auto;
  }

  .middleContainer{
    width: 98%;
    height: 450px;
    margin: auto;
  }

  .maxContainer{
    width: 98%;
    height: 450px;
    margin: auto;
  }

  canvas.chartjs {
    max-width: 80%;
    max-height: 100%;
  }
</style>
