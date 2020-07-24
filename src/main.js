import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$http = axios
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
