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
        var colorArray = [
          {
            top: 'rgba(173,39,49)', // 红shen
            bottom: 'rgba(173,39,49, 0.3)'
          },
          {
            top: 'rgba(195,175,49)', // 黄
            bottom: 'rgba(195,175,49, 0.3)'
          }, {
            top: 'rgba(56,215,48)', // 绿
            bottom: 'rgba(56,215,48, 0.3)'
          },
          {
            top: 'rgba(40,203,195)', // 蓝
            bottom: 'rgba(40,203,195, 0.3)'
          }, {
            top: 'rgba(42,45,221)', // 深蓝
            bottom: 'rgba(42,45,221, 0.3)'
          },
          {
            top: 'rgba(215,47,215)', // 粉
            bottom: 'rgba(215,47,215, 0.3)'
          }
        ]
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          // backgroundColor: '#0E2A43',
          // title: {
          //   text: '条形七彩渐变柱状图',
          //   textStyle: {
          //     color: '#ffd285'
          //   },
          //   subtext: '@author亮'
          // },
          grid: {
            left: '5%',
            right: '2%',
            bottom: '4%',
            containLabel: true
          },

          tooltip: {
            show: 'true',
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'value',
            position: 'top',
            axisTick: { show: false },
            axisLine: {
              show: false,
              lineStyle: {
                // color: '#fff'
              }
            },
            splitLine: {
              show: true
            }
          },
          yAxis: [
            {
              type: 'category',
              axisTick: {
                show: true,
                alignWithLabel: true,
                length: 5

              },
              inverse: 'true', // 排序
              axisLine: {
                show: true,
                lineStyle: {
                  // color: '#fff'
                }
              },
              data: ['在线', '离线']
            }

          ],
          series: [
            {
              name: '安全设备数量',
              type: 'bar',
              itemStyle: {
                normal: {
                  show: true,
                  color: function(params) {
                    const num = colorArray.length
                    return {
                      type: 'linear',
                      colorStops: [{
                        offset: 0, color: colorArray[params.dataIndex % num].bottom
                      }, {
                        offset: 1, color: colorArray[params.dataIndex % num].top
                      }, {
                        offset: 0, color: colorArray[params.dataIndex % num].bottom
                      }, {
                        offset: 1, color: colorArray[params.dataIndex % num].top
                      }, {
                        offset: 0, color: colorArray[params.dataIndex % num].bottom
                      }, {
                        offset: 1, color: colorArray[params.dataIndex % num].top
                      }, {
                        offset: 0, color: colorArray[params.dataIndex % num].bottom
                      }, {
                        offset: 1, color: colorArray[params.dataIndex % num].top
                      }, {
                        offset: 0, color: colorArray[params.dataIndex % num].bottom
                      }, {
                        offset: 1, color: colorArray[params.dataIndex % num].top
                      }, {
                        offset: 0, color: colorArray[params.dataIndex % num].bottom
                      }, {
                        offset: 1, color: colorArray[params.dataIndex % num].top
                      }]
                      //global Coord: false
                    }
                  },
                  barBorderRadius: 88,
                  borderWidth: 0,
                  borderColor: '#333'
                }
              },
              barGap: '0%',
              barCategoryGap: '50%',
              data: [260, 132]
            }

          ]
        })
      }
    }
  }
</script>
