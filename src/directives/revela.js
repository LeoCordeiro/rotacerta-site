// v-revela: adiciona .visivel quando o elemento entra na tela (IntersectionObserver).

const observador = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entradas, obs) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null

export default {
  mounted(el) {
    // Sem suporte ou com movimento reduzido: mostra direto, nunca deixa oculto.
    if (!observador || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visivel')
      return
    }
    el.classList.add('revela')
    observador.observe(el)
  },
  unmounted(el) {
    if (observador) observador.unobserve(el)
  },
}
