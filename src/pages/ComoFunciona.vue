<template>
  <div>
    <div class="pg-cab">
      <div class="col">
        <span class="tag">Processo</span>
        <h1>Como funciona</h1>
        <p class="sub">
          Do pedido à entrega, com um contato só. Você recebe o valor antes de
          contratar e a gente acompanha até a carga chegar.
        </p>
      </div>
    </div>

    <ProcessoSecao />

    <section class="sec">
      <div class="col">
        <div class="sec-cab">
          <h2 class="sec-h2">Perguntas frequentes</h2>
          <span class="sec-p obs-linha">{{ FAQ.length }} respostas</span>
        </div>

        <div class="faq">
          <details v-for="(f, i) in FAQ" :key="i" class="q">
            <summary>
              <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="p">{{ f.p }}</span>
              <span class="sinal" aria-hidden="true"></span>
            </summary>
            <div class="r">{{ f.r }}</div>
          </details>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import ProcessoSecao from '@/components/ProcessoSecao.vue'
import CtaSection from '@/components/CtaSection.vue'

const FAQ = [
  {
    p: 'Como funciona?',
    r: 'Você pede pelo formulário do site ou pelo WhatsApp: origem, destino, o que vai transportar e a data. O orçamento sai na hora.',
  },
  {
    p: 'Quanto custa o frete?',
    r: 'Depende da origem, do destino, da carga e do veículo, por isso o valor é sob consulta. Você vê o orçamento antes de contratar.',
  },
  {
    p: 'Quem faz o transporte?',
    r: 'Motoristas parceiros selecionados. A Rota Certa organiza o frete, conecta você ao motorista com o veículo certo e acompanha até a entrega.',
  },
  {
    p: 'Atendem fora de São Paulo?',
    r: 'Atendemos a cidade de São Paulo. Outras cidades da região, sob consulta: conte a rota que a gente verifica.',
  },
  {
    p: 'Vocês fazem mudança?',
    r: 'Não. Fazemos fretes e carretos: móveis e eletrodomésticos avulsos, pequenas cargas e entregas para lojas e empresas.',
  },
  {
    p: 'Como viro motorista parceiro?',
    r: 'Preencha o formulário em Seja motorista parceiro. A gente responde pelo WhatsApp.',
  },
]
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
.sub { margin-top: 16px; font-size: 16px; line-height: 1.6; color: var(--grafite); max-width: 540px; }

.faq { border-top: 1px solid var(--fio-forte); }
.q { border-bottom: 1px solid var(--fio); }
summary {
  display: grid;
  grid-template-columns: 52px 1fr 24px;
  align-items: center;
  gap: 12px;
  padding: 19px 0;
  cursor: pointer;
  list-style: none;
}
summary::-webkit-details-marker { display: none; }
.n {  font-size: 11px; color: var(--azul-esc); letter-spacing: .08em; }
.p { font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 16.5px; letter-spacing: -.02em; }
.q:hover .p { color: var(--azul-esc); }

/* sinal +/− desenhado com fio, sem ícone */
.sinal { position: relative; width: 13px; height: 13px; justify-self: end; }
.sinal::before, .sinal::after { content: ''; position: absolute; background: var(--tinta); transition: transform .2s ease; }
.sinal::before { top: 6px; left: 0; width: 13px; height: 1.5px; }
.sinal::after { left: 6px; top: 0; width: 1.5px; height: 13px; }
.q[open] .sinal::after { transform: scaleY(0); }

.r { padding: 0 0 22px 64px; font-size: 14.5px; line-height: 1.68; color: var(--grafite); max-width: 720px; }

@media (max-width: 700px) {
  summary { grid-template-columns: 34px 1fr 20px; gap: 9px; }
  .p { font-size: 15px; }
  .r { padding-left: 43px; }
}
</style>
