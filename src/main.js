import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
=======
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'



var firebaseConfig={
  apiKey: "AIzaSyCfXQcmE5ZOFQL3UNlA6dwYRFWG9SnI1P8",
  authDomain: "superheroebattle-b1245.firebaseapp.com",
  databaseURL: "https://superheroebattle-b1245.firebaseio.com",
  projectId: "superheroebattle-b1245",
  storageBucket: "superheroebattle-b1245.appspot.com",
  messagingSenderId: "66738957126",
  appId: "1:66738957126:web:17856c06cbffc21fb91347"
}

firebase.initializeApp(firebaseConfig);


>>>>>>> master

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
