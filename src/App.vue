<template>
  <v-app style="background: var(--branco)">
    <ScrollProgressBar />
    <Header />
    <v-main style="background: transparent">
      <router-view />
    </v-main>
    <Footer />
    <a :href="wa" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp" class="wa">
      <v-icon size="26" color="white">mdi-whatsapp</v-icon>
    </a>
  </v-app>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ScrollProgressBar from '@/components/ScrollProgressBar.vue'
import { waLink } from '@/config/contato'
const wa = waLink()
</script>

<style>
/* Botão flutuante do WhatsApp */
.wa {
  position: fixed;
  bottom: 22px;
  right: 22px;
  z-index: 999;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #22A45D;
  box-shadow: 0 8px 22px -6px rgba(34,164,93,.75);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background .18s ease;
}
.wa:hover { background: #1B8B4E; transform: translateY(-2px); }
</style>
