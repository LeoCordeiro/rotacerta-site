<template>
  <section class="sec sec--nevoa">
    <div class="col proc">
      <div class="sec-cab proc-cab">
        <span class="tag">Como funciona</span>
        <h2 class="sec-h2">Do pedido à entrega em 4 passos</h2>
        <p class="sec-p">
          Você fala com uma pessoa só, do orçamento até a carga chegar ao destino.
        </p>
        <router-link to="/solicitar" class="btn btn--azul mt">Pedir orçamento →</router-link>
      </div>

      <ol class="trilha">
        <li
          v-for="(p, i) in PASSOS"
          :key="p.n"
          class="passo revela"
          :style="{ transitionDelay: (i * 0.09) + 's' }"
          v-revela
        >
          <div class="bolha">{{ i + 1 }}</div>
          <div>
            <h3>{{ p.titulo }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { PASSOS } from '@/config/operacao'
</script>

<style scoped>
/* cabeçalho à esquerda, trilha vertical à direita */
.proc { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 56px; align-items: center; }
.proc-cab { margin-bottom: 0; }
.mt { margin-top: 26px; }

.trilha { list-style: none; margin: 0; padding: 0; }
.passo { position: relative; display: grid; grid-template-columns: 46px 1fr; gap: 20px; padding-bottom: 28px; }
.passo:last-child { padding-bottom: 0; }

/* fio que liga uma bolha à próxima */
.passo:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 22px; top: 54px; bottom: 8px;
  width: 2px; border-radius: 2px;
  background: var(--azul);
  opacity: .35;
}

.bolha {
  width: 46px; height: 46px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--azul); color: var(--sobre-acento);
  font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 18px;
  box-shadow: 0 6px 16px -6px rgba(255, 176, 32, .9), 0 0 0 6px var(--nevoa);
}
.passo h3 { font-size: 17px; font-weight: 800; margin: 11px 0 6px; }
.passo p { font-size: 14px; line-height: 1.62; color: var(--texto); max-width: 460px; }

@media (max-width: 900px) {
  .proc { grid-template-columns: 1fr; gap: 34px; }
}
</style>
