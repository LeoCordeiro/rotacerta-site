import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/theme.css'
import revela from './directives/revela'

createApp(App)
  .directive('revela', revela)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
