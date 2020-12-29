<template>
  <Fragment>
    <div class="mask" v-show="!nocomment">
      <!-- 评论区 -->
      <div class="comment_area" v-show="!enlarge">
        <div class="comment_info">
          <span class="text">正在评论</span>
          <span class="user">小K</span>
          <textarea class="comment_content" placeholder="在此输入你的评论"></textarea>
        </div>
        <div class="comment_btns">
          <a href="javascript:;" class="enlarge_btn"></a>
          <a href="javascript:;" class="publish_btn">发布</a>
        </div>
      </div>
      <!-- 评论区扩大 -->
      <div class="comment_enlarge" v-show="enlarge">
        <div class="comment_info">
          <span class="text">正在评论</span>
          <span class="user">小K</span>
          <textarea class="comment_content" placeholder="在此输入你的评论"></textarea>
        </div>
        <div class="comment_btns">
          <a href="javascript:;" class="reduce_btn"></a>
          <a href="javascript:;" class="publish_btn">发布</a>
        </div>
      </div>
    </div>
    <div class="nocomment" v-show="nocomment">暂无评论</div>
  </Fragment>
</template>

<script>
import { reactive } from "vue";
import { Fragment } from "vue-fragment";

export default {
  name: "CommentBoard",
  components: {
    Fragment
  },
  setup() {
    const state = reactive({
      nocomment: false,
      enlarge: false
    });

    return {state}
  }
};
</script>

<style scoped>
</style>