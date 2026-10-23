<template>
  <div>
    <div class="pg-cab">
      <div class="col">
        <span class="tag">Pedido de orçamento</span>
        <h1>Pedir orçamento</h1>
        <p class="sub">
          Preencha o que souber. Passamos o valor antes de você contratar e
          conectamos você ao motorista ideal para a carga.
        </p>
      </div>
    </div>

    <section class="sec">
      <div class="col grade">

        <form v-if="!enviado" class="form" @submit.prevent>
          <div class="bloco">
            <div class="bloco-h"><b class="painel-t">01 · Quem está pedindo</b></div>
            <div class="dupla">
              <div><label class="f-lb">Nome</label><input v-model="nome" class="f-inp" type="text" placeholder="Seu nome"></div>
              <div><label class="f-lb">WhatsApp</label><input v-model="fone" class="f-inp" type="tel" placeholder="(00) 00000-0000" maxlength="15" @input="mascara"></div>
            </div>
          </div>

          <div class="bloco">
            <div class="bloco-h"><b class="painel-t">02 · O frete</b></div>
            <div class="dupla">
              <div><label class="f-lb">Coleta (bairro)</label><input v-model="origem" class="f-inp" type="text" placeholder="Ex: Lajeado"></div>
              <div><label class="f-lb">Entrega (bairro)</label><input v-model="destino" class="f-inp" type="text" placeholder="Ex: Pinheiros"></div>
            </div>
            <div class="dupla">
              <div><label class="f-lb">O que será transportado</label><input v-model="carga" class="f-inp" type="text" placeholder="Ex: geladeira e 10 caixas"></div>
              <div><label class="f-lb">Peso ou volume aproximado <span class="op">opcional</span></label><input v-model="peso" class="f-inp" type="text" placeholder="Ex: 200 kg ou 2 m³"></div>
            </div>
            <label class="f-lb">Data e horário</label>
            <input v-model="quando" class="f-inp" type="text" placeholder="Ex: sábado, 25/10, às 9h">
            <label class="f-lb">Precisa de ajudante?</label>
            <div class="escolhas">
              <button v-for="o in AJUDANTE" :key="o" type="button" class="escolha" :class="{ sel: ajudante === o }" @click="ajudante = o">{{ o }}</button>
            </div>
          </div>

          <div class="bloco">
            <div class="bloco-h"><b class="painel-t">03 · Observações</b></div>
            <textarea v-model="obs" class="f-inp" rows="3" placeholder="Escada, elevador, horário de portaria, o que for útil"></textarea>
          </div>

          <a :href="waPedido" target="_blank" rel="noopener" class="btn btn--azul envio" @click="confirmar">
            <v-icon size="18">mdi-whatsapp</v-icon> Pedir orçamento pelo WhatsApp
          </a>
          <p class="obs-fim">A mensagem abre no seu WhatsApp já preenchida. Ao enviar, você concorda com a <router-link to="/privacidade">Política de Privacidade</router-link>.</p>
        </form>

        <div v-else class="form ok">
          <div class="ok-t">Pedido preparado</div>
          <p>Se o WhatsApp não abriu, use o botão do WhatsApp no canto da tela.</p>
          <button class="btn btn--fio" @click="reset">Fazer outro pedido</button>
        </div>

        <aside class="lado">
          <div class="painel-h"><b class="painel-t">Antes de pedir</b></div>
          <div class="dado-l"><span class="k">Orçamento</span><span class="v forte">{{ OPERACAO.orcamento }}</span></div>
          <div class="dado-l"><span class="k">Preço</span><span class="v">{{ OPERACAO.preco }}</span></div>
          <div class="dado-l"><span class="k">Área</span><span class="v">{{ OPERACAO.areaAtuacao }}</span></div>
          <div class="dado-l"><span class="k">Atendimento</span><span class="v">{{ OPERACAO.atendimento }}</span></div>
          <p class="aviso">{{ RESTRICOES }}</p>

          <div class="canais">
            <div class="painel-t mb">Prefere falar direto</div>
            <a :href="wa" target="_blank" rel="noopener" class="canal">
              <v-icon size="16">mdi-whatsapp</v-icon> {{ CONTATO.telefoneExibicao }}
            </a>
            <a :href="`mailto:${CONTATO.email}`" class="canal">
              <v-icon size="16">mdi-email-outline</v-icon> {{ CONTATO.email }}
            </a>
            <a :href="CONTATO.instagramUrl" target="_blank" rel="noopener" class="canal">
              <v-icon size="16">mdi-instagram</v-icon> {{ CONTATO.instagram }}
            </a>
          </div>
        </aside>

      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { CONTATO, waLink } from '@/config/contato'
import { OPERACAO, RESTRICOES } from '@/config/operacao'

const AJUDANTE = ['Não', 'Sim', 'Não sei']

// O painel do hero manda o bairro de coleta pela URL (?coleta=).
const route = useRoute()
const nome = ref(''); const fone = ref('')
const origem = ref(String(route.query.coleta || '')); const destino = ref(''); const carga = ref(''); const peso = ref('')
const quando = ref(''); const ajudante = ref('Não'); const obs = ref('')
const enviado = ref(false)

function mascara() {
  let v = fone.value.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 10) v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  else v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  fone.value = v
}
function confirmar() { setTimeout(() => { enviado.value = true }, 400) }
function reset() {
  nome.value = ''; fone.value = ''
  origem.value = ''; destino.value = ''; carga.value = ''; peso.value = ''
  quando.value = ''; ajudante.value = 'Não'; obs.value = ''; enviado.value = false
}

const wa = waLink()
const waPedido = computed(() => waLink(
  `[ORÇAMENTO]\nOlá! Quero um orçamento de frete.\n\nNome: ${nome.value}\nWhatsApp: ${fone.value}\n\nColeta (bairro): ${origem.value}\nEntrega (bairro): ${destino.value}\nCarga: ${carga.value}\nPeso/volume: ${peso.value}\nData e horário: ${quando.value}\nAjudante: ${ajudante.value}\n\nObservações: ${obs.value}`
))
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
.sub { margin-top: 16px; font-size: 16px; line-height: 1.6; color: var(--grafite); max-width: 520px; }

.grade { display: grid; grid-template-columns: 1.5fr 1fr; gap: 52px; align-items: start; }

.bloco { border-top: 1px solid var(--fio-forte); padding: 6px 0 24px; }
.bloco:first-child { border-top: 0; }
.bloco-h { padding: 12px 0 4px; }
.dupla { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.lb {
  display: block;
    font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--cinza);
  margin: 14px 0 6px;
}
.lb .op { color: var(--cinza-cl); letter-spacing: .08em; }
.inp {
  width: 100%;
  border: 1px solid var(--fio);
  background: var(--papel-2);
  color: var(--tinta);
  font-family: 'Source Sans 3', sans-serif;
  font-size: 15px;
  padding: 12px 14px;
  outline: 0;
}
.inp:focus { border-color: var(--azul); box-shadow: inset 0 0 0 1px var(--azul); }
.inp::placeholder { color: var(--cinza-cl); }
.ta { resize: vertical; line-height: 1.5; }

.opcoes { display: flex; flex-wrap: wrap; gap: 8px; }
.op-b {
  border: 1px solid var(--fio);
  background: transparent;
  color: var(--grafite);
  font-family: 'Source Sans 3', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  padding: 9px 16px;
  cursor: pointer;
  transition: all .16s ease;
}
.op-b:hover { border-color: var(--fio-forte); }
.op-b.sel { background: var(--tinta); border-color: var(--tinta); color: var(--papel); }

.envio { width: 100%; justify-content: center; margin-top: 8px; }
.obs-fim { margin-top: 10px; font-size: 12.5px; color: var(--cinza); text-align: center; }

.ok { border: 1px solid var(--fio); border-radius: var(--r); box-shadow: var(--sombra); background: var(--papel-2); padding: 40px 32px; }
.ok-t { font-family: 'Archivo', sans-serif; font-weight: 800; font-size: 22px; margin-bottom: 10px; }
.ok p { font-size: 14.5px; color: var(--grafite); line-height: 1.6; margin-bottom: 22px; }

.lado { border: 1px solid var(--fio); border-radius: var(--r); box-shadow: var(--sombra); background: var(--papel-2); padding: 22px 24px 24px; position: sticky; top: 24px; }
.canais { margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--fio); }
.mb { display: block; margin-bottom: 10px; }
.canal {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 0;
  color: var(--tinta);
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 600;
}
.canal:hover { color: var(--azul-esc); }

@media (max-width: 900px) {
  .grade { grid-template-columns: 1fr; gap: 32px; }
  .dupla { grid-template-columns: 1fr; gap: 0; }
  .lado { position: static; }
  .sub { max-width: none; }
}
</style>
