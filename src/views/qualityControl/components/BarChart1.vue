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
        breakNumber: undefined,
        vTp2: 35,
        vTp1: 15,
        vTp0: 18
      }
    },
    computed: {
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
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['总设备数', '已监控设备数', '故障设备数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['外部专网', '互联网', '数据专网']
          },
          series: [
            {
              name: '总设备数',
              type: 'bar',
              data: [232, 100, 232],
              itemStyle: {
                normal: {
                  show: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1a98f8'
                  }, {
                    offset: 1,
                    color: '#7049f0'
                  }]),
                  // barBorderRadius: 50,
                  borderWidth: 0
                }
              }
            },
            {
              name: '已监控设备数',
              type: 'bar',
              data: [58, 46, 68],
              itemStyle: {
                normal: {
                  show: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#96d668'
                  }, {
                    offset: 1,
                    color: '#01babc'
                  }]),
                  // barBorderRadius: 50,
                  borderWidth: 0
                }
              }
            },
            {
              name: '故障设备数',
              type: 'bar',
              data: [18, 43, 8],
              itemStyle: {
                normal: {
                  show: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f7734e'
                  }, {
                    offset: 1,
                    color: '#e12945'
                  }]),
                  // barBorderRadius: 50,
                  borderWidth: 0
                }
              }
            }
          ]

        })
      }
    }
  }
</script>
