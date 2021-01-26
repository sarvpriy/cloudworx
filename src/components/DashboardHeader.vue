<template>
  <header>
      <p>DASHBOARD</p>
      <p>Home / Dashboard </p>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    height: 50px;
}
</style>
