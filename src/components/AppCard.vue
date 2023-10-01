<script setup lang="ts">
  import iconCross from '../assets/icon-cross.png'
  import iconCross1 from '../assets/icon-cross.png'
  import defaultAvatar from '../assets/default-avatar.svg'

</script>

<template>
  <div class="p-3 w-full h-full border-4 border-black rounded-md grid grid-template-custom bg-gray-200">
    <span class="pr-1 grid-area-date self-center">Дата</span>
    <span class="grid-area-date-value self-center">10.12.2022 10:00:14</span>

    <span class="pr-1 grid-area-importance self-center">Важность</span>
    <div class="w-10 h-10 border-4 border-black grid-area-importance-icon flex bg-white">
      <img
        :src="iconCross"
        alt="icon"
        class="m-auto w-8 h-8"
      />
    </div>
    <span class="grid-area-importance-value self-center">Высокая</span>

    <span class="pr-1 grid-area-equipment">Оборудование</span>
    <span class="grid-area-equipment-value">Вегас</span>

    <span class="pr-1 grid-area-message self-end">Сообщение</span>
    <span class="max-w-xs whitespace-normal grid-area-message-value self-end">Сервер Vegas недоступен</span>

    <div class="w-20 h-20 border-4 border-black rounded-full grid-area-avatar justify-self-center self-center bg-white flex">
      <img
        :src="!iconCross1 ? iconCross1 : defaultAvatar"
        alt="avatar"
        class="m-auto w-12 h-12 object-cover"
      />
    </div>
    <span class="grid-area-responsible justify-self-center">Смирнов В.А.</span>
  </div>

<!--  <div class="p-3 w-full h-full border-4 border-black rounded-md flex">-->
<!--    <div class="">-->

<!--    </div>-->

<!--    <div>-->
<!--      <div class="w-20 h-20 border border-black rounded-full">&ndash;&gt;-->
<!--        <img-->
<!--          src=""-->
<!--          alt="avatar"-->
<!--          class=""-->
<!--        />-->
<!--      </div>-->
<!--      <span class="grid-area-responsible">Смирнов В.А.</span>-->
<!--    </div>-->
<!--  </div>-->
</template>