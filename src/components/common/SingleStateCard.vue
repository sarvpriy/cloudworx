<template>
  <div class="card col-3">
      <div class="percentage">{{ states.percentage }}</div>
      <div class="state-value">
          <label>{{ states.label }}</label>
          <p>{{ states.value }}</p>
      </div>
      <!-- <div class="circular-progress">
        <div class="circular-progress-circle">
            <div class="segment" style="transform: rotate(270deg) skew(70deg)"></div>
            <div class="segment" style="transform: rotate(0deg) skew(30deg)"></div>
            <div class="segment" style="transform: rotate(90deg) skew(20deg)"></div>    
            <div class="segment" style="transform: rotate(180deg) skew(50deg)"></div>
        </div>
    </div> -->

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

/* .circular-progress {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.circular-progress-circle {
  position: relative;
  width: 200px;
  height: 200px;
  background: red;
  border-radius: 50%;
  overflow: hidden;
}

.segment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vw;
  background: blue;
  transform-origin: 0 0;
} */
</style>