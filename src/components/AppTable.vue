<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  import { useGlobalStore } from '../../store/store'

  // import AppTableRow from './AppTableRow.vue'
  import AppRowInfo from './AppRowInfo.vue'

  import { NUM_ROWS, INITIAL_ROW_HEIGHT } from '@/utils/constants'

  const store = useGlobalStore()

  const tableContainer = ref<HTMLElement | null>(null)
  const windowHeight = ref<number>(window.innerHeight)
  const rowHeight = ref<number>(INITIAL_ROW_HEIGHT)
  const isReadEvent = ref<boolean>(false)

  const onReadEvent = (value: boolean) => isReadEvent.value = value

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

  const setBackgroundColorOfRow = (isReadEvent: boolean, index: number) => {
    if (!isReadEvent) {
      console.log('bg-slate-400')
      return 'bg-slate-400'

    } else {
      if (index % 2 === 0) {
        console.log('bg-gray-100')
        return 'bg-gray-100'
      } else {
        console.log('bg-white')
        return 'bg-white'
      }
    }
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
          <tr
            v-for="index in NUM_ROWS"
            :key="index"
            class="hover:cursor-pointer"
            :class="setBackgroundColorOfRow(isReadEvent, index)"
            :style="{
              'max-height': `${rowHeight}px`
            }"
            @on-read-event="onReadEvent"
          >
            <app-row-info
              v-if="store.currentEventLog.length > 0"
              :item="store.currentEventLog[index]"
              :isReadEvent="isReadEvent"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
</style>