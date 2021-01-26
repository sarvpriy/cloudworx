<template>
  <div class="panel">
      <div v-if="headerTitle" class="panel-header">
          {{ headerTitle }}
      </div>
      <div class="panel-body">
          <slot />
      </div>
  </div>
</template>

<script>

export default {
    name: 'panel',
    props: {
        headerTitle: String
    }
}
</script>

<style>
.panel {
    /* width: 100%; */
    height: fit-content;
    margin: 10px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
}
.panel-header {
    padding: 20px 20px;
    font-size: 16px;
    text-align: start;
    border-bottom: 1px solid #e3e3e3;
    font-weight: 600;
}
.panel-body {
    /* padding: 10px 20px; */
    text-align: start;
}
</style>