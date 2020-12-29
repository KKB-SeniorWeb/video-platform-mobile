<template>
    <ul class='video_list'>

      <li>11</li>
      <li>2</li>
      <li>33</li>
        <li v-for="item in videoList" :key="item.id" @click="clickhandle">
            <router-link :to="{name:'VideoDetails',params:{courseid:item.id}}">
                <img :src="item.image_src">
                <div class="video_info">
                    <p class="video_title">{{item.id}}</p>
                    <p class="person_time">
                        <span class="text">观看人次</span>
                        <span class="view_time">{{item.view_time}}</span>
                        <span class="text">评论人次</span>
                        <span class="comment_time">{{item.comment_time}}</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import {getCurrentInstance} from 'vue'
    export default {
        name: "videoList",
        props:['videoList'],
        setup(props){
            const {ctx} = getCurrentInstance()
            console.log(ctx,props)
            function clickhandle(){
                console.log(this.$route)
            }
            return {clickhandle}
        }
    }
</script>

<style scoped>
    .video_list{
        margin-top: .2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .video_list li{
        width: 4.8rem;
        height: 3.78rem;
        background-color: #fff;
        box-shadow: 0px 2px 5px 0px rgba(108, 108, 108, 0.47);
        padding: .04rem;
        box-sizing: border-box;
        margin-top: .2rem;
    }
    .video_list img{
        width: 4.7rem;
        height: 2.68rem;
    }
    .video_list .video_title{
        font-family: MicrosoftYaHei;
        font-size: .36rem;
        line-height: .56rem;
        color: #010101;
        text-indent: .12rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap;
    }
    .video_list .person_time{
        font-family: MicrosoftYaHei;
        font-size: .28rem;
        line-height: .46rem;
        text-align: right;
        color: #414141;
        margin-right: .24rem;
    }
    .person_time span{
        margin-left: .08rem;
    }
</style>