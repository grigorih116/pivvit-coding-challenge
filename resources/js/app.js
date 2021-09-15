require('./bootstrap');
window.Vue = require('vue').default;

import axios from "axios"
import VueAxios from "vue-axios"
import App from "./components/App.vue";
import routes from "./routes"
import VueRouter from "vue-router"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import Vue from "vue";

axios.defaults.baseURL = "/api/"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component(App);


const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
