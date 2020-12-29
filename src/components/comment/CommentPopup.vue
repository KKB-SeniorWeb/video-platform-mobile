<template>
  <!--  弹出评论框  -->
  111
</template>

<script>
import {
  reactive,
  toRefs,
  getCurrentInstance,
  watch
} from "vue";

export default {
  name: "CommentPopup",
  components: {
  },
  props: ["popupShow"],
  setup(props) {
    const {ctx} = getCurrentInstance();
    const state = reactive({
      show: props.popupShow,
      message: ""
    });

    watch(
      () => props.popupShow,
      show => {
        state.show = show;
      }
    );

    //关闭评论弹出框
    function closePopup() {
      state.show = false;
      ctx.$emit("update:popupShow", state.show);
    }

    return { ...toRefs(state), closePopup };
  }
};
</script>

<style scoped>
  .van-popup{
    padding: 0.1rem .17rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .van-cell::after{
    content: none;
  }
  .van-cell.van-field{
    background-color: rgba(128, 128, 128, 0.13);
    border-radius: 1rem;
  }
  .van-field__control::placeholder{
    color: darkslategray;
  }
  .van-button{
    position: absolute;
    right: .17rem;
    bottom: .1rem;
  }
</style>
