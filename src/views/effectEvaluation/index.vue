<template>

  <div id="evalContainer">
    <el-row :gutter="20">
      <el-col :span="6"><div  class="left"></div></el-col>
      <el-col :span="6"><div  class=""></div></el-col>
      <el-col :span="6"><div class=""></div></el-col>
      <el-col :span="6"><div class=" right"></div></el-col>
    </el-row>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'effectEvaluation',
    components: {},
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

  #evalContainer {
    width: 100%;
    height: 100%;
  }

</style>
