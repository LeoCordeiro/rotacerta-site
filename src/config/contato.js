// Contatos e dados da empresa: único lugar para trocar.
// WhatsApp no formato do wa.me: só dígitos, com 55 e DDD.
export const WHATSAPP_NUMBER = '5511927076274'

export const CONTATO = {
  whatsapp: WHATSAPP_NUMBER,
  telefoneExibicao: '(11) 92707-6274',
  email: 'atendimento@rotacertafretes.com.br',
  instagram: '@rotacerta_fretes',
  instagramUrl: 'https://www.instagram.com/rotacerta_fretes/',
  reclameAquiUrl: 'https://www.reclameaqui.com.br/empresa/rotacertafretes/',
}

export const EMPRESA = {
  nome: 'Rota Certa Fretes',
  razao: '59.070.254 Felipe Nogueira Gurgel',
  cnpj: '59.070.254/0001-29',
  cnae: 'Transporte rodoviário de carga, exceto produtos perigosos e mudanças, municipal',
  cnaeCurto: 'Transporte rodoviário de carga municipal',
  cnaeCodigo: '4930-2/01',
  endereco: 'Lajeado — São Paulo/SP',
  bairro: 'Lajeado',
  cidade: 'São Paulo/SP',
  horario: 'Orçamento na hora',
}

export function waLink(texto = 'Olá! Vim pelo site da Rota Certa Fretes e quero um orçamento de frete.') {
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`
}
