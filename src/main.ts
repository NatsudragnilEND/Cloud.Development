import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.scss";
import VueLazyLoad from "vue-lazyload";
import loadImage from './assets/img/loading.gif'
import noImage from './assets/img/nimg.jpg'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router.js'
createApp(App).use(pinia).use(VueLazyLoad, { error: noImage, loading: loadImage }).use(router).mount('#app')

