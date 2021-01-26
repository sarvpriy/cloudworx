import Vue from 'vue'
import App from './App.vue'
import Highcharts from "highcharts";
import HighchartsVue from 'highcharts-vue'
import Maps from "highcharts/modules/map";
import './assets/style.css'

Maps(Highcharts);
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
