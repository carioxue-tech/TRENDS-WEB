'use client';

import { useState } from 'react';
import FaqItem from './FaqItem';

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: Faq[];
  titleStyle?: 'default' | 'orange';
}

export default function FaqSection({ title, faqs, titleStyle = 'default' }: FaqSectionProps) {
  return (
    <section className="mb-20">
      <div className="mb-12">
        {titleStyle === 'orange' ? (
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block px-6 py-3 bg-[#33d6ff]">
            {title}
          </h2>
        ) : (
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block px-6 py-3 bg-[#33D6FF]">
            {title}
          </h2>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
