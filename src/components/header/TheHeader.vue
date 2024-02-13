<template>
    <div class="h-[70px] bg-global1 w-full border-l-2 flex items-center">
        <vee-field name="search" class="fixed p-[6px] rounded-[18px] w-[400px] ml-[45px]" placeholder="Qidirish"/>
        <SvgIcon class="fixed left-[630px]" type="mdi" :path="mdiMagnify"></SvgIcon>
        
        <button class="p-[10px] lg:hidden" @click="isOpen = true">open sidebar</button>
    </div>
</template>

<script setup>
import {useSidebar} from '../../hooks/useSdieBar'

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify } from '@mdi/js';

let {isOpen} = useSidebar()

</script>


<style scoped>

</style>