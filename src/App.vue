<template>
  <div id="app">
    <fast-design-system-provider base-layer-luminance="1">
      <fast-card>
        <fast-search placeholder="search"></fast-search>
      </fast-card>
      <Map />
    </fast-design-system-provider>
  </div>
</template>

<script>
import Map from './components/Map.vue'

export default {
  components: {
    Map,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

fast-card {
  padding: 20px;
  width: fit-content;
  height: fit-content;
  position: absolute;
  z-index: 999;
}
</style>
