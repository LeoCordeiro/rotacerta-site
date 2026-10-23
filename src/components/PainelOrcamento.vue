<template>
  <div class="painel entra d2">
    <div class="pn-h">
      <b>Pedir orçamento</b>
      <span><i></i> resposta pelo WhatsApp</span>
    </div>

    <div class="pn-b">
      <form class="campo" @submit.prevent="ir">
        <input
          v-model="coleta"
          type="text"
          placeholder="Bairro da coleta"
          aria-label="Bairro da coleta"
          maxlength="60"
          autocomplete="off"
        />
        <button type="submit">Orçar</button>
      </form>

      <div class="etp">
        <div v-for="(e, i) in ETAPAS" :key="e.t" class="e">
          <i>{{ i + 1 }}</i>
          <b>{{ e.t }}</b>
          <s>{{ e.r }}</s>
        </div>
      </div>
    </div>

    <div class="pn-f">Você vê o valor antes de contratar.</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const ETAPAS = [
  { t: 'Pedido', r: 'origem e destino' },
  { t: 'Orçamento', r: 'valor claro' },
  { t: 'Motorista', r: 'veículo certo' },
  { t: 'Entrega', r: 'acompanhada' },
]

const router = useRouter()
const coleta = ref('')

// Só encaminha — o pedido completo vive na página /solicitar (lê ?coleta=).
function ir() {
  const c = coleta.value.trim()
  router.push(c ? { path: '/solicitar', query: { coleta: c } } : '/solicitar')
}
</script>

<style scoped>
.painel {
  background: rgba(255, 255, 255, .97);
  border-radius: var(--r);
  box-shadow: var(--sombra-alta);
  overflow: hidden;
}

.pn-h {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 1px solid var(--fio);
}
.pn-h b { font-family: 'Archivo', sans-serif; font-size: 15px; font-weight: 700; }
.pn-h span { display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--texto-fraco); }
.pn-h i { width: 6px; height: 6px; border-radius: 50%; background: #3DDC97; display: block; }

.pn-b { padding: 18px 20px; }

.campo { display: flex; gap: 8px; }
.campo input {
  flex: 1; min-width: 0;
  border: 1.5px solid var(--fio-2);
  border-radius: var(--r-s);
  padding: 13px 14px;
  font-family: inherit; font-size: 15px;
  color: var(--tinta); outline: 0;
  transition: border-color .2s var(--ease), box-shadow .2s var(--ease);
}
.campo input::placeholder { color: var(--texto-cl); }
.campo input:focus { border-color: var(--azul); box-shadow: 0 0 0 3px rgba(255,176,32,.14); }
.campo button {
  border: 0; background: var(--azul); color: var(--sobre-acento);
  border-radius: var(--r-s); padding: 0 20px;
  font-family: inherit; font-weight: 700; font-size: 14px;
  cursor: pointer; transition: background .2s var(--ease);
}
.campo button:hover { background: #E69A00; }

.etp { margin-top: 18px; display: grid; gap: 2px; }
.e {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 12px; border-radius: var(--r-s);
  transition: background .2s var(--ease);
}
.e:hover { background: var(--nevoa); }
.e i {
  width: 26px; height: 26px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--azul-fundo); color: var(--azul-esc);
  font-family: 'Archivo', sans-serif; font-size: 11px; font-weight: 700;
  font-style: normal; flex-shrink: 0;
}
.e b { font-size: 13.5px; font-weight: 600; }
.e s { margin-left: auto; text-decoration: none; font-size: 12px; color: var(--texto-fraco); }

.pn-f {
  padding: 13px 20px;
  background: var(--nevoa);
  border-top: 1px solid var(--fio);
  font-size: 12px; color: var(--texto-fraco);
}
</style>
