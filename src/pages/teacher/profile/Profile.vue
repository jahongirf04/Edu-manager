<template>
  <div
  v-if="store.profileInfo!=''"
    class="p-[20px] flex flex-col gap-[20px] justify-center items-center h-[90%] w-full bg-[#e3f3ff]"
  >
    <h1 class="text-[30px] font-bold">PROFILE</h1>
    <div class="flex flex-row gap-[20px] pt-[20px] w-full p-[50px]">
      <div class="flex flex-col gap-[20px] bg-[white] p-[30px] rounded-[10px] w-[50%] items-start">
        <img class="rounded-[50%] h-[250px] w-[250px]" :src="store.profileInfo.data.image" alt="" />
        <h1
          class="flex flex-row items-center justify-center gap-2 text-[35px] text-global1"
        >
          {{ store.profileInfo.data.phone }}
          <VButton class="bg-white" btn_type="primary">
            <svg-icon class="text-[black]" width="37px" height="37px" type="mdi" :path="mdiAccountEdit"> </svg-icon>
          </VButton>
        </h1>

         <h1
          class="flex flex-row items-center justify-center gap-2 text-[25px] text-global1"
        >
        Started at: {{ store.profileInfo.data.start_date }}
        </h1>

        <h1
          class="flex flex-row items-center justify-center gap-1 text-[20px] text-[#0048ff] mr-[70px]"
        >
        <svg-icon type="mdi" :path="mdiLinkedin"></svg-icon> Linkedin
        </h1>

         <h1
          class="flex flex-row items-center justify-center gap-1 text-[20px] text-[#0048ff] mr-[70px]"
        >
        <svg-icon type="mdi" :path="mdiTwitter"></svg-icon> Twitter
        </h1>
      </div>
      <div class="flex flex-col gap-[20px] bg-[white] p-[40px] rounded-[10px] w-[50%] items-start">
        <h1
          class="flex flex-row items-center justify-center gap-7 text-[35px] text-global1 mr-[50px]"
        >
          First name: {{ store.profileInfo.data.first_name }}
          <VButton class="bg-white" btn_type="primary">
            <svg-icon class="text-[black]" width="37px" height="37px" type="mdi" :path="mdiAccountEdit"> </svg-icon>
          </VButton>
        </h1>

        <h1
          class="flex flex-row items-center justify-center gap-7 text-[35px] text-global1 mr-[50px]"
        >
          Last name: {{ store.profileInfo.data.last_name }}
          <VButton class="bg-white" btn_type="primary">
            <svg-icon class="text-[black]" width="37px" height="37px" type="mdi" :path="mdiAccountEdit"> </svg-icon>
          </VButton>
        </h1>

        <h1
          class="flex flex-row items-center justify-center gap-7 text-[35px] text-global1 mr-[50px]"
        >
          Role: {{ store.profileInfo.data.role }}
        </h1>

        <h1
          class="flex flex-row items-center justify-center gap-7 text-[35px] text-global1 mr-[50px]"
        >
          Salary: $2000
          <VButton class="bg-white" btn_type="primary">
            <svg-icon class="text-[black]" width="37px" height="37px" type="mdi" :path="mdiAccountEdit"> </svg-icon>
          </VButton>
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from '../../../components/form/VButton.vue'
import { useAdminStudentStore } from '../../../stores/admin/adminStudent'

import { onMounted, ref } from 'vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccountEdit } from '@mdi/js'
import { mdiLinkedin } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';

const loading = ref(false)

const store = useAdminStudentStore()

onMounted(async () => {
  if (store.profileInfo==''){
    store.profileInfo =  await store.getProfileInfo()
  }
  store.profileInfo.data.start_date = store.profileInfo.data.start_date.split("T")[0]
})
</script>

<style scoped></style>
