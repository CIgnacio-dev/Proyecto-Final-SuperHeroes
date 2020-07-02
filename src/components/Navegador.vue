<template>
  <div id='nav'>
  <b-navbar type="dark" variant="secondary">
        <b-navbar-nav>
          <b-nav-item><router-link to="/Home">Home</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/Batalla" v-if="uLogin">Batalla</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/Caracteristicas" v-if="uLogin"
              >Caracteristicas</router-link
            ></b-nav-item>
          <b-avatar button @ click = "onClick"  icon="person-circle"  class = "align-center" ></b-avatar>
          <b-nav-item-dropdown text="Usuario" right>
            
            <b-dropdown-item>
              <router-link to="/Login" v-if="!uLogin">Login</router-link></b-dropdown-item
            >
            <b-dropdown-item><router-link to="/Favoritos" v-if="uLogin">Favoritos</router-link></b-dropdown-item> 
            <b-dropdown-item><router-link to="/Registro" v-if="!uLogin">Registro</router-link></b-dropdown-item> 
            <b-button @click="signOut" variant="primary" v-if="uLogin">Logout</b-button>
            
          </b-nav-item-dropdown>
        </b-navbar-nav>
    
      </b-navbar>
      <router-view />
  </div>
</template>


<script>
import Firebase from "firebase";
export default {
computed: {
    uLogin() {
      return this.$store.getters.getuLogin;
    },
  },
  methods:{
     signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          }),
          this.$store.commit("cambioStateLogin"), 
          then.alert('Usuario Deslogeado')
           
        });
    }
  },
};
</script>
<style>

</style>