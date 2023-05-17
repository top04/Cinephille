<template>
  <section class="main__video" v-if="content" >
    <router-link :to="props.type"  class="main__video-title">
      {{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}
      <img src="@/assets/images/arrow.png" alt=""  >
    </router-link>
    <swiper 
      :navigation="true" 
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :space-between="25"
    >
      <swiper-slide
        class="main__video-item"
        v-for="item in content"
        :key="item.id"
        @click="getItem(item)"
      >
        <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__video-item-img">
        <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
      </swiper-slide>
      <swiper-slide class="main__video-item">
        <router-link class="main__video-item-route" :to="props.type">
          {{ props.type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="main__in" ref="itemBlock">
        <ItemBlock
        :open="open"
        :current="current"
        :type="type"
        @close="close"
      />
    </div>
   
  </section>
  <Loader v-else/>
</template>

<script setup>
import ItemBlock from '@/components/ItemBlock/ItemBlock.vue'
import { imgUrlFull } from '@/url'
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { usePopular } from '@/stores/popular'
import { useItemById } from '@/stores/itemById'
import { useActors } from '@/stores/actors.js'


const actorsStore = useActors()
const props = defineProps(['type'])
const popular = usePopular()
const itemByIdStore = useItemById()


popular.getPopular({type: props.type})

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)


// swiper settings
const modules = ref([Navigation])
let swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
    1450: {
      slidesPerView: 5
    }
  }
})



// Добавление функционала при клике

let open = ref(false)
let current = ref(null)
let itemBlock = ref(null)

const getItem = async (item) => {
  current.value = null
  await itemByIdStore.getItemById({type: props.type, id: item.id})
  current.value = props.type == 'movie' ? itemByIdStore.movie : itemByIdStore.tv 
  open.value = true
  let itemTop = itemBlock.value.offsetTop
  window.scrollTo({
    top: itemTop - navbar.clientHeight,
    behavior: 'smooth'
  })
  
}

const close = () => {
  open.value = false
  props.type == 'movie' ? itemByIdStore.movie = actorsStore.actorMovie = null : itemByIdStore.tv = actorsStore.actorTv = null
}

</script>

