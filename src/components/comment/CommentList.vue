<template>
  <ul class="comment_list" ref="commentList">
    <li class="comment_item" v-for="item in commentList" :key="item.id">
      <router-link to="/user" class="user_avatar">
        <img :src="item.user.avatar_src" alt="" />
      </router-link>
      <div class="comment_info">
        <p class="about_comment">
          <a href="javascript:;" class="comment_user">{{ item.user.name }}</a>
          <span class="comment_time">{{ item.time }}</span>
        </p>
        <p class="comment_content">{{ item.comment_content }}</p>
      </div>
      <a
        href="javascript:;"
        class="comment_praise"
        :class="item.user.isLike ? 'active' : ''"
        @tap="likeHandle(item)"
      >
        {{ item.like }}
      </a>
    </li>
  </ul>
</template>

<script>
import BScroll from "better-scroll";
import { reactive, toRefs, getCurrentInstance,nextTick } from "vue";
export default {
  name: "CommentList",
  props: ["commentList"],
  components: {},
  setup() {
    const {ctx} = getCurrentInstance();
    const state = reactive({
      BS: null
    });
    nextTick(() => {
      state.BS = new BScroll(ctx.$refs.commentList, {
        tap: true
      });
    });
    function likeHandle(item){
      item.user.isLike = !item.user.isLike;
      item.user.isLike ? item.like++ : item.like--
    }

    return { ...toRefs(state) ,likeHandle};
  }
};
</script>

<style scoped>
/* 评论列表 */
.comment_item {
  width: 9.8rem;
  min-height: 1.95rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin-top: 0.14rem;
  /* display: none; */
  /* padding-bottom: .2rem; */
}
.comment_item .user_avatar {
  display: block;
  width: 1.5rem;
  height: 1.95rem;
}
.comment_item .user_avatar img {
  display: block;
  width: 1rem;
  height: 1rem;
  margin: 0.5rem auto;
}
.comment_item .comment_info {
  width: 7.5rem;
  padding-bottom: 0.2rem;
}
.comment_item .about_comment {
  height: 0.7rem;
  line-height: 0.7rem;
  display: flex;
  justify-content: space-between;
  min-width: 2.5rem;
  max-width: 2.7rem;
  margin-top: 0.1rem;
}
.comment_item .comment_user {
  font-size: 0.44rem;
}
.comment_item .comment_time {
  font-size: 0.3rem;
  color: #b9bdc0;
}
.comment_item .comment_content {
  min-height: 1rem;
  max-width: 7.5rem;
  font-size: 0.4rem;
  color: #1d1d1d;
}
.comment_item .comment_praise {
  width: 1rem;
  height: 1.3rem;
  font-size: 0.28rem;
  text-align: center;
  background: url(../../assets/imgs/praise.png) no-repeat center top;
  background-size: 0.8rem 0.8rem;
  padding-top: 0.8rem;
  box-sizing: border-box;
  margin-top: 0.5rem;
}
.comment_item .comment_praise.active {
  background: url(../../assets/imgs/praise_active.png) no-repeat center top;
  background-size: 0.8rem 0.8rem;
}
</style>
