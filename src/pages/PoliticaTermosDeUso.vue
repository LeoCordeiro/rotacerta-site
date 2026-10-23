<template>
  <div>
    <div class="legal-hero">
      <div class="col">
        <div class="legal-eyebrow">Legal</div>
        <h1 class="legal-title">Termos de Uso</h1>
      </div>
    </div>
    <div class="col legal-col">
      <div class="legal-bloco" v-revela>
        <p class="legal-updated">Última atualização: outubro de 2026</p>

        <h3 class="legal-h">O serviço</h3>
        <p class="legal-p">{{ EMPRESA.nome }} organiza fretes urbanos na cidade de São Paulo (CNAE {{ EMPRESA.cnaeCodigo }} — {{ EMPRESA.cnae }}): recebe o pedido pelo site ou WhatsApp, passa o orçamento e conecta o contratante a um motorista parceiro com o veículo adequado. A contratação acontece só depois que o contratante aprova o orçamento. Não fazemos mudanças residenciais ou comerciais nem transporte de produtos perigosos.</p>

        <h3 class="legal-h">Responsabilidades de {{ EMPRESA.nome }}</h3>
        <p class="legal-p">Organizar o frete conforme o orçamento aprovado, indicar motorista e veículo compatíveis com a carga declarada e acompanhar o frete até a entrega, mantendo o contratante informado.</p>

        <h3 class="legal-h">Responsabilidades do contratante</h3>
        <p class="legal-p">Declarar corretamente o que será transportado, os endereços e os horários, garantir que haja alguém para liberar a coleta e receber a entrega e informar dados de contato corretos. Pedidos ilícitos ou em desacordo com a declaração não são atendidos.</p>

        <h3 class="legal-h">Cancelamento</h3>
        <p class="legal-p">O frete pode ser cancelado sem custo antes de o motorista sair para a coleta. Depois disso, o cancelamento pode gerar cobrança proporcional ao trajeto, informada no momento.</p>

        <h3 class="legal-h">Foro</h3>
        <p class="legal-p">Fica eleito o foro da comarca de {{ EMPRESA.cidade }} para resolver eventuais controvérsias.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EMPRESA } from '@/config/contato'
</script>

<style src="@/assets/legal.css" scoped></style>
