<template>
  <header>
      <p class="title">DASHBOARD</p>
      <p><span class="active">Home</span> / Dashboard </p>
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
    color: #959595;
}
p {
  font-weight: bold;
}
.active {
  color: #7bcac5;
}
.title {
  font-size: 20px;
}
</style>
