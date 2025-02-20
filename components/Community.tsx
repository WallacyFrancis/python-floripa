import Image from 'next/image';

interface CommunityProps {
  memberImages: string[];
}

const Community = ({ memberImages }: CommunityProps) => {
  // Divide as imagens em 5 linhas
  const rows = Array.from({ length: 5 }, (_, i) => 
    memberImages.slice(
      Math.floor(i * memberImages.length / 5),
      Math.floor((i + 1) * memberImages.length / 5)
    )
  );

  return (
    <div className="container mx-auto">
      <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-300">
        <div className="flex flex-col gap-4 min-w-max p-4">
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