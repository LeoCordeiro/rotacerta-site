<template>
  <div>
    <div class="pg-cab">
      <div class="col">
        <span class="tag">A empresa</span>
        <h1>Rota Certa Fretes</h1>
      </div>
    </div>

    <section class="sec">
      <div class="col grade">
        <div>
          <h2 class="sec-h2">Um contato só para o seu frete</h2>
          <p class="sec-p tx">
            A Rota Certa Fretes nasceu na Zona Leste de São Paulo para facilitar o que
            costuma ser difícil: achar um frete confiável, com preço claro e no prazo combinado.
          </p>
          <p class="sec-p tx">
            Funciona assim: você conta o que precisa transportar, a gente organiza o seu
            frete, passa o orçamento e conecta você ao motorista ideal, com o veículo certo
            para a carga. Depois, acompanhamos até a entrega.
          </p>
          <p class="sec-p tx">
            O transporte é feito por motoristas parceiros, com caminhonete, utilitário, VUC,
            baú ou caminhão leve. A disponibilidade de cada veículo depende dos parceiros da
            sua região.
          </p>
          <p class="sec-p tx">
            Atendemos pessoas físicas, lojas e comércio local, pequenas empresas, e-commerces
            e distribuidores, além de quem precisa de frete recorrente.
          </p>
        </div>

        <div class="painel-lado">
          <div class="painel-h">
            <b class="painel-t">Dados cadastrais</b>
          </div>
          <div class="dado-l"><span class="k">Razão social</span><span class="v ativ">{{ EMPRESA.razao }}</span></div>
          <div class="dado-l"><span class="k">CNPJ</span><span class="v">{{ EMPRESA.cnpj }}</span></div>
          <div class="dado-l"><span class="k">Atividade principal</span><span class="v ativ">{{ EMPRESA.cnaeCodigo }} — {{ EMPRESA.cnae }}</span></div>
          <div class="dado-l"><span class="k">Sede</span><span class="v ativ">{{ EMPRESA.endereco }}</span></div>
          <div class="dado-l"><span class="k">Área</span><span class="v">{{ OPERACAO.areaAtuacao }}</span></div>
          <div class="dado-l"><span class="k">Atendimento</span><span class="v forte">{{ OPERACAO.atendimento }}</span></div>
          <p class="aviso">{{ RESTRICOES }}</p>
        </div>
      </div>
    </section>

    <CompromissosSecao />
    <CtaSection />
  </div>
</template>

<script setup>
import CompromissosSecao from '@/components/CompromissosSecao.vue'
import CtaSection from '@/components/CtaSection.vue'
import { EMPRESA } from '@/config/contato'
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
.grade { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: start; }
.tx { max-width: 540px; margin-top: 14px; }
.ficha { border: 1px solid var(--fio); border-radius: var(--r); box-shadow: var(--sombra); background: var(--papel-2); padding: 22px 24px 24px; }
.ficha-l .v.ativ { font-size: 12px; line-height: 1.45; max-width: 220px; }

@media (max-width: 900px) {
  .grade { grid-template-columns: 1fr; gap: 34px; }
  .tx { max-width: none; }
  .ficha-l .v.ativ { max-width: 60%; }
}
</style>
