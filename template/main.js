import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import uView from 'uview-ui'
Vue.use(uView);

import store from './store/index.js' 
Vue.prototype.$store = store
const app = new Vue({
	store,
    ...App
})
app.$mount()
