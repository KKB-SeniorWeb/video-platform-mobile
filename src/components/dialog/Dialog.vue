<template>
  <div id="dialog_box" class="red">
    这是错误操作的弹窗
  </div>
</template>

<script>
import {reactive,getCurrentInstance} from 'vue';
export default {
name: "dialog",
  props:['text'],
  setup(){
    const state = reactive({
      error:{
        color:'red'
      },

    })
    const {ctx} = getCurrentInstance()()
    console.log(ctx)
    return {state}
  }
}
</script>

<style scoped>
  #dialog_box{
    animation: show 1s;
  }
  @keyframes show {
    0% {
      opacity: 0;
      transform: translate(-1rem);
    }
    40% {
      opacity: 1;
      transform: translate(0);
    }
    60%{
      opacity: 1;
      transform: translate(0);
    }
    100% {
      opacity: 0;
      transform: translate(1rem);
    }
  }
  .red{
    background-color: rgba(255,0,0,.5);
  }
</style>