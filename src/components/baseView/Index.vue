<template>
    <div id="temp">
        <Header></Header>
        <router-view></router-view>
        <Navigator></Navigator>
    </div>
</template>

<script>
    import Header from '@/components/common/Header'
    import Navigator from '@/components/common/Navigator'
    export default {
        name: "baseView",
        components: {
            Header,
            Navigator
        }
    }
</script>

<style scoped>
    #temp {
        overflow: hidden;
    }

</style>