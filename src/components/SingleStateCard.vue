<template>
  <div class="card">
      <div class="percentage">70 %</div>
      <div class="state-value">
          <label>New Visits</label>
          <p>57,820</p>
      </div>
      <div class="icon">
          <span class="fa fa-user fa-3x"></span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SingleStateCard'
}
</script>

<style scoped>

.card {
    display: flex;
    flex-direction: row;
    width: 25%;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    /* border: 1px solid red; */
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    padding: 10px;
    margin: 10px;
}

.percentage {
    border-radius: 50%;
    border: 5px solid #e3e3e3;
    width: 50px;
    height: 50px;
    /* padding: 9px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.state-value {
    width: 72%;
    /* border: 1px solid red; */
    text-align: start;
    padding-left: 10px;
}
.icon {
    color: #ddd;
}
</style>