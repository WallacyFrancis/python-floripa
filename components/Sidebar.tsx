'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavItemInterface, SidebarInterface } from '@/interfaces/SidebarInterface';
import { House, Calendar, FileText, Users, Network, Mail } from 'lucide-react';

// Lista de itens de navegação
const navItems: NavItemInterface[] = [
  { label: 'Página Inicial', href: '/', icon: <House strokeWidth={1.75} /> },
  { label: 'Eventos', href: '/eventos', icon: <Calendar strokeWidth={1.75} /> },
  { label: 'Posts', href: '/posts', icon: <FileText strokeWidth={1.75} /> },
  { label: 'Membros', href: '/membros', icon: <Users strokeWidth={1.75} /> },
  { label: 'Comunidade', href: '/comunidade', icon: <Network strokeWidth={1.75} /> },
  { label: 'Contatos', href: '/contatos', icon: <Mail strokeWidth={1.75} /> },
];

export default function Sidebar({}: SidebarInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Função para verificar se o link está ativo
  const isActiveLink = (href: string) => pathname === href;

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
          fixed lg:static w-[250px] h-screen bg-primary-blue shadow-sw
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
            width={216}
            height={72}
            priority
            // className="brightness-0 invert"
          />
        </div>

        {/* Navegação */}
        <nav className="flex-1">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
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