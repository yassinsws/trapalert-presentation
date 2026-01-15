import React from 'react';
import { SectionId } from '../types';
import { Sparkles } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id={SectionId.IMPACT} className="py-24 bg-brand-yellow text-brand-dark scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-brand-dark/10 rounded-full mb-8">
            <Sparkles className="w-6 h-6 mr-2" />
            <span className="font-bold uppercase tracking-wider text-sm">Our Impact</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
          "TrapAlert transforms the invisible frustration of users with disabilities into actionable data for developers. By bridging the empathy gap, we empower teams to build truly inclusive digital experiences."
        </h2>
        <div className="w-24 h-1 bg-brand-dark mx-auto opacity-20"></div>
      </div>
    </section>
  );
};

export default Impact;