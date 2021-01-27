import Vue from 'vue'
import App from './App.vue'
import Highcharts from "highcharts";
import HighchartsVue from 'highcharts-vue'
import Maps from "highcharts/modules/map";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDollarSign, faGrin, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/style.css'
import './filters/filters'

library.add(faUser,faDollarSign,faGrin, faRedo)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Maps(Highcharts);
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
