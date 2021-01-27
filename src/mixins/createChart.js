import Vue from "vue";
const chart = {
  methods: {
    Createchart: function({type,}) {
        return {
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
                data: [
                    {
                        name: 'Chrome',
                        y: 7.62,
                        color: 'red'
                    },
                    {
                        name: 'Firefox',
                        y: 3.26,
                        color: 'blue'
                    },
                    {
                        name: 'Safari',
                        y: 4.68,
                        color: 'yellow'
                    },
                    {
                        name: 'Opera',
                        y: 1.56,
                        color: 'green'
                    }
                ],
                // size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        // return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -30
                }
            }],
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
  }
};
export default chart;