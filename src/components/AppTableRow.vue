<script setup lang="ts">
  // import { ref, onMounted, onBeforeUnmount } from 'vue'
  //
  // const tableContainer = ref<HTMLElement | null>(null)
  // const windowHeight = ref<number>(window.innerHeight)
  // const numRows = ref<number>(10) // Начальное количество строк
  //
  // // Функция для определения количества строк, которые могут поместиться на экране
  // function calculateNumRows() {
  //   console.log(tableContainer.value)
  //   if (tableContainer.value) {
  //     const containerHeight = tableContainer.value.clientHeight;
  //     console.log(containerHeight)
  //     const rowHeight = 27 // Предположим, что высота строки составляет 40 пикселей
  //     numRows.value = Math.floor(containerHeight / rowHeight)
  //     console.log(numRows.value)
  //   }
  // }
  //
  // // Обновление высоты окна при изменении размеров экрана
  // function updateWindowHeight() {
  //   windowHeight.value = window.innerHeight
  //   calculateNumRows()
  // }
  //
  // onMounted(() => {
  //   // Инициализируем количество строк и отслеживаем изменение размеров экрана
  //   calculateNumRows()
  //   window.addEventListener('resize', updateWindowHeight)
  // })
  //
  // onBeforeUnmount(() => {
  //   // Отменяем слушателя событий при размонтировании компонента
  //   window.removeEventListener('resize', updateWindowHeight)
  // })
</script>

<template>
  <tr class="w-full">
<!--    v-for="index in numRows"-->
<!--    :key="index"-->
<!--    :class="{-->
<!--      'bg-gray-100': index % 2 === 0,-->
<!--      'bg-white': index % 2 !== 0-->
<!--    }"-->
    <slot></slot>
  </tr>
</template>

<style scoped></style>