<template>
    <ul class="article_list">
        <li v-for="item in articleList" :key="item.id">
            <a href="javascript:;" class="avatar">
                <img :src="item.article_author.avatar_src" alt="">
            </a>
            <a href="javascript:;" class="article_title">{{item.article_title}}</a>
            <span class="reply_time">1小时前</span>
            <!--http://momentjs.cn/-->
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ArticleList",
        props:['articleList'],

    }
</script>

<style scoped>
    .article_list li{
        width: 9.8rem;
        height: 1.24rem;
        line-height: 1.24rem;
        background-color: #ffffff;
        box-shadow: 0px 2px 5px 0px rgba(108, 108, 108, 0.47);
        border-radius: .2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: .14rem;
    }
    .article_list .avatar{
        width: .96rem;
        height: .96rem;

    }
    .avatar img{
        width: 100%;
        height: 100%;
    }

    .article_title{
        width: 6rem;
        font-size: .38rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap;
    }
    .reply_time{
        font-size: .28rem;
        color: #363636;
        width: 1.3rem;
        text-align: center;
    }
</style>