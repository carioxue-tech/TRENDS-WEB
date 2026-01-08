'use client';

import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-gray-200 transition-colors"
      >
        <div className="flex-shrink-0 mt-1">
          <svg
            className={`w-5 h-5 text-[#FF6B35] transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <span className="flex-1 text-gray-800 font-medium">{question}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pl-14">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
