<template>
  <div class="b-analytics col-3">
    <div class="b-analytics__percentage">
      {{ states.percentage | percentage }}
    </div>

    <div class="circular-progress">
      <div class="circular-progress-circle">
        <!-- <div class="segment" :style="getCircleSkew1"></div>
                <div class="segment" v-if="states.percentage > 25" :style="getCircleSkew2"></div>
                <div class="segment" v-if="states.percentage > 50" :style="getCircleSkew3"></div>    
                <div class="segment" v-if="states.percentage > 75" :style="getCircleSkew4"></div> -->

        <div class="segment" style="transform: rotate(270deg) skew(0deg)"></div>
        <div class="segment" style="transform: rotate(0deg) skew(0deg)"></div>
        <div class="segment" style="transform: rotate(90deg) skew(20deg)"></div>
        <div
          class="segment"
          style="transform: rotate(180deg) skew(90deg)"
        ></div>
      </div>
    </div>

    <div class="b-analytics__type">
      <label class="b-analytics__label">{{ states.label }}</label>
      <p class="b-analytics__value">{{ states.value }}</p>
    </div>

    <div class="b-analytics__icon">
      <font-awesome-icon :icon="['fas', states.icon]" size="3x" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Analytic",
  props: {
    states: Object,
  },
  mounted() {
    // gsap.fromTo('.b-analytics',{opacity:0, y: 20 }, {opacity: 1 , y: 0 , duration: 1 });
  },
  computed: {
    getCircleSkew1: function () {
      return (
        "transform: rotate(270deg) skew(" +
        (this.states.percentage < 25 ? 90 - this.states.percentage : "0") +
        "deg)"
      );
    },
    getCircleSkew2: function () {
      return "transform: rotate(0deg) skew(" + (this.states.percentage >= 25) &&
        this.states.percentage < 50
        ? 90 - (this.states.percentage - 25)
        : "0" + "deg)";
    },
    getCircleSkew3: function () {
      return "transform: rotate(90deg) skew(" +
        (this.states.percentage >= 50) && this.states.percentage < 75
        ? 90 - (this.states.percentage - 50)
        : "0" + "deg)";
    },
    getCircleSkew4: function () {
      return "transform: rotate(180deg) skew(" + (this.states.percentage >= 75)
        ? 90 - (this.states.percentage - 75)
        : "0" + "deg)";
    },
  },
};
</script>

<style scoped>
.b-analytics {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  position: relative;
  width: inherit;
  min-width: 251px;
}
@media only screen and (max-width: 420px) {
  .b-analytics {
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 10px;
    position: relative;
    width: inherit;
    min-width: 251px;
  }
}
@media only screen and (min-width: 421px) and (max-width: 992px) {
  .b-analytics {
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 10px;
    position: relative;
    width: inherit;
    min-width: 251px;
    max-width: 374px;
  }
}
@media only screen and (min-width: 993px) {
  .b-analytics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 10px;
    position: relative;
    max-width: 400px;
    min-width: 251px;
    width: 20%;
  }
}

.b-analytics__percentage {
  border-radius: 50%;
  /* border: 5px solid #e3e3e3; */
  width: 40px;
  height: 40px;
  /* padding: 9px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 15px;
  z-index: 10;
  background: #fff;
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
.b-analytics__label {
}
.b-analytics__value {
}

.circular-progress {
  position: relative;
  left: 1px0;
  display: inline-block;
  margin-right: 20px;
  /* top: 10px; */
  left: 0px;
  z-index: 1;
}

.circular-progress-circle {
  position: relative;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
}

.segment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vw;
  background: #dcdcdc;
  transform-origin: 0 0;
}

@media only screen and (max-width: 420px) {
}
@media only screen and (min-width: 421px) and (max-width: 992px) {
}
@media only screen and (min-width: 993px) {
}
</style>