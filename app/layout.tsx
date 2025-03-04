import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import Calendar from '@/components/Calendar';
import Footer from '@/components/Footer';

export const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
});

export const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-bold",
});

export const poppinsLight = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--font-poppins-light",
});

export const benedictRegular = localFont({
  src: "./fonts/Benedict-Regular.otf",
  variable: "--font-benedict-regular",
});

export const metadata: Metadata = {
  title: "Python Floripa",
  description: "Comunidade Python de Florianópolis",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppinsRegular.variable} ${poppinsRegular.variable} antialiased`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] min-h-screen lg:ml-[280px]">
          <Sidebar />

          <main className="p-6 pt-16 sm:pt-6 bg-white lg:shadow-[5px_0_10px_-5px_rgba(0,0,0,0.1)]">
            {children}
          </main>
          
          <aside className="hidden lg:block p-6 bg-white shadow-lg mt-4">
            <div className="space-y-6">
              {/* Calendário */}
              <Calendar />

              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-bold text-primary-blue mb-4">PyNews</h2>
                {/* Lista de posts recentes será adicionada aqui */}
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-bold text-primary-blue mb-4">Últimos Posts</h2>
                {/* Lista de posts recentes será adicionada aqui */}
              </div>
            </div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
