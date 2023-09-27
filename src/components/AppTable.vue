<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  import AppTableRow from './AppTableRow.vue'
  import AppRowInfo from './AppRowInfo.vue'

  const tableContainer = ref<HTMLElement | null>(null);
  const windowHeight = ref<number>(window.innerHeight);
  const numRows = ref<number>(10); // Начальное количество строк

  // Функция для определения количества строк, которые могут поместиться на экране
  function calculateNumRows() {
    console.log(tableContainer.value);
    if (tableContainer.value) {
      const containerHeight = tableContainer.value.clientHeight;
      console.log(containerHeight);
      const rowHeight = 40; // Предположим, что высота строки составляет 40 пикселей
      numRows.value = Math.floor(containerHeight / rowHeight);
      console.log(numRows.value);
    }
  }

  // Обновление высоты окна при изменении размеров экрана
  function updateWindowHeight() {
    windowHeight.value = window.innerHeight;
    calculateNumRows();
  }

  onMounted(() => {
    // Инициализируем количество строк и отслеживаем изменение размеров экрана
    calculateNumRows();
    window.addEventListener('resize', updateWindowHeight);
  });

  onBeforeUnmount(() => {
    // Отменяем слушателя событий при размонтировании компонента
    window.removeEventListener('resize', updateWindowHeight);
  });

</script>

<template>
    <div class="table__container w-full border-4 border-black rounded-md flex-1" ref="tableContainer">
    <table class="w-full border-collapse">
      <thead class="w-full h-1 bg-gray-300">
        <tr>
          <th class="pl-2 w-1/6 text-left">Дата</th>
          <th class="pl-2 w-1/6 text-left border-l-2 border-black">Важность</th>
          <th class="pl-2 w-1/6 text-left border-l-2 border-black">Оборудование</th>
          <th class="pl-2 w-2/6 text-left border-l-2 border-black">Сообщение</th>
          <th class="pl-2 w-1/6 text-left border-l-2 border-black bg-gr">Ответственный</th>
        </tr>
      </thead>

      <tbody>
        <app-table-row
          v-for="index in numRows"
          :key="index"
          :class="{
            'bg-gray-100': index % 2 === 0,
            'bg-white': index % 2 !== 0
          }"
        >
          <app-row-info />

        </app-table-row>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .table__container {
    overflow: auto; /* Добавьте прокрутку по мере необходимости */
  }
</style>