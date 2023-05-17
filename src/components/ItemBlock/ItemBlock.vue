<template>
  <div class="main__info" :class="{active: open}" >
    <img @click="$emit('close')" src="@/assets/images/close.svg" alt="" class="main__info-close">
    <div class="main__info-block" v-if="current">
      <img :src="imgUrlFull + current.backdrop_path" alt="" class="main__info-block-img">
      <div class="main__info-block-content">
        <div class="main__info-block-data">
          <h2 class="main__info-block-data-title">{{ current.title || current.name }}</h2>
          <p class="main__info-block-data-text">{{ current.overview || 'Нет описания' }}</p>
          <p class="main__info-block-data-descr">
            <span>{{ getYear }}</span>
            <span>{{ getGenres }}</span>
          </p>
          <Actors :type="type" :id="current.id" count="4"/>
          <BtnMore/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { imgUrlFull } from '@/url'
import { computed } from 'vue'

const props = defineProps(['open', 'current', 'type'])

const getYear = computed(() => new Date(props.current.release_date).getFullYear() ||  new Date(props.current.first_air_date).getFullYear() )

const getGenres = computed(() => props.current.genres.reduce((acc, item) => acc + `, ${item.name}`, ''))


</script>

