<template>
    <div class="h-full">
        <MainLayout :menu="teacherMenu">
            <router-view></router-view>
        </MainLayout>
    </div>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue';
import {teacherMenu} from '../../components/menu/teacherMenu'


</script>

<style scoped>

</style>