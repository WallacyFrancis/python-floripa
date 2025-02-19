import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PyNewsCardInterface } from '@/interfaces/PyNewsCardInterface';

export default function PyNewsCard({
  title,
  version,
  description,
  releaseDate,
  logoUrl,
  releaseNotes,
  bugFixes,
  updates
}: PyNewsCardInterface) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      {/* Cabeçalho do card */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-start gap-4 hover:bg-gray-200 transition-colors"
      >
        <div className="bg-white rounded-lg p-2 w-[90px] h-[90px] flex items-center justify-center">
          <Image
            src={logoUrl}
            alt={`${title} logo`}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        
        <div className="flex-1 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary-blue flex items-center gap-2">
              {title} <span className="text-sm font-normal">({version})</span>
            </h3>
            {isExpanded ? (
              <ChevronUp className="text-primary-blue" />
            ) : (
              <ChevronDown className="text-primary-blue" />
            )}
          </div>
          <p className="text-gray-dark mt-1">
            {!isExpanded ? description.slice(0, 150) + '...' : description}
          </p>
          <div className="text-sm text-gray-dark mt-2">
            Release Date: {releaseDate}
          </div>
        </div>
      </button>

      {/* Conteúdo expandido */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-gray-200">
          {bugFixes && bugFixes.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">BUG FIX</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-dark">
                {bugFixes.map((fix, index) => (
                  <li key={index}>{fix}</li>
                ))}
              </ul>
            </div>
          )}

          {updates && updates.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">UPDATE</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-dark">
                {updates.map((update, index) => (
                  <li key={index}>{update}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 