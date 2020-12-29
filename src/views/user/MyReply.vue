<template>
    <div id="container">

    </div>
</template>

<script>
    import {getCurrentInstance} from 'vue'
    export default {
        name: "MyReply",
        components:{
        },
        setup(){
            const {ctx} = getCurrentInstance()
            function onClickLeft(){
                ctx.$router.go(-1)
            }
            return {onClickLeft}
        }
    }
</script>

<style scoped>

</style>