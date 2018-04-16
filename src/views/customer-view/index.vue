<template>
<div id="bodyContainer">
  <!--<div id="middleBox1" class="middleBox"></div>-->
  <!--<div id="middleBox2" class="middleBox"></div>-->
  <!--<div id="middleBox3" class="middleBox"></div>-->
  <!--<div id="smallBox1" class="smallBox"></div>-->
  <!--<div id="smallBox2" class="smallBox"></div>-->
  <!--<div id="smallBox3" class="smallBox"></div>-->
  <!--<div id="smallBox4" class="smallBox"></div>-->
  <!--<div id="largeBox" class="largeBox"></div>-->
  <!--<div id="bottomBox" class="bottomBox"></div>-->
  <el-row :gutter="20">
    <el-col :span="6"><div class="colBox1 grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="colBox1 grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="colBox1 grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="colBox1 grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div  class="colBox2 grid-content bg-purple"></div></el-col>
    <el-col :span="18"><div class="colBox2 grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12"><div class="colBox3 grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div  class="colBox3 grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div  class="colBox3 grid-content bg-purple"></div></el-col>
  </el-row>
</div>

</template>

<script>

</script>

<style>
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
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .colBox1{
    margin-top: 20px;
    height: 120px;
  }
  .colBox2{
    /*margin-top: 10px;*/
    height: 480px;
  }
  .colBox3{
    /*margin-top: 10px;*/
    height: 480px;
  }
</style>
