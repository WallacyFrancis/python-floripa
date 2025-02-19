'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavItemInterface, SidebarInterface } from '@/interfaces/SidebarInterface';
import { House, Newspaper, FileText, Users, Network, Mail } from 'lucide-react';

// Componente do ícone Python
const PythonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.75"
    fill="none"
  >
    <path d="M12 2C8.73 2 8 3.43 8 5v2.67c0 1.73-.11 2.33-2 2.33H4c-1.75 0-2 1.37-2 2.5 0 1.14.25 2.5 2 2.5h2c1.75 0 2 .77 2 2.33V20c0 1.57.73 3 4 3s4-1.43 4-3v-2.67c0-1.73.11-2.33 2-2.33h2c1.75 0 2-1.37 2-2.5 0-1.14-.25-2.5-2-2.5h-2c-1.75 0-2-.77-2-2.33V5c0-1.57-.73-3-4-3z" />
    <circle cx="9" cy="7" r="1" fill="currentColor" />
    <circle cx="15" cy="17" r="1" fill="currentColor" />
  </svg>
);

// Lista de itens de navegação
const navItems: NavItemInterface[] = [
  { label: 'Página Inicial', href: '#home', icon: <House strokeWidth={1.75} /> },
  { label: 'PyNews', href: '#pynews', icon: <Newspaper /> },
  { label: 'Posts', href: '#posts', icon: <FileText strokeWidth={1.75} /> },
  { label: 'Membros', href: '#membros', icon: <Users strokeWidth={1.75} /> },
  { label: 'Comunidade', href: '#comunidade', icon: <Network strokeWidth={1.75} /> },
  { label: 'Contatos', href: '#contatos', icon: <Mail strokeWidth={1.75} /> },
];

export default function Sidebar({}: SidebarInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Função para verificar se o link está ativo
  const isActiveLink = (href: string) => pathname === href;

  // Função para rolagem suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fecha o menu mobile após clicar
    }
  };

  return (
    <>
      {/* Botão do menu mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary-blue rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-[280px] h-screen bg-primary-blue shadow-sw
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col p-6 z-40
        `}
      >
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Python Floripa"
            width={200}
            height={72}
            priority
            className="w-full -mb-12"
          />
        </div>

        {/* Navegação */}
        <nav className="flex-1">
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
                        ? 'bg-white/10 text-primary-yellow'
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

      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 