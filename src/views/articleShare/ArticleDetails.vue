<template>
  <div id="container" ref="container">
    <div class="article_details" v-show="!loading" ref="articleDetails">
      <h3 class="sub_title">文章详情</h3>
      <div class="wrap">
        <!-- 文章 -->
        <div class="article">
          <h4 class="article_title">{{data.article_title}}</h4>
          <p>
            <span class="article_time">{{data.article_time}}</span>
            <a href="javascript:;" class="article_author">妙味前端</a>
            <span>
              阅读
              <span class="article_views">{{data.article_views}}</span>
            </span>
          </p>
          <div class="article_content">{{data.article_content}}</div>
          <div class="btns">
            <a href="javascript:;" class="btn" @tap="fn">发表评论</a>
          </div>
        </div>
        <div class="comment_box">
          <div class="wrap">
            <CommentList :comment-list="commentList"></CommentList>
          </div>
        </div>
      </div>
    </div>
    <!--  Loading  -->
    <!--  弹出评论框  -->
<!--    <CommentPopup v-show="show" v-dialog:popupShow="show"></CommentPopup>-->
  </div>
</template>

<script>
import CommentList from "../../components/comment/CommentList";
// import CommentPopup from "../../components/comment/CommentPopup";
import { reactive, toRefs, onMounted ,getCurrentInstance,nextTick,} from "vue";
import BScroll from 'better-scroll'
export default {
  name: "ArticleDetails",
  components: {
    CommentList,
    // CommentPopup,
  },
  setup() {
    const {ctx} = getCurrentInstance()
    const state = reactive({
      loading: false,
      data: {},
      commentList: [],
      BS: null,
      show: false
    });
    nextTick(()=>{
      state.BS = new BScroll(ctx.$refs.articleDetails,{
        tap: true
      })
    });
    function fn(){
      state.show = true
    }

    onMounted(() => {
      if (!state.loading) {
        state.data = {
          article_title: "年终回顾 | 为你汇总一份「前端技术清单」",
          article_time: "2天前",
          article_content:
              "2018 眼看就要过去了，今年的你相较去年技术上有怎样的收获呢？\n" +
              "\n" +
              "                        记得年初的时候我给自己制定了一个学习计划，现在回顾来看完成度还不错。但仍有些遗憾，一些技术点没有时间去好好学习。\n" +
              "                        图片描述\n" +
              "\n" +
              "                        清单 github 地址\n" +
              "\n" +
              "                        https://github.com/alienzhou/...\n" +
              "\n" +
              "                        不论你是正在自学前端遇到了瓶颈，还是对某些技术熟练掌握但某些还未涉足，都希望这份清单能对你有所帮助。\n" +
              "\n" +
              "                        由于个人精力有限，一些技术点的归纳可能有失偏颇，或者目前并未纳入进来，因此github 上的清单内容 也会不断更新。目前只包含纯前端基础内容，NodeJS\n" +
              "                        、客户端泛前端、小程序、可视化等内容先留着坑吧。\n" +
              "\n" +
              "                        年度报告\n" +
              "\n" +
              "                        2018 前端工具调查报告\n" +
              "\n" +
              "                        https://ashleynolan.co.uk/blo...\n" +
              "\n" +
              "                        2018 JavaScript 调查报告\n" +
              "\n" +
              "                        https://2018.stateofjs.com/",
          article_views: 1908
        };
        state.commentList = [
          {
            user: {
              id: 0,
              name: "小K",
              // eslint-disable-next-line no-undef
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
              // eslint-disable-next-line no-undef
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
              // eslint-disable-next-line no-undef
              avatar_src: require("../../assets/imgs/avatar.png"),
              isLike: false
            },
            id: 2,
            comment_content: "开课吧的课棒极了！",
            type: "video",
            like: 12,
            time: "今天17:45"
          }
        ];
      }
    });

    return { ...toRefs(state) ,fn};
  }
};
</script>

<style scoped>
.article_details {
  background-color: #fafafa;
  padding-bottom: 0.3rem;
}
.article {
  width: 100%;
  min-height: 3.36rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px 0px rgba(183, 183, 183, 0.51);
  border-radius: 0.1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.26rem;
  box-sizing: border-box;
}
.article .article_title {
  line-height: 0.8rem;
  font-size: 0.5rem;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.article p {
  font-size: 0.4rem;
  height: 0.7rem;
  margin-left: 0.3rem;
  color: #81858a;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.article .article_time {
  /* color: #81858a; */
  margin-right: 0.2rem;
}
.article .article_author {
  color: #54bfff;
  margin-right: 0.2rem;
}
.article .article_content {
  font-size: 0.44rem;
  color: #111;
  padding: 0 0.34rem;
  box-sizing: border-box;
  line-height: 0.66rem;
  margin-top: 0.3rem;
  /* padding-bottom: .5rem; */
  box-sizing: border-box;
}
/* 发表评论按钮 */
.btns {
  display: flex;
  justify-content: flex-end;
}
.btn {
  display: block;
  width: 2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #54bfff;
  color: #fff;
  border-radius: 0.1rem;
  font-family: SourceHanSansCN-Medium;
  font-size: 0.4rem;
  margin-right: 0.46rem;
  margin-top: 0.2rem;
  text-align: center;
}

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
}
.comment_item p {
  line-height: 0.6rem;
}
.comment_item .comment_user {
  font-size: 0.44rem;
}
.comment_item .comment_time {
  font-size: 0.3rem;
  color: #b9bdc0;
}
.comment_item .comment_content {
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
  display: none;
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