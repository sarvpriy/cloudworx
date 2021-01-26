<template>
  <div class="card col-3">
      <div class="percentage">{{ states.percentage }}</div>
      <div class="state-value">
          <label>{{ states.label }}</label>
          <p>{{ states.value }}</p>
      </div>
      <div class="icon">
          <span class="fa fa-user fa-3x"></span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SingleStateCard',
    props: {
        states: Object
    }
}
</script>

<style scoped>

.card {
    display: flex;
    flex-direction: row;
    /* width: 370px; */
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