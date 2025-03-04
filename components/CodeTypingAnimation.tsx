'use client';

import React, { useState, useEffect, useRef } from 'react';

/**
 * Componente que exibe uma animação de digitação de código em diferentes linguagens de programação
 */
const CodeTypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCodeBlockIndex, setCurrentCodeBlockIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<NodeJS.Timeout | null>(null);
  
  const codeBlocks = [
    `// JavaScript
function check() {
    if (pessoas > tecnologias) {
        // continue
    } else {
        return;
    }
}`,
    
    `# Python
def check():
    if pessoas > tecnologias:
        # continue
    else:
        return`,
      
    `# Python
def join_community():
    if voce.contribuir():
        print("A comunidade ficará ainda melhor!")
    else:
        print("Tudo pode ser incrível, desde que você faça parte!")
    return "Junte-se à organização e faça a diferença!"`,

    `// C
void check() {
    if (pessoas > tecnologias) {
        // continue
    } else {
        return;
    }
}`,
   
    `// C#
void Check() {
    if (pessoas > tecnologias) {
        // continue
    } else {
        return;
    }
}`,
    
    `// Go
func check() {
    if pessoas > tecnologias {
        // continue
    } else {
        return
    }
}`,

    `<?php
function check() {
    if (pessoas > tecnologias) {
        // continue
    } else {
        return;
    }
}`,

    `// C++
void check() {
    if (pessoas > tecnologias) {
        // continue
    } else {
        return;
    }
}`,

    `REM Basic
IF pessoas > tecnologias THEN
    ' continue
ELSE
    EXIT FUNCTION
END IF`,

    `       IDENTIFICATION DIVISION.
       PROGRAM-ID. CHECK.
       PROCEDURE DIVISION.
       IF pessoas > tecnologias THEN
           CONTINUE
       ELSE
           STOP RUN
       END-IF.
       STOP RUN.`
  ];

  /**
   * Efeito para controlar a animação do cursor piscante
   */
  useEffect(() => {
    cursorRef.current = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      if (cursorRef.current) {
        clearInterval(cursorRef.current);
      }
    };
  }, []);

  /**
   * Efeito para controlar a animação de digitação
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  /**
   * Efeito para controlar a animação de digitação e apagamento
   */
  useEffect(() => {
    const currentCodeBlock = codeBlocks[currentCodeBlockIndex];
    
    if (isTyping) {
      if (currentCharIndex < currentCodeBlock.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentCodeBlock.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, 35); 
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      if (currentCharIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentCodeBlock.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, 15); 
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentCodeBlockIndex((currentCodeBlockIndex + 1) % codeBlocks.length);
          setIsTyping(true);
        }, 800); 
      }
    }
  }, [currentCharIndex, currentCodeBlockIndex, isTyping, codeBlocks]);

  return (
    <pre className="text-white font-mono whitespace-pre-wrap min-h-[200px] relative overflow-hidden">
      <code className="block">
        {displayedText}
        {isTyping && <span className={`inline-block w-[2px] h-[1em] bg-white align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>}
      </code>
      <div className="absolute bottom-0 right-0 p-1 text-xs text-gray-500 opacity-50">
        {currentCodeBlockIndex + 1}/{codeBlocks.length}
      </div>
    </pre>
  );
};

export default CodeTypingAnimation; 