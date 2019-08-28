require('./bootstrap');
window.Vue = require('vue');
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import Store from './store'

Vue.use(BootstrapVue)

Vue.use(Vuex)

const store = new Vuex.Store(Store);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    store
});