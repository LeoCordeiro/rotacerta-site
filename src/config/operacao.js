// Conteúdo da operação: serviços, cobertura, passos, diferenciais e restrições.

export const OPERACAO = {
  base: 'Lajeado, Zona Leste',
  areaAtuacao: 'Cidade de São Paulo',
  outrasCidades: 'sob consulta',
  orcamento: 'na hora',
  preco: 'sob consulta',
  atendimento: 'site ou WhatsApp',
}

// Regiões atendidas na cidade de São Paulo.
export const COBERTURA = [
  { nome: 'Zona Leste', nota: 'sede' },
  { nome: 'Zona Norte' },
  { nome: 'Centro' },
  { nome: 'Zona Oeste' },
  { nome: 'Zona Sul' },
]

export const SERVICOS = [
  {
    cod: '01',
    titulo: 'Frete urbano avulso',
    desc: 'Um frete pontual, de um endereço a outro dentro de São Paulo. Você diz o que vai levar; a gente organiza o resto.',
  },
  {
    cod: '02',
    titulo: 'Carretos e pequenas cargas',
    desc: 'Caixas, volumes soltos e cargas menores, no veículo do tamanho certo, sem pagar por espaço sobrando.',
  },
  {
    cod: '03',
    titulo: 'Entrega de móveis e eletrodomésticos',
    desc: 'Retirada na loja ou com quem vendeu e entrega no endereço combinado. Itens avulsos; mudança não fazemos.',
  },
  {
    cod: '04',
    titulo: 'Fretes para lojas e comércio',
    desc: 'Entrega para os clientes da sua loja, reposição entre unidades e retirada em fornecedor, dentro da cidade.',
  },
  {
    cod: '05',
    titulo: 'Fretes recorrentes para empresas',
    desc: 'Dias e horários combinados para quem envia com frequência, com o mesmo contato em todo frete.',
  },
  {
    cod: '06',
    titulo: 'Frete com ajudante',
    desc: 'Quando a carga pede mais mãos para carregar e descarregar, incluímos ajudante. Sob consulta.',
  },
]

export const PASSOS = [
  { n: '01', titulo: 'Peça o orçamento', desc: 'Pelo site ou WhatsApp: origem, destino, o que vai ser transportado e a data.' },
  { n: '02', titulo: 'Receba o valor claro', desc: 'Você vê o preço antes de contratar. Sem surpresa depois.' },
  { n: '03', titulo: 'Conectamos você ao motorista', desc: 'Escolhemos o motorista parceiro e o veículo certos para a sua carga.' },
  { n: '04', titulo: 'Acompanhamos até a entrega', desc: 'A gente segue com você pelo WhatsApp até a carga chegar ao destino.' },
]

// Diferenciais
export const COMPROMISSOS = [
  {
    titulo: 'Um contato só',
    desc: 'Você fala com a mesma pessoa do orçamento à entrega. Sem central e sem protocolo.',
  },
  {
    titulo: 'Orçamento claro antes de contratar',
    desc: 'O valor é passado antes de você fechar. O que foi combinado é o que vale.',
  },
  {
    titulo: 'Motorista e veículo certos para a carga',
    desc: 'Caminhonete, utilitário, VUC, baú ou caminhão leve: o veículo é escolhido pelo que você vai levar.',
  },
  {
    titulo: 'Acompanhamento até a entrega',
    desc: 'A gente acompanha o frete e mantém você informado pelo WhatsApp até a carga chegar.',
  },
  {
    titulo: 'Fretes recorrentes para empresas',
    desc: 'Para quem envia toda semana: dias e horários combinados, com o mesmo contato.',
  },
]

export const RESTRICOES = 'Não fazemos mudanças residenciais ou comerciais nem transporte de produtos perigosos. Atendemos a cidade de São Paulo; outras cidades da região, sob consulta.'
