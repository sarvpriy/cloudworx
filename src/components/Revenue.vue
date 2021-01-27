<template>
  <Panel ref="panel" :headerTitle="headerTitle" :panelType="'lg'">
    <highcharts :options="chartOptions"></highcharts>
  </Panel>
</template>

<script>
import Panel from "./common/Panel";
import { Chart } from "highcharts-vue";
import { revenueData } from "../mock/mock";
import windowMixin from "../mixins/window";

export default {
  name: "Revenue",
  components: {
    Panel,
    highcharts: Chart,
  },
  mixins: [windowMixin],
  data() {
    return {
      headerTitle: "REVENUE",
      chartOptions: {},
    };
  },
  mounted() {
    // chart.getCSV();
    this.setChartOptions();
  },
  methods: {
    setChartOptions() {
      this.chartOptions = {
        chart: {
          type: "area",
          width: 600,
          height: 400,
          inverted: false,
          reflow: true,
          scrollablePlotArea: {
            minWidth: 700,
            // opacity:0.85,
            scrollPositionX: 1,
          },
          // backgroundColor: '#FFFFFF',
          // shadow: true
          // showAxes: false,
          spacing: [10, 20, 15, 10],
          styledMode: false,
        },
        // colorAxis: {
        //     min: 0,
        //     max: 30
        // },
        credits: {
          enabled: false,
        },
        // data: {
        //     table: 'datatable',
        //     csv: document.getElementById('csv').innerHTML
        // },
        // drillDown: {},
        title: {
          text: "",
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            },
          },
          accessibility: {
            rangeDescription: "Range: 1940 to 2017.",
          },
        },
        yAxis: {
          title: {
            text: "Nuclear weapon states",
          },
          labels: {
            formatter: function () {
              return this.value / 1000 + "k";
            },
          },
        },
        tooltip: {
          pointFormat:
            "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
        },
        plotOptions: {
          area: {
            pointStart: 1940,
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        series: revenueData,

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  align: "center",
                  verticalAlign: "bottom",
                  layout: "horizontal",
                },
                credits: {
                  enabled: false,
                },
              },
            },
          ],
        },
      };
      this.adjustDims()
    },
    adjustDims() {
      this.chartOptions.chart.width = this.$refs.panel.$el.clientWidth;
    }
  },
  watch: {
      windowWidth(newWidth, oldWidth) {
          this.adjustDims()
      }
  },
};
</script>

<style>
</style>