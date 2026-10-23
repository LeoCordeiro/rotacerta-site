<template>
  <section class="sec cta-sec">
    <div class="col grade">
      <div class="bloco principal">
        <span class="tag">Para quem precisa de frete</span>
        <h2>Peça seu orçamento<br>agora.</h2>
        <p>
          Diga origem, destino e o que vai levar. Você recebe o valor antes de
          contratar e fala com uma pessoa só até a entrega.
        </p>
        <div class="acoes">
          <router-link to="/solicitar" class="btn btn--azul">Pedir orçamento →</router-link>
          <a :href="wa" target="_blank" rel="noopener" class="btn btn--claro">
            <v-icon size="18">mdi-whatsapp</v-icon> WhatsApp
          </a>
        </div>
      </div>

      <div class="bloco secundario">
        <span class="tag">Para quem dirige</span>
        <h3>Tem caminhonete, VUC ou baú?</h3>
        <p>
          Entre para a rede de motoristas parceiros da Rota Certa e receba fretes
          organizados, com repasse claro.
        </p>
        <router-link to="/parceiro" class="link">Seja motorista parceiro <span>→</span></router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { waLink } from '@/config/contato'
const wa = waLink('Olá! Quero pedir um orçamento de frete.')
</script>

<style scoped>
.cta-sec { background: var(--nevoa); }
.grade { display: grid; grid-template-columns: 1.2fr 1fr; gap: 22px; }

.bloco { border-radius: var(--r); padding: 44px 42px; }

.principal {
  background: linear-gradient(130deg, var(--noite) 0%, var(--noite-3) 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
}
/* brilho diagonal sutil — profundidade, não glow */
.principal::after {
  content: ''; position: absolute; top: -40%; right: -10%;
  width: 60%; height: 180%;
  background: linear-gradient(105deg, transparent, rgba(255, 176, 32, .10), transparent);
  transform: rotate(8deg);
  pointer-events: none;
}
.principal .tag { color: var(--azul-cl); }
.principal h2 {
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 800;
  margin-bottom: 16px;
}
.principal p { font-size: 15.5px; line-height: 1.62; color: var(--texto-cl); max-width: 420px; }
.acoes { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; position: relative; z-index: 1; }

.secundario {
  background: #fff;
  border: 1px solid var(--fio);
  box-shadow: var(--sombra-s);
}
.secundario h3 { font-size: 22px; font-weight: 800; margin-bottom: 14px; }
.secundario p { font-size: 14.5px; line-height: 1.62; color: var(--texto); }
.link {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 22px;
  color: var(--azul-esc); text-decoration: none;
  font-weight: 700; font-size: 14.5px;
}
.link span { transition: transform .25s var(--ease); }
.link:hover span { transform: translateX(4px); }

@media (max-width: 900px) {
  .grade { grid-template-columns: 1fr; }
  .bloco { padding: 34px 26px; }
  .principal p { max-width: none; }
}
</style>
