<template>
<<<<<<< HEAD
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link to="/Login">Login</router-link> |
        <router-link to="/Favoritos">Favoritos</router-link> |
          <router-link to="/Batalla">Batalla</router-link> |
          <router-link to="/Historia">Historia</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
=======
  <div>
 <Navegador/>
 <Footer msg='Team CaGe 2020'/>
  </div>
</template>


<script>
import Navegador from "@/components/Navegador.vue";
import Footer from "@/components/Footer.vue";
export default {
components:{
  Navegador,
  Footer,
},
}
</script>

>>>>>>> master
