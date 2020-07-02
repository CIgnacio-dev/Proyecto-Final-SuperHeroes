<template>
    <div>
<p>{{ msg }}</p>
        </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    msg: String
  }
}
</script>
<style>
p{
  text-align: center;
  color: grey;
}
</style>