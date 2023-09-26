<script setup lang="ts">
  import { defineProps, ref } from 'vue'

  interface PropsAppRowInfo {
    children: boolean
  }


  const props = defineProps<PropsAppRowInfo>()
</script>

<template>
  <tr>
    {{ children }}
  </tr>
</template>

<style scoped></style>