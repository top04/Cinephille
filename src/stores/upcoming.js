import axios from 'axios';
import { defineStore } from 'pinia'
import { apiKey } from '@/url'


export const useUpcoming = defineStore({
  id: 'upcoming',
  state: () => ({
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    upcoming: null
  }),
  actions: {
    async  getUpcoming() {
        try {
            let res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
            this.upcoming = res.data.results
        } catch (error) {
          console.error('Ошибка произошла в получение предстоящих фильмов', error);
        }
    }
  }
})