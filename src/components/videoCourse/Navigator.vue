<template>
    <nav class="video_nav">
        <router-link
                to=""
                v-for="(item,index) in videoType"
                :key="index"
                :class="index == activeIndex ? 'active' : '' "
        >{{item}}</router-link>
        <!--<a href="javascript:;" class='active'>全部</a>
        <a href="javascript:;">Vue</a>
        <a href="javascript:;">React</a>
        <a href="javascript:;">工程化</a>
        <a href="javascript:;">小程序</a>
        <a href="javascript:;">其他</a>-->
    </nav>
</template>

<script>
    import {reactive,toRefs} from 'vue';
    export default {
        name: "Navigator",
        setup(){
            const state = reactive({
                activeIndex: 0,
                videoType:['全部','Vue','React','工程化','小程序','其他']
            })

            return {...toRefs(state)}
        }
    }
</script>

<style scoped>
    .video_nav{
        width: 10.73rem;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    .video_nav a{
        width: 1.78rem;
        height: .8rem;
        line-height: .8rem;
        font-size: .4rem;
        color: #1e1e1e;
        background-color: #f8f8f8;
        text-align: center;
        border-radius: .05rem;
        box-shadow: 0 0 .05rem #d5d4d4;
    }
    .video_nav .active{
        background-color: #219ffc;
        color: #fff;
    }
</style>