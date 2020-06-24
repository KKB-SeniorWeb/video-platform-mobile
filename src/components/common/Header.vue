<template>
    <div id="header">
        <h1 class="logo">kaikeba</h1>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #header{
        width: 100%;
        height: 1.55rem;
        background: url(../../assets/imgs/header_bg.png) no-repeat;
        background-size: cover;
        padding-top: .31rem;
        box-sizing: border-box;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        text-indent: -9999px;
    }
    #header .logo{
        width: 2.46rem;
        height: .98rem;
        background: url(../../assets/imgs/logo.png) no-repeat;
        /*background: url("@/assets/imgs/logo.png") no-repeat;*/
        background-size: cover;
        margin: 0 auto;
    }
</style>