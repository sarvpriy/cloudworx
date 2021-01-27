<template>
  <Panel ref="panel" :headerTitle="headerTitle" :panelType="'lg'">
    <highcharts
      :constructorType="'mapChart'"
      :options="chartOptions"
    ></highcharts>
  </Panel>
</template>

<script>
import Panel from "./common/Panel";
import { Chart } from "highcharts-vue";
import europeMap from "@highcharts/map-collection/custom/europe.geo.json";
import windowMixin from "../mixins/window";
import { usersByCountry } from "../mock/mock";

export default {
  name: "UsersByCountry",
  components: {
    Panel,
    highcharts: Chart,
  },
  mixins: [windowMixin],
  data() {
    return {
      headerTitle: "USERS BY COUNTRY",
      chartOptions: {},
    };
  },
  mounted() {
    this.setMapOptions();
  },
  methods: {
    setMapOptions() {
      this.chartOptions = {
        chart: {
          map: europeMap,
          height: 400,
          width: 200,
          borderColor: "#fff",
          className: "",
          zoomType: "Xy",
          panning: true,
          panKey: "shift",
          reflow: true,
        },

        title: { text: "" },
        subtitle: { text: "" },
        legend: { enabled: false },

        series: [
          {
            name: "Country",
            type: "map",
            enableMouseTracking: false,
            showInLegend: false,
            data: usersByCountry,
            dataLabels: {
              enabled: true,
              color: "#FFFFFF",
              formatter: function () {
                if (this.point.value) {
                  return this.point.name;
                }
              },
            },
            tooltip: {
              pointFormat: "{point.name}",
            },
          },
        ],
        credits: {
          enabled: false,
        },

        // responsive: {
        //   rules: [
        //     {
        //       condition: {
        //         maxWidth: 500,
        //       },
        //       chartOptions: {
        //         legend: {
        //           align: "center",
        //           verticalAlign: "bottom",
        //           layout: "horizontal",
        //         },
        //         credits: { enabled: false },
        //       },
        //     },
        //   ],
        // },
      };
      this.adjustDims()
    },
    adjustDims() {
      this.chartOptions.chart.width = this.$refs.panel.$el.clientWidth;
      this.chartOptions.chart.height = 300
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