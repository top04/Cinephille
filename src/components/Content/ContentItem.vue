<template>
  <div class="main__content-list-item">
    <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__content-list-item-img">
    <h2 class="main__content-list-item-name">{{  item.name || item.title }}</h2>
  </div>
</template>

<script setup>
import { imgUrl } from '@/url'

const props = defineProps(['item'])

</script>

