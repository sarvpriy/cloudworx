<template>
  <div class="dashboard">
      <DashboardHeader />
      <div class="row-1">
        <SingleStateCard />
        <SingleStateCard />
        <SingleStateCard />
        <SingleStateCard />
      </div>
      <div class="row-2">
          <Panel />
          <Panel />
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ipsum tempore saepe nulla culpa suscipit odit quidem tempora placeat? Corporis placeat quas ducimus quisquam eveniet, veniam quasi voluptas magnam tempora.</p>
  </div>
</template>

<script>
import Panel from './Panel.vue'
import DashboardHeader from './DashboardHeader.vue'
import SingleStateCard from './SingleStateCard.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardHeader,
    SingleStateCard,
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {

}
.row-1, .row-2 {
    display: flex;
    padding: 5px 15px;
    justify-content: space-between;
}
</style>
