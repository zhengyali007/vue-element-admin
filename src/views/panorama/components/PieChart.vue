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
      nameList: ['linux', 'windows', '路由器', '交换机', '网关', '安全设备', 'mac', '防火墙'],
      legendData: [],
      seriesData: [],
      selected: []
    }
  },
  computed: {
    // timeOut: {
    //   set(val) {
    //     this.$store.state.timeout.compileTimeout = val
    //   },
    //   get() {
    //     return this.$store.state.timeout.compileTimeout
    //   }
    // }
  },
  mounted() {
    // console.log(this)
    // this.getData()
    // this.initChart()
    const that = this
    setInterval(function() {
      // console.log(this)
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
      this.legendData = []
      this.seriesData = []
      this.selected = []
      for (var i = 0; i < this.nameList.length; i++) {
        var name = this.nameList[i]
        // Math.random() > 0.65
        // ? this.makeWord(4, 1) + '·' + this.makeWord(3, 0)
        // : this.makeWord(2, 1)
        this.legendData.push(name)
        this.seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        })
        this.selected[name] = i
      }
    },
    // makeWord(max, min) {
    //   var nameLen = Math.ceil(Math.random() * max + min)
    //   var name = []
    //   for (var i = 0; i < nameLen; i++) {
    //     name.push(this.nameList[Math.round(Math.random() * this.nameList.length - 1)])
    //   }
    //   return name.join('')
    // },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   type: 'scroll',
        //   orient: 'vertical',
        //   right: 10,
        //   top: 20,
        //   bottom: 20,
        //   data: this.legendData,
        //   selected: this.selected
        // },
        series: [
          {
            name: '设备总览',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: this.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>
