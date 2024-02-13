<template>
  <div class="w-full flex flex-col">
    <label class="text-global1 text-[20px] font-normal mb-1" :for="name">{{ label }}</label>
    <div class="w-full flex justify-between items-center">
        <vee-field
      class="w-[89%] p-[18px] text-[21px] outline-none"
      :type="active ? 'text' : 'password'"
      :name="name"
      :placeholder="placeholderPro"
    />
    <button type="button" @click="changeType" class="w-[10%] bg-[white] p-[24px] flex items-start justify-center rounded-e-lg">
      <font-awesome-icon icon="eye" class="text-[18px] text-global1" v-if="!active"/>
      <font-awesome-icon icon="eye-slash" class="text-[18px] text-global1" v-else/>
    </button>
    </div>
    <ErrorMessage :name="name" class="text-error_color mt-2 text-[20px] font-medium" />
  </div>
</template>

<script setup>
import { ref } from 'vue';


const active = ref(false)
const changeType = ()=> {
    active.value = !active.value
}
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String
  },
  label: {
    type: String
  },
  placeholderPro: {
    type: String
  }
})
</script>

<style scoped></style>
