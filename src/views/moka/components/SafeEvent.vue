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
        default: '100%'
      },
      // deviceName: {
      //   type: Array,
      //   default: function() {
      //     return ['', '']
      //   }
      // },
      // overviewData: {
      //   type: Array,
      //   default: function() {
      //     return [10, 10]
      //   }
      // }
    },
    data() {
      return {
        chart: null,
      }
    },
    computed: {
    },
    watch: {
      // ovData: function() {
      //   this.getData()
      //   this.initChart()
      // },
      // deviceName: function() {
      //   this.getData()
      //   this.initChart()
      // }
    },
    mounted() {
      // console.log(this)
      // this.getData()
      this.initChart()
      // const that = this
      // setInterval(function() {
      //   // console.log(this)
      //   that.getData()
      //   that.initChart()
      // }, 2000)
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
          title: {
            text: '总数:5200',
            x: 'left',
            y: 'top',
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
            subtext: '占比:25%',
            subtextStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
          tooltip: {
            show: false,
          },
          toolbox: {
            show: false,
          },
          // graphic: {
          //     type: 'text',
          //     left: 'center',
          //     top: 'center',
          //     style: {
          //         text: '25%',
          //         textAlign: 'center',
          //         fill: '#3dd4de',
          //         fontSize: 20,
          //         fontWeight: 'normal',
          //     }
          // },
          series: [{
            name: 'safeEvent',
            type: 'pie',
            clockWise: true, // 是否是顺时针
            radius: ['75%', '80%'],
            center: ['50%', '55%'],
            hoverAnimation: true,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: '#32bef2',
                shadowBlur: 20, // 阴影大小
                shadowColor: '#32bef2' // 阴影颜色
              }
            },
            data: [{
              value: 60,
              label: {
                normal: {
                  // formatter: '{d}%',
                  formatter: function(params) {
                    console.error(params)
                    return '占比\n'+params.value+'%'
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#32bef2',
                  shadowBlur: 2, // 阴影大小
                  shadowColor: '#32bef2' // 阴影颜色
                }
              }
            }, {
              value: 100 - 75,
              itemStyle: {
                normal: {
                  color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                },
              }
            }],
          }]
        })
      }
    }
  }
</script>
