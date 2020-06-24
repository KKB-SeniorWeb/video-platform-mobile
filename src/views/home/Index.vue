<template>
    <div id="container">
        <!-- 视频教程 -->
        <VideoCourse></VideoCourse>
        <!-- 技术分享 -->
<!--        <ArticleShare></ArticleShare>-->
    </div>
</template>

<script>
    import VideoCourse from "../videoCourse/VideoCourse";
    // import ArticleShare from "../articleShare/ArticleShare";
    export default {
        name: "Home",
        components:{
            VideoCourse,
            // ArticleShare
        }
    }
</script>

<style scoped>

</style>