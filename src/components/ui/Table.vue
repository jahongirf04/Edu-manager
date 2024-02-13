<template>
    <table class="w-[80%] bg-[#dfdfdf]">
        <tr class="h-[50px]">
            <th class="p-[5px] bg-global1 text-white" v-for="(item, index) in titles" :key="index">
            {{ item?.text }}
            </th>
        </tr>

        <tr v-for="(item, index) in items" :key="index">
            <td class="text-center p-[5px] bg-[#F6FBFF] h-[50px] text-[#065FD4]" :class="title.field=='_id' ? 'text-[#6E737B]' : ''" v-for="(title, index) in titles">
                {{ item[title?.field] }}
                <button @click="[store.update_modal, store.student] = [true, item]" v-if="title.field == 'action'" class="pl-[5px] pr-[5px] rounded">Edit</button>
                <router-link v-if="title.field == 'enter'" :to="`teacher-groups/${item._id}`" class="pl-[5px] pr-[5px] rounded">Enter</router-link>
                <button @click="[store.delete_modal, store.student] = [true, item]" v-if="title.field == 'delete'" class="pl-[5px] pr-[5px] rounded text-[crimson]">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array
    },
    titles: {
        type: Array
    }
})


import { useAdminStudentStore } from '../../stores/admin/adminStudent';

const store = useAdminStudentStore()

</script>

<style scoped>

</style>