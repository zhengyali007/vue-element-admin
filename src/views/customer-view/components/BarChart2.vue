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
        chart: null
      }
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
          legend: {
            bottom: 20,
            textStyle: {
              color: '#fff'
            },
            data: ['男', '女']
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            containLabel: true
          },

          tooltip: {
            show: 'true',
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#aaa'
              }
            }
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            },
            data: ['会', '不会', '看情况']
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: ['会', '不会', '看情况']
          }

          ],
          series: [{
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
              normal: {
                show: true,
                color: '#277ace',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barWidth: '20%',
            data: [33, 33, 33]
          }, {
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,

            itemStyle: {
              normal: {
                show: true,
                color: '#277ace',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barWidth: '20%',
            barGap: '100%',
            data: [51, 51, 51]
          }, {
            name: '男',
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00FFE6'
                }, {
                  offset: 1,
                  color: '#007CC6'
                }]),
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              }
            },
            barWidth: '20%',
            data: [8, 15, 10]
          }, {
            name: '女',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#3023AE'
                }, {
                  offset: 1,
                  color: '#C96DD8'
                }]),
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              }
            },
            barGap: '100%',
            data: [8, 17, 26]
          }]
        })
      }
    }
  }
</script>
