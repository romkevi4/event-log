<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import SelectButton from 'primevue/selectbutton'

  interface PropsWeatherCity {
    isTable: boolean,
  }

  const props = defineProps<PropsWeatherCity>()
  const value = ref('Таблица')
  const options = ref(['Таблица', 'Карточки'])

  // const onToggle = () => props.isTable = !props.isTable

</script>

<template>
  <div class="test">
    <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
  </div>
</template>

<style>
  .test {
    width: 100%;
  }
</style>