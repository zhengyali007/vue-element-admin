<template>
  <div id="view-container">
    <div class="view-title">
      <div class="secondary-title">质控态势</div>
      <div class="primary-title">全景视图</div>
      <div class="secondary-title">态势感知</div>
    </div>
    <div id="panorama">
      <div class="data-view">
        <div class="main-title">数据</div>
        <div class="data-status">
          <div class="common-title">
            <img src="../../assets/moka/title.png"/>
            <label>安全设备状态</label>
          </div>
          <div class="data_status_view">
            <equip-status></equip-status>
          </div>
        </div>
        <div class="safe-event">
          <div class="common-title">
            <img src="../../assets/moka/title.png"/>
            <label>安全事件</label>
          </div>
          <div class="safe-event-view">
            <safe-event></safe-event>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="Infrastructure-view">
          <div class="main-title">基础设施</div>
          <div class="Infrastructure-select">
            <div class="selected">主机</div>
            <div class="un-select">存储</div>
            <div class="un-select">网络</div>
            <div class="un-select">其他</div>
            <div class="un-select">四级网络</div>
          </div>
          <div class="Infrastructure-show">
            <div class="device-num">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>设备总数及纳入监控数</label>
              </div>
              <equip-num></equip-num>
            </div>
            <div class="warn-num">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>告警数</label>
              </div>
              <div class="warn-num-view">
                <warn-num></warn-num>
              </div>
            </div>
            <div class="use-ratio first-ratio">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>磁盘利用率</label>
              </div>
              <div class="use-ratio-view">
                <use-rate></use-rate>
              </div>
            </div>
            <div class="use-ratio">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>CPU利用率</label>
              </div>
              <div class="use-ratio-view">
                <use-rate></use-rate>
              </div>
            </div>
            <div class="use-ratio">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>内存利用率</label>
              </div>
              <div class="use-ratio-view">
                <use-rate></use-rate>
              </div>
            </div>
          </div>
        </div>
        <div class="safe-view">
          <div class="main-title safe-title">安全</div>
          <div class="safe-main-container">
            <div class="data-capacity safe-container">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>数据容量</label>
              </div>
              <div class="data-capacity-view">
                <data-capa></data-capa>
              </div>
            </div>
            <div class="backup-rate safe-container">
              <div class="common-title">
                <img src="../../assets/moka/title.png"/>
                <label>备份率</label>
              </div>
              <div class="backup-rate-view">
                <equip-status></equip-status>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div class="bottom-container">
       <div class="law-firm">
         <div class="big-title">法务系统驾驶舱</div>
         <div class="l-spec">100%</div>
       </div>
       <div class="application-view">
         <div class="app-title">应用</div>
         <div class="common-title app-common-title">
           <img src="../../assets/moka/title.png"/>
           <label>应用</label>
         </div>
         <div class="application-main-view">
           <app-num></app-num>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import   SafeEvent  from './components/SafeEvent'
  import   EquipNum  from './components/EquipNum'
  import   AppNum  from './components/AppNum'
  import   WarnNum  from './components/WarnNum'
  import   EquipStatus  from './components/EquipStatus'
  import   UseRate  from './components/UseRate'
  import   DataCapa  from './components/DataCapa'

  export default {
    name: 'panorama',
    components: {
      SafeEvent,
      EquipNum,
      AppNum,
      EquipStatus,
      WarnNum,
      UseRate,
      DataCapa
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>

  #view-container {
    padding: 0px;
    margin: 0px;
    top: 0px;
    left: 0px;
    border: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("../../assets/moka/bg.png") no-repeat center fixed;
    background-size: 100% 100%;
    font-family:"Microsoft YaHei";
    overflow: hidden;
  }

  #panorama {
    height: 90%;
    position: relative;
    top: 10%;
  }

  .right-container {
    position: relative;
    height: 60%;
  }

  .bottom-container {
    position: relative;
    height: 35%;
    margin-top: 10px;
  }

  .common-title {
    position: relative;
    top: 14px;
    left: 14px;
    width: 140px;
    height: 60px;
    text-align: left;
    color: #fff;
  }

  .common-title img {
    position: absolute;
    width: 100%;
    height: 50%;
  }

  .common-title label {
    position: absolute;
    top: 40%;
    left: 8%;
    font-size: 1rem;
  }

  .view-title {
    position: fixed;
    width: 24%;
    height: 8%;
    margin: 2% 38%;
    /*background-color: #fff;*/
    text-align: center;
  }

  .view-title div {
    padding: 0;
    display: inline-block;
    position: relative;
    height: 100%;
    color: #fff;
  }

  .primary-title {
    width: 34%;
    font-size: 1.8rem;
    font-weight: 900;
  }

  .secondary-title {
    width: 30%;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .data-view {
    display: inline-block;
    float: left;
    z-index: 1;
    position: relative;
    width: 20%;
    height: 95%;
    top:2%;
    left:3%;
    background: url("../../assets/moka/aqsj-bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .main-title {
    position: relative;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    width: 40%;
    margin: auto;
    top:3%;
    letter-spacing:16px;
    text-align: center;
  }

  .Infrastructure-select {
    position: relative;
    width: 90%;
    height: 10%;
    margin: auto;
    top: 8%;
    text-align: center;
  }

  .Infrastructure-select div {
    display: inline-block;
    position: relative;
    background-size: 100% 100%;
    height: 100%;
    line-height: 100%;
    vertical-align: middle;
    padding-top: 2%;
    font-size: 1.2rem;
    width: 19%;
    color: #fff;
  }

  .selected {
    background: url("../../assets/moka/selected.png") no-repeat;
  }

  .un-select {
    background: url("../../assets/moka/unselect.png") no-repeat;
  }

  .Infrastructure-show {
    position: relative;
    width: 90%;
    margin: auto;
    height: 70%;
    top: 10%;
    /*background-color: #fff;*/
  }

  .device-num {
    display: inline-block;
    float: left;
    position: relative;
    /*background-color: #2276d2;*/
    width: 60%;
    height: 60%;
  }

  .warn-num {
    display: inline-block;
    float: left;
    /*background-color: #22dfd2;*/
    position: relative;
    width: 40%;
    height: 60%;
  }

  .warn-num-view {
    position: relative;
    width: 100%;
    height: 70%;
    /*background-color: #fff;*/
  }

  .use-ratio {
    display: inline-block;
    /*background-color: #227656;*/
    position: relative;
    width: 32%;
    height: 40%;
    margin: 0 2px;
  }

  .use-ratio-view {
    position: relative;
    /*background-color: #fff;*/
    width: 70%;
    height: 70%;
    left: 35%;
    top: -10%;
  }

  .first-ratio {
    margin-left: 1%;
  }


  .data-status {
    position: relative;
    top: 8%;
    width: 88%;
    height: 28%;
    margin: auto;
    background: url("../../assets/moka/aqsbzt-bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .data_status_view {
    position: relative;
    width: 96%;
    height: 70%;
    margin: auto;
    /*background-color: #fff;*/
  }

  .safe-event {
    position: relative;
    top:10%;
    width: 88%;
    height: 52%;
    margin: auto;
    /*background-color: #fff;*/
  }

  .safe-event-view {
    z-index: 100;
    position: relative;
    /*background-color: #fff;*/
    width: 90%;
    margin: auto;
    height: 80%;
    top:5%;
  }

  .Infrastructure-view {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
    top:2%;
    left:5%;
    background: url("../../assets/moka/jcss-bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .safe-view {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 20%;
    height: 100%;
    top:2%;
    left:7%;
    background: url("../../assets/moka/aq.png") no-repeat;
    background-size: 100% 100%;
  }

  .safe-title {
    right: -30%;
    font-size: 1.3rem;
    top: 4%;
  }

  .safe-main-container {
    position: relative;
    width: 90%;
    height: 80%;
    top: 6%;
    margin: auto;
    /*background-color: #fff;*/
  }

  .safe-container {
    position: relative;
    height: 49%;
    width: 100%;
    margin-top: 1%;
  }

  .data-capacity{
      /*background-color: #2276d2;*/
  }

  .data-capacity-view {
    position: relative;
    width: 100%;
    height: 75%;
    /*background-color: #fff;*/
  }

  .backup-rate {
    /*background-color: #f0dacf;*/
  }

  .backup-rate-view {
    position: relative;
    /*background-color: #fff;*/
    width: 100%;
    height: 70%;
    margin: auto;
  }

  .law-firm {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 22%;
    height: 80%;
    top:10%;
    left:3%;
    background: url("../../assets/moka/fwxtjsc.png") no-repeat;
    background-size: 100% 100%;
  }

  .big-title {
    position: relative;
    height: 100%;
    width: 48%;
    left: 12%;
    top: 26%;
    color: #fff;
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
  }

  .l-spec {
    position: absolute;
    color: #fff;
    font-size: 20px;
    bottom: 18%;
    right: 7%;
  }

  .application-view {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 52%;
    height: 100%;
    top:3%;
    left:3%;
    background: url("../../assets/moka/yy.png") no-repeat;
    background-size: 100% 100%;
  }

  .app-title {
    position: relative;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    top: 10%;
    left: 4%;
    letter-spacing:8px;
  }

  .app-common-title {
    position: absolute;
    left: 20%;
    top: 16%;
  }

  .application-main-view {
    /*background-color: #fff;*/
    position: relative;
    width: 62%;
    left: 36%;
    height: 70%;
    top: 5%;
  }

</style>
