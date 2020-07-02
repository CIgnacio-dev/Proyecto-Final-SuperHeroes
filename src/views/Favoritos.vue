<template>
<<<<<<< HEAD
<div>
    <h1> favoritos page </h1>
    </div>
    </template>
=======
  <div>
    <b-container>
      <div class="mt-4">
        <h4>Favoritos</h4>
        <div v-for="(heroe,index) in favs" :key="index">
          <b-card-text>
            <img :src="heroe.image.url" />
          <h2>{{heroe.name}}</h2>>
          </b-card-text>
             <b-button variant="danger" @click="eliminar(index)"
                >Eliminar</b-button
              >
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Favoritos",
  data() {
    return {
      favoritos: [],
      heroes: [],
    };
  
  },
methods:{
created() {
    axios
      .get(
        "https://us-central1-superheroebattle-b1245.cloudfunctions.net/usuarios/usuarios"
      )
      .then(data => {
        this.setFavs(data.heroes);
      });
  },
  
},
  computed: {
    
  },

};
</script>
>>>>>>> master
