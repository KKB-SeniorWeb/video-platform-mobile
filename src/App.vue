<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/assets/css/reset.css'
  export default {
    name: "App",
    
  }
</script>

<style>
 html{
    font-size: 9.25vw;
  }
  #app{
    overflow:auto;
  }
  /* 主体 */
  body{
    background-color: #efefef;
  }
  #container{
    width: 100%;
    padding: 1.55rem 0 1.63rem 0;
    box-sizing: border-box;
  }
  .wrap{
    width: 9.8rem;
    margin: 0 auto;
  }
  .sub_title{
    font-family: MicrosoftYaHei-Bold;
    font-size: .5rem;
    opacity: 0.86;
    line-height: 1.2rem;
    text-indent: .4rem;
  }
</style>
