<template>
  <div class="dashboard">
      <DashboardHeader />
      <Draggable>
        <Draggable class="row">
            <Analytic v-for="item in analytics" :key="item.icon" :states="item" class="col-3" />
        </Draggable>
        <Draggable class="row">
            <Aquisition class="col-6"/>
            <UsersByCountry class="col-6"/>
        </Draggable>
        <Draggable class="row">
                <Revenue class="col-6"/>
                <Draggable class="row-2 col-6">
                    <SuperApp class="col-6"/>
                    <Feed class="col-6"/>
                </Draggable>
        </Draggable>
      </Draggable>
  </div>
</template>

<script>
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
            analytics: []
        }
    },
    mounted() {
        // here preprocess the data
        this.analytics = appDetials.analytics
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
    padding: 20px;
}
</style>
