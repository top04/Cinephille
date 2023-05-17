import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



import VueLazyload from 'vue-lazyload'

import '@/assets/styles/main.scss'

const app = createApp(App)

import errorImage  from '@/assets/images/error.png'

app.use(VueLazyload, {
  error: errorImage
})

app.use(createPinia())
app.use(router)

// Регистрация глобальных компонентов
import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from '@/components/UI/Loader.vue'
import Actors from '@/components/UI/Actors.vue'

app.component('BtnMore', BtnMore)
app.component('Loader', Loader)
app.component('Actors', Actors)


app.mount('#app')
