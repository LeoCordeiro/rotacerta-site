<template>
  <!-- A altura sai como custom property, e não como `height` direto, pra que a
       media query de tela estreita em theme.css consiga encolher a logo sem
       brigar com estilo inline. -->
  <span class="marca" :style="{ '--marca-h': size + 'px' }">
    <img :src="arte" alt="Rota Certa Fretes" class="marca-logo" />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: [Number, String], default: 34 },
  claro: { type: Boolean, default: false },
})

// Em fundo escuro, a versão clara da logo.
const arte = computed(() => props.claro
  ? require('@/assets/img/logo-claro.svg')
  : require('@/assets/img/logo.svg'))
</script>
