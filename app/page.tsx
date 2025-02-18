'use client'

import { poppinsRegular, poppinsBold, poppinsLight, benedictRegular } from '@/app/layout'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <header className="space-y-4">
        <h1 className="text-4xl font-poppins-bold font-bold text-primary-blue">
          Pessoas {`>`} Tecnologia
        </h1>
        <p className="text-lg text-gray-dark">
          Bem-vindo à comunidade Python de Florianópolis
        </p>
      </header>

      {/* Próximo Evento */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-primary-blue mb-4">
          Próximo Evento
        </h2>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary-yellow text-primary-blue font-bold p-3 rounded-lg text-center min-w-[80px]">
              <div className="text-sm">JAN</div>
              <div className="text-2xl">25</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-blue">
                82º Python Floripa ACM → Primeiro Meetup de 2025
              </h3>
              <p className="text-gray-dark mt-2">
                O evento que abre 2025 com chave de ouro será realizado com o apoio da Associação Catarinense de Medicina!
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-dark">
                <span>🕒 19h29</span>
                <span>📍 Rod. José Carlos Daux (SC 401) - Saco Grande, Florianópolis/SC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor de código */}
      <section className="bg-[#1e1e1e] rounded-lg p-6 font-mono">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-white">
          <code>{`def hello_world():
    print("Bem-vindo à Python Floripa!")

if __name__ == "__main__":
    hello_world()`}</code>
        </pre>
      </section>
    </div>
  )
}
