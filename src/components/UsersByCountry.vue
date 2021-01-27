<template>
    <Panel ref="panel" :headerTitle="headerTitle" class="">
        <highcharts :constructorType="'mapChart'" :options="chartOptions"></highcharts>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";
import {Chart} from 'highcharts-vue'
import europeMap from '@highcharts/map-collection/custom/europe.geo.json'

export default {
    name: 'UsersByCountry',
    components: {
        Panel,
        highcharts: Chart,
    },
    data() {
        return {
            headerTitle: 'USERS BY COUNTRY',
            chartOptions: {
                chart: {
                    map: europeMap,
                    height: 400,
                    width: 200,
                    borderColor: '#fff',
                    className: '',
                    zoomType: 'Xy',
                    panning: true,
                    panKey: 'shift',
                    reflow: true,
                },

                title: {
                    text: ''
                },

                subtitle: {
                    text: ''
                },

                legend: {
                    enabled: false
                },

                series: [{
                    name: 'Country',
                    data: [
                        ['is', 1],
                        ['no', 1],
                        ['se', 1],
                        ['dk', 1],
                        ['fi', 1]
                    ],
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        formatter: function () {
                            if (this.point.value) {
                                return this.point.name;
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '{point.name}'
                    }
                }],

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            },
                            credits: {
                                enabled: false
                            }
                        }
                    }]
                }
            }
        }
    },
    mounted() {
        // console.log(this.$refs.panel.$el.clientWidth)
        // console.log('hello')
        this.chartOptions.chart.width = this.$refs.panel.$el.clientWidth
    }
}
</script>

<style>

</style>