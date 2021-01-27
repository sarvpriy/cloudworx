<template>
    <Panel ref="panel" :headerTitle="headerTitle">
        <div class="b-traffic">
            <highcharts :options="chartOptions"></highcharts>
            <div class="b-traffic__type-container">
                <div class="b-traffic__type-item" v-for="type in trafficData" :key="type.color">
                    <div class="b-traffic__color-box" :style="'background: '+type.color"></div>
                    <div class="b-traffic__type">
                        <p class="b-traffic__name">{{ type.name }}</p>
                        <p class="b-traffic__percentage">{{ type.y | positive-percentage }}</p>
                    </div>
                </div>
            </div>
        </div>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";
import {Chart} from 'highcharts-vue'
import { trafficData } from "../mock/mock";

export default {
    name: 'Aquisition',
    components: {
        Panel,
        highcharts: Chart,
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            headerTitle: 'AQUISITION CHANNELS',
            chartOptions: {},
            timeoutId: null,
            trafficData,
        }
    },
    mounted() {
        this.setChartOptions()
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    methods: {  
        onResize() {
            this.windowWidth = window.innerWidth
        },

        setChartOptions() {
            this.chartOptions = {
                chart: {
                    type: 'pie',
                    width: 400,
                    height: 400,
                    animation: true,
                    className: '',
                    displayErrors:true,
                    events: {
                        // load: function(){},
                        // render: function(){},
                    },
                    // margin: [0, 0, 0, 0],
                    // numberFormatter: function () {
                    //     var ret = Highcharts.numberFormat.apply(0, arguments);
                    //     return converters.ar(ret);
                    // },
                    // plotBackgroundColor: '#fff',
                    // plotBorderColor: '#fff',
                    // plotBorderWidth:0,
                    reflow: true,
                },
                title: {
                    text: '19,00,128 total views',
                    align: 'center',
                    verticalAlign: 'middle',
                    widthAdjust: -200,
                    style: {
                        fontSize: 14
                    }
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%'],
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                },
                series: [{
                    name: 'Traffic',
                    data: this.trafficData,
                    // size: '80%',
                    innerSize: '60%',
                    dataLabels: {
                        formatter: function () {
                            // return this.y > 5 ? this.point.name : null;
                        },
                        // color: '#ffffff',
                        // distance: -30
                    }
                }],
                credits: {
                    enabled: false
                }
                // responsive: {
                //     rules: [{
                //     condition: {
                //         maxWidth: 400
                //     },
                //     chartOptions: {
                //         series: [{
                //             }, {
                //             id: 'versions',
                //             dataLabels: {
                //                 enabled: false
                //             }
                //         }]
                //     }
                //     }]
                // },
            }
        }
    },
    watch: {
        windowWidth(newWidth, oldWidth) {
            // if(this.timeoutId) clearTimeout(this.timeoutId)
            // this.timeoutId = setTimeout(() => {
                this.chartOptions.chart.width = this.$refs.panel.$el.clientWidth/2
            // }, 300)
        }
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
}
</script>

<style scoped>
.b-traffic {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.chart {}
.b-traffic__type-container {
    display: flex;
    flex-direction: column;
}
.b-traffic__type-item {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    min-width: 350px;
    margin: 10px;
}
.b-traffic__color-box {
    /* background: green; */
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
}
.b-traffic__type {
    display: flex;
    justify-content: space-between;
    width: 80%;
    border-bottom: 4px solid #ddd;
}
.b-traffic__name {}
.b-traffic__percentage {}
</style>