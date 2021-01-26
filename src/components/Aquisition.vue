<template>
    <Panel :headerTitle="headerTitle" class="fit-content">
        <highcharts :options="chartOptions"></highcharts>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";
import {Chart} from 'highcharts-vue'

export default {
    name: 'Aquisition',
    components: {
        Panel,
        highcharts: Chart,
    },
    data() {
        return {
            headerTitle: 'AQUISITION CHANNELS',
            // chartOptions: {
            //     series: [{
            //         data: [1,2,3] // sample data
            //     }]
            // },
            chartOptions: {
                chart: {
                    height: 300,
                    width: 600,
                    type: 'line'
                },
                title: {
                    text: 'The height of the chart is set to 200px'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                },
                legend: {
                    layout: 'vertical',
                    floating: true,
                    backgroundColor: '#FFFFFF',
                    align: 'left',
                    verticalAlign: 'top',
                    y: 60,
                    x: 90
                },
                tooltip: {
                    formatter: function () {
                    }
                },
                plotOptions: {
                },
                series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }],
                responsive:{
                    rules:[{
                        chartOptions:undefined,
                        condition:{
                            callback:undefined,
                            maxHeight:undefined,
                            maxWidth:undefined,
                            minHeight:0,
                            minWidth:0,
                        }
                    }]
                }
            }
        }
    }
}
</script>

<style>

</style>