<template>
    <ul class="article_list" ref="articleListRef">
        <li v-for="item in articleList" :key="item.id" @tap="skipDetail($event,item.id,item.article_author.id)">
            <router-link to="/user" class="avatar">
                <img :src="item.article_author.avatar_src" alt="">
            </router-link>
            <router-link :to="{name:'ArticleDetails',params:{articleid:item.id}}" class="article_title">
                {{item.article_title}}
            </router-link>
            <span class="reply_time">1小时前</span>
            <!--http://momentjs.cn/-->
        </li>
    </ul>
</template>

<script>
    import {getCurrentInstance,nextTick,ref} from 'vue'
    import BScroll from 'better-scroll'
    export default {
        name: "ArticleList",
        props:['articleList'],
        setup(){
            const {ctx} = getCurrentInstance();
            const articleListRef = ref(null);
            const BS = ref(null);
            nextTick(()=>{
              BS.value = new BScroll(articleListRef.value,{
                  tap: true
              })
            })

            function skipDetail($event,articleID,userID) {
                if($event.target.classList.contains('article_title') || $event.target.classList.contains('reply_time')){
                    // 事件源为文章标题或者回复时间
                    ctx.$router.push(`/article/details/${articleID}`)
                } else if($event.target.tagName === 'IMG'){
                    // 事件源为用户头像
                    ctx.$router.push(`/homepage/${userID}`)
                }
            }


            return {BS,skipDetail,articleListRef}
        }
    }
</script>

<style scoped>
    .article_list{
        width: 100%;
        height: calc(100% - 1.55rem - 1.63rem);
        overflow: hidden;
    }
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