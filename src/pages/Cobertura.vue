<template>
  <div>
    <div class="pg-cab">
      <div class="col">
        <span class="tag">Área de atendimento</span>
        <h1>Cobertura</h1>
        <p class="sub">
          Atendemos a cidade de São Paulo a partir do {{ OPERACAO.base }}.
          Outras cidades da região, consulte.
        </p>
      </div>
    </div>

    <CoberturaSecao />

    <section class="sec">
      <div class="col grade">
        <div>
          <h2 class="sec-h2">Como o prazo é definido</h2>
          <p class="sec-p tx">
            Não publicamos prazo fixo: ele depende da rota, do horário, do trânsito e
            do veículo. A data e o horário do seu frete são combinados no orçamento,
            antes de você contratar.
          </p>
          <p class="sec-p tx">
            Fora da cidade de São Paulo? Outras cidades da região são atendidas sob
            consulta. Conte a rota que a gente verifica.
          </p>
          <router-link to="/solicitar" class="btn btn--azul mt">
            Consultar minha rota <span class="seta">→</span>
          </router-link>
        </div>

        <div class="painel-lado">
          <div class="painel-h"><b class="painel-t">Como atendemos</b></div>
          <div class="dado-l"><span class="k">Sede</span><span class="v">{{ OPERACAO.base }}</span></div>
          <div class="dado-l"><span class="k">Área</span><span class="v">{{ OPERACAO.areaAtuacao }}</span></div>
          <div class="dado-l"><span class="k">Outras cidades</span><span class="v">{{ OPERACAO.outrasCidades }}</span></div>
          <div class="dado-l"><span class="k">Orçamento</span><span class="v forte">{{ OPERACAO.orcamento }}</span></div>
          <div class="dado-l"><span class="k">Preço</span><span class="v">{{ OPERACAO.preco }}</span></div>
          <div class="dado-l"><span class="k">Atendimento</span><span class="v">{{ OPERACAO.atendimento }}</span></div>
          <p class="aviso">{{ RESTRICOES }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CoberturaSecao from '@/components/CoberturaSecao.vue'
import { OPERACAO, RESTRICOES } from '@/config/operacao'
</script>

<style scoped>
.cabeca { border-bottom: 1px solid var(--fio); padding: 128px 0 40px; background: var(--nevoa); }
.cabeca h1 {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: clamp(32px, 4vw, 54px);
  letter-spacing: -.045em;
  line-height: 1;
  margin-top: 12px;
}
.sub { margin-top: 16px; font-size: 16px; line-height: 1.6; color: var(--grafite); max-width: 560px; }

.grade { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: start; }
.tx { max-width: 520px; margin-top: 14px; }
.mt { margin-top: 26px; }
.ficha { border: 1px solid var(--fio); border-radius: var(--r); box-shadow: var(--sombra); background: var(--papel-2); padding: 22px 24px 24px; }

@media (max-width: 900px) {
  .grade { grid-template-columns: 1fr; gap: 34px; }
  .tx { max-width: none; }
}
</style>
