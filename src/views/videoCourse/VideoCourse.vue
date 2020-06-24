<template>
    <!--  视频课程  -->
    <div id="container" v-if="$route.path == '/course'">
        <div class="video_course" v-show="!loading">
            <h3 class="sub_title">视频教程</h3>
<!--            <Navigator :activeIndex="activeIndex"></Navigator>-->
            <div class="wrap">
<!--                <VideoList :videoList="videoList"></VideoList>-->
            </div>
        </div>
        <!--  Loading  -->
        <van-loading
                color="#54bfff"
                v-show="loading"
                size="4rem"
        />
    </div>
    <!--  首页  -->
    <div class="video_course" v-else-if="$route.path == '/home'" v-show="!loading">
        <h3 class="sub_title" :class="$route.path == '/home' ? 'marginBottom' : ''">视频教程</h3>
        <Navigator :activeIndex="activeIndex"></Navigator>
        <div class="wrap">
            <VideoList :videoList="videoList"></VideoList>
            <a href="javascript:;" class="video_more more" v-if="this.$route.path == '/home'" >查看更多</a>
        </div>
    </div>
</template>

<script>
    import VideoList from "../../components/videoCourse/VideoList";
    import Navigator from '../../components/videoCourse/Navigator'
    import {reactive, toRefs} from '@vue/composition-api'
    import { Loading } from 'vant';

    export default {
        name: "VideoCourse",
        components:{
            VideoList,
            Navigator,
            [Loading.name]:Loading
        },
        setup(){
            console.log(123)
            const state = reactive({
                loading:false,
                activeIndex: 0,
                videoList: []
            })

            if(!state.loading){
                state.videoList=[
                    {
                        id: 0,
                        title: '面向对象',
                        // eslint-disable-next-line no-undef
                        image_src: require("../../assets/imgs/video.png"),
                        view_time: 107,
                        comment_time: 85,
                        type: 'other'
                    },
                    {
                        id: 1,
                        title: 'Koa',
                        // eslint-disable-next-line no-undef
                        image_src: require('../../assets/imgs/video.png'),
                        view_time: 62,
                        comment_time: 51,
                        type: 'other'
                    },
                    {
                        id: 2,
                        title: '小程序',
                        // eslint-disable-next-line no-undef
                        image_src: require('../../assets/imgs/video.png'),
                        view_time: 93,
                        comment_time: 23,
                        type: '小程序'
                    },
                    {
                        id: 3,
                        title: 'trello实战',
                        // eslint-disable-next-line no-undef
                        image_src: require('../../assets/imgs/video.png'),
                        view_time: 75,
                        comment_time: 16,
                        type: 'Vue'
                    },
                    {
                        id: 4,
                        title: 'ES6高阶',
                        // eslint-disable-next-line no-undef
                        image_src: require('../../assets/imgs/video.png'),
                        view_time: 34,
                        comment_time: 21,
                        type: 'other'
                    },
                    {
                        id: 5,
                        title: 'Webpack',
                        // eslint-disable-next-line no-undef
                        image_src: require('../../assets/imgs/video.png'),
                        view_time: 12,
                        comment_time: 15,
                        type: '工程化'
                    },
                    {
                        id: 6,
                        title: 'TypeScript',
                        // eslint-disable-next-line no-undef
                        image_src: require('../../assets/imgs/video.png'),
                        view_time: 8,
                        comment_time: 2,
                        type: 'other'
                    }
                ]
            }

            return {...toRefs(state)}
        }
    }
</script>

<style scoped>
    .van-loading{
        width: 4rem;
        height: 4rem;
        margin: 50% auto;
    }
    /* 视频教程 */
    .video_course{
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
    }
    /*.marginBottom{
        margin-bottom: .35rem;
    }*/
    .video_course:after{
        display: inline-block;
        content: '';
        clear: both;
    }
    .more{
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


</style>