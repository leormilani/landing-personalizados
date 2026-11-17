import React, { useState, useEffect } from 'react';
import {
  GOOGLE_SHEETS_CSV_URL,
  WHATSAPP_NUMBER,
  INITIAL_PRODUCTS,
  INITIAL_GALLERY,
  INITIAL_TESTIMONIALS
} from './data/siteData';
import NavbarAndHero from './components/NavBarAndHero';
import CatalogAndShowcase from './components/CatalogAndShowcase';
import FaqContactAndCms from './components/FaqContactAndCms';

export default function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('atelie_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('atelie_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('atelie_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [selectedProductName, setSelectedProductName] = useState('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminTab, setAdminTab] = useState('gallery');

  useEffect(() => {
    localStorage.setItem('atelie_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('atelie_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('atelie_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    if (!GOOGLE_SHEETS_CSV_URL) return;

    fetch(GOOGLE_SHEETS_CSV_URL)
      .then((res) => res.text())
      .then((csvText) => {
        if (csvText.trim().startsWith('<') || csvText.includes('<!DOCTYPE')) {
          console.warn('O link do Google Sheets não retornou um CSV público válido.');
          return;
        }

        const clean = (val) => val?.replace(/^"|"$/g, '').trim() || '';
        const rows = csvText.split(/\r?\n/).slice(1);

        const parsed = rows
          .filter((r) => r.trim() !== '')
          .map((row, idx) => {
            const [title, category, description, customization, image] = row.split(',');
            return {
              id: 500 + idx,
              title: clean(title) || 'Produto Personalizado',
              category: clean(category) || 'Canecas & Presentes',
              description: clean(description),
              customization: clean(customization) || 'Sob encomenda',
              image: clean(image) || INITIAL_PRODUCTS[0].image
            };
          });

        if (parsed.length > 0) setProducts(parsed);
      })
      .catch((err) => console.error('Erro Google Sheets:', err));
  }, []);

  const openWhatsApp = (productName = '') => {
    const msg = productName
      ? `Olá! Vim pelo site do Ateliê Aura e gostaria de um orçamento para: *${productName}*.`
      : 'Olá! Vim pelo site do Ateliê Aura e gostaria de solicitar um orçamento.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSelectProduct = (title) => {
    setSelectedProductName(title);
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2825]">
      <NavbarAndHero openWhatsApp={openWhatsApp} />

      <CatalogAndShowcase
        products={products}
        gallery={gallery}
        testimonials={testimonials}
        openWhatsApp={openWhatsApp}
        onSelectProduct={handleSelectProduct}
        onOpenAdmin={(tab) => {
          setAdminTab(tab);
          setIsAdminOpen(true);
        }}
      />

      <FaqContactAndCms
        products={products}
        selectedProductName={selectedProductName}
        openWhatsApp={openWhatsApp}
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
        adminTab={adminTab}
        setAdminTab={setAdminTab}
        onAddGallery={(item) =>
          setGallery([
            {
              id: Date.now(),
              title: item.title,
              tag: item.tag || 'Exclusivo',
              image: item.image || INITIAL_GALLERY[0].image
            },
            ...gallery
          ])
        }
        onAddProduct={(item) =>
          setProducts([
            {
              id: Date.now(),
              title: item.title,
              category: item.category,
              description: item.description || 'Peça exclusiva sob encomenda.',
              customization: item.customization || 'Cores e nomes',
              image: item.image || INITIAL_PRODUCTS[0].image
            },
            ...products
          ])
        }
        onAddTestimonial={(item) =>
          setTestimonials([
            { id: Date.now(), name: item.name, occasion: item.occasion || 'Cliente', text: item.text, rating: 5 },
            ...testimonials
          ])
        }
        onResetData={() => {
          localStorage.clear();
          setProducts(INITIAL_PRODUCTS);
          setGallery(INITIAL_GALLERY);
          setTestimonials(INITIAL_TESTIMONIALS);
        }}
      />
    </div>
  );
}