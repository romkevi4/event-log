<script setup lang="ts">
  import { ref } from 'vue'
  import SelectButton from 'primevue/selectbutton'

  import { quantityPages } from '@/utils/initialData'

  const value = ref<string>(quantityPages[0])
  const options = ref<string[]>(quantityPages)
</script>

<template>
  <div class="w-full flex items-center justify-end">
    <SelectButton
      v-model="value"
      :options="options"
      aria-labelledby="basic"
      :pt="{
        button: ({ context }) => ({
          class: [
            'px-4 py-1',
          ],
        }),
        label: 'text-sm text-gray-700',
      }"
    />
  </div>
</template>

<style scoped></style>