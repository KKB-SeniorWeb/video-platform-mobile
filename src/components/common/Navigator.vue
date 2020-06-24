<template>
    <nav id="nav">
        <a href="javascript:;"><span class="index"></span>首页</a>
        <a href="javascript:;"><span class="video"></span>视频教程</a>
        <a href="javascript:;"><span class="share"></span>技术分享</a>
        <a href="javascript:;"><span class="user"></span>个人中心</a>
    </nav>
</template>

<script>
    export default {
        name: "Navigator"
    }
</script>

<style scoped>
    #nav{
        width: 100%;
        height: 1.63rem;
        background: url(../../assets/imgs/nav_bg.png) no-repeat;
        background-size: cover;
        padding-top: .30rem;
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
    }
    #nav a{
        width: 1.2rem;
        height: 1.06rem;
        box-sizing: border-box;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        line-height: .5rem;
        white-space:nowrap;
    }
    #nav span{
        display: block;
        width: .68rem;
        height: .64rem;
        margin: 0 auto;
    }
    #nav .index{
        background: url(../../assets/imgs/nav_icon_index.png) no-repeat center center;
        background-size: .68rem .62rem;
    }
    #nav .video{
        background: url(../../assets/imgs/nav_icon_video.png) no-repeat center center;
        background-size: .66rem .48rem;
    }
    #nav .share{
        background: url(../../assets/imgs/nav_icon_share.png) no-repeat center center;
        background-size: .52rem .6rem;
    }
    #nav .user{
        background: url(../../assets/imgs/nav_icon_user.png) no-repeat center center;
        background-size: .56rem .56rem;
    }

</style>