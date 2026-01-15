import React from 'react';
import { Search, Video, BellRing, Activity } from 'lucide-react';
import { SectionId } from '../types';

const Solution: React.FC = () => {
  return (
    <section id={SectionId.SOLUTION} className="py-24 scroll-mt-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
            <Activity className="text-brand-yellow w-6 h-6 mr-2" />
            <span className="font-bold text-brand-dark">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
            We built a lens to see what's broken.
          </h2>
          <p className="text-xl text-brand-gray">
            <strong>TrapAlert</strong> is an accessibility smoke detector. It's a lightweight SDK that runs in the background, specifically designed to detect behavioral signals of user frustration.
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-beige-200 -z-10"></div>

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-beige-200 relative">
                <div className="w-16 h-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Search size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Detects</h3>
                <p className="text-brand-gray">
                    Identifies patterns like rage clicks, dead-end tabs, and rapid U-turns in real-time within the browser.
                </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-beige-200 relative">
                <div className="w-16 h-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Video size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Captures</h3>
                <p className="text-brand-gray">
                    Records the critical moment with a privacy-safe session replay and a DOM snapshot of the exact state.
                </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-beige-200 relative">
                <div className="w-16 h-16 bg-brand-dark text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <BellRing size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Alerts</h3>
                <p className="text-brand-gray">
                    Delivers actionable evidence of a real user's struggle directly to the product team's dashboard.
                </p>
            </div>
        </div>

        <div className="mt-16 text-center">
             <p className="text-2xl font-display italic text-brand-dark">
                "Where frustration becomes a blueprint for a fix."
             </p>
        </div>

      </div>
    </section>
  );
};

export default Solution;