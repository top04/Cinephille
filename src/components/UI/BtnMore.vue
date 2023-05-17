<template>
  <router-link to="/" class="btn__more">
      <img src="@/assets/images/more.svg" alt="" class="btn__more-img">
      <span class="btn__more-text">Подробнее</span>
  </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.btn__more {
  width: max-content;
  background: #149A03;
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  gap: 15px;
  align-items: center;
  &-text {
    font-size: 20px;
    line-height: 150%;
    color: #FFFFFF;
  }
}

</style>