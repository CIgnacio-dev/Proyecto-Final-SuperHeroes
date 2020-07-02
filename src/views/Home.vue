<template>
  <div class="home">
<div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
<<<<<<< HEAD
      caption="First slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
=======
      caption="¿Tienes un SuperHeroe Favorito?"
      img-src="https://images.squarespace-cdn.com/content/v1/53ea17e1e4b06e89e7d06393/1569148940926-31LRM711EO3UH70MKTJ8/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcf4OxbJOyh_wHUnyc4kQLQ6SBshRGOku7c30Y_IRDNPta8R2IY5BHMaEj1zOWoDTZ/MORE-Marvel-DC-Superheroes-Lunch-Atop-A-Skyscraper-wonder-woman-captain-america-iron-man-deadpool-spider-man-superman-storm-x-men-silver-surfer-avengers-flash-MCU-girder-hulk-art-by-dan-avenell-art-satin-print-wall-art.jpg"
    ></b-carousel-slide>
     <b-carousel-slide
      caption="Batallas entre Super Heroes"
      img-src="https://cdn.theculturetrip.com/wp-content/uploads/2018/03/vishputron-ka-aagman-title-cover.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Caracteristicas de tu Super Heroe Favorito"
      img-src="https://c4.wallpaperflare.com/wallpaper/725/621/185/marvel-comics-hero-collage-artwork-wallpaper-preview.jpg"
>>>>>>> master
    ></b-carousel-slide>
  </b-carousel>
</div>

<<<<<<< HEAD
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
 <HelloWorld msg="Welcome to Your Vue.js App"/>

=======
 <div class="container">
   <div class="row">
 <b-button class="col boton_sidebar" v-b-toggle.sidebar-variant>¿De qué trata esta App?"</b-button>
    <b-sidebar id="sidebar-variant" title="¿De qué trata esta app?" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Esta será una APP con el propósito de dar a conocer más de 600 super héroes, analizando su historia, sus poderes y su origen. Con la app no solo podremos ver las características, si no que podremos 'enfrentarlos' para así tener una idea de en qué característica sobresale frente a su adversario.

          Esperamos que disfrutes la experiencia.
        </p>
        <b-img src="https://www.comicbasics.com/wp-content/uploads/2017/09/Superman.png" fluid thumbnail></b-img>
        <b-img src="https://www.comicbasics.com/wp-content/uploads/2017/09/Wonder-Woman.png" fluid thumbnail></b-img>
        </div>
    </b-sidebar>
     </div>
</div>
>>>>>>> master

  </div>
</template>

<script>
<<<<<<< HEAD
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
  
}
</script>
=======
export default {
  name: 'Home',
}
</script>
<style>
.boton_sidebar{
  max-width: 10%;
  margin: 2%;
  text-align: center;
}
</style>
>>>>>>> master
