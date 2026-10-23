<template>
  <div>
    <div class="legal-hero">
      <div class="col">
        <div class="legal-eyebrow">Legal</div>
        <h1 class="legal-title">Política de Privacidade</h1>
      </div>
    </div>
    <div class="col legal-col">
      <div class="legal-bloco" v-revela>
        <p class="legal-updated">Última atualização: outubro de 2026</p>

        <h3 class="legal-h">Dados que coletamos</h3>
        <p class="legal-p">Ao pedir orçamento, falar com a gente ou se cadastrar como motorista parceiro, coletamos só o necessário: nome, número de WhatsApp, bairros de coleta e entrega, dados da carga e, no caso de motoristas, dados do veículo e da documentação. Não coletamos dados de navegação além dos essenciais ao funcionamento do site.</p>

        <h3 class="legal-h">Como usamos os dados</h3>
        <p class="legal-p">Os dados são usados só para responder pedidos, organizar e acompanhar os fretes e falar com você pelo WhatsApp. Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de marketing.</p>

        <h3 class="legal-h">Compartilhamento</h3>
        <p class="legal-p">Para fazer o frete, os dados necessários (nome, endereços e telefone de contato) são compartilhados com o motorista parceiro responsável. Dados fiscais podem ser compartilhados com autoridades quando exigido por lei.</p>

        <h3 class="legal-h">Armazenamento e segurança</h3>
        <p class="legal-p">Os registros são mantidos pelo prazo necessário ao cumprimento de obrigações legais e fiscais. Adotamos medidas razoáveis de segurança para proteger as informações contra acesso não autorizado.</p>

        <h3 class="legal-h">Seus direitos (LGPD)</h3>
        <p class="legal-p">Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir a qualquer momento: confirmação do tratamento, acesso, correção ou exclusão dos seus dados. Basta escrever para {{ CONTATO.email }} ou chamar no WhatsApp {{ CONTATO.telefoneExibicao }}.</p>

        <h3 class="legal-h">Controlador</h3>
        <p class="legal-p">{{ EMPRESA.razao }}<br>CNPJ: {{ EMPRESA.cnpj }}<br>{{ EMPRESA.endereco }}<br>{{ CONTATO.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CONTATO, EMPRESA } from '@/config/contato'
</script>

<style src="@/assets/legal.css" scoped></style>
