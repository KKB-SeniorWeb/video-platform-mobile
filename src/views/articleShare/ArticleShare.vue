<template>
  <!--  文章分享   -->
  <div id="container" v-if="$route.path == '/article'">
    <div class="technology_share" v-show="!loading">
      <h3 class="sub_title">技术分享</h3>
      <div class="wrap">
        <ArticleList :articleList="articleList"></ArticleList>
      </div>
    </div>
    <!--  Loading  -->
    <!--        <van-loading-->
    <!--                color="#54bfff"-->
    <!--                v-show="loading"-->
    <!--                size="4rem"-->
    <!--        />-->
  </div>
  <!--  首页  -->
  <div class="technology_share" v-else>
    <h3 class="sub_title">技术分享</h3>
    <div class="wrap">
      <ArticleList :articleList="articleList" length="8"></ArticleList>
      <a href="javascript:;" class="article_more more">查看更多</a>
    </div>
  </div>
</template>

<script>
import ArticleList from "../../components/articleShare/ArticleList";
import {reactive, toRefs} from 'vue';
import {getArticleList} from '@/api/request'

export default {
  name: "articleShare",
  components: {
    ArticleList,
    // [Loading.name]: Loading
  },
  setup() {
    const state = reactive({
      loading: false,
      articleList: [
        {
          id: 0,
          article_title: '36 个JS 面试题为你助力，让面试更有力(面试必读)',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 1,
          article_title: '从输入url开始能做哪些优化',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 2,
          article_title: '小程序如何在业务系统中接入图片安全校验',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 3,
          article_title: '为什么 Vue 中不要用 index 作为 key？（diff 算法详解）',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 4,
          article_title: '那些你应该考虑卸载的 VSCode 扩展',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 5,
          article_title: '36 个JS 面试题为你助力，让面试更有力(面试必读)',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 6,
          article_title: '从输入url开始能做哪些优化',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 7,
          article_title: '小程序如何在业务系统中接入图片安全校验',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 8,
          article_title: '为什么 Vue 中不要用 index 作为 key？（diff 算法详解）',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 9,
          article_title: '那些你应该考虑卸载的 VSCode 扩展',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 10,
          article_title: '36 个JS 面试题为你助力，让面试更有力(面试必读)',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 11,
          article_title: '从输入url开始能做哪些优化',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 12,
          article_title: '小程序如何在业务系统中接入图片安全校验',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 13,
          article_title: '为什么 Vue 中不要用 index 作为 key？（diff 算法详解）',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 14,
          article_title: '那些你应该考虑卸载的 VSCode 扩展',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 15,
          article_title: '36 个JS 面试题为你助力，让面试更有力(面试必读)',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 16,
          article_title: '从输入url开始能做哪些优化',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 17,
          article_title: '小程序如何在业务系统中接入图片安全校验',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 18,
          article_title: '为什么 Vue 中不要用 index 作为 key？（diff 算法详解）',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        },
        {
          id: 19,
          article_title: '那些你应该考虑卸载的 VSCode 扩展',
          article_author: {
            id: 0,
            name: '',
            avatar_src: require('../../assets/imgs/avatar.png')
          },
          reply_time: '2020-04-01 12:00'
        }
      ]
    })

    getArticleShare()

    function getArticleShare() {
      getArticleList({
        offset: 0,
        limit:10,
        sort:'hot'
      }).then(res => {
        console.log(res)
      })
    }

    return {...toRefs(state), getArticleShare}
  }
}
</script>

<style scoped>
.van-loading {
  width: 4rem;
  height: 4rem;
  margin: 50% auto;
}

.more {
  display: flex;
  font-size: .38rem;
  min-width: 1.7rem;
  height: .86rem;
  background: url(../../assets/imgs/arrow_more.png) no-repeat right center;
  background-size: .1rem .2rem;
  line-height: .86rem;
  margin-top: .18rem;
  white-space: nowrap;
  float: right;
  color: #6a6a6a;
}

.technology_share {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
}

.technology_share:after {
  display: inline-block;
  content: '';
  clear: both;
}
</style>