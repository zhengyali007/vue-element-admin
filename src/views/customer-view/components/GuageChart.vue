<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import { debounce } from '@/utils'

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    data() {
      return {
        chart: null,
        guageData: 50
      }
    },
    created() {
      setInterval(() => {
        this.guageData = (Math.random() * 100).toFixed(2) - 0
      }, 2000)
    },
    mounted() {
      this.initChart()
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      // getRandom() {
      //   setInterval(() => {
      //     this.guageData[0].value = (Math.random() * 100).toFixed(2) - 0
      //   }, 1000)
      // },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({

        })
      }
    }
  }
</script>
