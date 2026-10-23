<template>
  <section class="sec">
    <div class="col grade-geral">
      <div class="lado">
        <span class="tag">Por que a Rota Certa</span>
        <h2 class="sec-h2">Frete sem complicação,<br>do pedido à entrega</h2>
        <p class="sec-p">
          Sem promessa vazia nem número inflado: o que está aqui é como
          trabalhamos em todo frete.
        </p>
        <router-link to="/sobre" class="btn btn--fio mt">Conhecer a empresa</router-link>
      </div>

      <div class="itens">
        <div
          v-for="(c, i) in COMPROMISSOS"
          :key="c.titulo"
          class="item revela"
          :style="{ transitionDelay: (i * 0.07) + 's' }"
          v-revela
        >
          <div class="tick" aria-hidden="true">
            <svg viewBox="0 0 20 20" width="13" height="13">
              <path d="M4 10.4l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.6"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <h3>{{ c.titulo }}</h3>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { COMPROMISSOS } from '@/config/operacao'
</script>

<style scoped>
.grade-geral { display: grid; grid-template-columns: .85fr 1.15fr; gap: 60px; align-items: start; }
.mt { margin-top: 26px; }

.itens { display: grid; gap: 14px; }
.item {
  display: grid; grid-template-columns: 34px 1fr; gap: 15px;
  background: #fff;
  border: 1px solid var(--fio);
  border-radius: var(--r);
  padding: 20px 22px;
  box-shadow: var(--sombra-s);
  transition: transform .26s var(--ease), box-shadow .26s var(--ease), border-color .26s var(--ease);
}
.item:hover { transform: translateX(4px); box-shadow: var(--sombra); border-color: var(--fio-2); }

.tick {
  width: 34px; height: 34px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--azul-fundo); color: var(--azul-esc);
}
.item h3 { font-size: 16px; font-weight: 800; margin-bottom: 6px; }
.item p { font-size: 13.8px; line-height: 1.6; color: var(--texto); }

@media (max-width: 900px) {
  .grade-geral { grid-template-columns: 1fr; gap: 32px; }
}
</style>
