<template>
    <div class="w-full h-full flex">
        <TheSideBar :menu="menu"></TheSideBar>
        <div class="flex flex-col h-full w-full">
            <TheHeader></TheHeader>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import TheSideBar from '../components/header/TheSideBar.vue';
import TheHeader from '../components/header/TheHeader.vue';

const props = defineProps({
    menu: {
        type: Array
    }
})

</script>

<style scoped>

</style>