<template>
  <button
    @click="onBtnClick"
    class="border-white bg-btn rounded-xd backdrop-blur	 border-2 py-7 px-20 text-white text-[33px] font-bold hover:scale-105 transition duration-150"
  >
    Скачать
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton"
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "13.2013983",
    "https://static.gc.my.games/HawkedLoader.exe"
  );
};
</script>

<style lang="scss" scoped></style>
