<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import SelectButton from 'primevue/selectbutton'
  import InputText from 'primevue/inputtext'
  import Button from 'primevue/button'

  import { pageView } from '@/utils/initialData'

  interface PropsAppHeader {
    isTable: boolean,
  }

  const props = defineProps<PropsAppHeader>()

  console.log(props.isTable)
  const value = ref<string>(pageView[0])
  const options = ref<string[]>(pageView)

  // const onToggle = () => props.isTable = !props.isTable

</script>

<template>
  <div class="pb-4 w-full flex items-center justify-between">
<!--    <div class="card flex justify-content-center">-->
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
<!--    </div>-->

    <div class="flex items-center justify-between">
      <InputText
        type="text"
        :pt="{
          root: () => ({
            class: [
              'mr-4 px-2 py-1'
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
              'px-4 py-1'
            ],
          }),
          label: () => ({
            class: [
              'text-sm text-gray-700',
            ]
        }),
        }"
      />
    </div>
  </div>
</template>

<style scoped></style>