import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// Vuetify aqui serve só pros campos de formulário e o drawer mobile.
// Todo o resto do visual vem do theme.css.
// Campos em marinho: rótulo em âmbar sobre fundo claro não tem contraste.
export default createVuetify({
  defaults: {
    global: { rounded: 0 },
    VTextField: { variant: 'outlined', density: 'comfortable', rounded: 0, color: '#14284B' },
    VTextarea: { variant: 'outlined', density: 'comfortable', rounded: 0, color: '#14284B' },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#14284B',
          secondary: '#FFB020',
          background: '#F1F3F6',
          surface: '#FFFFFF',
        },
      },
    },
  },
})
