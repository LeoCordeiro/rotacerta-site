<template>
  <section class="sec">
    <div class="col serv">
      <div class="serv-lado">
        <div class="sec-cab serv-cab">
          <span class="tag">O que levamos</span>
          <h2 class="sec-h2">Um frete para cada necessidade</h2>
          <p class="sec-p">
            Do carreto avulso ao frete recorrente da sua empresa, dentro da cidade de
            São Paulo. Você conta o que precisa levar; a gente organiza o resto.
          </p>
        </div>
        <div class="serv-foto">
          <img :src="require('@/assets/img/carga.jpg')" alt="" loading="lazy" />
          <span>Caminhonete · Utilitário · VUC · Baú · Caminhão leve</span>
        </div>
        <p class="serv-nota">A disponibilidade de cada veículo depende dos motoristas parceiros da sua região.</p>
      </div>

      <div class="grade">
        <article
          v-for="(s, i) in SERVICOS"
          :key="s.cod"
          class="cartao cartao--sobe card revela"
          :style="{ transitionDelay: (i * 0.06) + 's' }"
          v-revela
        >
          <span class="n">{{ s.cod }}</span>
          <h3>{{ s.titulo }}</h3>
          <p>{{ s.desc }}</p>
          <router-link to="/solicitar" class="mais">Pedir orçamento <span>→</span></router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SERVICOS } from '@/config/operacao'
</script>

<style scoped>
.serv { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 48px; align-items: start; }
.serv-lado { position: sticky; top: 104px; }
.serv-cab { margin-bottom: 26px; }

.serv-foto { position: relative; height: 280px; border-radius: var(--r); overflow: hidden; box-shadow: var(--sombra); }
.serv-foto img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .55s var(--ease);
}
.serv-foto:hover img { transform: scale(1.05); }
.serv-foto::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(13, 27, 51, .82));
}
.serv-foto span {
  position: absolute; left: 18px; right: 18px; bottom: 15px; z-index: 2;
  color: #fff; font-family: 'Archivo', sans-serif; font-size: 15px; font-weight: 800; letter-spacing: -.02em;
}
.serv-nota { margin-top: 12px; font-size: 12.5px; line-height: 1.55; color: var(--texto-fraco); }

.grade { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.card { display: flex; flex-direction: column; padding: 22px 22px 20px; }
.n {
  width: 34px; height: 34px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--azul-fundo); color: var(--azul-esc);
  font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 12.5px;
  margin-bottom: 14px;
}
.card h3 { font-size: 16.5px; font-weight: 800; letter-spacing: -.025em; margin-bottom: 7px; }
.card p { font-size: 14px; line-height: 1.6; color: var(--texto); }

.mais {
  display: inline-flex; align-items: center; gap: 7px;
  margin-top: auto; padding-top: 16px;
  color: var(--azul-esc); font-weight: 700; font-size: 13.5px; text-decoration: none;
}
.mais span { transition: transform .25s var(--ease); }
.card:hover .mais span { transform: translateX(4px); }

@media (max-width: 1000px) {
  .serv { grid-template-columns: 1fr; gap: 32px; }
  .serv-lado { position: static; }
  .serv-foto { height: 220px; }
}
@media (max-width: 620px) { .grade { grid-template-columns: 1fr; } }
</style>
