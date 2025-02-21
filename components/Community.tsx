import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface CommunityProps {
  memberImages: string[];
}

const Community = ({ memberImages }: CommunityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Divide as imagens em 5 linhas
  const rows = Array.from({ length: 5 }, (_, i) => 
    memberImages.slice(
      Math.floor(i * memberImages.length / 5),
      Math.floor((i + 1) * memberImages.length / 5)
    )
  );

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Clona o conteúdo para criar o efeito infinito
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    // Calcula a duração da animação baseada no tamanho do conteúdo
    const contentWidth = content.offsetWidth;
    const duration = contentWidth / 50; // Ajuste este valor para controlar a velocidade

    // Aplica a animação
    container.style.animation = `slideLeft ${duration}s linear infinite`;
    container.style.width = `${contentWidth * 2}px`; // Dobra a largura para acomodar o clone

  }, [memberImages]);

  return (
    <div className="h-full w-full relative overflow-hidden">
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="absolute inset-0 flex"
      >
        <div 
          ref={contentRef}
          className="flex flex-col gap-4 p-4"
        >
          {rows.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`}
              className="flex gap-4"
            >
              {row.map((src, index) => (
                <div 
                  key={`img-${index}`} 
                  className="w-[60px] h-[60px] relative flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Membro ${index + 1}`}
                    fill
                    sizes="60px"
                    className="rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community; 