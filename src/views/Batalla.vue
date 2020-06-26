<template>
    <div>
        <h1>Batalla page</h1>

        <b-input-group-append> 
    <b-form-input v-model="nombre"></b-form-input>
      <b-button v-on:click="buscar" variant="outline-success">Button</b-button>
    </b-input-group-append>
<div v-for="(heroe,index) in heroes" :key="index">
    <img :src="heroe.image.url" />
     <div>{{heroe.name}}</div>
</div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
    nombre: "",
    heroes: [],
      
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
    }
  }
};
</script>