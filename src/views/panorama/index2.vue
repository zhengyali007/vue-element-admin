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
            <span>应用异常详情</span>
          </div>
          <div style="width: 80%; height: 80%; margin: 20px; padding: 20px;">
            <!--<bar-line :normal-count="normalCount" :exception-count="exceptionCount" width="100%" height="100%"></bar-line>-->
            <el-table :data="tableData" style="width: 80%;margin: auto;padding: 10px;"  max-height="800" stripe>
              <el-table-column
                label="状态码"
                width="180">
                <template slot-scope="scope">
                  <!--<i class="el-icon-info"></i>-->
                  <!--<el-tag type="danger" >{{ scope.row.date }}</el-tag>-->
                  <span>{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="设备名称"
                width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>设备名称: {{ scope.row.name }}</p>
                    <p>url: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">{{ scope.row.name }}
                      <!--<el-tag type="danger">{{ scope.row.name }}</el-tag>-->
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button type="danger" plain icon="el-icon-question" @click="handleEdit(scope.$index, scope.row)"></el-button>
                  <!--<el-button-->
                    <!--size="mini"-->
                    <!--type="danger"-->
                    <!--@click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                </template>
              </el-table-column>
            </el-table>
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
  // 组件
  import BarLine from './components/BarChart2'
  import PieChart from './components/PieChart2'
  import CrossBar from './components/CrossBar2'
  // 接口
  import { getApplication } from '@/api/customView/index'

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
          // background: 'url("/src/assets/customView/background8.jpg") no-repeat center fixed',
          // backgroundSize: 'cover'
        },
        // 传递给子组件的数值
        normalCount: [], // 应用正常数量
        exceptionCount: [], // 应用异常数量
        // test
        tableData: [{
          date: '500',
          name: 'revsjd',
          address: 'www.zzzzzzzzz.com'
        }, {
          date: '404',
          name: 'sdjidhi',
          address: 'www.zzzzzzzzz.com'
        }, {
          date: '501',
          name: 'dshfiuh',
          address: 'www.zzzzzzzzz.com'
        }, {
          date: '405',
          name: 'daskdjhjk',
          address: 'www.zzzzzzzzz.com'
        }]
      }
    },
    computed: {
      ...mapGetters([
      ])
    },
    created() {
    },
    mounted() {
      // 解析接口数据
      // 1.应用信息
      getApplication()
        .then(response => {
          const allData = response.data
          // 服务人民群众应用资源
          const peopleApp = allData.peopleApp
          const exceptionCount1 = peopleApp.exceptionCount
          const normalCount1 = peopleApp.totalCount - exceptionCount1 - peopleApp.degradationCount
          // 服务司法管理应用资源
          const managerApp = allData.managerApp
          const exceptionCount2 = managerApp.exceptionCount
          const normalCount2 = managerApp.totalCount - exceptionCount2 - managerApp.degradationCount
          // 服务审判执行应用资源
          const executionApp = allData.managerApp
          const exceptionCount3 = executionApp.exceptionCount
          const normalCount3 = executionApp.totalCount - exceptionCount3 - executionApp.degradationCount
          // 传递给子组件的数组
          this.normalCount.push(normalCount1, normalCount2, normalCount3)
          this.exceptionCount.push(exceptionCount1, exceptionCount2, exceptionCount2)
          // 异常应用的服务器信息
          // const exception = executionApp.exceptionApplication
          // // console.log(exception)
          // const serverIp = []
          // for (var k in exception) {
          //   // console.log(exception[k])
          //   // console.log(exception[k].serverIp)
          //   serverIp.push(exception[k].serverIp)
          // }
          // console.log(serverIp)
        })
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
    color: #fff;
    background-color: #04243E;
  }
  #bodyContainer2{
    /*background: #191970;*/
    height: 100%;
    width: 100%;
  }

  .grid-content2 {
    /*border:1px solid #bfd1eb;*/

    /*background: linear-gradient(to left, #f00, #f00) left top no-repeat,*/
    /*linear-gradient(to bottom, #f00, #f00) left top no-repeat,*/
    /*linear-gradient(to left, #f00, #f00) right top no-repeat,*/
    /*linear-gradient(to bottom, #f00, #f00) right top no-repeat,*/
    /*linear-gradient(to left, #f00, #f00) left bottom no-repeat,*/
    /*linear-gradient(to bottom, #f00, #f00) left bottom no-repeat,*/
    /*linear-gradient(to left, #f00, #f00) right bottom no-repeat,*/
    /*linear-gradient(to left, #f00, #f00) right bottom no-repeat;*/
    /*background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;*/

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
