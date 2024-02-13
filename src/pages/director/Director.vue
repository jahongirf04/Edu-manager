<template>
    <div class="h-full">
        <MainLayout :menu="directorMenu">
            <router-view></router-view>
        </MainLayout>
    </div>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue';
import {directorMenu} from '../../components/menu/directorMenu'

//+998881699727


</script>

<style scoped>

</style>