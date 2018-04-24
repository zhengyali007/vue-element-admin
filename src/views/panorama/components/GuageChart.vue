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
          tooltip: {
            formatter: '{a} <br/>{c} {b}'
          },
          // toolbox: {
          //   show: true,
          //   feature: {
          //     mark: {
          //       show: true
          //     },
          //     restore: {
          //       show: true
          //     },
          //     saveAsImage: {
          //       show: true
          //     }
          //   }
          // },
          series: [{
            name: '警告数',
            type: 'gauge',
            center: ['60%', '50%'],
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '50%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                // color: [
                //     [0.09, 'lime'],
                //     [0.82, '#1e90ff'],
                //     [1, '#ff4500']
                // ],
                width: 3
                // shadowColor: '#fff', //默认透明
                // shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              show: false,
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff'
                // shadowColor: '#fff', //默认透明
                // shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 0, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
                // shadowColor: '#fff', //默认透明
                // shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 1,
                color: '#fff'
                // shadowColor: '#fff', //默认透明
                // shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              width: 3
              // shadowColor: '#fff', //默认透明
              // shadowBlur: 5
            },
            // title: {
            //   textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            //     fontWeight: 'bolder',
            //     fontSize: 20,
            //     fontStyle: 'italic',
            //     color: '#fff'
            //     // shadowColor: '#fff', //默认透明
            //     // shadowBlur: 10
            //   }
            // },
            detail: {
              color: '#f00',
              // shadowColor: '#fff', //默认透明
              // shadowBlur: 5,
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                // fontWeight: 'bolder',
                color: '#f00'
              }
            },
            data: [{
              value: 95,
              name: ''
            }]
          }]
        })
      }
    }
  }
</script>
