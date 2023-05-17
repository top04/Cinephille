<template>
    <section class="main__top" v-if="topMovies">
      <h2 class="main__top-title">
        ТОП
        <span>10</span>
      </h2>
      <swiper 
        :navigation="true" 
        :modules="modules"
        :breakpoints="swiperOptions.breakpoints"
        :space-between="25"
      >
      <swiper-slide
        class="main__top-item"
        v-for="(item, i) in topMovies"
        :key="item.id"
      >
      <div class="main__top-item-info">
        <span>{{ i  + 1 }}</span>
      </div>
      <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__top-item-img">
        
      </swiper-slide>
    </swiper>
      
      
    </section>
    <Loader v-else/>
</template>

<script setup>
import { imgUrlFull } from '@/url'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTop } from '@/stores/top'
import { computed, ref } from 'vue'

const topStore = useTop()

const topMovies = computed(() => topStore.top10)

topStore.getTop(10)


// swiper settings
const modules = ref([Navigation])
let swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 1
    },
    900: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 2
    },
    1450: {
      slidesPerView: 3
    }
  }
})


</script>

