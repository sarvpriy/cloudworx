<template>
  <div class="b-dashboard">
      <DashboardHeader />
      <Draggable>
        <Draggable class="row" id="analytics">
            <Analytic v-for="item in analytics" :key="item.icon" :states="item" class="col-3" />
        </Draggable>
        <Draggable class="row">
            <Aquisition id="aquisition" class="col-6"/>
            <UsersByCountry id="usersbycountry" class="col-6"/>
        </Draggable>
        <Draggable class="row">
                <Revenue id="revenue" class="col-6"/>
                <Draggable class="row-2 col-6">
                    <SuperApp id="superapp" class="col-6"/>
                    <Feed id="feed" class="col-6"/>
                </Draggable>
        </Draggable>
      </Draggable>
  </div>
</template>

<script>
import { gsap } from "gsap";
import DashboardHeader from './DashboardHeader.vue'
import Analytic from './common/Analytic'
import Draggable from 'vuedraggable'
import Aquisition from "./Aquisition";
import UsersByCountry from './UsersByCountry.vue';
import Revenue from './Revenue.vue';
import SuperApp from './SuperApp.vue';
import Feed from './Feed.vue';
import { appDetials } from "../mock/mock";

export default {
  name: 'Dashboard',
  components: {
    DashboardHeader,
    Analytic,
    Draggable,
    Aquisition,
    UsersByCountry,
    Revenue,
    SuperApp,
    Feed,
  },
    data() {
        return {
            analytics: [],
        }
    },
    mounted() {
        // here preprocess the data
        this.analytics = appDetials.analytics
        this.animate()
    },
    methods: {
        animate() {
        // gsap.to('.b-analytic',{opacity:0 }, {opacity: 1, duration: 2 });
        // gsap.fromTo('#analytics',{rotation: 27,opacity:0, y: 20 }, {rotation: 0,opacity: 1 , y: 0 , duration: 1 });
        let tl = gsap.timeline();
        tl.fromTo("#analytics", {opacity:0, y: -20 }, {opacity: 1 , x: 0, y: 0 , duration: 1 })
            .fromTo("#aquisition", {opacity:0, x: -20 }, {opacity: 1 , x: 0, duration: 1 })
            .fromTo("#usersbycountry", {opacity:0, x: 20 }, {opacity: 1 , x: 0, duration: 1 })
            .fromTo("#revenue", {opacity:0, x: -50, y: 50 }, {opacity: 1 , x: 0, y: 0, duration: 1 })
            .fromTo("#superapp", {opacity:0, y: 50 }, {opacity: 1 , y: 0, duration: 1 })
            .fromTo("#feed", {opacity:0, x: 50, y: 50 }, {opacity: 1 , x: 0, y: 0, duration: 1 })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-dashboard {
    padding: 20px;
}
</style>
