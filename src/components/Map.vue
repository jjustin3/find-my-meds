<template>
  <l-map :zoom="zoom" :center="center" world-copy-jump :options="{ zoomControl: false }">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-control-zoom position="topright"></l-control-zoom>
    <l-marker v-for="marker in markers" :lat-lng="getCoords(marker)"></l-marker>
  </l-map>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LControlZoom } from 'vue2-leaflet'
import { read, utils } from 'xlsx'

export default {
  name: 'MyAwesomeMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: latLng(40.7128, -74.006),
      markerLatLng: latLng(40.7128, -74.006),
      markers: [],
    }
  },
  created() {
    this.parseSheet()
    /*let workbook = XLSX.readFile(businesses)
    let sheet = workbook.Sheets[workbook.SheetNames[0]]
    let json = XLSX.utils.sheet_to_json(sheet)*/
  },
  methods: {
    async parseSheet() {
      const f = await (await fetch('businesses.xlsx')).arrayBuffer()
      const wb = read(f)
      const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
      console.log(data)

      this.markers = data
    },

    getCoords(marker) {
      console.log(marker)
      console.log(latLng(marker.X_COORD, marker.Y_COORD))
      return latLng(marker.X_COORD, marker.Y_COORD)
    },
  },
}
</script>
