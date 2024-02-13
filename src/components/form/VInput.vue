<template>
  <div class="w-full flex flex-col">
    <label class="text-global1 text-[20px] font-normal" :for="name">{{ label }}</label>
    <vee-field
      class="w-full p-[20px] text-[20px] outline-none"
      :type="type"
      :name="name"
      :placeholder="placeholderPro"
      :value="value"
    />
    <ErrorMessage class="text-error_color mt-2 text-[20px] font-medium" :name="name" />
  </div>
</template>

<script setup>
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
  },
  value: {
    type: [String, Number]
  }
})
</script>

<style scoped></style>
