<template>
    <div class="h-full">
        <MainLayout :menu="adminMenu">
            <router-view></router-view>
        </MainLayout>
    </div>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue';
import { adminMenu } from '../../components/menu/adminMenu'

</script>

<style scoped>

</style>