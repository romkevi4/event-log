<script setup lang="ts">

</script>

<template>
  <div class="p-3 w-full h-full border-4 border-black rounded-md grid grid-template-custom">
    <span class="grid-area-date">Дата</span>
    <span class="grid-area-date-value">10.12.2022 10:00:14</span>

    <span class="grid-area-importance">Важность</span>
    <img
      src="../assets/icon-cross.png"
      alt="icon"
      class="grid-area-importance-icon w-8 h-8"
    />
    <span class="grid-area-importance-value">Высокая</span>

    <span class="grid-area-equipment">Оборудование</span>
    <span class="grid-area-equipment-value">Вегас</span>

    <span class="grid-area-message">Сообщение</span>
    <span class="grid-area-message-value">Сервер Vegas недоступен</span>
    <div class="grid-area-avatar border border-black rounded-full">
      <img
        src=""
        alt="avatar"
        class=""
      />
    </div>
    <span class="grid-area-responsible">Смирнов В.А.</span>
  </div>
</template>