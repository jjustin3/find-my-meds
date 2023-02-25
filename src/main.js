import Vue from 'vue'
import App from './App.vue'
import './style.css'
import 'leaflet/dist/leaflet.css'

import { Icon } from 'leaflet'

import {
  provideFASTDesignSystem,
  baseLayerLuminance,
  fastCard,
  fastButton,
  fastSearch,
} from '@microsoft/fast-components'

provideFASTDesignSystem().register(baseLayerLuminance, fastCard(), fastButton(), fastSearch())

// https://stackblitz.com/edit/web-platform-3vpags?file=index.html
baseLayerLuminance.withDefault(1) // light mode

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
