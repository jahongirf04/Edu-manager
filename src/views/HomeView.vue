<script setup>
import { Field, Form } from 'vee-validate'
import { computed, ref } from 'vue'
import VInput from '../components/form/VInput.vue'
import {useAuthStore} from '../stores/auth'
const authStore = useAuthStore()
const phone = ref("")


const schema = computed(() => {
  return {
    username: 'required|min:3|max:10',
    password: 'required|min:3|max:12'
  }
})
const handleChange = (e)=>{
  phone.value = e.target.value
  console.log(phone.value);
}

const save = async (value) => {
  // await authStore.authLogin(value)
}
</script>

<template>
  <main>
    <div class="form bg-indigo-500">
      <vue-tel-input @change="handleChange($event)" @submit="save"></vue-tel-input>
      <button @click="save" type="submit">save</button>
    </div>
    <!-- <vee-form :validation-schema="schema" @submit="save">
      <div>
        <VInput type="text" name="username" label="Username" placeholderPro="Username"></VInput>
      </div>
      <div>
        <VInput type="text" name="password" label="Password" placeholderPro="Password"></VInput>
        <button type="submit">save</button>
      </div>
    </vee-form> -->
  </main>
  </template>
