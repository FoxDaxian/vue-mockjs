import Vue from 'vue'
import App from './App'
import './util/mock'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource);
Vue.use(VueRouter);
import "../static/reset.css"
/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
