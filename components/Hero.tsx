import React from 'react';
import { ArrowDown, Eye } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-dark/20 text-sm font-medium text-brand-dark/70">
            Conscious Service Design Project
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-[1.1]">
            The Silent Struggles We Can No Longer Ignore
          </h1>
          <p className="text-xl text-brand-gray max-w-lg">
            How TrapAlert makes the invisible barriers of the web visible, transforming frustration into actionable data.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`#${SectionId.DEMO}`}
              className="px-8 py-3 bg-brand-dark text-white rounded-lg font-medium hover:bg-black transition-colors"
            >
              See the Demo
            </a>
            <a 
              href={`#${SectionId.PROBLEM}`}
              className="px-8 py-3 border border-brand-dark text-brand-dark rounded-lg font-medium hover:bg-beige-200 transition-colors"
            >
              Read Report
            </a>
          </div>
        </div>

        <div className="relative h-96 md:h-[600px] flex items-center justify-center">
            {/* Visual representation of "Invisible" becoming "Visible" */}
            <div className="relative w-full h-full max-w-md">
                <div className="absolute inset-0 bg-brand-dark rounded-3xl rotate-3 opacity-10"></div>
                <div className="absolute inset-0 bg-brand-dark rounded-3xl -rotate-3 opacity-10"></div>
                <div className="absolute inset-0 bg-white border border-beige-200 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center space-y-6">
                    <div className="w-24 h-24 bg-beige-100 rounded-full flex items-center justify-center mb-4">
                         <div className="w-16 h-1 bg-brand-yellow rotate-45 absolute"></div>
                         <Eye className="w-12 h-12 text-brand-dark opacity-50" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">The Blind Spot</h3>
                    <p className="text-sm text-gray-500">
                        "For over 14 years, lack of keyboard accessibility has remained a top issue."
                    </p>
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mt-6">
                        <div className="w-1/3 h-full bg-brand-yellow"></div>
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Systemic Neglect Detected</p>
                </div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-brand-gray/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;