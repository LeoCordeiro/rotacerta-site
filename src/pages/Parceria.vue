<template>
  <div>
    <div class="pg-cab">
      <div class="col">
        <span class="tag">Seja motorista parceiro</span>
        <h1>Rode com a<br>Rota Certa.</h1>
        <p class="sub">
          Tem caminhonete, VUC, baú ou caminhão leve? Entre para a rede da Rota Certa
          Fretes e receba fretes organizados, com repasse claro.
        </p>
      </div>
    </div>

    <section class="sec">
      <div class="col grade">
        <div class="conteudo">
          <h2 class="sec-h2">Como é a parceria</h2>

          <div class="lista">
            <div
              v-for="(c, i) in CONDICOES"
              :key="c.t"
              class="item-num revela"
              :style="{ transitionDelay: (i * 0.07) + 's' }"
              v-revela
            >
              <div class="n">{{ i + 1 }}</div>
              <div>
                <h3>{{ c.t }}</h3>
                <p>{{ c.d }}</p>
              </div>
            </div>
          </div>

          <h2 class="sec-h2 mt">O que a gente pede</h2>
          <ul class="req">
            <li v-for="r in REQUISITOS" :key="r">{{ r }}</li>
          </ul>

          <div class="aviso">
            As regras de valor e repasse estão na
            <router-link to="/politica-de-repasse">Política de Repasse</router-link>.
          </div>
        </div>

        <aside class="lado">
          <div class="painel-lado painel-lado--destaque">
            <div class="painel-h">
              <b>Quero ser parceiro</b>
              <span class="selo"><i></i> aberto</span>
            </div>

            <template v-if="!enviado">
              <p class="intro">Conte como é o seu veículo. A gente responde pelo WhatsApp.</p>

              <label class="f-lb" for="p-nome">Nome</label>
              <input id="p-nome" v-model="nome" class="f-inp" type="text" placeholder="Como podemos te chamar" />

              <label class="f-lb" for="p-fone">WhatsApp</label>
              <input id="p-fone" v-model="fone" class="f-inp" type="tel" placeholder="(00) 00000-0000" maxlength="15" @input="mascara" />

              <label class="f-lb" for="p-reg">Cidade e bairro</label>
              <input id="p-reg" v-model="regiao" class="f-inp" type="text" placeholder="Ex: São Paulo, Lajeado" />

              <label class="f-lb">Tipo de veículo</label>
              <div class="escolhas">
                <button v-for="o in VEICULOS" :key="o" type="button" class="escolha" :class="{ sel: veiculo === o }" @click="veiculo = o">{{ o }}</button>
              </div>

              <label class="f-lb">CNH em dia?</label>
              <div class="escolhas">
                <button v-for="o in SIM_NAO" :key="o" type="button" class="escolha" :class="{ sel: cnh === o }" @click="cnh = o">{{ o }}</button>
              </div>

              <label class="f-lb">Documentação do veículo em dia?</label>
              <div class="escolhas">
                <button v-for="o in SIM_NAO" :key="o" type="button" class="escolha" :class="{ sel: doc === o }" @click="doc = o">{{ o }}</button>
              </div>

              <label class="f-lb" for="p-disp">Disponibilidade</label>
              <input id="p-disp" v-model="disponibilidade" class="f-inp" type="text" placeholder="Ex: dias úteis, manhã e tarde" />

              <a :href="waParceiro" target="_blank" rel="noopener" class="btn btn--azul envio" @click="confirmar">
                <v-icon size="18">mdi-whatsapp</v-icon> Enviar pelo WhatsApp
              </a>
              <p class="obs">Abre o WhatsApp com a mensagem pronta. Ao enviar, você concorda com a <router-link to="/privacidade">Política de Privacidade</router-link>.</p>
            </template>

            <div v-else class="ok">
              <div class="ok-ic">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor"
                        stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Mensagem preparada</h3>
              <p>Se o WhatsApp não abriu, use o botão do WhatsApp no canto da tela.</p>
              <button class="btn btn--fio" @click="enviado = false">Preencher de novo</button>
            </div>
          </div>

          <div class="painel-lado resumo">
            <div class="painel-h"><b>Resumo</b></div>
            <div class="dado-l"><span class="k">Repasse</span><span class="v forte">combinado antes do frete</span></div>
            <div class="dado-l"><span class="k">Veículos</span><span class="v">caminhonete a caminhão leve</span></div>
            <div class="dado-l"><span class="k">Região</span><span class="v">Cidade de São Paulo</span></div>
            <div class="dado-l"><span class="k">Cadastro</span><span class="v">pelo WhatsApp</span></div>
          </div>
        </aside>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CtaSection from '@/components/CtaSection.vue'
import { waLink } from '@/config/contato'

const CONDICOES = [
  { t: 'Fretes organizados', d: 'A Rota Certa atende o cliente, passa o orçamento e chega até você com origem, destino e carga já definidos.' },
  { t: 'Repasse claro', d: 'Você sabe quanto vai receber antes de aceitar o frete. Prazo e forma de pagamento são combinados antes da viagem.' },
  { t: 'Frete do tamanho do seu veículo', d: 'Chamamos conforme o tipo de veículo, a região onde você roda e a sua disponibilidade.' },
  { t: 'Um contato só', d: 'Você fala com quem organizou o frete, do aceite até a entrega.' },
]

const REQUISITOS = [
  'CNH em dia, na categoria do veículo',
  'Documentação do veículo em dia',
  'Veículo em bom estado',
  'Disponibilidade para rodar na cidade de São Paulo',
]

const VEICULOS = ['Caminhonete', 'Utilitário', 'VUC', 'Baú', 'Caminhão leve']
const SIM_NAO = ['Sim', 'Não']

const nome = ref(''); const fone = ref(''); const regiao = ref(''); const veiculo = ref('')
const cnh = ref(''); const doc = ref(''); const disponibilidade = ref('')
const enviado = ref(false)

function mascara() {
  let v = fone.value.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 10) v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  else v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  fone.value = v
}
function confirmar() { setTimeout(() => { enviado.value = true }, 400) }

const waParceiro = computed(() => waLink(
  `[MOTORISTA]\nOlá! Quero ser motorista parceiro da Rota Certa Fretes.\n\nNome: ${nome.value}\nWhatsApp: ${fone.value}\nCidade/bairro: ${regiao.value}\nVeículo: ${veiculo.value}\nCNH em dia: ${cnh.value}\nDocumentação do veículo em dia: ${doc.value}\nDisponibilidade: ${disponibilidade.value}`
))
</script>

<style scoped>
.grade { display: grid; grid-template-columns: 1.35fr 1fr; gap: 56px; align-items: start; }
.lista { display: grid; gap: 14px; margin-top: 26px; }
.mt { margin-top: 52px; margin-bottom: 22px; }
.conteudo .sec-h2 { font-size: clamp(24px, 2.6vw, 32px); }

.lado { display: grid; gap: 18px; position: sticky; top: 100px; }
.intro { font-size: 13.5px; line-height: 1.55; color: var(--texto); margin-top: 16px; }
.envio { width: 100%; margin-top: 24px; }
.obs { margin-top: 11px; font-size: 12px; color: var(--texto-fraco); text-align: center; }

.resumo .dado-l:first-of-type { padding-top: 16px; }

.ok { text-align: center; padding: 22px 0 6px; }
.ok-ic {
  width: 48px; height: 48px; border-radius: 50%;
  margin: 0 auto 16px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(31, 157, 99, .12); color: var(--verde);
}
.ok h3 { font-size: 19px; font-weight: 800; margin-bottom: 8px; }
.ok p { font-size: 14px; color: var(--texto); line-height: 1.6; margin-bottom: 20px; }

@media (max-width: 980px) {
  .grade { grid-template-columns: 1fr; gap: 38px; }
  .lado { position: static; }
}
</style>
