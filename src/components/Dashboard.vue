<template>
  <div class="dashboard">
      <DashboardHeader />
      <Draggable class="row" v-model="myArray" group="states" @start="drag=true" @end="drag=false">
            <SingleStateCard v-for="element in myArray" :key="element.icon" :states="element" class="col-3" />
        </Draggable>
      <div class="row">
          <Aquisition class="col-6"/>
          <UsersByCountry class="col-6"/>
      </div>
      <div class="row">
            <Revenue class="col-6"/>
            <div class="row-2 col-6">
                <SuperApp class="col-6"/>
                <Feed class="col-6"/>
            </div>
      </div>
  </div>
</template>

<script>
import DashboardHeader from './DashboardHeader.vue'
import SingleStateCard from './common/SingleStateCard'
import Draggable from 'vuedraggable'
import Aquisition from "./Aquisition";
import UsersByCountry from './UsersByCountry.vue';
import Revenue from './Revenue.vue';
import SuperApp from './SuperApp.vue';
import Feed from './Feed.vue';

export default {
  name: 'Dashboard',
  components: {
    DashboardHeader,
    SingleStateCard,
    Draggable,
    Aquisition,
    UsersByCountry,
    Revenue,
    SuperApp,
    Feed,
  },
    data() {
        return {
            myArray: [
                {
                    label: 'New Visits',
                    value: '57,890',
                    percentage: '70%',
                    icon: 'user'
                },
                {
                    label: 'Perchases',
                    value: '$ 89,760',
                    percentage: '68%',
                    icon: 'doller'
                },
                {
                    label: 'Active users',
                    value: '178,391',
                    percentage: '76%',
                    icon: 'smile'
                },
                {
                    label: 'Returned',
                    value: '32,590',
                    percentage: '58%',
                    icon: 'refresh'
                }
            ],
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {

}
</style>
