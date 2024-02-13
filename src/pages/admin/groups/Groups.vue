<template>
  <StudentUpdateModal></StudentUpdateModal>
  <StudentModal></StudentModal>
  <DeleteModal></DeleteModal>
  
  <div class="p-[20px] flex flex-col gap-[20px]">
    <h1 class="text-[20px] font-bold">GROUPS ({{ count }})</h1>
    <div class="flex w-[100%]">
      <VButton class="w-[30%]" type="submit" btn_type="primary" :isLoading="loading" @click="store.modal = true"
        >Create group</VButton
      >
    </div>
    <div v-if="students?.length != 0">
        <Table class="w-full h-full" :items="students" :titles="[
            { text: 'NAME', field: 'name' },
            { text: 'DAYS', field: 'days_name' },
            { text: 'FROM-TO', field: 'from_to' },
            { text: 'ROOM', field: 'room_name' },
            { text: 'STATUS', field: 'status_name' },
            { text: 'COURSE', field: 'course_name' },
            { text: 'ACTION', field: 'action' },
            {text: 'DELETE', field: 'delete'}
          ]">
    </Table>

    <div class="flex flex-row w-full items-center justify-center gap-3">
        <button v-if="pg!=1" class="rounded bg-[#e9e1ff] p-[5px] pr-[10px] pl-[10px] text-[gray]" @click="paginate(pg-1)">{{ "<<" }} Prev.</button>
        <button
        v-if="pag_buttons.length>1"
          class="rounded bg-[#e9e1ff] p-[5px] pr-[10px] pl-[10px] text-[gray]"
          :class="pg==index+1 ? 'bg-[#f3ffb9]' : ''"
          v-for="index in pag_buttons"
          @click="paginate(index + 1)"
        >

          {{ index + 1 }}
        </button>
        <button v-if="pg!=pag_buttons.length" class="rounded bg-[#e9e1ff] p-[5px] pr-[10px] pl-[10px] text-[gray]" @click="paginate(pg+1)">Next {{ ">>" }} </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { useAdminStudentStore } from '../../../stores/admin/adminStudent'
import { useAdminGroupsStore } from '../../../stores/admin/adminGroups'

import StudentModal from './modals/StudentModal.vue'
import StudentUpdateModal from './modals/StudentUpdateModal.vue'
import DeleteModal from './modals/DeleteModal.vue'

import { onMounted, ref } from 'vue'
import VButton from '../../../components/form/VButton.vue'
import Table from '../../../components/ui/Table.vue'

const store = useAdminStudentStore()
const store2 = useAdminGroupsStore()

const loading = ref(false)

let pag_buttons = ref([])

const students = ref("")
const count = ref("")

onMounted(async () => {
  const response = await store2.getGroups(1)
  students.value = response.data.groups

  for (let i of students.value) {
    i.room_name  = i.room?.name
    i.course_name = i.course?.name
    i.from_to = `${i.start_time}-${i.end_time}`
    
    if (i.status){
      i.status_name = 'Not finished'
    } else{
      i.status_name = 'Finished'
    }

    if (i.days == true){
      i.days_name = 'Mon/Wen/Fri'
    } else{
      i.days_name = 'Tue/Thu/Sat'
    }
  }

  count.value = response.data.count

  for (let i = 0; i < Number(count.value) / 10; i++) {
    pag_buttons.value.push(i)
  }
})

let pg = ref(1)

const paginate = async (p) => {
  pg.value = p
  const response = await store2.getGroups(p)
  students.value = response.data.groups

  for (let i of students.value) {
    i.room_name  = i.room?.name
    i.course_name = i.course?.name
    i.from_to = `${i.start_time}-${i.end_time}`
    
    if (i.status){
      i.status_name = 'Not finished'
    } else{
      i.status_name = 'Finished'
    }

    if (i.days == true){
      i.days_name = 'Mon/Wen/Fri'
    } else{
      i.days_name = 'Tue/Thu/Sat'
    }
  }
}
</script>

<style scoped></style>
