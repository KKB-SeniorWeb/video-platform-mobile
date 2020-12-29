import { createRouter, createWebHistory } from 'vue-router';
import BaseView from "@/components/baseView/Index"

const routes = [
{
  path: '/',
  name: 'BaseView',
  component: BaseView,
  redirect: '/home',
  children: [
    {
      //首页
      path: 'home',
      component: () => import('@/views/home/Index'),
      name: 'Home'
    },
    {
      //视频课程
      path: 'course',
      component: () => import("@/views/videoCourse/VideoCourse"),
      name: 'VideoCourse'
    },
    {
      //文章分享
      path: 'article',
      component: () => import("@/views/articleShare/ArticleShare"),
      name: 'ArticleShare'
    },
    {
      //个人中心
      path: 'user',
      component: () => import("@/views/user/Index"),
      name: 'User'
    },
    {
      //视频详情页
      path: '/course/details/:courseid',
      component: () => import("@/views/videoCourse/VideoDetails"),
      name: 'VideoDetails'
    },
    {
      //文章详情页
      path: '/article/details/:articleid',
      component: () => import("@/views/articleShare/ArticleDetails"),
      name: 'ArticleDetails'
    },
    {
      //用户浏览记录
      path: '/user/viewsrecoard',
      component: () => import("@/views/user/ViewsRecord"),
      name: 'ViewsRecord'
    },
    {
      //视频的观看记录
      path: '/user/viewsrecoard/video/:userid',
      component: () => import('@/views/user/RecordList'),
      name: 'VideoRecordList'
    },
    {
      //文章的浏览记录
      path: '/user/viewsrecoard/article/:userid',
      component: () => import('@/views/user/RecordList'),
      name: 'ArticleRecordList'
    },
    {
      //登录
      path: '/user/signin',
      component: () => import('@/views/user/Signin'),
      name: 'Signin'
    },
    {
      //注册
      path: '/user/signup',
      component: () => import('@/views/user/Signup'),
      name: 'Signup'
    },
    {
      //忘记密码
      path: '/user/forgotpwd',
      component: () => import('@/views/user/ForgotPwd'),
      name: 'ForgotPwd'
    },
    {
      //我的回帖
      path: '/user/myReply',
      component: ()=>import('@/views/user/MyReply')
    },
    {
      //用户主页
      path: '/homepage/:userid',
      component: ()=>import('@/views/homepage/Homepage')
    },
    {
      //账号设置
      path: '/user/setup',
      component: ()=>import('@/views/user/setup')
    },
    {
      path: '/404',
      component: ()=>import('@/views/notFound/NotFound')
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.length === 0){
    next({path:'/404'})
  } else{
    next()
  }
})

export default router
