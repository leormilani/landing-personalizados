import React, { useState } from 'react';
import {
  ChevronDown,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Settings,
  X,
  RotateCcw
} from 'lucide-react';
import { CATEGORIES, FAQ_ITEMS } from '../data/siteData';

export default function FaqContactAndCms({
  products,
  selectedProductName,
  openWhatsApp,
  isAdminOpen,
  setIsAdminOpen,
  adminTab,
  setAdminTab,
  onAddGallery,
  onAddProduct,
  onAddTestimonial,
  onResetData
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(() => !localStorage.getItem('atelie_lgpd_accepted'));
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    product: '',
    details: '',
    lgpd: false,
    honeypot: ''
  });

  // Sincroniza quando o usuário clica em "Solicitar Orçamento" em algum card
  React.useEffect(() => {
    if (selectedProductName) {
      setFormData((prev) => ({ ...prev, product: selectedProductName }));
    }
  }, [selectedProductName]);

  const [newGallery, setNewGallery] = useState({ title: '', tag: 'Casamento', image: '' });
  const [newProduct, setNewProduct] = useState({
    title: '',
    category: 'Canecas & Presentes',
    description: '',
    customization: '',
    image: ''
  });
  const [newReview, setNewReview] = useState({ name: '', occasion: '', text: '' });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setFormSubmitted(true);
  };

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-white border-t border-[#EFE9E1]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87D65]">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C2825]">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="rounded-2xl border border-[#E8E0D5] bg-[#FAF8F5] overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-[#2C2825]"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#B87D65] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#6A6057] leading-relaxed border-t border-[#EFE9E1] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTATO E ORÇAMENTO */}
      <section id="orcamento" className="py-20 px-4 sm:px-6 bg-[#F4EDE4]">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-[#E6DDD2] overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#2C2825] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A48F]">
                Vamos criar juntos
              </span>
              <h2 className="text-3xl font-semibold leading-tight">Solicite seu orçamento sem compromisso</h2>
              <p className="text-sm text-[#CFC7BE] leading-relaxed">
                Conte o que você precisa e responderemos com sugestões de materiais, prazos e valores.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => openWhatsApp(formData.product)}
                className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition"
              >
                <MessageCircle className="w-5 h-5" />
                Atendimento Rápido via WhatsApp
              </button>
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#CFC7BE]">
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D8A48F]" /> Seg a Sex, das 09h às 18h</p>
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D8A48F]" /> Dados protegidos (LGPD)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2C2825]">Solicitação enviada!</h3>
                <p className="text-sm text-[#6A6057] max-w-md">
                  Obrigada, <strong>{formData.name}</strong>! Retornaremos em breve com seu orçamento.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-full border border-[#DED4C8] text-xs font-medium"
                >
                  Enviar novo pedido
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <input
                  type="text"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4F4740] mb-1.5">Seu nome *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D6CA] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4F4740] mb-1.5">WhatsApp ou E-mail *</label>
                    <input
                      type="text"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D6CA] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4F4740] mb-1.5">Produto desejado *</label>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D6CA] text-sm"
                  >
                    <option value="">Selecione uma opção...</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                    <option value="Projeto Especial">Outro / Projeto Especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4F4740] mb-1.5">Descreva sua personalização *</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Informe quantidade, cores, data do evento ou detalhes..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E0D6CA] text-sm"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-[#6A6057] cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.lgpd}
                    onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                    className="mt-0.5"
                  />
                  <span>Concordo com o uso dos meus dados para retorno deste orçamento (LGPD).</span>
                </label>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#B87D65] hover:bg-[#9F6750] text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4" />
                  Enviar Solicitação de Orçamento
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#231F1D] text-[#A89F96] py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif-title text-lg text-white font-semibold">Ateliê Aura</span>
            <p className="text-xs mt-1">Produtos personalizados com afeto e sofisticação</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#B87D65] text-white transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 text-xs text-white"
            >
              <Settings className="w-3.5 h-3.5" /> Painel CMS
            </button>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <button
        onClick={() => openWhatsApp()}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* BANNER LGPD */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 sm:max-w-md z-40 bg-[#2C2825] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4">
          <p className="text-xs text-[#E5DDD5]">Usamos cookies para melhorar sua experiência (LGPD).</p>
          <button
            onClick={() => {
              localStorage.setItem('atelie_lgpd_accepted', 'true');
              setShowCookieBanner(false);
            }}
            className="px-4 py-2 rounded-xl bg-[#B87D65] text-white text-xs font-semibold shrink-0"
          >
            Aceitar
          </button>
        </div>
      )}

      {/* MODAL CMS */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-semibold">Painel Administrativo (CMS)</h3>
              <button onClick={() => setIsAdminOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex gap-2 bg-[#FAF8F5] p-1 rounded-xl">
              {['gallery', 'product', 'testimonial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAdminTab(tab)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg ${adminTab === tab ? 'bg-white shadow' : ''}`}
                >
                  {tab === 'gallery' ? '+ Galeria' : tab === 'product' ? '+ Produto' : '+ Avaliação'}
                </button>
              ))}
            </div>

            {adminTab === 'gallery' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onAddGallery(newGallery);
                  setNewGallery({ title: '', tag: 'Casamento', image: '' });
                }}
                className="space-y-3"
              >
                <input required placeholder="Título do trabalho" value={newGallery.title} onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <input placeholder="Tag (ex: Casamento)" value={newGallery.tag} onChange={(e) => setNewGallery({ ...newGallery, tag: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <input type="url" placeholder="URL da foto (opcional)" value={newGallery.image} onChange={(e) => setNewGallery({ ...newGallery, image: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <button type="submit" className="w-full py-3 rounded-xl bg-[#B87D65] text-white text-sm font-semibold">Publicar na Galeria</button>
              </form>
            )}

            {adminTab === 'product' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onAddProduct(newProduct);
                  setNewProduct({ title: '', category: 'Canecas & Presentes', description: '', customization: '', image: '' });
                }}
                className="space-y-3"
              >
                <input required placeholder="Nome do produto" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm">
                  {CATEGORIES.filter((c) => c !== 'Todos').map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <input placeholder="Descrição curta" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <input placeholder="Opções de personalização" value={newProduct.customization} onChange={(e) => setNewProduct({ ...newProduct, customization: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <button type="submit" className="w-full py-3 rounded-xl bg-[#B87D65] text-white text-sm font-semibold">Adicionar Produto</button>
              </form>
            )}

            {adminTab === 'testimonial' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onAddTestimonial(newReview);
                  setNewReview({ name: '', occasion: '', text: '' });
                }}
                className="space-y-3"
              >
                <input required placeholder="Nome do cliente" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <input placeholder="Ocasião" value={newReview.occasion} onChange={(e) => setNewReview({ ...newReview, occasion: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <textarea required rows="3" placeholder="Depoimento" value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border text-sm" />
                <button type="submit" className="w-full py-3 rounded-xl bg-[#B87D65] text-white text-sm font-semibold">Publicar Avaliação</button>
              </form>
            )}

            <div className="pt-2 border-t flex justify-between items-center text-xs">
              <button onClick={onResetData} className="inline-flex items-center gap-1 text-[#8C7A6B] hover:text-red-600">
                <RotateCcw className="w-3.5 h-3.5" /> Restaurar padrão
              </button>
              <button onClick={() => setIsAdminOpen(false)} className="font-semibold">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}