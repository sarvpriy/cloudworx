<template>
  <div class="b-analytics col-3">
      <div class="b-analytics__percentage">{{ states.percentage }}</div>
      <div class="b-analytics__type">
          <label class="b-analytics__label">{{ states.label }}</label>
          <p class="b-analytics__value">{{ states.value }}</p>
      </div>
      <!-- <div class="circular-progress">
        <div class="circular-progress-circle">
            <div class="segment" style="transform: rotate(270deg) skew(70deg)"></div>
            <div class="segment" style="transform: rotate(0deg) skew(30deg)"></div>
            <div class="segment" style="transform: rotate(90deg) skew(20deg)"></div>    
            <div class="segment" style="transform: rotate(180deg) skew(50deg)"></div>
        </div>
    </div> -->

      <div class="b-analytics__icon">
          <span class="fa fa-user fa-3x"></span>
      </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'Analytic',
    props: {
        states: Object
    },
    mounted() {
        // gsap.fromTo('.b-analytics',{opacity:0, y: 20 }, {opacity: 1 , y: 0 , duration: 1 });
    }
}
</script>

<style scoped>

.b-analytics {
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

.b-analytics__percentage {
    border-radius: 50%;
    border: 5px solid #e3e3e3;
    width: 50px;
    height: 50px;
    /* padding: 9px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.b-analytics__type {
    width: 72%;
    /* border: 1px solid red; */
    text-align: start;
    padding-left: 10px;
}
.b-analytics__icon {
    color: #ddd;
}
.b-analytics__label {}
.b-analytics__value {}

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