<template>
  <div id="container">
    <!-- 用户信息 -->
    <div class="user_info">
      <div class="avatar_box">
        <a href="javascript:;">
          <img
            :src="require('../../assets/imgs/avatar.png')"
            alt=""
            class="avatar_img"
          />
        </a>
      </div>
      <p class="user_name">{{ user.nickname }}</p>
      <p>
        <span>用户ID：</span>
        <span class="userID">{{ user.userID }}</span>
      </p>
    </div>
    <!-- 属于用户的功能列表 -->

    <ul class="user_menu">
      <li>
<!--        <i class="iconfont icon-biaoqianA01_zhibo-68"></i>-->
        <router-link to="/user/viewsrecoard" class="user_views">
          观看记录
        </router-link>
      </li>
      <li>
<!--        <i class="iconfont icon-biaoqiankuozhan_xiaoxi-137"></i>-->
        <router-link to="/user/myReply" class="user_comment">
          我的回帖
        </router-link>
      </li>
      <li>
<!--        <i class="iconfont icon-biaoqianA01_shezhi-50"></i>-->
        <router-link to="/user/setup" class="user_setting">
          账号设置
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, getCurrentInstance } from "vue";
export default {
  name: "User",
  components: {},
  setup() {
    const state = reactive({
      user: {
        nickname: "",
        userID: ""
      }
    });
    const {ctx} = getCurrentInstance();
    onMounted(() => {
      console.log(111)
      if (!localStorage.getItem("token")) {
        ctx.$router.push("/user/signin");
      } else {
        //state.nickname = ctx.$store.state.user.nickname;
        //state.userID = ctx.$store.state.user.userID;
        console.log(localStorage.getItem("userInfo"));
        state.user = JSON.parse(localStorage.getItem("userInfo"));
      }
    });
    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
.user_info {
  width: 100%;
  height: 4.96rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.avatar_box {
  width: 2.7rem;
  height: 2.7rem;
  border: solid 0.02rem #7dc623;
  border-radius: 50%;
  padding: 0.08rem;
  margin-top: 0.5rem;
}
.avatar_box .avatar_img {
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
}
.user_info p {
  width: 100%;
  line-height: 0.7rem;
  font-size: 0.4rem;
  text-align: center;
}

.van-cell-group {
  margin-top: 0.25rem;
  background-color: transparent;
}
.van-cell {
  margin-bottom: 0.14rem;
}
.user_menu a {
  display: inline-block;
  width: 100%;
  height: 1.4rem;
  line-height: 1.4rem;
  box-sizing: border-box;
  font-size: 0.5rem;
  background-color: #fff;
  padding-left: 1.5rem;
  margin-bottom: 0.14rem;
}
.user_views {
  background: url(../../assets/imgs/views.png) no-repeat 0.7rem center,
    url(../../assets/imgs/arrow_more.png) no-repeat 9.8rem center;
  background-size: 0.6rem 0.6rem;
}
.user_comment {
  background: url(../../assets/imgs/comment.png) no-repeat 0.65rem center,
    url(../../assets/imgs/arrow_more.png) no-repeat 9.8rem center;
  background-size: 0.6rem 0.6rem;
}
.user_setting {
  background: url(../../assets/imgs/setting.png) no-repeat 0.7rem center,
    url(../../assets/imgs/arrow_more.png) no-repeat 9.8rem center;
  background-size: 0.5rem 0.5rem;
}
</style>
