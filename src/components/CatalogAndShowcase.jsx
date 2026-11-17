import React, { useState } from 'react';
import { MessageCircle, Plus, Sparkles, Gift, Palette, Star } from 'lucide-react';
import { CATEGORIES } from '../data/siteData';

export default function CatalogAndShowcase({
  products,
  gallery,
  testimonials,
  openWhatsApp,
  onSelectProduct,
  onOpenAdmin
}) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* PRODUTOS */}
      <section id="produtos" className="py-20 px-4 sm:px-6 bg-white border-y border-[#EFE9E1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87D65]">
              Catálogo Sob Medida
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C2825]">
              Nossos Produtos Personalizados
            </h2>
            <p className="text-sm sm:text-base text-[#6A6057]">
              Escolha uma categoria abaixo e descubra como cada peça pode ser adaptada com nomes,
              cores, frases ou a identidade visual do seu evento.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-[#2C2825] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-[#5C534B] border border-[#E6DDD2] hover:border-[#B87D65]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EAE2D7] hover:shadow-xl hover:border-[#D5C3B3] transition flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE9E1]">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#8C5843]">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#2C2825]">{product.title}</h3>
                    <p className="text-sm text-[#6A6057] leading-relaxed">{product.description}</p>
                    <p className="text-xs text-[#8C5843] bg-[#F2E8DF]/70 px-3 py-2 rounded-lg">
                      <strong>Personalização:</strong> {product.customization}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product.title)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#2C2825] text-white text-xs font-semibold hover:bg-[#B87D65] transition"
                    >
                      Solicitar Orçamento
                    </button>
                    <button
                      onClick={() => openWhatsApp(product.title)}
                      title="Pedir no WhatsApp"
                      className="p-2.5 rounded-xl bg-white border border-[#DFD5C9] text-[#25D366] hover:bg-[#25D366] hover:text-white transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87D65]">
              Simples e Transparente
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C2825]">
              Como funciona a personalização
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Escolha o produto', desc: 'Navegue pelo catálogo e selecione as peças que combinam com a sua ocasião.' },
              { step: '02', title: 'Envie sua ideia', desc: 'Compartilhe nomes, frases, logotipo, paleta de cores ou referências.' },
              { step: '03', title: 'Orientações e orçamento', desc: 'Enviamos valores, prazos e montamos uma prévia digital para aprovação.' },
              { step: '04', title: 'Produção com carinho', desc: 'Após a aprovação da arte, iniciamos a produção artesanal e preparamos o envio.' }
            ].map((item) => (
              <div key={item.step} className="bg-white p-7 rounded-2xl border border-[#EAE2D7]">
                <span className="font-serif-title text-4xl font-bold text-[#E5D5C5] block mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-[#2C2825] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6A6057] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA DE TRABALHOS */}
      <section id="galeria" className="py-20 px-4 sm:px-6 bg-white border-y border-[#EFE9E1]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87D65]">
                Portfólio Real
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C2825] mt-1">
                Trabalhos já realizados
              </h2>
            </div>
            <button
              onClick={() => onOpenAdmin('gallery')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#8C5843] bg-[#F2E8DF] px-4 py-2 rounded-full hover:bg-[#E7D7C8] transition self-start"
            >
              <Plus className="w-3.5 h-3.5" />
              Adicionar trabalho (Demo CMS)
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((work) => (
              <div key={work.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EFE9E1] shadow-sm">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#F2D5C4] font-semibold">
                    {work.tag}
                  </span>
                  <h3 className="text-base font-medium leading-snug mt-1">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 px-4 sm:px-6 bg-[#2C2825] text-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A48F]">
              Por que escolher o Ateliê Aura
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Cuidado que se vê e se sente em cada entrega
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Palette, title: '100% Sob Medida', desc: 'Adaptamos arte, tipografia e cores ao seu estilo.' },
              { icon: Sparkles, title: 'Atenção aos Detalhes', desc: 'Materiais selecionados e acabamento manual rigoroso.' },
              { icon: MessageCircle, title: 'Atendimento Próximo', desc: 'Suporte humanizado para ajudar nas melhores combinações.' },
              { icon: Gift, title: 'Todas as Ocasiões', desc: 'Presentes, casamentos, maternidade e brindes corporativos.' }
            ].map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#B87D65]/20 text-[#E2B09B] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{diff.title}</h3>
                  <p className="text-sm text-[#CFC7BE] leading-relaxed">{diff.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87D65]">
                Depoimentos Reais
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C2825] mt-1">
                O que dizem nossos clientes
              </h2>
            </div>
            <button
              onClick={() => onOpenAdmin('testimonial')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#8C5843] bg-[#F2E8DF] px-4 py-2 rounded-full hover:bg-[#E7D7C8] transition self-start"
            >
              <Plus className="w-3.5 h-3.5" />
              Nova avaliação (Demo CMS)
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-7 rounded-2xl border border-[#EAE2D7] flex flex-col justify-between space-y-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D99B52]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4F4740] leading-relaxed italic">"{item.text}"</p>
                </div>
                <div className="pt-4 border-t border-[#F2ECE4]">
                  <p className="text-sm font-semibold text-[#2C2825]">{item.name}</p>
                  <p className="text-xs text-[#8C7A6B]">{item.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}