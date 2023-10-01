<script setup lang="ts">
  import { ref } from 'vue'

  import AppHeader from '@/components/AppHeader.vue'
  import AppTable from '@/components/AppTable.vue'
  import AppCards from '@/components/AppCards.vue'
  import AppFooter from '@/components/AppFooter.vue'

  let isTable = ref<boolean>(false)

</script>

<template>
  <app-header :isTable="isTable" />
  <app-table v-if="isTable" />
  <app-cards v-else />
  <app-footer />
</template>
