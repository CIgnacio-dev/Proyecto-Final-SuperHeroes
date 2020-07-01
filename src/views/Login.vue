<template>
  <div class="hello">
    <b-container>
      
      <h1>Ingresa a tu super cuenta</h1>
 <b-form v-if="show">

      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="ejemplo@mail.com"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Entra tu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:"  label-for="input-2">
        <b-form-input
        type="password"
          id="input-2"
          v-model="form.password"
          required
          placeholder="Entra tu nombre"
        ></b-form-input>
      </b-form-group>

     
      
      <b-button @click="login" variant="primary">Login</b-button>
     
    </b-form>
    </b-container>
 
  </div>
</template>
  
<script>
import Firebase from 'firebase'
export default {
 /*  props:['user'],
  name: 'FormLogin', */
  data() {
      return {
        form:{
          email:'usuario@shb.cl',
          password:'heroes',
        },
        show: true
      }
  },
  methods: {
    login(){
        Firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then( data => console.log(data),
        this.$router.push({ name: 'Favoritos' })
        )
        
}, signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    } }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  background-image: '/assets/img/superheroes-marvel-dc.jpg';
}
</style>

