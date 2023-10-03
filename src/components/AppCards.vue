<script setup lang="ts">
  import { ref } from 'vue'
  import AppCard from '@/components/AppCard.vue'

  const isReadEvent = ref<boolean>(false)
  const onReadEvent = (value: boolean) => isReadEvent.value = value
</script>

<template>
  <div class="pl-3 pr-3 w-full h-full grid gap-x-24 gap-y-16 grid-cols-3 grid-rows-4">
    <app-card :isReadEvent="isReadEvent" @on-read-event="onReadEvent" />
  </div>
</template>