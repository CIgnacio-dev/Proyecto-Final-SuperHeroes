<template>
  <div id='batalla'>
    <h1>Batalla de SuperHéroes</h1>
    <ListaBatalla></ListaBatalla>

    <b-container>
      <b-row>
        <b-col>
          <b-input-group-append>
            <b-form-input v-model="nombre1"></b-form-input>
            <b-button v-on:click="buscar1" variant="outline-success">Button</b-button>
          </b-input-group-append>
          <div v-for="(heroe, index) in heroes" :key="index">
            <img :src="heroe.image.url" />
            <b-button v-on:click="eliminarHeroe" variant="outline-success">No Quiero éste Héroe</b-button>
            <h3>{{ heroe.name }}</h3>
            <b-progress :value="heroe.powerstats.intelligence" variant="info"></b-progress>
            <p>Inteligencia</p>
            <b-progress :value="heroe.powerstats.strength" variant="success"></b-progress>
            <p>Fuerza</p>
            <b-progress :value="heroe.powerstats.speed" variant="warning"></b-progress>
            <p>Velocidad</p>
            <b-progress :value="heroe.powerstats.durability"></b-progress>
            <p>Durabilidad</p>
            <b-progress :value="heroe.powerstats.power" variant="danger"></b-progress>
            <p>Poder</p>
            <b-progress :value="heroe.powerstats.combat" variant="dark"></b-progress>
            <p>Combate</p>
          </div>
        </b-col>

        <b-col>
          <b-input-group-append>
            <b-form-input v-model="nombre2"></b-form-input>
            <b-button v-on:click="buscar2" variant="outline-success">Button</b-button>
          </b-input-group-append>
          <div v-for="heroe in heroes2" :key="heroe.id">
            <img :src="heroe.image.url" />
            <b-button v-on:click="borrarHeroe" variant="outline-success">No Quiero éste Héroe</b-button>
            <h3>{{ heroe.name }}</h3>
            <b-progress :value="heroe.powerstats.intelligence" variant="info"></b-progress>
            <p>Inteligencia</p>
            <b-progress :value="heroe.powerstats.strength" variant="success"></b-progress>
            <p>Fuerza</p>
            <b-progress :value="heroe.powerstats.speed" variant="warning"></b-progress>
            <p>Velocidad</p>
            <b-progress :value="heroe.powerstats.durability"></b-progress>
            <p>Durabilidad</p>
            <b-progress :value="heroe.powerstats.power" variant="danger"></b-progress>
            <p>Poder</p>
            <b-progress :value="heroe.powerstats.combat" variant="dark" ></b-progress>
            <p>Combate</p>
          </div>
        </b-col>
      </b-row>
      <b-button v-on:click="peleaHeroes" size="lg" variant="danger" >Fight!</b-button>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import ListaBatalla from "@/components/ListaBatalla.vue"
export default {
  name: 'Batalla',
  components:{
ListaBatalla
  },
  data() {
    return {
      nombre1: "",
      nombre2: "",
      heroes: [],
      heroes2: [],
    };
  },
  methods: {
    buscar1() {
      axios
        .get(
          `https://superheroapi.com/api.php/10224497507444638/search/${this.nombre1}`
        )
        .then(result => {
          this.heroes = [...result.data.results];
          /*  result.data.results.forEach((heroe) => this.heroes.push(heroe)); */
        })
        .catch(error => {
          alert("no existe super heroe");
        });
    },
    buscar2() {
      axios
        .get(
          `https://superheroapi.com/api.php/10224497507444638/search/${this.nombre2}`
        )
        .then(result => {
          this.heroes2 = [...result.data.results];
          /*  result.data.results.forEach((heroe) => this.heroes.push(heroe)); */
        })
        .catch(error => {
          alert("no existe super heroe");
        });
    },

    eliminarHeroe() {
      this.heroes.splice(this.heroes[this.heroes.length], 1)
    },
    borrarHeroe() {
      this.heroes2.splice(this.heroes2[this.heroes2.length], 1) 
     
    },
peleaHeroes(){

let promedioHeore1 = 0;
let powerStats = this.heroes[0].powerstats
for (const property in powerStats) {
  promedioHeore1+= Number(powerStats[property])
}

let promedioHeore2 = 0;
let powerStats2 = this.heroes2[0].powerstats
for (const property in powerStats2) {
  promedioHeore2+= Number(powerStats2[property])
}

console.log('Promedio heroe1 => ', promedioHeore1/6)
console.log('Promedio heroe2 => ', promedioHeore2/6)
alert(promedioHeore1 < promedioHeore2 ? 'El Ganador es el Heroe 1' : ' El Ganador es Heroe 2'  )
}
    
  },
  
}

</script>
