<template>
  <section class="sec sec--escura cob">
    <div class="foto-fundo">
      <img :src="require('@/assets/img/motion.jpg')" alt="" loading="lazy" />
    </div>
    <div class="veu"></div>

    <div class="col conteudo">
      <div class="sec-cab">
        <span class="tag">Área de atendimento</span>
        <h2 class="sec-h2">Onde a gente atende</h2>
        <p class="sec-p">
          A cidade de São Paulo, a partir da nossa sede no {{ OPERACAO.base }}.
          Outras cidades da região, consulte.
        </p>
      </div>

      <div class="cidades">
        <span
          v-for="(c, i) in COBERTURA"
          :key="c.nome"
          class="cidade revela"
          :class="{ base: c.nota }"
          :style="{ transitionDelay: (i * 0.025) + 's' }"
          v-revela
        >
          {{ c.nome }}
          <i v-if="c.nota">{{ c.nota }}</i>
        </span>
      </div>

      <router-link to="/cobertura" class="btn btn--claro mt">Ver detalhes da cobertura</router-link>
    </div>
  </section>
</template>

<script setup>
import { COBERTURA, OPERACAO } from '@/config/operacao'
</script>

<style scoped>
.cob { position: relative; overflow: hidden; }
.foto-fundo { position: absolute; inset: 0; z-index: 0; }
.foto-fundo img { width: 100%; height: 100%; object-fit: cover; }
.veu {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(13,27,51,.97) 0%, rgba(13,27,51,.9) 46%, rgba(13,27,51,.66) 100%);
}
.conteudo { position: relative; z-index: 2; }

.cidades { display: flex; flex-wrap: wrap; gap: 10px; }
.cidade {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255, 255, 255, .07);
  border: 1px solid rgba(255, 255, 255, .14);
  color: #fff;
  font-size: 14px; font-weight: 600;
  padding: 10px 16px;
  border-radius: var(--r-p);
  transition: background .24s var(--ease), border-color .24s var(--ease), transform .24s var(--ease);
}
.cidade:hover { background: rgba(255, 176, 32, .16); border-color: rgba(255, 176, 32, .5); transform: translateY(-2px); }
.cidade.base { background: rgba(255, 176, 32, .22); border-color: rgba(255, 176, 32, .55); }
.cidade i {
  font-style: normal; font-size: 10px; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase;
  color: var(--azul-cl);
}
.mt { margin-top: 32px; }

@media (max-width: 620px) { .cidade { font-size: 13px; padding: 9px 13px; } }
</style>
