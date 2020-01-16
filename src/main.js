import Vue from 'vue'
import SearchPage from './root/SearchPage.vue'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(SearchPage)
}).$mount('#app')
