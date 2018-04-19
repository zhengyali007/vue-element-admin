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
        breakNumber: undefined
      }
    },
    computed: {
    },
    mounted() {
      const that = this
      setInterval(function() {
        that.getData()
        that.initChart()
      }, 2000)
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
      getData() {
        this.breakNumber = Math.floor(Math.random() * 100)
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')

        this.chart.setOption({
          tooltip: {
            formatter: '{a} <br/>{b} : {c}'
          },
          grid: {
            width: 200,
            height: 95
          },
          series: [{
            name: '主机设备总数',
            type: 'gauge',
            radius: '75%',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                width: 4,
                color: [[1, 'cyan']]
              }
            },
            splitLine: {
              length: -6,
              lineStyle: {
                color: 'red',
                width: 4
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              splitNumber: 1,
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            pointer: {
              show: false
            }

          }, {
            name: '主机设备',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            splitLine: {
              length: 20
            },
            axisLabel: {
              distance: -80,
              color: '#fff',
              fontSize: 24,
              formatter: function(param) {
                if ((param % 50) === 0) {
                  return param
                }
              }
            },
            detail: {
              show: false,
              formatter: '{value}%'
              // backgroundColor:'#fff'
            },
            itemStyle: {
              normal: {
                color: 'cyan'
              }
            },
            pointer: {
              width: 10,
              length: '90%'
            },
            data: [{
              value: this.breakNumber,
              name: '故障数：'
            }]
          }, {
            name: '最内层线',
            type: 'gauge',
            radius: '35%',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                width: 4,
                color: [[1, 'cyan']]
              }
            },
            splitLine: {
              length: -6,
              lineStyle: {
                opacity: 0
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              splitNumber: 1,
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            pointer: {
              show: false
            }

          }, {
            name: '饼图',
            tooltip: {
              show: false
            },
            type: 'pie',
            radius: ['0%', '34%'],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: '#333'
              },
              emphasis: {
                color: '#333'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            animation: false,
            data: [1]
          }]
        })
      }
    }
  }
</script>
