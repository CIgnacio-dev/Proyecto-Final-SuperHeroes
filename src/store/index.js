import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: "",
    email: "",
    password: "",
    uLogin: false,
    favs: [],
    heroes:[],
  },
  mutations: { //cambios a state
    cambioStateLogin(state) {
      state.uLogin = !state.uLogin;
      return state.uLogin;
    },
     setFavs(state, favoritos){
     state.favs = favoritos
    } 
  },
  actions: { //ejecutan mutations

 agregarFavs({commit, state}, heroe){
  let favoritos = state.favs;
  favoritos.push(heroe)
  let nombre = heroe.name;
  let imagen = heroe.img.url

  let favs = {  
    heroesfavoritos:  favoritos
  }
  let email = firebase.auth().currentUser.email
  let payload = { email, favs}
axios.post('https://us-central1-superheroebattle-b1245.cloudfunctions.net/usuarios/usuarios', payload).then(data=>
commit('setFavs', favoritos)) 

} 
    /* https://us-central1-superheroebattle-b1245.cloudfunctions.net/usuarios */
  },
  
  getters: { //obtienen ciertas propiedades de state
    getuLogin(state) {
      return state.uLogin;
    },
  
  },
  plugins: [createPersistedState()],
 
});