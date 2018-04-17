<template>
  <!--<div class="color-list">-->
    <!--<div-->
      <!--class="color-item"-->
      <!--v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"-->
      <!--:key="color.text"-->
    <!--&gt;{{color.text}}</div>-->
  <!--</div>-->
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div id="smallBox1" class="colBox1 grid-content bg-purple" v-dragging="{ item: smallBoxs[0], list: smallBoxs, group: 'smallBox' }" :key="1">{{smallBoxs[0].text}}</div></el-col>
      <el-col :span="6"><div id="smallBox2" class="colBox1 grid-content bg-purple" v-dragging="{ item: smallBoxs[1], list: smallBoxs, group: 'smallBox' }" :key="2">{{smallBoxs[1].text}}</div></el-col>
      <el-col :span="6"><div id="smallBox3" class="colBox1 grid-content bg-purple" v-dragging="{ item: smallBoxs[2], list: smallBoxs, group: 'smallBox' }" :key="3">{{smallBoxs[2].text}}</div></el-col>
      <el-col :span="6"><div id="smallBox4" class="colBox1 grid-content bg-purple" v-dragging="{ item: smallBoxs[3], list: smallBoxs, group: 'smallBox' }" :key="4">{{smallBoxs[3].text}}</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div id="middleBox1" class="colBox2 grid-content bg-purple"></div></el-col>
      <el-col :span="18"><div id="maxBox" class="colBox2 grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div id="largeBox" class="colBox3 grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div id="middleBox2" class="colBox3 grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div id="middleBox3" class="colBox3 grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'test',
    components: { },
    data() {
      return {
        smallBoxs: [{
          text: '第一个box'
        }, {
          text: '第二个box'
        }, {
          text: '第三个box'
        }, {
          text: '第四个box'
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
      this.$dragging.$on('dragged', ({ value }) => {
        console.log(value.item)
        console.log(value.list)
        console.log(value.otherData)
      })
      this.$dragging.$on('dragend', () => {
      })
    }
  }
</script>

<style>
  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  /*#smallBox1{*/
    /*background-color: Aquamarine;*/
  /*}*/
  /*#smallBox2{*/
    /*background-color: Hotpink;*/
  /*}*/
  /*#smallBox3{*/
    /*background-color: Gold;*/
  /*}*/
  /*#smallBox4{*/
    /*background-color: Crimson;*/
  /*}*/
</style>
