<template>
  <div>
    <Modal v-if="store.modal">
      <vee-form @submit="send" :validation-schema="schema">
        <VInput type="text" label="Name" name="name" placeholder-pro="Name" />

        <label for="days" class="text-global1 text-[20px] font-normal">Days</label>
        <select v-model="form.days.name" name="days" class="w-full p-[20px] text-[20px] outline-none">
          <option selected hidden>Select days</option>
          <option>Mon/Wen/Fri</option>
          <option>Tue/Thu/Sat</option>
        </select>

        <VInput
          type="number"
          label="Start time"
          name="start_time"
          placeholder-pro="Start time"
        ></VInput>

        <VInput type="number" label="End time" name="end_time" placeholder-pro="End time"></VInput>

        <label for="room" class="text-global1 text-[20px] font-normal">Room</label>
        <select v-model="form.room.name" name="room" class="w-full p-[20px] text-[20px] outline-none">
          <option selected hidden>Select room</option>
          <option v-for="item in rooms.data.rooms">{{ item.name }}</option>
        </select>

        <label for="course" class="text-global1 text-[20px] font-normal">Course</label>
        <select
          v-model="form.course.name"
          name="course"
          class="w-full p-[20px] text-[20px] outline-none"
        >
          <option selected hidden>Select course</option>
          <option v-for="item in courses.data.courses">{{ item.name }}</option>
        </select>

        <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
      </vee-form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Modal from '../../../../components/ui/Modal.vue'

import { useAdminStudentStore } from '../../../../stores/admin/adminStudent'
import { useAdminGroupsStore } from '../../../../stores/admin/adminGroups'
import { useAdminRoomsStore } from '../../../../stores/admin/adminRooms'
import { useAdminCoursesStore } from '../../../../stores/admin/adminCourses'

import VInput from '../../../../components/form/VInput.vue'

import VButton from '../../../../components/form/VButton.vue'

const store = useAdminStudentStore()
const store2 = useAdminGroupsStore()
const store3 = useAdminRoomsStore()
const store4 = useAdminCoursesStore()

const loading = ref(false)

const rooms = ref('')
const courses = ref('')

onMounted(async () => {
  rooms.value = await store3.getRooms(1)
  courses.value = await store4.getCourses(1)
})

const schema = computed(() => {
  return {
    name: 'required|min:2|max:20',
    start_time: 'required',
    end_time: 'required'
  }
})

const btn_title = computed(() => {
  if (loading.value) {
    return 'Loading'
  }
  return 'Create'
})

let form = ref({
  room: { id: '', name: 'Select room' },
  course: { id: '', name: 'Select course' },
  days: { id: '', name: 'Select days' }
})

const send = async (values) => {
  store.modal = false
  loading.value = true

  values.status = true

  for (let i of rooms.value.data.rooms){
    if (i.name==form.value.room.name){
       values.room = i._id
    }
  }

  for (let i of courses.value.data.courses){
    if (i.name==form.value.course.name){
       values.course = i._id
    }
  }
 
  values.days = form.value.days.name

  if (values.days == 'Mon/Wen/Fri') {
    values.days = true
  } else {
    values.days = false
  }

  values.start_date = '2023-01-01T00:00:00.000Z'

  await store2.createGroup(values)
  loading.value = false
}
</script>

<style scoped></style>
