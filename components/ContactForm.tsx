import { useState } from 'react';
import { ContactFormInterface, ContactFormData } from '@/interfaces/ContactFormInterface';

// Componente responsável pelo formulário de contato
const ContactForm = ({ onSubmit }: ContactFormInterface) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    whatsapp: '',
    email: '',
    proposito: '',
    areaAtuacao: '',
    portfolio: '',
    contribuicao: ''
  });

  // Função que lida com as mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função que lida com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Função que retorna o label da área de atuação baseado no propósito
  const getAreaLabel = () => {
    switch (formData.proposito) {
      case 'palestrante':
        return 'Qual sua área de conhecimento';
      case 'apoiador':
        return 'Nome da Empresa';
      default:
        return 'Área de Atuação';
    }
  };

  // Função que retorna o label do portfólio baseado no propósito
  const getPortfolioLabel = () => {
    return formData.proposito === 'apoiador'
      ? 'Site da Empresa'
      : 'Link do Portfólio (GitHub, Behance ou LinkedIn...)';
  };

  // Função que retorna o label da contribuição baseado no propósito
  const getContribuicaoLabel = () => {
    return formData.proposito === 'palestrante'
      ? 'Detalhes da Palestra'
      : 'Como você sente que pode contribuir para a Python Floripa?';
  };

  // Função que retorna o placeholder baseado no propósito
  const getPlaceholder = () => {
    switch (formData.proposito) {
      case 'palestrante':
        return 'Fale sobre o tema e como ele pode ajudar a comunidade';
      case 'apoiador':
        return 'Como sua organização pode contribuir para a Python Floripa?';
      default:
        return 'Como você sente que pode contribuir para a Python Floripa?';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          required
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-gray-700 mb-2">WhatsApp</label>
        <div className="flex">
          <div className="flex items-center bg-gray-100 px-3 rounded-l-md border border-r-0 border-gray-300">
            <span className="text-gray-500">🇧🇷 +55</span>
          </div>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
            placeholder="(11) 96123-4567"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          required
        />
      </div>

      <div>
        <label htmlFor="proposito" className="block text-gray-700 mb-2">Selecione Seu Propósito</label>
        <select
          id="proposito"
          name="proposito"
          value={formData.proposito}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="voluntario">Quero Ser Voluntário</option>
          <option value="palestrante">Quero Ser Palestrante</option>
          <option value="apoiador">Quero Ser Apoiador</option>
        </select>
      </div>

      <div>
        <label htmlFor="areaAtuacao" className="block text-gray-700 mb-2">{getAreaLabel()}</label>
        <input
          type="text"
          id="areaAtuacao"
          name="areaAtuacao"
          value={formData.areaAtuacao}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          required
        />
      </div>

      <div>
        <label htmlFor="portfolio" className="block text-gray-700 mb-2">{getPortfolioLabel()}</label>
        <input
          type="url"
          id="portfolio"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
          required
        />
      </div>

      <div>
        <label htmlFor="contribuicao" className="block text-gray-700 mb-2">{getContribuicaoLabel()}</label>
        <textarea
          id="contribuicao"
          name="contribuicao"
          value={formData.contribuicao}
          placeholder={getPlaceholder()}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue h-32"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-blue text-white py-3 px-6 rounded-md hover:bg-primary-blue/90 transition-colors font-semibold"
      >
        Aplicar para {formData.proposito === 'voluntario' || formData.proposito === '' ? 'voluntário' : formData.proposito}
      </button>
    </form>
  );
};

export default ContactForm; 