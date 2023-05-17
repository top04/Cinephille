import axios from 'axios';
import { defineStore } from 'pinia'
import { apiKey } from '@/url'


export const usePopular = defineStore({
  id: 'popular',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    popularMovies: null,
    popularTvs: null
  }),
  actions: {
    async  getPopular({ type, page = 1 }) {
        try {
          const res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-Ru&page=${page}`)  
          let data = res.data.results
          if(type == 'movie') {
            this.popularMovies = data
          }else {
            this.popularTvs = data
          }
          
        } catch (error) {
          console.error('Ошибка произошла в получение популярных фильмов или сериалов', error);
        }
    }
  }
})