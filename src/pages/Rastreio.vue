<template>
  <div>
    <div class="pg-cab">
      <div class="col">
        <span class="tag">Acompanhamento</span>
        <h1>Acompanhe seu frete</h1>
      </div>
    </div>

    <section class="sec">
      <div class="col grade">

        <div class="lado-busca">
          <div class="res">
            <div class="res-h">
              <b class="painel-t">Pelo WhatsApp</b>
              <span class="estado">do pedido à entrega</span>
            </div>
            <p class="res-p">
              Quem organizou o seu frete acompanha a viagem com você pelo WhatsApp: coleta,
              caminho e entrega. Para saber como está o seu, chame a gente com o seu nome e
              o bairro de coleta.
            </p>
            <div class="res-acoes">
              <a :href="waAjuda" target="_blank" rel="noopener" class="btn btn--azul">
                <v-icon size="17">mdi-whatsapp</v-icon> Falar no WhatsApp
              </a>
              <router-link to="/solicitar" class="btn btn--fio">Pedir orçamento</router-link>
            </div>
          </div>
        </div>

        <aside class="lado-etapas">
          <div class="painel-h">
            <b class="painel-t">O que cada etapa significa</b>
          </div>
          <div v-for="(e, i) in ETAPAS" :key="e.chave" class="et">
            <span class="et-n">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3>{{ e.titulo }}</h3>
              <p>{{ e.desc }}</p>
            </div>
          </div>
          <p class="aviso">
            Seguro da carga e comprovante de entrega: combine pelo WhatsApp antes do frete.
            Ainda não pediu? <router-link to="/solicitar">Peça um orçamento</router-link>.
          </p>
        </aside>

      </div>
    </section>
  </div>
</template>

<script setup>
import { waLink } from '@/config/contato'
import { ETAPAS } from '@/config/rastreio'

const waAjuda = waLink('Olá! Quero saber como está o meu frete com a Rota Certa Fretes.')
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

.grade { display: grid; grid-template-columns: 1.35fr 1fr; gap: 0; }
.lado-busca { padding-right: 52px; border-right: 1px solid var(--fio); }
.lado-etapas { padding-left: 44px; }

/* busca */
.lb {
  display: block;
    font-size: 10.5px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--cinza);
  margin-bottom: 10px;
}
.campo { display: flex; border: 1px solid var(--fio); border-radius: var(--r); box-shadow: var(--sombra); background: var(--papel-2); }
.campo input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--tinta);
    font-size: 17px;
  letter-spacing: .1em;
  padding: 17px 18px;
}
.campo input::placeholder { color: var(--cinza-cl); }
.campo:focus-within { box-shadow: inset 0 0 0 1.5px var(--azul); }
.campo button {
  border: 0;
  background: var(--azul);
  color: var(--sobre-acento);
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 0 26px;
  cursor: pointer;
  transition: background .18s ease;
}
.campo button:hover:not(:disabled) { background: var(--azul-esc); }
.campo button:disabled { background: var(--cinza-cl); cursor: not-allowed; }
.ajuda { margin-top: 10px; font-size: 12.5px; color: var(--cinza); }
.ajuda.erro { color: var(--vermelho); }

/* resultado */
.res { margin-top: 30px; border: 1px solid var(--fio); border-radius: var(--r); box-shadow: var(--sombra); background: var(--papel-2); padding: 24px 26px 26px; }
.res-h { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 14px; border-bottom: 1px solid var(--fio); }
.marca-neg {
    font-size: 11px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--vermelho);
}
.res-p { margin-top: 16px; font-size: 14.5px; line-height: 1.65; color: var(--grafite); }
.res-p strong { color: var(--tinta); }
.res-acoes { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 22px; }
.cod-g { font-size: 19px; font-weight: 600; letter-spacing: .04em; }
.estado {
    font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--azul-esc);
}
.linha { list-style: none; margin: 20px 0 0; padding: 16px 0 0; border-top: 1px solid var(--fio); display: grid; gap: 12px; }
.linha li { display: flex; align-items: center; gap: 11px; opacity: .45; }
.linha li.ok { opacity: 1; }
.mk { width: 9px; height: 9px; border: 1.5px solid var(--cinza-cl); flex-shrink: 0; }
.linha li.ok .mk { background: var(--verde); border-color: var(--verde); }
.linha .t { font-size: 13.5px; font-weight: 600; }
.atualizado { margin-top: 16px;  font-size: 11px; color: var(--cinza); }

/* etapas explicadas */
.et { display: grid; grid-template-columns: 30px 1fr; gap: 14px; padding: 16px 0; border-bottom: 1px solid var(--fio); }
.et-n {  font-size: 11px; color: var(--azul-esc); letter-spacing: .08em; padding-top: 2px; }
.et h3 { font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 14.5px; letter-spacing: -.02em; margin-bottom: 5px; }
.et p { font-size: 13px; line-height: 1.55; color: var(--grafite); }
.nota a { color: var(--azul-esc); font-weight: 600; }

@media (max-width: 900px) {
  .grade { grid-template-columns: 1fr; }
  .lado-busca { padding-right: 0; border-right: 0; }
  .lado-etapas { padding-left: 0; margin-top: 38px; border-top: 1px solid var(--fio-forte); padding-top: 26px; }
}
@media (max-width: 520px) {
  .campo { flex-direction: column; align-items: stretch; }
  .campo button { padding: 15px; }
}
</style>
