<template>
  <div class="flex flex-col overflow-hidden">
    <div
      class="relative h-screen w-screen overflow-hidden logo-screen:h-full bg-war-robots bg-cover bg-top bg-no-repeat"
    >
      <MyGamesLogo class="absolute right-[80px] top-[80px]" />
      <div
        class="flex h-full flex-col items-center justify-center gap-5 py-16 text-lg 2xl:gap-4"
      >
        <MainLogo class="mb-5"/>

        <BaseButton />

        <InfoBlock>
          Скачивая MY.GAMES Launcher, вы соглашаетесь с
          передачей
          ваших данных компании MY.GAMES B.V. и их обработкой согласно
          <a class="underline" href="https://documentation.my.games/terms/mygames_privacy" target="_blank">Политике
            конфиденциальности</a> портала MY.GAMES
        </InfoBlock>
      </div>
    </div>
    <BaseFooter />
  </div>

</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import MainLogo from "../assets/main-logo.vue";
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
import MyGamesLogo from "../assets/my-games-logo.vue";
import BaseFooter from "../components/footer/BaseFooter.vue";

const title = useTitle();
title.value = "Evolution 2";


</script>

<style scoped></style>
