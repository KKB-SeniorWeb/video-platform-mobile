<template>
    <div id="container">

    </div>
</template>

<script>
    import {reactive,toRefs,getCurrentInstance} from 'vue';
    // import {getVideoViewsRecord} from '@/api/request.js';

    export default {
        name: "RecoardList",
        components:{
        },
        setup(){
            const {ctx} = getCurrentInstance()

            const state = reactive({

            })
            console.log(JSON.parse(localStorage.getItem('userInfo')).userID)

            // getVideoViewsRecord({
            //     userId: JSON.parse(localStorage.getItem('userInfo')).userID,
            //     type: 3,
            //     limit: 20,
            //     offset: 1
            // }).then(res=>{
            //     console.log(res)
            // })

            function onClickLeft(){
                // 返回操作
                ctx.$router.go(-1)
            }

            return {onClickLeft,...toRefs(state)}
        }
    }
</script>

<style scoped>
    .van-cell-group{
        margin-top: .2rem;
    }
</style>