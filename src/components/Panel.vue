<template>
  <div class="panel">
      <div class="panel-header">
          AQUISITION CHANNELS
      </div>
      <div class="panel-body">
          <highcharts :options="chartOptions"></highcharts>
      </div>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
    name: 'panel',
    components: {
        highcharts: Chart 
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Browser market share, January, 2018'
                },
                subtitle: {
                    text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                },
                series: [{
                    name: 'Browsers',
                    data: [
        {
            y: 62.74,
            color: 'pink',
            drilldown: {
                name: 'Chrome',
                categories: [
                    'Chrome v65.0',
                ],
                data: [
                    0.1,
                ]
            }
        },
        {
            y: 10.57,
            color: 'purple',
            drilldown: {
                name: 'Firefox',
                categories: [
                    'Firefox v58.0',
                ],
                data: [
                    1.02,
                ]
            }
        },
        {
            y: 7.23,
            color: 'orange',
            drilldown: {
                name: 'Internet Explorer',
                categories: [
                    'Internet Explorer v11.0',
                ],
                data: [
                    6.2
                ]
            }
        },
        {
            y: 5.58,
            color: 'yellow',
            drilldown: {
                name: 'Safari',
                categories: [
                    'Safari v11.0',
                ],
                data: [
                    3.39,
                ]
            }
        },
        {
            y: 4.02,
            color: 'green',
            drilldown: {
                name: 'Edge',
                categories: [
                    'Edge v16',
                ],
                data: [
                    2.6
                ]
            }
        },
        {
            y: 1.92,
            color: 'blue',
            drilldown: {
                name: 'Opera',
                categories: [
                    'Opera v50.0',
                ],
                data: [
                    0.96,
                ]
            }
        },
        {
            y: 7.62,
            color: 'red',
            drilldown: {
                name: 'Other',
                categories: [
                    'Other'
                ],
                data: [
                    7.62
                ]
            }
        }
    ],
                    size: '60%',
                    innerSize: '60%',
                    dataLabels: {
                        formatter: function () {
                            // return this.y > 5 ? this.point.name : null;
                        },
                        color: '#ffffff',
                        distance: -30
                    }
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 400
                        },
                        chartOptions: {
                            series: [{
                            }, {
                                id: 'versions',
                                dataLabels: {
                                    enabled: false
                                }
                            }]
                        }
                    }]
                }
        }
        }
    }
}
</script>

<style>
.panel {
    width: 100%;
    margin: 10px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
}
.panel-header {
    padding: 10px 20px;
    font-size: 16px;
    text-align: start;
    border-bottom: 1px solid #e3e3e3;
    font-weight: 600;
}
.panel-body {
    padding: 10px 20px;
    text-align: start;
}
</style>