import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Sobre from '@/pages/Sobre.vue'
import ComoFunciona from '@/pages/ComoFunciona.vue'
import Parceria from '@/pages/Parceria.vue'
import Rastreio from '@/pages/Rastreio.vue'
import Cobertura from '@/pages/Cobertura.vue'
import Solicitar from '@/pages/Solicitar.vue'
import PoliticaPrivacidade from '@/pages/PoliticaPrivacidade.vue'
import PoliticaTermosDeUso from '@/pages/PoliticaTermosDeUso.vue'
import PoliticaRepasse from '@/pages/PoliticaRepasse.vue'
import PoliticaCookies from '@/pages/PoliticaCookies.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '/como-funciona', component: ComoFunciona },
  { path: '/parceiro', component: Parceria },
  { path: '/rastreio', component: Rastreio },
  { path: '/cobertura', component: Cobertura },
  { path: '/solicitar', component: Solicitar },
  { path: '/privacidade', component: PoliticaPrivacidade },
  { path: '/termos', component: PoliticaTermosDeUso },
  { path: '/cookies', component: PoliticaCookies },
  { path: '/politica-de-repasse', component: PoliticaRepasse },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
