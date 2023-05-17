import axios from 'axios';
import { defineStore } from 'pinia'
import { apiKey } from '@/url'


export const useTop = defineStore({
  id: 'top',
  state: () => ({
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    top10: null
  }),
  actions: {
    async  getTop(count) {
        try {
            let res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
            let array = res.data.results
            let data = []
            array.forEach(item => {
              if(data.length < count) {
                data.push(item)
              }
            })
            this.top10 = data
        } catch (error) {
          console.error('Ошибка произошла в получение топовых фильмов', error);
        }
    }
  }
})