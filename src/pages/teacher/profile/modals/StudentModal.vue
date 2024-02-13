<template>
  <div>
    <Modal v-if="store.modal">
        <vee-form @submit="send" :validation-schema="schema">
                <VInput type="text"
              label="Name"
              name="name"
              placeholder-pro="Name"/>

                <VInput type="number"
              label="Price"
              name="price"
              placeholder-pro="Price"/>

             <VInput
              type="number"
              label="Period"
              name="period"
              placeholder-pro="Period"
            ></VInput>

            <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Modal from '../../../../components/ui/Modal.vue'

import { useAdminStudentStore } from '../../../../stores/admin/adminStudent';
import { useAdminCoursesStore } from '../../../../stores/admin/adminCourses';

import VInput from '../../../../components/form/VInput.vue';

import VButton from '../../../../components/form/VButton.vue';

const store = useAdminStudentStore()
const store2 = useAdminCoursesStore()

const loading = ref(false)


const schema = computed(() => {
  return {
    name: 'required|min:3|max:20',
    price: 'required|min:2|max:20',
    period: 'required|min:1|max:20'
  }
})

const btn_title = computed(()=>{
  if (loading.value){
    return "Loading"
  }
  return 'Create'
})

const send = async (values) =>{
  store.modal = false
    loading.value = true
    await store2.createCourse(values)
    loading.value = false
}
</script>

<style scoped></style>
