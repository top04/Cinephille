import axios from 'axios';
import { defineStore } from 'pinia'
import { apiKey } from '@/url'


export const useItemById = defineStore({
  id: 'itemById',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    movie: null,
    tv: null
  }),
  actions: {
    async  getItemById({type, id}) {
        try {
           const res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
           if(type == 'movie') {
              this.movie = res.data
           }else {
              this.tv = res.data
           }
        } catch (error) {
          console.error('Ошибка произошла в получение фильма или сериала по его id', error);
        }
    }
  }
})