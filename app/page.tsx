'use client'

import { poppinsRegular, poppinsBold, poppinsLight, benedictRegular } from '@/app/layout'
import PyNewsCard from '@/components/PyNewsCard'
import PostCard from '@/components/PostCard'

export default function Home() {
  return (
    <div className="space-y-8 lg:w-full w-[calc(100%-2rem)] mx-auto">
      {/* Cabeçalho */}
      <header className="space-y-4 sm:mt-8 mt-6" id="home">
        <h1 className="text-4xl font-poppins-bold font-bold text-primary-blue">
          Pessoas {`>`} Tecnologia
        </h1>
        <p className="text-lg text-gray-dark">
          Bem-vindo à comunidade Python de Florianópolis
        </p>
      </header>

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
              hello_world()`}
          </code>
        </pre>
      </section>

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

        {/* Eventos Adicionais */}
        <div className="mt-6 space-y-4">
          {/* Workshop LLMs */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary-yellow text-primary-blue font-bold p-3 rounded-lg text-center min-w-[80px]">
                <div className="text-sm">FEV</div>
                <div className="text-2xl">22</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-blue">
                  Workshop LLMs Locais - SEBRAE SC 401
                </h3>
                <p className="text-gray-dark mt-2">
                  Aprenda a rodar modelos de IA localmente, sem custos com tokens e com total privacidade. Este evento acontecerá com o apoio do Sebrae Startups.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-dark">
                  <span>🕒 8h30</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-dark italic">Inscrições em breve!</span>
                </div>
              </div>
            </div>
          </div>

          {/* 83º Python Floripa */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary-yellow text-primary-blue font-bold p-3 rounded-lg text-center min-w-[80px]">
                <div className="text-sm">FEV</div>
                <div className="text-2xl">22</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-blue">
                  83º Python Floripa - SEBRAE
                </h3>
                <p className="text-gray-dark mt-2">
                  Este evento acontecerá com o apoio do SEBRAE Santa Catarina. Também contaremos com a Ladies that UX como comunidade convidada.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-dark">
                  <span>🕒 13h29</span>
                </div>
                <div className="mt-4">
                  <button className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-primary-blue/90 transition-colors">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 84º Python Floripa */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary-yellow text-primary-blue font-bold p-3 rounded-lg text-center min-w-[80px]">
                <div className="text-sm">MAR</div>
                <div className="text-2xl">29</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-blue">
                  84º Python Floripa - UNIVALI
                </h3>
                <p className="text-gray-dark mt-2">
                  A UNIVALI SC-401 sediará este evento especial comandado pelas minas do cenário Tech de Floripa. Teremos a honra de receber a AWS Community Group Floripa, Ladies that UX e PyLadies como nossas convidadas.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-dark">
                  <span>🕒 13h29</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-dark italic">Inscrições em breve!</span>
                </div>
              </div>
            </div>
          </div>

          {/* 85º Python Floripa */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary-yellow text-primary-blue font-bold p-3 rounded-lg text-center min-w-[80px]">
                <div className="text-sm">ABR</div>
                <div className="text-2xl">26</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-blue">
                  85º Python Floripa - UNICESUSC
                </h3>
                <p className="text-gray-dark mt-2">
                  Vai ser na UNICESUSC nosso encontro de abril. Receberemos a Floripa JS como comunidade convidada
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-dark">
                  <span>🕒 13h29</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-dark italic">Inscrições em breve!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PyNews */}
      <section className="bg-white rounded-lg shadow-lg p-6" id="pynews">
        <h2 className="text-2xl font-bold text-primary-blue mb-4">
          PyNews
        </h2>
        
        <div className="space-y-4">
          <PyNewsCard
            title="NumPy"
            version="v2.2.3"
            description="Correções de bugs encontrados após o lançamento da versão 2.2.2. A maioria das alterações são melhorias de tipagem e correções para Python com threads livres. Ambas as áreas ainda estão em desenvolvimento, portanto, se você descobrir novos problemas, reporte-os."
            releaseDate="13/02/2025"
            logoUrl="/numpy-logo.png"
            releaseNotes="Release Notes"
            bugFixes={[
              "Correções de bugs encontrados após o lançamento da versão 2.2.2",
              "Melhorias de tipagem",
              "Correções para Python com threads livres"
            ]}
            updates={[
              "Esta versão suporta as versões do Python 3.10-3.13"
            ]}
          />

          <PyNewsCard
            title="Django"
            version="v5.0.1"
            description="Django 5.0.1 corrige vários bugs na versão 5.0, incluindo uma regressão na validação de formulários e um problema de segurança em potencial no middleware de sessão."
            releaseDate="10/02/2025"
            logoUrl="/django-logo.png"
            releaseNotes="Release Notes"
            bugFixes={[
              "Correção de regressão na validação de formulários",
              "Correção de problema de segurança no middleware de sessão"
            ]}
            updates={[
              "Melhorias na documentação",
              "Atualização das traduções"
            ]}
          />

          <PyNewsCard
            title="FastAPI"
            version="v0.109.0"
            description="Nova versão do FastAPI traz suporte melhorado para Python 3.12, correções de bugs e melhorias na documentação. Inclui também novas funcionalidades para validação de dados."
            releaseDate="05/02/2025"
            logoUrl="/fastapi-logo.png"
            releaseNotes="Release Notes"
            bugFixes={[
              "Correção de bugs na validação de dados",
              "Correção de problemas de compatibilidade com Python 3.12"
            ]}
            updates={[
              "Suporte melhorado para Python 3.12",
              "Novas funcionalidades para validação de dados",
              "Melhorias na documentação"
            ]}
          />
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white rounded-lg shadow-lg p-6" id="posts">
        <h2 className="text-2xl font-bold text-primary-blue mb-4">
          Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard
            title="Painel Opinião Baseada em Dados™"
            author="Jardel Godinho"
            date="26/01/2025"
            category="Uncategorized"
            description="LinkedIn Gustavo Cunha Bruna Nunes Krobel Katiell Dieter"
            link="/posts/painel-opiniao-baseada-em-dados"
          />

          <PostCard
            title="Escalando o Sucesso – Modelagem de Dados e Atlas em Ação"
            author="Mateus Leonardi"
            date="25/01/2025"
            category="Uncategorized"
            description="Nesta talk, dividiremos o conteúdo em três partes principais. Começaremos com uma visão geral sobre as perspectivas da computação quântica"
            link="/posts/escalando-o-sucesso"
          />

          <PostCard
            title="Equidade e Justiça em Sistemas de IA"
            author="Marilia Favalesso"
            date="25/01/2025"
            category="Uncategorized"
            description="Antes de começarmos a falar sobre o Celery, é importante entender como o fluxo web tradicional pode enfrentar sérios desafios"
            link="/posts/equidade-e-justica-em-ia"
          />

          <PostCard
            title="Entendendo os Comandos makemigrations e migrate no Django"
            author="Felipe Angeli"
            date="11/12/2024"
            category="Uncategorized"
            description="Introdução Quando trabalhamos com Django, um dos frameworks Python mais populares para desenvolvimento web, o gerenciamento de banco de dados"
            link="/posts/entendendo-comandos-django"
          />

          <PostCard
            title="Introdução à Programação Quântica com Ket"
            author="Evandro"
            date="30/11/2024"
            category="Uncategorized"
            description="Nesta talk, dividiremos o conteúdo em três partes principais. Começaremos com uma visão geral sobre as perspectivas da computação quântica"
            link="/posts/introducao-programacao-quantica"
          />

          <PostCard
            title="Celery: Processamento Assíncrono e Escalável em Aplicações Python"
            author="Felipe Escobar"
            date="30/11/2024"
            category="Uncategorized"
            description="Antes de começarmos a falar sobre o Celery, é importante entender como o fluxo web tradicional pode enfrentar sérios desafios"
            link="/posts/celery-processamento-assincrono"
          />
        </div>
      </section>

    </div>
  )
}
