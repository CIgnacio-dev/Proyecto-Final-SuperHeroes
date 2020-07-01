<template>
  <div class='fondo'>
    <b-container class='informacion'>
      <b-input-group prepend="Ingresa el héroe" class="mt-3">
        <b-form-input v-model="nombre"></b-form-input>
        <b-input-group-append>
          <b-button v-on:click="buscar" variant="outline-success">Buscar</b-button>
        </b-input-group-append>
      </b-input-group>

      <div class="mt-4">
        <h4>Caracteristicas de {{nombre}}</h4>
        <div v-for="(heroe,index) in heroes" :key="index">
          <img :src="heroe.image.url" />
          <h2>{{heroe.name}}</h2>

          <div>
            <b-input-group>
              <b-form-rating v-model="value" color="#ff8800"></b-form-rating>
              <b-input-group-append>
                <b-button @click="goFavs(heroe.image.url,heroe.name)">Favoritos</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

          <b-card-text>
            <h2>
              <b>Editorial:</b>
            </h2>
            <h4>{{heroe.biography.publisher}}</h4>
            <h2>
              <b>Raza:</b>
            </h2>
            <h4>{{heroe.appearance.race}}</h4>
          </b-card-text>
          <div>
            <h1>
              <b>Estadísticas</b>
            </h1>
            <h5>Inteligencia</h5>
            <b-progress
              :value="heroe.powerstats.intelligence"
              :max="max"
              variant="info"
              show-value
              class="mb-3"
            ></b-progress>

            <h5>Fuerza</h5>
            <b-progress 
              :value="heroe.powerstats.strength"
              :max="max"
              variant="success"
              show-value
              class="mb-3"
            ></b-progress>

            <h5>Velocidad</h5>
            <b-progress
              :value="heroe.powerstats.speed"
              :max="max"
              variant="warning"
              show-progress
              class="mb-3"
            ></b-progress>

            <h5>Resistencia</h5>
            <b-progress
              :value="heroe.powerstats.durability"
              :max="max"
              :precision="2"
              show-value
              class="mb-3"
            ></b-progress>

            <h5>Poder</h5>
            <b-progress
              :value="heroe.powerstats.power"
              :max="max"
              variant="danger"
              :precision="2"
              show-progress
              class="mb-3"
            ></b-progress>

            <h5>Combate</h5>
            <b-progress
              :value="heroe.powerstats.combat"
              :max="max"
              variant="dark"
              :precision="2"
              show-progress
              class="mb-3"
            ></b-progress>
          </div>
          <div>
            <b-button v-b-toggle.sidebar-variant>Ver más detalles</b-button>
            <b-sidebar
              id="sidebar-variant"
              title="Detalles:"
              bg-variant="dark"
              text-variant="light"
              shadow
            >
              <div class="px-3 py-2">
                <h2>
                  <b>Alias:</b>
                </h2>
                <h4>{{heroe.biography.aliases}}</h4>
                <h3>
                  <b>Parentezcos :</b>
                </h3>
                <h5>{{heroe.connections.relatives}}</h5>

                <b-img img :src="heroe.image.url" fluid thumbnail></b-img>
              </div>
            </b-sidebar>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

       




<script>
import {mapState} from 'vuex';
import axios from "axios";
export default {
  data() {
    return {
      nombre: "",
      heroes: [],
     value:'',
    };
    
  },
  methods: {
    buscar() {
      axios
        .get(
          `https://superheroapi.com/api.php/10224497507444638/search/${this.nombre}`
        )
        .then(result => {
          this.heroes = [...result.data.results];
          console.log(result.data.results);
        })
        .catch(error => {
          alert("no existe super heroe");
        });
    },

     goFavs(url, name){
       let heroe = {
         name: name,
         img: {
           url: url
         }
       }
    this.$store.dispatch('agregarFavs', heroe ),
    alert('Heroe Agregado')
    } 

  }
};
</script>
<style scoped>
/* .fondo{
  background-image: url('assets/img/versus.jpg');
  background-size: cover;
  background-position: center;
  height: 90rem; 
} */
</style>