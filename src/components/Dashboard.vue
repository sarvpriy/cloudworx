<template>
  <div class="b-dashboard">
    <DashboardHeader class="b-dashboard__header" />
    <Draggable>
      <Draggable class="b-dashboard__analytics" id="analytics">
        <Analytic
          v-for="item in analytics"
          :key="item.icon"
          :states="item"
          class="col-3"
        />
      </Draggable>
      <Draggable class="b-dashboard__aq-users">
        <Aquisition id="aquisition" class="b-dashboard__aq" />
        <UsersByCountry id="usersbycountry" class="b-dashboard__users" />
      </Draggable>
      <Draggable class="b-dashboard__revenue-superapp-feed">
        <Revenue class="b-dashboard__revenue" id="revenue" />
        <Draggable class="b-dashboard__superapp-feed">
          <SuperApp id="superapp" class="b-dashboard__superapp" />
          <Feed id="feed" class="b-dashboard__feed" />
        </Draggable>
      </Draggable>
    </Draggable>
  </div>
</template>

<script>
import { gsap } from "gsap";
import DashboardHeader from "./DashboardHeader.vue";
import Analytic from "./common/Analytic";
import Draggable from "vuedraggable";
import Aquisition from "./Aquisition";
import UsersByCountry from "./UsersByCountry.vue";
import Revenue from "./Revenue.vue";
import SuperApp from "./SuperApp.vue";
import Feed from "./Feed.vue";
import { appDetials } from "../mock/mock";

export default {
  name: "Dashboard",
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
    };
  },
  mounted() {
    // here preprocess the data
    this.analytics = appDetials.analytics;
    this.animate();
  },
  methods: {
    animate() {
      // gsap.to('.b-analytic',{opacity:0 }, {opacity: 1, duration: 2 });
      // gsap.fromTo('#analytics',{rotation: 27,opacity:0, y: 20 }, {rotation: 0,opacity: 1 , y: 0 , duration: 1 });
      let tl = gsap.timeline();
      tl.fromTo(
        "#analytics",
        { opacity: 0, y: -20 },
        { opacity: 1, x: 0, y: 0, duration: 1 }
      )
        .fromTo(
          "#aquisition",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 1 }
        )
        .fromTo(
          "#usersbycountry",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 1 }
        )
        .fromTo(
          "#revenue",
          { opacity: 0, x: -50, y: 50 },
          { opacity: 1, x: 0, y: 0, duration: 1 }
        )
        .fromTo(
          "#superapp",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          "#feed",
          { opacity: 0, x: 50, y: 50 },
          { opacity: 1, x: 0, y: 0, duration: 1 }
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-dashboard {
  padding: 20px;
}

@media only screen and (max-width: 420px) {
  .b-dashboard {
    padding: 4px;
  }
}
@media only screen and (min-width: 421px) and (max-width: 992px) {
  .b-dashboard {
    padding: 4px;
  }
  .b-dashboard__analytics {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .b-dashboard__superapp-feed {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media only screen and (min-width: 993px) {
  .b-dashboard__analytics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .b-dashboard__aq-users {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: inherit;
    flex-grow: inherit;
  }
  .b-dashboard__revenue-superapp-feed {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .b-dashboard__superapp-feed {
    display: flex;
    justify-content: space-between;
    width: 49%;
  }
}
</style>
