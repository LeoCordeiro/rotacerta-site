<template>
  <div>
    <div class="legal-hero">
      <div class="col">
        <div class="legal-eyebrow">Legal</div>
        <h1 class="legal-title">Política de Repasse</h1>
        <p class="legal-sub">
          Como funciona o recebimento dos valores e o repasse aos motoristas
          parceiros que fazem os fretes.
        </p>
      </div>
    </div>

    <div class="col legal-col">
      <div class="legal-bloco" v-revela>
        <p class="legal-updated">Última atualização: outubro de 2026</p>

        <h3 class="legal-h">1. Objeto desta política</h3>
        <p class="legal-p">{{ EMPRESA.nome }} ({{ EMPRESA.razao }}, CNPJ {{ EMPRESA.cnpj }}) organiza fretes urbanos e conecta seus clientes a motoristas parceiros, que fazem o transporte. Quando combinado, recebe o valor do cliente e faz o repasse ao motorista parceiro responsável pelo frete. Esta política descreve as regras desse fluxo.</p>

        <h3 class="legal-h">2. A quem se aplica</h3>
        <p class="legal-p">Aos <strong>motoristas parceiros</strong>, autônomos ou pessoa jurídica, que fazem fretes organizados pela {{ EMPRESA.nome }}. As condições do <strong>cliente</strong> constam no orçamento e nos <router-link to="/termos" class="legal-link">Termos de Uso</router-link>.</p>

        <h3 class="legal-h">3. Composição do valor</h3>
        <p class="legal-p">O valor cobrado do cliente reúne o valor do frete devido ao motorista parceiro e a remuneração da {{ EMPRESA.nome }} pela organização do frete: atendimento, orçamento, escolha do motorista e acompanhamento até a entrega. O valor final é informado ao cliente antes da contratação.</p>

        <h3 class="legal-h">4. Como funciona o repasse</h3>
        <p class="legal-p">Quando aplicável, o valor recebido do cliente é repassado ao motorista parceiro conforme o valor combinado com ele <strong>antes</strong> do início do frete. Nada é descontado do valor combinado depois da confirmação, salvo os casos do item 9.</p>

        <h3 class="legal-h">5. Valor combinado antes do frete</h3>
        <p class="legal-p">O valor é combinado com o parceiro antes do deslocamento, considerando rota, carga, veículo e tempo estimado. Se o cliente pedir alteração durante o frete, o novo valor é combinado com o parceiro antes de seguir.</p>

        <h3 class="legal-h">6. Prazo de repasse</h3>
        <p class="legal-p">O prazo e a forma do repasse são informados ao parceiro antes de ele aceitar o frete e não mudam depois do aceite. O repasse é feito para a conta indicada pelo parceiro no cadastro.</p>

        <h3 class="legal-h">7. Formas de recebimento</h3>
        <p class="legal-p">O cliente paga pela forma combinada no orçamento. A forma de pagamento escolhida pelo cliente não altera o valor nem o prazo do repasse ao parceiro.</p>

        <h3 class="legal-h">8. Comprovação</h3>
        <p class="legal-p">Cada repasse tem registro de valor e data, disponível ao parceiro. Em caso de divergência, o parceiro avisa a {{ EMPRESA.nome }} pelo WhatsApp para verificação e, se for o caso, correção.</p>

        <h3 class="legal-h">9. Descontos e retenções</h3>
        <p class="legal-p">Não há desconto sobre o valor combinado, exceto em casos comunicados e aceitos pelo parceiro: dano comprovadamente causado por manuseio inadequado, extravio de carga sob responsabilidade do parceiro ou adiantamento já pago referente ao mesmo frete.</p>

        <h3 class="legal-h">10. Cancelamento de frete</h3>
        <p class="legal-p">Frete cancelado pelo cliente depois que o parceiro já saiu para a coleta gera pagamento proporcional ao trajeto, combinado caso a caso. Cancelamento antes do deslocamento não gera cobrança nem repasse para nenhuma das partes.</p>

        <h3 class="legal-h">11. Documentação exigida</h3>
        <p class="legal-p">Para receber o repasse, o parceiro mantém em dia: documento de identificação, CNH válida na categoria do veículo, documentação do veículo e dados bancários de titularidade própria ou da pessoa jurídica cadastrada. O repasse não é feito para conta de terceiros.</p>

        <h3 class="legal-h">12. Transparência</h3>
        <p class="legal-p">O valor do frete do parceiro e a remuneração da {{ EMPRESA.nome }} são definidos antes da contratação e não mudam de forma unilateral depois da confirmação. Custos extras (espera, ajudante, retorno sem entrega) são informados e combinados antes de qualquer cobrança.</p>

        <h3 class="legal-h">13. Contato</h3>
        <p class="legal-p">
          {{ EMPRESA.razao }}<br>
          CNPJ: {{ EMPRESA.cnpj }}<br>
          {{ EMPRESA.endereco }}<br>
          {{ CONTATO.email }} &nbsp;·&nbsp; WhatsApp {{ CONTATO.telefoneExibicao }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CONTATO, EMPRESA } from '@/config/contato'
</script>

<style src="@/assets/legal.css" scoped></style>
<style scoped>
.legal-link { color: var(--azul-esc); font-weight: 600; }
</style>
