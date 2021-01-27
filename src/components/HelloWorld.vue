<template>
  <!-- <super-app /> -->
  <!-- <feed/> -->
  <Aquisition />
  <!-- <users-by-country /> -->
  <!-- <revenue /> -->
</template>

<script>
// import Feed from './Feed.vue'
// import SuperApp from './SuperApp.vue'
import Aquisition from "./Aquisition";
import UsersByCountry from './UsersByCountry.vue';
import Revenue from './Revenue.vue';

export default {
  components: { 
    // SuperApp, 
    // Feed ,
    Aquisition,
    UsersByCountry,
    Revenue,
  },
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
