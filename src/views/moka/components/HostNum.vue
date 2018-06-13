<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'

  require('echarts/theme/macarons') // echarts theme
  import {debounce} from '@/utils'

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
        option: []
      }
    },
    computed: {},
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
      this.initOption()
      this.initChart(this.option)
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
      initOption() {
        var myData = ['核心应用', '重要应用', '一般应用',]
        var databeast = {1: [389, 559, 262]}
        var databeauty = {1: [121, 388, 233]}
        var timeLineData = [1]

        this.option = {
          baseOption: {
            timeline: {
              show: false,
              top: 0,
              data: []
            },
            tooltip: {
              show: true,
              trigger: 'axis',
              // formatter: '{b}<br/>{a}: {c}人',
              axisPointer: {
                type: 'shadow'
              }
            },

            grid: [{
              show: false,
              left: '5%',
              top: 0,
              bottom: 0,
              containLabel: true,
              width: '45%'
            }, {
              show: false,
              left: '51%',
              top: 20,
              bottom: 0,
              width: '0%'
            }, {
              show: false,
              right: '5%',
              top: 0,
              bottom: 0,
              containLabel: true,
              width: '45%'
            }],

            xAxis: [{
              type: 'value',
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            }, {
              gridIndex: 1,
              show: false
            }, {
              gridIndex: 2,
              nameTextStyle: {
                color: '#fff',
                fontSize: 14
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            }],
            yAxis: [{
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: myData
            }, {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }

              },
              data: myData.map(function (value) {
                return {
                  value: value,
                  textStyle: {
                    align: 'center'
                  }
                }
              })
            }, {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false

              },
              data: myData
            }],
            series: []

          },
          options: []
        }

        this.option.baseOption.timeline.data.push(timeLineData[0])
        this.option.options.push({
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{c} {a}'
          },
          series: [{
            name: '台',
            type: 'bar',
            barWidth: 30,
            label: {
              normal: {
                show: true,
                position: 'left',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#4ca8f6',
                barBorderRadius: 0
              }
            },

            data: databeast[timeLineData[0]]
          }, {
            name: '台',
            type: 'bar',
            barWidth: 30,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: true,
                position: 'right',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#32aca9',
                barBorderRadius: 0
              }
            },
            data: databeauty[timeLineData[0]]
          }]

        })
      },

      initChart(val) {
        this.chart = echarts.init(this.$el, 'macarons')

        this.chart.setOption(val)
      }
    }
  }
</script>
