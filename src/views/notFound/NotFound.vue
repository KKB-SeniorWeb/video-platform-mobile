<template>
  <div id="container">
    <img :src="require('../../assets/imgs/404.png')" alt="">
    <div class="text">Oops!页面不见辽</div>
  </div>
</template>

<script>
export default {
name: "NotFound"
}
</script>

<style scoped>

  img{
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 3.2rem auto 1rem;
  }
  .text{
    font-size: .5rem;
    text-align: center;
  }
</style>