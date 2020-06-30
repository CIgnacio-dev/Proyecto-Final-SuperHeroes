<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="secondary">
        <b-navbar-nav>
          <b-nav-item><router-link to="/Home">Home</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/Batalla">Batalla</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/Caracteristicas"
              >Caracteristicas</router-link
            ></b-nav-item>
          <b-avatar button @ click = "onClick"  icon="person-circle"  class = "align-center" ></b-avatar>
          <b-nav-item-dropdown text="Usuario" right>
            
            <b-dropdown-item>
              <router-link to="/Login">Login</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="/Favoritos"
                >Favoritos</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
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

</style>

