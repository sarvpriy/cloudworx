<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Dashboard />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Dashboard,
  }
}
</script>

<style>
body {
  background: #eff3f7;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
p, label {
  margin: 5px;
}
</style>
