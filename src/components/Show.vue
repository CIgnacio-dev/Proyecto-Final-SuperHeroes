<template>
  <div class="hello col-12 col-sm-4 col-md-3 p-3">
    <div class="card" style="width: 18rem;">
      <img :src="img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text" :id="id"></p>

        <svg @click="makeLike" style="width:30px;height:30px" viewBox="0 0 24 24">
          <path
            :fill="like? 'black' : 'white'" stroke="black"
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: ["id", "name", "img", "description", "like"],
  methods: {
    makeLike(){
      this.$emit('makeLike', this.id)
    }
  },
  mounted() {
    document.getElementById(this.id).innerHTML = this.description;
  }
};
</script>

<style lang="scss" scoped>
.card-text {
  height: 150px;
  overflow-y: scroll;
}
</style>
