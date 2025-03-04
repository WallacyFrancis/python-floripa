'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavItemInterface, SidebarInterface } from '@/interfaces/SidebarInterface';
import { House, Newspaper, FileText, Users, Network, Mail } from 'lucide-react';

// Lista de itens de navegação
const navItems: NavItemInterface[] = [
  { label: 'Página Inicial', href: '#home', icon: <House strokeWidth={1.75} /> },
  { label: 'PyNews', href: '#pynews', icon: <Newspaper /> },
  { label: 'Posts', href: '#posts', icon: <FileText strokeWidth={1.75} /> },
  { label: 'Membros', href: '#membros', icon: <Users strokeWidth={1.75} /> },
  { label: 'Comunidade', href: '#comunidade', icon: <Network strokeWidth={1.75} /> },
  { label: 'Contatos', href: '#contato', icon: <Mail strokeWidth={1.75} /> },
];

export default function Sidebar({}: SidebarInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Elemento precisa estar 50% visível para ser considerado ativo
    );

    // Observa todas as seções
    document.querySelectorAll('section[id], header[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Função para verificar se o link está ativo
  const isActiveLink = (href: string) => {
    const sectionId = href.replace('#', '');
    return sectionId === activeSection;
  };

  // Função para rolagem suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay para fechar o menu ao clicar fora (apenas em mobile) */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    
      {/* Botão de seta para abrir/fechar o menu mobile */}
      <button
        className={`
          lg:hidden fixed z-50 p-2.5 bg-primary-blue rounded-lg shadow-md 
          hover:bg-blue-700 transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
          transform hover:scale-105
          ${isOpen 
            ? 'top-6 left-[290px]' 
            : 'top-6 left-4'
          }
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        <svg
          className={`
            w-5 h-5 text-white
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'rotate-180' : ''}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7" // Sempre seta para direita, a rotação fará o efeito de inversão
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-[280px] h-screen bg-primary-blue
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col p-6 z-40 shadow-[5px_0_10px_-5px_rgba(0,0,0,0.3)]
        `}
      >
        {/* Logo */}
        <div className="mb-6 -mt-5">
          <Image
            src="/logo.png"
            alt="Python Floripa"
            width={180}
            height={30}
            priority
            className="w-50 h-30"
          />
        </div>

        {/* Navegação */}
        <nav className="flex-1 -mt-5">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`
                    flex items-center gap-3 p-2 rounded-md transition-colors
                    ${
                      isActiveLink(item.href)
                        ? 'bg-white/10 text-primary-yellow font-medium'
                        : 'text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className={isActiveLink(item.href) ? 'text-primary-yellow' : 'text-white'}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* QR Code */}
        <div className="mt-auto pt-4 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white">Python Floripa</h3>
            <p className="text-sm text-white mb-4">Entre para nossa comunidade</p>
            <div className="bg-primary-yellow p-4 rounded-lg">
              <Image
                src="/qr-code.png"
                alt="QR Code do grupo"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
} 