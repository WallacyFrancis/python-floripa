// Interface para os dados do formulário
export interface ContactFormData {
  nome: string;
  whatsapp: string;
  email: string;
  proposito: 'voluntario' | 'palestrante' | 'apoiador' | '';
  areaAtuacao: string;
  portfolio: string;
  contribuicao: string;
}

// Interface para as props do componente ContactForm
export interface ContactFormInterface {
  onSubmit: (formData: ContactFormData) => void;
} 