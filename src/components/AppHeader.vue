<script setup lang="ts">
  import { defineProps, ref, defineEmits } from 'vue'
  import SelectButton from 'primevue/selectbutton'
  import InputText from 'primevue/inputtext'
  import Button from 'primevue/button'

  import { pageView } from '@/utils/initialData'

  interface PropsAppHeader {
    isTable: boolean,
  }

  const props = defineProps<PropsAppHeader>()
  const emits = defineEmits(['toggle-display'])

  const value = ref<string>(pageView[0])
  const options = ref<string[]>(pageView)

  const onToggle = () => emits('toggle-display', !props.isTable)

</script>

<template>
  <div class="p-3 w-full flex items-center justify-between">
    <SelectButton
      v-model="value"
      :options="options"
      aria-labelledby="basic"
      :pt="{
        button: () => ({
          class: [
            'px-4 py-1',
          ],
        }),
        label: 'text-sm text-gray-700',
      }"
      @click="onToggle"
    />

    <div class="flex items-center justify-between">
      <InputText
        type="text"
        :pt="{
          root: () => ({
            class: [
              'mr-4 px-2 py-1',
            ],
          }),
        }"
      />

      <Button
        label="Поиск"
        text
        raised
        :pt="{
          root: () => ({
            class: [
              'px-4 py-1',
            ],
          }),
          label: () => ({
            class: [
              'text-sm text-gray-700',
            ],
          }),
        }"
      />
    </div>
  </div>
</template>

<style scoped></style>