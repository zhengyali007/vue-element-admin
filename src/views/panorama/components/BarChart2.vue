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
          // 'title': {
          //   'text': '自定义的折柱混合--BarLine',
          //   'left': 'center',
          //   'y': '10',
          //   'textStyle': {
          //     'color': '#fff'
          //   }
          // },
          // backgroundColor: '#1c2e40',
          color: '#384757',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#384757'
              }
            }
          },
          legend: {
            data: [
              {
                name: '正常数量',
                icon: 'circle',
                textStyle: {
                  color: '#7d838b'
                }
              },
              {
                name: '异常数量',
                icon: 'circle',
                textStyle: {
                  color: '#7d838b'
                }
              }
              // {
              //   name: '完成率',
              //   icon: 'circle',
              //   textStyle: {
              //     color: '#7d838b'
              //   }
              // }
            ],
            top: '10%',
            textStyle: {
              color: '#fff'
            }
          },
          xAxis: [
            {
              type: 'category',
              data: [
                '服务人民群众',
                '服务审判执行',
                '服务司法管理'
                // '4街',
                // '5街',
                // '6街'
              ],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#7d838b'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '设备数量',
              nameTextStyle: {
                color: '#7d838b'
              },
              min: 0,
              max: 500,
              interval: 50,
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#7d838b'
                }
              },
              axisLine: {
                show: true
              },
              splitLine: {
                lineStyle: {
                  color: '#7d838b'
                }
              }
            }
            // {
            //   type: 'value',
            //   name: '',
            //   show: true,
            //   axisLabel: {
            //     show: true,
            //     textStyle: {
            //       color: '#7d838b'
            //     }
            //   }
            // }
          ],
          grid: {
            top: '20%'
          },
          series: [
            {
              name: '正常数量',
              type: 'bar',
              data: [
                20,
                60,
                80
                // 6,
                // 8,
                // 6
              ],
              barWidth: 'auto',
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(255,37,117,0.7)'
                      },
                      {
                        offset: 0.5,
                        color: 'rgba(0,133,245,0.7)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(0,133,245,0.3)'
                      }
                    ],
                    globalCoord: false
                  }
                }
              }
            },
            {
              name: '异常数量',
              type: 'bar',
              data: [
                40,
                20,
                36
                // 6,
                // 8,
                // 6
              ],
              barWidth: 'auto',
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(255,37,117,0.7)'
                      },
                      {
                        offset: 0.5,
                        color: 'rgba(0,255,252,0.7)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(0,255,252,0.3)'
                      }
                    ],
                    globalCoord: false
                  }
                }
              },
              barGap: '0'
            }
            // {
            //   name: '完成率',
            //   type: 'line',
            //   yAxisIndex: 1,
            //   data: [
            //     100,
            //     33,
            //     100,
            //     100,
            //     100,
            //     100
            //   ],
            //   itemStyle: {
            //     normal: {
            //       color: '#ffaa00'
            //     }
            //   },
            //   smooth: true
            // }
          ]
        })
      }
    }
  }
</script>
