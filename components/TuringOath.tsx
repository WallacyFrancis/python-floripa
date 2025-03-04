import React, { useState } from 'react';
import Modal from './Modal';

/**
 * Componente que exibe um botão que abre um modal com o Juramento de Turing
 */
const TuringOath = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Abre o modal
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Fecha o modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-6 py-3 bg-primary-blue text-white font-bold rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md hover:shadow-lg transform hover:-translate-y-1"
      >
        Juramento de Turing
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Juramento de Turing"
      >
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700">
            A comunidade Python Floripa é mais do que um grupo de entusiastas de tecnologia; somos uma coletividade que valoriza as pessoas e promove um ambiente acolhedor e inclusivo. Para reforçar nosso compromisso com esses valores, criamos o <strong className="text-primary-blue">Juramento de Turing</strong>, um rito de iniciação recitado por todos no início de cada evento, que une novos e antigos membros em torno dos princípios fundamentais da comunidade. Batizado em homenagem a Alan Turing, que apesar de sua imensa contribuição para a ciência e para a vitória aliada na Segunda Guerra Mundial, enfrentou preconceitos severos por conta de sua identidade.
          </p>

          <p className="text-gray-700 mt-4">
            Inspirados pela sua história e resiliência, o <strong className="text-primary-blue">Juramento de Turing</strong> é um símbolo de nosso compromisso coletivo:
          </p>

          <p className="font-bold text-gray-800 mt-4">
            Enquanto membro da comunidade Python Floripa, eu prometo solenemente:
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
            <li>Considerar as pessoas maiores do que as tecnologias.</li>
            <li>Acolher, incluir e jamais julgar os outros membros.</li>
            <li>Compartilhar conhecimentos e experiências.</li>
            <li>Ajudar a comunidade a crescer e prosperar.</li>
            <li>Contribuir para um ambiente livre de preconceitos e aberto a todos.</li>
          </ul>

          <blockquote className="bg-gray-50 p-4 border-l-4 border-primary-blue mt-4 italic text-gray-700">
            Com esse juramento, reafirmamos que nossa prioridade é fomentar um ambiente onde todos possam aprender, crescer e se sentir pertencentes. A Python Floripa é uma comunidade onde o respeito e a inclusão vêm antes de qualquer tecnologia, e convidamos todos a fazerem parte desse compromisso.
          </blockquote>
        </div>
      </Modal>
    </>
  );
};

export default TuringOath; 