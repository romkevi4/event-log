<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  import AppTableRow from './AppTableRow.vue'
  import AppRowInfo from './AppRowInfo.vue'

  // import { example } from '@/utils/initialData'
  import { NUM_ROWS, INITIAL_ROW_HEIGHT } from '@/utils/constants'
  // import { IEvent } from '../../models'

  // const arr = ref<IEvent[]>(example);

  const tableContainer = ref<HTMLElement | null>(null)
  const windowHeight = ref<number>(window.innerHeight)
  const rowHeight = ref<number>(INITIAL_ROW_HEIGHT)

  function calculateNumRows() {
    if (tableContainer.value) {
      const containerHeight = tableContainer.value.clientHeight;
      rowHeight.value = Math.floor(containerHeight / NUM_ROWS)
    }
  }

  function updateWindowHeight() {
    windowHeight.value = window.innerHeight
    calculateNumRows()
  }

  onMounted(() => {
    calculateNumRows()
    window.addEventListener('resize', updateWindowHeight)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowHeight)
  })
</script>

<template>
  <div class="pl-3 pr-3 w-full flex-1">
    <div class="w-full h-full border-4 border-black rounded-md flex-1">
      <table class="w-full h-full table-auto border-collapse">
        <thead
          class="w-full bg-gray-300"
          :style="{
            'max-height': `${rowHeight}px`
          }"
        >
          <tr class="w-full">
            <th class="pl-1 text-left">Дата</th>
            <th class="pl-1 text-left border-l-2 border-black">Важность</th>
            <th class="pl-1 text-left border-l-2 border-black">Оборудование</th>
            <th class="pl-1 text-left border-l-2 border-black">Сообщение</th>
            <th class="pl-1 text-left border-l-2 border-black">Ответственный</th>
          </tr>
        </thead>

        <tbody>
          <app-table-row
            v-for="index in NUM_ROWS"
            :key="index"
            :class="{
              'bg-gray-100': index % 2 === 0,
              'bg-white': index % 2 !== 0,
            }"
            :style="{
              'max-height': `${rowHeight}px`
            }"
          >
            <app-row-info />
          </app-table-row>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
</style>