<template>
  <div id="container" :class="loading?'loading':''">
    <div class="video_details" v-show="!loading">
      <h3 class="sub_title">小程序框架</h3>
      <div class="wrap">
        <!--                <img :src="require('../../assets/imgs/videoplayer.png')" alt="" class="playerimg">-->
        <video id="player" ref="videoplayer">请升级浏览器以支持 html5 video</video>
      </div>
      <div class="comment_box">
        <div class="comment_heading">
          <h3 class="sub_title">相关评论</h3>
          <a href="javascript:;" class="btn">发表评论</a>
        </div>
        <div class="wrap">
          <!--          评论列表          -->
          <CommentList :comment-list="data.commentList"></CommentList>
          <div class="mask">
            <!-- 评论区 -->
            <div class="comment_area">
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
            <div class="comment_enlarge">
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
          <div class="nocomment">暂无评论</div>
        </div>
      </div>
    </div>
    <!--  Loading  -->
  </div>
</template>

<script>
import CommentList from "../../components/comment/CommentList";
import larkplayer from "larkplayer";
import { reactive, toRefs,onMounted,getCurrentInstance } from "vue";

export default {
  name: "VideoDetails",
  components: {
    CommentList
  },
  setup() {
    const {ctx} = getCurrentInstance();
    const state = reactive({
      player: null,
      loading: false,
      data: {}
    });

    onMounted(() => {
      if (!state.loading) {
        let width = getComputedStyle(ctx.$refs.videoplayer).width;
        let height = getComputedStyle(ctx.$refs.videoplayer).height;
        state.player = larkplayer(
          "player",
          {
            width,
            height,
            controls: true,
            src: state.data.video_src,
            preload: true,
            type: "video/mp4"
          },
          () => {
            console.log("player is ready");
          }
        );
      }

      state.data = {
        video_src: require("../../assets/video/1.mp4"),
        commentList: [
          {
            user: {
              id: 0,
              name: "小K",
              avatar_src: require("../../assets/imgs/avatar.png"),
              isLike: false
            },
            id: 0,
            comment_content: "mpvue是一个基于vue.js开发小程序的前端框架",
            type: "video",
            like: 18,
            time: "今天17:45"
          },
          {
            user: {
              id: 0,
              name: "小K",
              avatar_src: require("../../assets/imgs/avatar.png"),
              isLike: true
            },
            id: 1,
            comment_content:
              "不过我们也该思考一下，为什么大家对微信小程序自带的机制有这么多意见，为什么大家对vue这么认同，为什么多端兼容这个事情这么重要，为什么微信小程序没有拥抱开源，为什么微信小程序的技术栈没能做到标准化通用化。为了兼容微信小程序，前端工程师做了这么多工作，弄了那么多框架，到底得到的是什么。",
            type: "video",
            like: 50,
            time: "今天17:45"
          },
          {
            user: {
              id: 0,
              name: "小K",
              avatar_src: require("../../assets/imgs/avatar.png"),
              isLike: false
            },
            id: 2,
            comment_content: "开课吧的课棒极了！",
            type: "video",
            like: 12,
            time: "今天17:45"
          }
        ]
      };
    });

    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
.van-loading {
  width: 4rem;
  height: 4rem;
  margin: 50% auto;
}
/* 视频详情 */
.video_details {
  background-color: #fafafa;
  padding-bottom: 0.3rem;
}
.playerimg {
  width: 9.7rem;
  height: 5.5rem;
}
#player {
  width: 9.7rem;
  height: 5.5rem;
}
.comment_heading {
  display: flex;
  justify-content: space-between;
}
.comment_heading .btn {
  width: 2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #54bfff;
  color: #fff;
  border-radius: 0.1rem;
  font-family: SourceHanSansCN-Medium;
  font-size: 0.4rem;
  margin-right: 0.64rem;
  margin-top: 0.2rem;
  text-align: center;
}

/* 评论框 */
.comment_area {
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px 0px rgba(183, 183, 183, 0.51);
  border-radius: 0.1rem;
  position: fixed;
  left: 0;
  bottom: 1.63rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  /* display: none; */
}
.comment_enlarge {
  width: 100%;
  height: 9.8rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px 0px rgba(183, 183, 183, 0.51);
  border-radius: 0.1rem;
  position: fixed;
  left: 0;
  bottom: 1.63rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  /* display: none; */
}
.mask {
  position: fixed;
  left: 0;
  top: 1.55rem;
  width: 100vw;
  height: calc(100vh - 3.2rem);
  background: rgba(0, 0, 0, 0.3);
  display: none;
}
#container.commenting {
  padding-bottom: 4.66rem;
  background-color: #fafafa;
}
#container.commenting_enlarge {
  padding-bottom: 11.57rem;
  background-color: #fafafa;
}
.comment_info {
  width: 9rem;
  margin-left: 0.28rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
span {
  vertical-align: top;
  line-height: 0.5rem;
  font-size: 0.4rem;
}
.text {
  font-family: MicrosoftYaHei;
  color: #81858a;
}
.user {
  font-family: MicrosoftYaHei;
  color: #1d1d1d;
  margin-left: 0.2rem;
}
.comment_content {
  outline: none;
  resize: none;
  border: none;
  padding: 0;
  width: 9rem;
  color: #1d1d1d;
}
.comment_area .comment_content {
  height: 2rem;
}
.comment_enlarge .comment_content {
  height: 9rem;
}
.comment_btns {
  width: 1.8rem;
  position: relative;
}
.enlarge_btn {
  display: block;
  width: 100%;
  height: 1rem;
  background: url(../../assets/imgs/enlarge_btn.png) no-repeat 80% center;
  background-size: 0.5rem 0.5rem;
}
.reduce_btn {
  display: block;
  width: 100%;
  height: 1rem;
  background: url(../../assets/imgs/reduce_btn.png) no-repeat 80% center;
  background-size: 0.5rem 0.5rem;
}
.publish_btn {
  display: block;
  color: #54bfff;
  font-size: 0.4rem;
  line-height: 1rem;
  /* text-align: left; */
  /* text-indent: .8rem; */
  /* margin-right: .2rem; */
  margin-top: 1rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.36rem;
}
/* 暂无评论 */
.nocomment {
  width: 100%;
  height: 8.1rem;
  background: url(../../assets/imgs/nocomment.png) no-repeat center center;
  background-size: 6.32rem 4.66rem;
  font-family: AlibabaPuHuiTiR;
  font-size: 0.36rem;
  color: #666666;
  padding-top: 5rem;
  text-align: center;
  box-sizing: border-box;
  display: none;
}
</style>

