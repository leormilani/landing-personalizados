import React, { useState } from 'react';
import { Sparkles, CheckCircle2, MessageCircle, Heart, Menu, X, ArrowRight } from 'lucide-react';

export default function NavbarAndHero({ openWhatsApp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#B87D65] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif-title text-xl font-semibold tracking-tight text-[#2C2825] block leading-none">
                Ateliê Aura
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C7A6B]">
                Personalizados
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C534B]">
            <a href="#produtos" className="hover:text-[#B87D65] transition">Produtos</a>
            <a href="#como-funciona" className="hover:text-[#B87D65] transition">Como Funciona</a>
            <a href="#galeria" className="hover:text-[#B87D65] transition">Trabalhos</a>
            <a href="#depoimentos" className="hover:text-[#B87D65] transition">Avaliações</a>
            <a href="#faq" className="hover:text-[#B87D65] transition">Dúvidas</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#orcamento"
              className="px-5 py-2.5 rounded-full bg-[#2C2825] text-white text-sm font-medium hover:bg-[#B87D65] transition shadow-sm"
            >
              Solicitar Orçamento
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2C2825] hover:bg-[#EFE9E1]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E0D5] px-6 py-5 space-y-4">
            <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Produtos</a>
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Como Funciona</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Trabalhos Realizados</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Avaliações</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Perguntas Frequentes</a>
            <a
              href="#orcamento"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-full bg-[#B87D65] text-white text-sm font-medium"
            >
              Personalize o seu
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden py-14 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8DF] text-[#9A614B] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Feitos à mão e sob medida para você
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold leading-[1.12] text-[#2C2825]">
              Detalhes únicos que transformam momentos em{' '}
              <span className="italic text-[#B87D65]">memórias eternas.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C534B] leading-relaxed max-w-xl">
              Criamos presentes, papelaria fina, lembranças para eventos e kits corporativos
              personalizados com acabamento artesanal e cuidado em cada etapa.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#B87D65] text-white font-medium text-sm hover:bg-[#9F6750] transition shadow-md shadow-[#B87D65]/20"
              >
                Personalize o seu
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => openWhatsApp()}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-[#DED4C8] text-[#2C2825] font-medium text-sm hover:border-[#B87D65] hover:text-[#B87D65] transition"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Falar no WhatsApp
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#7A6F66]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B87D65]" /> Prévia digital antes da produção
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B87D65]" /> Envio seguro para todo o Brasil
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85"
                alt="Presentes e embalagens personalizadas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#EFE9E1] absolute -bottom-6 -left-6 max-w-xs">
              <div className="w-11 h-11 rounded-xl bg-[#F2E8DF] text-[#B87D65] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2C2825]">+500 projetos entregues</p>
                <p className="text-xs text-[#7A6F66]">Avaliação 5.0 pelos nossos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}