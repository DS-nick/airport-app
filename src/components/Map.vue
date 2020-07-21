<template>
  <div id="map" style="width: 100%; height: 100vh;"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  created() {},
  mounted() {
    console.log("mounted");
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGVuaXNrdWJpdHNraXkiLCJhIjoiY2pvdG1hN3pnMDhtYzN2b2R2bGFibWkwYSJ9.muCaA0G98Mye4xZ797Ptjw";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
      center: [71.380505, 51.161644], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
};
</script>
