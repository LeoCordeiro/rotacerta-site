<template>
  <section class="hero">
    <div class="hero-foto">
      <!-- Vídeo decorativo: com movimento reduzido ou economia de dados fica só o poster. -->
      <video
        ref="videoEl"
        :src="tocar ? video : null"
        :poster="poster"
        muted
        autoplay
        loop
        playsinline
        preload="auto"
        disablepictureinpicture
        aria-hidden="true"
        tabindex="-1"
      ></video>
    </div>
    <div class="veu"></div>
    <div class="veu-2"></div>

    <div class="col hero-grade">
      <div class="hero-txt">
        <div class="selo selo--claro entra">
          <i></i> Orçamento na hora pelo WhatsApp
        </div>

        <h1 class="entra d1">
          Frete certo,<br>
          <span class="grad">na hora certa.</span>
        </h1>

        <p class="lead entra d2">
          Conte o que precisa transportar. Organizamos o seu frete, passamos o
          orçamento e conectamos você ao motorista ideal.
        </p>

        <div class="acoes entra d3">
          <router-link to="/solicitar" class="btn btn--azul">Pedir orçamento →</router-link>
          <router-link to="/parceiro" class="btn btn--claro">Seja motorista parceiro</router-link>
        </div>

        <div class="mini entra d4">
          <div><b>Na hora</b><span>orçamento</span></div>
          <div><b>Direto</b><span>um contato só</span></div>
          <div><b>Capital</b><span>outras cidades, consulte</span></div>
        </div>
      </div>

      <div class="hero-painel">
        <PainelOrcamento />
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import PainelOrcamento from '@/components/PainelOrcamento.vue'

const video = require('@/assets/video/hero-via-expressa.mp4')
const poster = require('@/assets/img/hero-video-poster.jpg')

const videoEl = ref(null)
const tocar = ref(false)
const GATILHOS = ['pointerdown', 'keydown', 'scroll']

// play() falha calado se o quadro ainda não existe ou se o navegador barra o
// autoplay: tenta agora, quando der pra tocar e na primeira interação.
function tentar() {
  const v = videoEl.value
  if (!v || !tocar.value || !v.paused || document.hidden) return
  v.muted = true
  const p = v.play()
  if (p) p.catch(() => {})
}
// Aba em segundo plano pausa a mídia; volta a tocar quando fica visível.
function aoVoltar() { if (!document.hidden) tentar() }

onMounted(() => {
  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const economia = Boolean(navigator.connection && navigator.connection.saveData)
  tocar.value = !reduzido && !economia
  if (!tocar.value) return
  nextTick(tentar)
  videoEl.value.addEventListener('canplay', tentar)
  document.addEventListener('visibilitychange', aoVoltar)
  GATILHOS.forEach((e) => window.addEventListener(e, tentar, { once: true, passive: true }))
})

onBeforeUnmount(() => {
  if (videoEl.value) videoEl.value.removeEventListener('canplay', tentar)
  document.removeEventListener('visibilitychange', aoVoltar)
  GATILHOS.forEach((e) => window.removeEventListener(e, tentar))
})
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 620px;
  overflow: hidden;
  background: var(--noite);
}

.hero-foto { position: absolute; inset: 0; z-index: 0; }
.hero-foto video {
  display: block;
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.06);
  animation: zoom-lento 20s var(--ease) forwards;
}
@keyframes zoom-lento { to { transform: scale(1); } }
@media (prefers-reduced-motion: reduce) { .hero-foto video { animation: none; transform: none; } }

/* dois véus: um horizontal pra legibilidade do texto, um vertical pra
   costurar com o header e com a seção seguinte */
.veu {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(100deg,
    rgba(13,27,51,.95) 0%, rgba(13,27,51,.87) 34%,
    rgba(13,27,51,.44) 68%, rgba(13,27,51,.62) 100%);
}
.veu-2 {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(180deg,
    rgba(13,27,51,.72) 0%, transparent 20%,
    transparent 70%, rgba(13,27,51,.8) 100%);
}

.hero-grade {
  position: relative; z-index: 2;
  display: grid; grid-template-columns: 1.15fr .85fr;
  gap: 56px; align-items: center;
  padding-top: 118px; padding-bottom: 64px;
  width: 100%;
}

h1 { font-size: clamp(34px, 4.6vw, 60px); font-weight: 800; color: #fff; margin-top: 22px; }
.lead { margin-top: 20px; font-size: 17px; line-height: 1.62; color: var(--texto-cl); max-width: 480px; }
.acoes { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }

.mini {
  display: flex; flex-wrap: wrap; gap: 34px;
  margin-top: 42px; padding-top: 24px;
  border-top: 1px solid var(--fio-cl);
}
.mini b {
  display: block;
  font-family: 'Archivo', sans-serif;
  font-weight: 800; font-size: 26px;
  color: #fff; letter-spacing: -.03em;
}
.mini span { display: block; font-size: 12.5px; color: var(--texto-cl); margin-top: 4px; }

@media (max-width: 1000px) {
  .hero-grade { grid-template-columns: 1fr; gap: 36px; padding-top: 104px; padding-bottom: 48px; }
  .lead { max-width: none; }
  .hero { min-height: 0; }
}
@media (max-width: 600px) {
  .mini { gap: 22px; }
  .mini b { font-size: 21px; }
}
</style>
