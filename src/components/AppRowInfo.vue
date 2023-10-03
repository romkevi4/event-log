<script setup lang="ts">
  import { defineProps } from 'vue'

  import { IEvent } from '../../models'

  interface PropsAppTable {
    item: IEvent,
    isReadEvent: boolean,
  }

  const props = defineProps<PropsAppTable>()
</script>

<template>
  <td class="pl-1 text-left">{{item && item.date }}</td>
  <td class="pl-1 text-left border-l-2 border-black">{{item && item.importance }}</td>
  <td class="pl-1 text-left border-l-2 border-black">{{item && item.equipment }}</td>
  <td class="pl-1 text-left border-l-2 border-black">{{item && item.message }}</td>
  <td class="pl-1 text-left border-l-2 border-black">{{item && item.responsible }}</td>
</template>

<style scoped></style>