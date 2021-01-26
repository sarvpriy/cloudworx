<template>
    <Panel :headerTitle="headerTitle" class="fit-content">
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
                    borderWidth: 1,
                    height: 300,
                    width: 600,
                },

                title: {
                    text: 'Nordic countries'
                },

                subtitle: {
                    text: 'Demo of drawing all areas in the map, only highlighting partial data'
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
                }]
            }
        }
    }
}
</script>

<style>

</style>