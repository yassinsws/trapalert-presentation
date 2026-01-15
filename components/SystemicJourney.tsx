
import React from 'react';
import { SectionId } from '../types';
import { AlertTriangle, Activity, Eye, CheckCircle, Globe, ArrowRight } from 'lucide-react';

const stages = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "1. Encountering a Barrier",
    context: "A screen reader user hits a focus trap in a checkout modal.",
    firstOrder: "Immediate exclusion: User is unable to complete purchase.",
    impact: "Brand erosion. The user leaves feeling marginalized and silent."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "2. Detection & Reporting",
    context: "TrapAlert SDK detects the frustration signal (e.g., Tab-looping).",
    firstOrder: "Metadata capture: DOM state and 30s replay are logged.",
    impact: "The 'invisible struggle' is quantified. The user is no longer silent."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "3. Developer Investigation",
    context: "Product team views the replay in the TrapAlert Dashboard.",
    firstOrder: "Empathy gap bridged: Devs see the exact failure point.",
    impact: "Knowledge transfer. Team learns WCAG 2.1.2 focus management."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "4. Resolution",
    context: "Code fix is deployed and verified against the captured trap.",
    firstOrder: "Barrier removed: Current and future users can navigate.",
    impact: "Reduced technical debt. Accessibility becomes part of the CI/CD flow."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "5. Long-term Impact",
    context: "TrapAlert data influences the global Design System.",
    firstOrder: "Systemic repair: Reusable components are updated for all apps.",
    impact: "A more inclusive digital ecosystem. Accessibility is 'baked in' by default."
  }
];

const SystemicJourney: React.FC = () => {
  return (
    <section id={SectionId.SYSTEMIC} className="py-24 bg-beige-50 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-6 tracking-tight">The Systemic Journey</h2>
          <p className="text-xl text-brand-gray">
            How a single user's frustration triggers a ripple effect that fixes the web for millions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for mobile, horizontal for desktop (abstracted as vertical here for consistent flow) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-yellow/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {stages.map((stage, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
                {/* Circle Marker */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-beige-100 flex items-center justify-center text-brand-yellow shadow-sm z-10">
                  {stage.icon}
                </div>

                <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-beige-200 group hover:border-brand-yellow transition-all">
                  <h3 className="text-xl font-bold font-display text-brand-dark mb-4">{stage.title}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray/50 block mb-2">The Context</span>
                      <p className="text-sm text-brand-gray italic">"{stage.context}"</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray/50 block mb-2">1st Order Impact</span>
                      <p className="text-sm text-brand-dark font-medium">{stage.firstOrder}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow block mb-2">Systemic Impact</span>
                      <p className="text-sm text-brand-dark font-semibold">{stage.impact}</p>
                    </div>
                  </div>
                  
                  {index < stages.length - 1 && (
                    <div className="mt-6 flex justify-end md:hidden">
                      <ArrowRight className="text-brand-yellow animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemicJourney;
