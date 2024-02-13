<template>
  <section class="w-full h-screen bg-[#E7EDF0] flex items-center justify-center">
    <div class="w-[80%] flex items-center justify-center gap-[100px]">
      <!-- <div class="w-[55%] h-60">
        <img src="./cover-4-958x575-removebg-preview.png" style="object-fit: cover;" alt="">
      </div> -->

      <div class="w-[60%] flex justify-center flex-col items-center">
        <h1 class="text-global1 font-bold text-[44px]">Najot Ta’limga</h1>
        <p class="text-global1 font-normal mt-[8px] text-[32px]">Xush kelibsiz!</p>
        <vee-form :validation-schema="schema" class="w-[90%] mt-[70px] flex flex-col gap-[30px]" @submit="send">
          <div class="w-full">
            <VInput
            v-model="phoneNumber"
              type="text"
              label="Phone number"
              name="phone_number"
              v-mask="'(+998) ## ###-##-##'"
              masked="true"
              placeholder-pro="(+998) 90 123-45-67"
            ></VInput>
            <!-- <vue-tel-input class="p-[20px] text-[24px]"></vue-tel-input> -->
          </div>
          <div class="w-full flex justify-between items-center">
            <VPasswordInputVue
              label="Password"
              name="password"
              placeholder-pro="Enter your password"
            ></VPasswordInputVue>
          </div>
          <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import VPasswordInputVue from '../../components/form/VPasswordInput.vue'
import VInput from '../../components/form/VInput.vue'
import {useAuthStore} from '../../stores/auth'
import VButton from '../../components/form/VButton.vue'
const store = useAuthStore()

let phoneNumber = ref("")
const schema = computed(() => {
  return {
    password: 'required|min:3|max:20',
    phone_number: 'required|min:3|max:20'
  }
})

const loading = ref(false)
const btn_title = computed(()=>{
  if (loading.value){
    return "Loading"
  }
  return 'Kirish'
})

const send = async (values)=>{
  loading.value = true
  let a = values.phone_number.split("")
  let b = a.filter(item => !isNaN(+item) && item!=" ")
  let payload = {
    phone: `+${b.join("")}`,
    password: values.password
  }
  await store.authLogin(payload)
  loading.value = false
}
</script>

<style scoped></style>
