<template>
  <div class="panel" :class="`panel-${panelType}`">
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
        headerTitle: String,
        panelType: String
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
@media only screen and (max-width: 420px) {
.panel-lg {
    width: 95%;
    min-width: 350px;
}
.panel-sm {
    width: 95%;
    min-width: 350px;
}
}
@media only screen and (min-width: 421px) and (max-width: 992px) {

.panel-lg {
    width: 95%;
    /* min-width: 600px; */
}
.panel-sm {
    width: -webkit-fill-available;
    /* min-width: 289px; */
    max-width: 337px;
}
}
@media only screen and (min-width: 993px) {

.panel-lg {
    width: 48%;
    min-width: 600px;
    max-width: 903px;
}
.panel-sm {
    width: 50%;
}
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

@media only screen and (max-width: 420px) {
}
@media only screen and (min-width: 421px) and (max-width: 992px) {
}
@media only screen and (min-width: 993px) {
}
</style>