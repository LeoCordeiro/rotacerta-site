<template>
  <!-- Header transparente sobre o hero na home; sólido nas demais rotas e ao rolar. -->
  <header class="topo" :class="{ 'topo--solido': solido }">
    <div class="col topo-in">
      <button class="menu" aria-label="Abrir menu" @click="drawer = !drawer">
        <span></span><span></span><span></span>
      </button>

      <router-link to="/" class="marca-link"><BrandMark :size="34" :claro="!solido" /></router-link>

      <nav class="nav">
        <router-link to="/como-funciona">Como funciona</router-link>
        <router-link to="/cobertura">Cobertura</router-link>
        <router-link to="/parceiro">Motorista parceiro</router-link>
        <router-link to="/sobre">A empresa</router-link>
      </nav>

      <router-link to="/rastreio" class="b-rastrear">Acompanhar</router-link>
      <router-link to="/solicitar" class="b-coleta">Orçamento</router-link>
    </div>
  </header>

  <v-navigation-drawer v-model="drawer" temporary location="left" color="#14284B" width="278">
    <div class="dr-topo"><BrandMark :size="30" claro /></div>
    <nav class="dr-nav">
      <router-link to="/" @click="drawer = false">Início</router-link>
      <router-link to="/como-funciona" @click="drawer = false">Como funciona</router-link>
      <router-link to="/cobertura" @click="drawer = false">Cobertura</router-link>
      <router-link to="/parceiro" @click="drawer = false">Motorista parceiro</router-link>
      <router-link to="/sobre" @click="drawer = false">A empresa</router-link>
      <router-link to="/rastreio" class="dest" @click="drawer = false">Acompanhar frete</router-link>
      <router-link to="/solicitar" class="dest" @click="drawer = false">Pedir orçamento</router-link>
    </nav>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BrandMark from '@/components/BrandMark.vue'

const drawer = ref(false)
const rolou = ref(false)
const route = useRoute()

function aoRolar() { rolou.value = window.scrollY > 30 }
onMounted(() => { window.addEventListener('scroll', aoRolar, { passive: true }); aoRolar() })
onUnmounted(() => window.removeEventListener('scroll', aoRolar))

// Só a home tem hero atrás do header.
const solido = computed(() => rolou.value || route.path !== '/')
</script>

<style scoped>
.topo {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background .3s var(--ease), border-color .3s var(--ease), box-shadow .3s var(--ease);
}
.topo--solido {
  background: rgba(255, 255, 255, .94);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom-color: var(--fio);
  box-shadow: 0 1px 3px rgba(13, 27, 51, .05);
}

.topo-in { display: flex; align-items: center; height: 82px; gap: 34px; }
.marca-link { text-decoration: none; }

.nav { display: flex; gap: 4px; margin-left: auto; }
.nav a {
  color: rgba(255, 255, 255, .8);
  text-decoration: none;
  font-size: 14px; font-weight: 600;
  padding: 9px 14px; border-radius: 8px;
  transition: color .2s var(--ease), background .2s var(--ease);
}
.nav a:hover { color: #fff; background: rgba(255, 255, 255, .1); }
.topo--solido .nav a { color: var(--texto); }
.topo--solido .nav a:hover { color: var(--azul-esc); background: var(--azul-fundo); }
.topo--solido .nav a.router-link-active { color: var(--azul-esc); }

.b-rastrear {
  display: inline-flex; align-items: center;
  color: #fff; text-decoration: none;
  font-size: 13.5px; font-weight: 600;
  padding: 11px 18px; border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, .24);
  transition: all .2s var(--ease);
}
.b-rastrear:hover { background: rgba(255, 255, 255, .12); border-color: rgba(255, 255, 255, .45); }
.topo--solido .b-rastrear { color: var(--tinta); border-color: var(--fio-2); }
.topo--solido .b-rastrear:hover { border-color: var(--azul); color: var(--azul-esc); background: var(--azul-fundo); }

.b-coleta {
  background: var(--azul); color: var(--sobre-acento);
  text-decoration: none; font-size: 14px; font-weight: 700;
  padding: 12px 22px; border-radius: 9px;
  box-shadow: 0 6px 18px -6px rgba(255, 176, 32, .85);
  transition: all .22s var(--ease);
}
.b-coleta:hover { background: #E69A00; transform: translateY(-1px); }

/* hambúrguer desenhado, sem dependência de fonte de ícone */
.menu { display: none; background: none; border: 0; cursor: pointer; padding: 6px; margin-right: -8px; }
.menu span { display: block; width: 21px; height: 2px; background: #fff; border-radius: 2px; }
.menu span + span { margin-top: 5px; }
.topo--solido .menu span { background: var(--tinta); }

@media (max-width: 1080px) {
  .nav { display: none; }
  .menu { display: block; }
  .topo-in { height: 70px; gap: 14px; }
  .b-rastrear { margin-left: auto; }
}
@media (max-width: 620px) {
  .b-rastrear { display: none; }
  .b-coleta { margin-left: auto; padding: 10px 16px; font-size: 13px; }
}

.dr-topo { padding: 22px 20px; border-bottom: 1px solid var(--fio-cl); }
.dr-nav { display: flex; flex-direction: column; padding: 8px 0; }
.dr-nav a {
  color: #fff; text-decoration: none;
  font-size: 15px; font-weight: 600;
  padding: 14px 20px;
  border-bottom: 1px solid var(--fio-cl);
}
.dr-nav a.dest { color: var(--azul-cl); }
</style>
