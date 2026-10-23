<template>
  <footer class="rodape">
    <div class="col topo">
      <div class="marca-bloco">
        <BrandMark :size="38" claro />
        <p class="desc">
          Frete urbano em São Paulo. Organizamos o seu frete, passamos o orçamento
          e conectamos você ao motorista ideal. Um contato só, do pedido à entrega.
        </p>
        <p class="restr">{{ RESTRICOES }}</p>
      </div>

      <div class="cols">
        <div class="c">
          <div class="ct">Navegação</div>
          <router-link to="/">Início</router-link>
          <router-link to="/como-funciona">Como funciona</router-link>
          <router-link to="/cobertura">Cobertura</router-link>
          <router-link to="/sobre">A empresa</router-link>
        </div>
        <div class="c">
          <div class="ct">Serviços</div>
          <router-link to="/solicitar">Pedir orçamento</router-link>
          <router-link to="/rastreio">Acompanhar frete</router-link>
          <router-link to="/parceiro">Seja motorista parceiro</router-link>
        </div>
        <div class="c">
          <div class="ct">Contato</div>
          <a :href="wa" target="_blank" rel="noopener">WhatsApp {{ CONTATO.telefoneExibicao }}</a>
          <a :href="`mailto:${CONTATO.email}`">{{ CONTATO.email }}</a>
          <a :href="CONTATO.instagramUrl" target="_blank" rel="noopener">Instagram {{ CONTATO.instagram }}</a>
          <span class="info">{{ EMPRESA.horario }}</span>
        </div>
        <div class="c">
          <div class="ct">Empresa</div>
          <span class="info">{{ EMPRESA.razao }}</span>
          <span class="info">CNPJ {{ EMPRESA.cnpj }}</span>
          <span class="info">{{ EMPRESA.endereco }}</span>
        </div>
      </div>
    </div>

    <div class="col base">
      <span>CNAE {{ EMPRESA.cnaeCodigo }} · {{ EMPRESA.cnaeCurto }}</span>
      <nav>
        <router-link to="/termos">Termos</router-link>
        <router-link to="/privacidade">Privacidade</router-link>
        <router-link to="/cookies">Cookies</router-link>
        <router-link to="/politica-de-repasse">Política de Repasse</router-link>
        <a :href="CONTATO.reclameAquiUrl" target="_blank" rel="noopener">Reclame Aqui</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import BrandMark from '@/components/BrandMark.vue'
import { CONTATO, EMPRESA, waLink } from '@/config/contato'
import { RESTRICOES } from '@/config/operacao'
const wa = waLink()
</script>

<style scoped>
.rodape { background: var(--noite); color: #fff; }
.topo { display: grid; grid-template-columns: 1fr 2.1fr; gap: 64px; padding-top: 58px; padding-bottom: 46px; }

.desc { font-size: 13.5px; line-height: 1.65; color: var(--texto-cl); margin: 18px 0 14px; max-width: 300px; }
.restr {
  font-size: 12px; line-height: 1.5; color: var(--texto-fraco);
  padding-left: 12px; border-left: 2px solid var(--azul); max-width: 300px;
}

.cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.c { display: flex; flex-direction: column; gap: 10px; }
.ct {
  font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
  color: var(--azul-cl);
  padding-bottom: 12px; margin-bottom: 2px;
  border-bottom: 1px solid var(--fio-cl);
}
.c a { color: #C9D2E0; text-decoration: none; font-size: 13.5px; transition: color .18s var(--ease); }
.c a:hover { color: #fff; }
.info { font-size: 12.5px; color: var(--texto-fraco); line-height: 1.5; }

.base {
  display: flex; justify-content: space-between; align-items: center;
  gap: 20px; flex-wrap: wrap;
  padding-top: 18px; padding-bottom: 22px;
  border-top: 1px solid var(--fio-cl);
  font-size: 12px; color: var(--texto-fraco);
}
.base nav { display: flex; gap: 20px; flex-wrap: wrap; }
.base nav a { color: var(--texto-fraco); text-decoration: none; font-size: 12.5px; }
.base nav a:hover { color: #fff; }

@media (max-width: 1000px) {
  .topo { grid-template-columns: 1fr; gap: 38px; }
  .cols { grid-template-columns: 1fr 1fr; }
  .desc, .restr { max-width: none; }
}
.c a { overflow-wrap: anywhere; }
</style>
