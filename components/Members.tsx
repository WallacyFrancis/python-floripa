import Image from 'next/image';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { MemberInterface, MembersInterface } from '../interfaces/MembersInterface';

// Componente que renderiza um card de membro individual
const MemberCard = ({ name, role, github, linkedin, instagram, image }: MemberInterface) => {
  return (
    <div className="relative w-full max-w-[280px] rounded-lg overflow-hidden bg-white shadow-lg">
      <Image
        src="/bg-card.webp"
        alt="Background"
        width={280}
        height={100}
        className="w-full h-[100px] object-cover"
      />
      
      <div className="absolute top-2 right-2">
        <Image
          src="/logo-comunidade.png"
          alt="Logo Python Floripa"
          width={80}
          height={80}
          className="w-20 h-20"
        />
      </div>

      <div className="relative -mt-12 flex flex-col items-center p-4">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 border-white">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-2xl">?</span>
            </div>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold text-primary-blue">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>

        <div className="mt-4 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente principal que renderiza a lista de membros
const Members = ({ members }: MembersInterface) => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Members; 