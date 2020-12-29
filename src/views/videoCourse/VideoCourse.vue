<template>

    <!--  视频课程  -->
    <div id="container" v-if="$route.path == '/course'">
      <div class="video_course" v-show="!loading">
        <h3 class="sub_title">视频教程</h3>
        <Navigator :activeIndex="activeIndex"></Navigator>
        <div class="wrap">
          <VideoList :videoList="videoList" ref="videoList"></VideoList>
        </div>
      </div>
      <!--  Loading  -->
<!--      <van-loading color="#54bfff" v-show="loading" size="4rem" />-->
    </div>
    <!--  首页  -->
    <div class="video_course" v-else-if="$route.path == '/home'" v-show="!loading">
      <h3 class="sub_title" :class="$route.path == '/home' ? 'marginBottom' : ''">视频教程</h3>
      <Navigator :activeIndex="activeIndex"></Navigator>
      <div class="wrap">
        <VideoList :videoList="videoList" ref="videoList"></VideoList>
        <a href="javascript:;" class="video_more more" v-if="this.$route.path == '/home'">查看更多</a>
      </div>
    </div>

</template>

<script>
import VideoList from "../../components/videoCourse/VideoList";
import Navigator from "../../components/videoCourse/Navigator";
import { reactive, toRefs } from "vue";
import {getVideoList} from "@/api/request";
import BScroll from "better-scroll";
import {getCurrentInstance, nextTick} from "@vue/runtime-dom";

export default {
  name: "VideoCourse",
  components: {
    VideoList,
    Navigator,
  },
  setup() {
    const {ctx} = getCurrentInstance();
    const state = reactive({
      loading: false,
      activeIndex: 0,
      videoList: []
    });
    nextTick(() => {
      state.BS = new BScroll(ctx.$refs.videoList, {
        tap: true
      });
    });
    getVideolist()
    function getVideolist(){
      console.log('请求视频教程列表')
      getVideoList({
        sort: 'sort',
        limit: 20,
        page: 1,
        type: 'all'
      }).then(res => {
        console.log(res)
      })
    }

    if (!state.loading) {
      state.videoList = [
        {
          id: 0,
          title: "面向对象",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 107,
          comment_time: 85,
          type: "other"
        },
        {
          id: 1,
          title: "Koa",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 62,
          comment_time: 51,
          type: "other"
        },
        {
          id: 2,
          title: "小程序",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 93,
          comment_time: 23,
          type: "小程序"
        },
        {
          id: 3,
          title: "trello实战",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 75,
          comment_time: 16,
          type: "Vue"
        },
        {
          id: 4,
          title: "ES6高阶",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 34,
          comment_time: 21,
          type: "other"
        },
        {
          id: 5,
          title: "Webpack",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 12,
          comment_time: 15,
          type: "工程化"
        },
        {
          id: 6,
          title: "TypeScript",
          image_src: require("../../assets/imgs/video.png"),
          view_time: 8,
          comment_time: 2,
          type: "other"
        }
      ];
    }

    return { ...toRefs(state),getVideolist };
  }
};
</script>

<style scoped>
.van-loading {
  width: 4rem;
  height: 4rem;
  margin: 50% auto;
}
/* 视频教程 */
.video_course {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
}
/*.marginBottom{
        margin-bottom: .35rem;
    }*/
.video_course:after {
  display: inline-block;
  content: "";
  clear: both;
}
.more {
  display: flex;
  font-size: 0.38rem;
  min-width: 1.7rem;
  height: 0.86rem;
  background: url(../../assets/imgs/arrow_more.png) no-repeat right center;
  background-size: 0.1rem 0.2rem;
  line-height: 0.86rem;
  margin-top: 0.18rem;
  white-space: nowrap;
  float: right;
  color: #6a6a6a;
}
</style>