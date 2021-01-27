<template>
    <Panel ref="panel" :headerTitle="headerTitle" :panelType="'lg'">
        <div class="b-traffic">
            <highcharts :options="chartOptions"></highcharts>
            <div class="b-traffic__type-container">
                <div class="b-traffic__type-item" v-for="type in trafficData" :key="type.color">
                    <div class="b-traffic__color-box" :style="'background: '+type.color"></div>
                    <div class="b-traffic__type">
                        <p class="b-traffic__name">{{ type.name }}</p>
                        <p class="b-traffic__percentage">{{ type.y | positive-percentage }}</p>
                        <div class="b-traffic__percentage-bar" :style="'width: '+type.y+'%'"></div>
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
import windowMixin from "../mixins/window";

export default {
    name: 'Aquisition',
    components: {
        Panel,
        highcharts: Chart,
    },
    mixins: [windowMixin],
    data() {
        return {
            headerTitle: 'AQUISITION CHANNELS',
            chartOptions: {},
            timeoutId: null,
            trafficData,
        }
    },
    mounted() {
        this.setChartOptions()
    },

    methods: { 

        setChartOptions() {
            this.chartOptions = {
                chart: {
                    type: 'pie',
                    width: 300,
                    height: 300,
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
            this.adjustDims()
        },
        adjustDims() {
            if(this.$refs.panel.$el.clientWidth < 421) {
                this.chartOptions.chart.width = this.$refs.panel.$el.clientWidth - 50
                this.chartOptions.chart.height = 300
            } else {
                this.chartOptions.chart.width = this.$refs.panel.$el.clientWidth/2
            }
        }
    },
    watch: {
        windowWidth(newWidth, oldWidth) {
            this.adjustDims()
        }
    },
}
</script>

<style scoped>
.b-traffic {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 420px) {
    .b-traffic {
        flex-wrap: wrap;
    }
}

.b-traffic__type-container {
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 420px) {
    .b-traffic__type-container {
        width: -webkit-fill-available;
        max-width: -webkit-fill-available;
    }
}
@media only screen and (min-width: 421px) and (max-width: 992px) {
    .b-traffic__type-container {
        width: -webkit-fill-available;
        max-width: -webkit-fill-available;
        width: 50%;
    }
}
@media only screen and (min-width: 993px) {
    .b-traffic__type-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }
}

.b-traffic__type-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
}

.b-traffic__color-box {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
}
.b-traffic__type {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 80%;
    border-bottom: 4px solid #eeeeee;
}
.b-traffic__name {}
.b-traffic__percentage {}
.b-traffic__percentage-bar {
    position: absolute;
    left: 0;
    bottom: -4px;
    background: #d8d7d7;
    height: 4px;
}
</style>