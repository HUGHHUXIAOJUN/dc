import Vue from 'vue'
import App from './App'
import uniPromise from './static/js/promise.js'
import {http} from './static/js/request.js'
import api from './static/js/api.js'
import global from './static/js/public.js'

Vue.prototype.global = global;
Vue.prototype.$uni = uniPromise;
Vue.prototype.http = http;
Vue.prototype.api = api;


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
