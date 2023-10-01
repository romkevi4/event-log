<script setup lang="ts">
  import { ref } from 'vue'

  import AppHeader from '@/components/AppHeader.vue'
  import AppTable from '@/components/AppTable.vue'
  import AppCards from '@/components/AppCards.vue'
  import AppFooter from '@/components/AppFooter.vue'

  const isTable = ref<boolean>(true)
  const onToggleDisplay = (value: boolean) => isTable.value = value

</script>

<template>
  <app-header :isTable="isTable" @toggle-display="onToggleDisplay" />
  <app-table v-if="isTable" />
  <app-cards v-else />
  <app-footer />
</template>
