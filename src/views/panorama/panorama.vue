<template>
  <div id="view-container">
    <div id="panorama">
      <div class="view-title">
        <div class="secondary-title">质控态势</div>
        <div class="primary-title">全景视图</div>
        <div class="secondary-title">态势感知</div>
      </div>
      <div class="data-view">
        <div class="data-title">数据</div>
      </div>
      <div class="Infrastructure-view">

      </div>
      <div class="safe-view">

      </div>
      <div class="law-firm">

      </div>
      <div class="application-view">

      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'panorama',
    components: {},
    data() {
      return {}
    },
  }
</script>

<style>

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
  }

  #panorama {
    height: 100%;
  }

  @media screen and (min-width: 1600px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1400px) {
    html {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 1300px) {
    html {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 1100px) {
    html {
      font-size: 6px;
    }
  }

  @media screen and (max-width: 800px) {
    html {
      font-size: 4px;
    }
  }

  .view-title {
    position: relative;
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
    width: 38%;
    font-size: 2.5rem;
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
    height: 80%;
    top:2%;
    left:3%;
    background: url("../../assets/moka/aqsj-bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .data-title {
    position: relative;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    top:3%;
    left: 60%;
  }

  .Infrastructure-view {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 50%;
    height: 50%;
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
    height: 52%;
    top:2%;
    left:7%;
    background: url("../../assets/moka/aq.png") no-repeat;
    background-size: 100% 100%;
  }

  .law-firm {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 20%;
    height: 28%;
    top:3%;
    left:5%;
    background: url("../../assets/moka/aq.png") no-repeat;
    background-size: 100% 100%;
  }

  .application-view {
    display: inline-block;
    z-index: 1;
    position: relative;
    float: left;
    width: 52%;
    height: 28%;
    top:3%;
    left:5%;
    background: url("../../assets/moka/yy.png") no-repeat;
    background-size: 100% 100%;
  }


</style>
