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
        percent: 400,
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
          title: {
            text: (this.percent * 100),
            x: 'center',
            y: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'bolder',
              fontSize: 16,
            }
          },
          series: [{
            type: 'pie',
            radius: ['39%', '49%'],
            center: ['25%', '40%'],
            silent: true,
            label: {
              normal: {
                show: false,
              }
            },
            data: [{
              value: 1,
              itemStyle: {
                normal: {
                  color: '#313443',
                  shadowBlur: 10,
                  shadowColor: '#1b1e25',
                }
              }
            }],

            animation: false
          },

            {
              type: 'pie',
              radius: ['39%', '49%'],
              center: ['25%', '40%'],
              silent: true,
              label: {
                normal: {
                  show: false,
                }
              },

              data: [{
                value: 1,
                itemStyle: {
                  normal: {
                    color: '#313443',
                    shadowBlur: 50,
                    shadowColor: '#1b1e25'
                  }
                }
              }],

              animation: false
            },

            {
              name: 'main',
              type: 'pie',
              radius: ['50%', '51%'],
              center: ['25%', '40%'],
              label: {
                normal: {
                  show: false,
                }
              },
              data: [1,2,3,4,5,6,7],

              animationEasingUpdate: 'cubicInOut',
              animationDurationUpdate: 500
            }
          ]

        })
      }
    }
  }
</script>
