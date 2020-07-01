import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: '',
    email: "",
    password: "",
    userLogin: false
  },
  mutations: {
    
  },
  actions: { //ejecutan mutations
   
  },
  
  getters: {
goFavs(state){
  return state.value;
}
  },
 
});
