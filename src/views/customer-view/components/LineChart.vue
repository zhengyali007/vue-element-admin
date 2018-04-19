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
        time: [],
        rateData: [],
        rateData2: [],
        rateData3: [],
        rateData4: []
      }
    },
    mounted() {
      const that = this
      setInterval(function() {
        that.getDayTime()
        that.getRandomData()
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
      getDayTime() {
        this.time = []
        for (var i = 0; i < 24; i++) {
          // var hour = i < 10 ? '0' + i + ':00' : i + ':00';
          var hour = i + ':00'
          this.time.push(hour)
        }
      },
      getRandomData() {
        this.rateData = []
        this.rateData2 = []
        this.rateData3 = []
        this.rateData4 = []
        for (var i = 0; i < 24; i++) {
          var item = Math.random() * 100 - Math.random() * 50
          var item2 = Math.random() * 100 - Math.random() * 50
          var item3 = Math.random() * 100 - Math.random() * 50
          var item4 = Math.random() * 100 - Math.random() * 50
          this.rateData.push(Math.abs(item).toFixed(2))
          this.rateData2.push(Math.abs(item2).toFixed(2))
          this.rateData3.push(Math.abs(item3).toFixed(2))
          this.rateData4.push(Math.abs(item4).toFixed(2))
        }
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          color: ['#66CCFF', '#CC6666', '#66CCCC', '#FF9999', '#CCFF99'],
          // grid.top需要根据容器高度调整
          grid: [{
            top: '12%',
            bottom: 0,
            left: '4%',
            right: '4%',
            height: '40%'
          }, {
            top: '51.5%',
            bottom: 0,
            left: '4%',
            right: '4%',
            height: '40%'
          }],
          tooltip: {
            trigger: 'axis',
            formatter: function(params) {
              if (params instanceof Array) {
                var idxMap = [{
                  text: 'cpu使用率',
                  data: []
                }, {
                  text: '内存使用率',
                  data: []
                }]
                var time = params[0].axisValue
                for (var i = 0; i < params.length; i++) {
                  var seriesIdx = params[i].seriesId.split(params[i].seriesId[0])
                  idxMap[seriesIdx[2]].data.push({
                    marker: params[i].marker,
                    seriesName: params[i].seriesName,
                    data: params[i].data
                  })
                }

                return '<div>' +
                '<time>' + time + '</time>' +
                '<br />' +
                idxMap.map(function(item) {
                  return '<span>' + item.text + '</span>' + item.data.map(function(i_item) {
                    return '<p style="margin: 0;padding: 0;">' + i_item.marker + i_item.seriesName + ': ' + i_item.data + '%' + '</p>'
                  }).join('')
                }).join('');
                +'</div>'
              }
            }
          },
          axisPointer: {
            link: {
              xAxisIndex: 'all'
            }
          },
          legend: {
            data: ['192.168.1.1', '192.168.1.5']
          },
          xAxis: [{
            type: 'category',
            gridIndex: 0,
            boundaryGap: false,
            axisLabel: {
              interval: 0
            },
            data: this.time
          }, {
            type: 'category',
            gridIndex: 1,
            position: 'top',
            boundaryGap: false,
            axisLabel: {
              show: false,
              interval: 0
            },
            data: this.time
          }],
          yAxis: [{
            name: 'cpu(%)',
            type: 'value',
            nameTextStyle: {
              fontSize: 14
            },
            min: 0,
            max: 100,
            gridIndex: 0,
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          }, {
            name: '内存(%)',
            type: 'value',
            nameTextStyle: {
              fontSize: 14
            },
            min: 0,
            max: 100,
            gridIndex: 1,
            inverse: true,
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          }],
          series: [
            {
              name: '192.168.1.1',
              type: 'line',
              data: this.rateData
            },
            {
              name: '192.168.1.5',
              type: 'line',
              data: this.rateData2
            },
            {
              name: '192.168.1.1',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.rateData3
            },
            {
              name: '192.168.1.5',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.rateData4
            }
          ]
        })
      }
    }
  }
</script>
