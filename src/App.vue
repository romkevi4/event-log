<script setup lang="ts">
  import { ref } from 'vue'

  import AppHeader from './components/AppTable.vue'
  import AppTable from './components/AppTable.vue'
  import AppCards from './components/AppCards.vue'

  let isTable = ref<boolean>(true)

</script>

<template>
  <app-table v-if="isTable">
    <app-header />
  </app-table>

  <app-cards v-else>
    <app-header />
  </app-cards>
</template>
