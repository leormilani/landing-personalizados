// Cole aqui o link CSV publicado da sua planilha do Google Sheets quando quiser ativar o CMS
export const GOOGLE_SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTxl7UNJbIA2XY2r-qtPUjiCQRnEnDWw6fyk7wPccHmtAlXUfrKhHawtwK_3WHze4Zq3FwTnx0p299/pub?gid=0&single=true&output=csv"; 

export const WHATSAPP_NUMBER = "5511999999999";

export const CATEGORIES = [
  "Todos",
  "Canecas & Presentes",
  "Papelaria & Convites",
  "Lembrancinhas",
  "Corporativo"
];

export const INITIAL_PRODUCTS = [
  {
    id: 1,
    title: "Caneca Cerâmica Minimalista",
    category: "Canecas & Presentes",
    description: "Acabamento fosco com gravação em alta definição de nomes, iniciais ou ilustrações exclusivas.",
    customization: "Nome, cor da alça e arte interna",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Kit Papelaria & Convites Finos",
    category: "Papelaria & Convites",
    description: "Papel texturizado de alta gramatura com selo em cera e caligrafia personalizada para eventos.",
    customization: "Paleta de cores, monograma e texto",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Velas Aromáticas Personalizadas",
    category: "Lembrancinhas",
    description: "Pote de vidro âmbar ou transparente com rótulo exclusivo e fragrâncias suaves para casamentos e batizados.",
    customization: "Essência, rótulo e laço de acabamento",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Caderno Executivo & Caneta",
    category: "Corporativo",
    description: "Capa dura revestida em linho com gravação em baixo-relevo ou hot stamping dourado da sua marca.",
    customization: "Logotipo, cor da capa e embalagem",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Caixa Presente Cartonada",
    category: "Canecas & Presentes",
    description: "Caixa rígida sob medida com fechamento magnético e mensagem especial na parte interna da tampa.",
    customization: "Tamanho, fita de cetim e dedicatória",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Ecobag Algodão Cru Estampada",
    category: "Corporativo",
    description: "Tecido 100% algodão resistente com estampa minimalista ideal para kits de boas-vindas e eventos.",
    customization: "Ilustração, frase ou identidade visual",
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80"
  }
];

export const INITIAL_GALLERY = [
  {
    id: 101,
    title: "Lembrancinhas Casamento Marina & Lucas",
    tag: "Casamento",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 102,
    title: "Kit Boas-Vindas Equipe Tech",
    tag: "Corporativo",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 103,
    title: "Presente Dia das Mães — Edição Floral",
    tag: "Presentes",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 104,
    title: "Identidade Visual & Tags Artesanais",
    tag: "Papelaria",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Camila Ferreira",
    occasion: "Lembrancinhas de Casamento",
    text: "Cada detalhe veio impecável! Desde o atendimento para aprovar a arte até o cheirinho e o acabamento das caixas. Nossos convidados elogiaram muito.",
    rating: 5
  },
  {
    id: 2,
    name: "Rafael Mendes",
    occasion: "Brindes Corporativos",
    text: "Encomendamos 40 kits com caderno e caneca personalizada para um evento da empresa. Entregaram antes do prazo e com qualidade superior ao esperado.",
    rating: 5
  },
  {
    id: 3,
    name: "Juliana Costa",
    occasion: "Presente de Aniversário",
    text: "Mandei apenas uma ideia solta de referência e eles transformaram em um presente lindo e super delicado. Com certeza farei novos pedidos!",
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como faço um pedido personalizado?",
    answer: "É muito simples: escolha o produto desejado na nossa vitrine, clique em solicitar orçamento ou preencha o formulário no final da página informando sua ideia. Nossa equipe responde rapidamente com as opções e valores."
  },
  {
    question: "Posso enviar uma imagem, logotipo ou referência?",
    answer: "Com certeza! Você pode nos enviar fotos de inspiração, logotipos, frases ou paleta de cores pelo WhatsApp ou formulário. Criamos uma prévia digital para você aprovar antes de iniciar a produção."
  },
  {
    question: "Qual é o prazo de produção?",
    answer: "O prazo médio varia de 5 a 10 dias úteis após a aprovação da arte final, dependendo da quantidade e complexidade do item. Para pedidos urgentes, consulte nossa disponibilidade."
  },
  {
    question: "Existe quantidade mínima para pedidos?",
    answer: "Para presentes individuais (como canecas e caixas personalizadas), produzimos a partir de 1 unidade. Para lembrancinhas de eventos e brindes corporativos, a quantidade mínima varia de 10 a 15 unidades conforme o modelo."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com 50% de sinal na aprovação da arte para reserva de agenda e materiais, e os 50% restantes na finalização antes do envio. Aceitamos Pix, transferência e cartão de crédito."
  },
  {
    question: "Como é realizado o envio?",
    answer: "Enviamos para todo o Brasil via Correios (PAC/Sedex) ou transportadora, com embalagem reforçada para proteger peças delicadas. Também oferecemos retirada local ou entrega via motoboy na região."
  }
];