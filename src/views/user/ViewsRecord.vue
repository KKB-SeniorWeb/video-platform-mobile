<template>
    <div id="container">
    </div>
</template>

<script>
    import {reactive,toRefs,getCurrentInstance} from 'vue';

    export default {
        name: "ViewsRecoard",
        components:{
        },
        setup(){
            const ctx = getCurrentInstance()

            const state = reactive({
                userid: JSON.parse(localStorage.getItem('userInfo')).userID
            })


            function onClickLeft() {
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