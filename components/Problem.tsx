import React from 'react';
import { Keyboard, MousePointerClick, AlertTriangle } from 'lucide-react';
import { SectionId } from '../types';

const Problem: React.FC = () => {
  return (
    <section id={SectionId.PROBLEM} className="py-24 scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-brand-dark mb-6">Every day, users get stuck. <br/>Most never tell you.</h2>
          <p className="text-lg text-brand-gray leading-relaxed">
            Many user struggles are invisible to standard analytics. Users facing barriers often don't file reports; they simply leave. This creates a blind spot where frustration thrives, especially for users with disabilities.
          </p>
        </div>

        {/* Data Points */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-beige-50 p-8 rounded-xl border border-beige-200">
                <p className="text-brand-dark font-medium text-lg mb-2">The Silence</p>
                <p className="text-3xl font-display font-bold text-brand-yellow mb-4">Only ~43%</p>
                <p className="text-brand-gray">of users might leave feedback when they encounter an issue.</p>
            </div>
            <div className="bg-beige-50 p-8 rounded-xl border border-beige-200">
                <p className="text-brand-dark font-medium text-lg mb-2">The Legacy</p>
                <p className="text-3xl font-display font-bold text-brand-dark mb-4">14+ Years</p>
                <p className="text-brand-gray">Lack of keyboard accessibility remains a top 5 issue, indicating systemic neglect.</p>
            </div>
        </div>

        {/* Personas */}
        <div className="grid lg:grid-cols-2 gap-12 pt-8">
          {/* Persona 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-dark text-white rounded-lg">
                    <Keyboard size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display">The Dead-End Tab</h3>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-sm text-slate-500 uppercase tracking-wide mb-2">Persona Snapshot</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 mb-6">
                    <li><strong>Who:</strong> Screen Reader / Keyboard-Only User</li>
                    <li><strong>Barrier:</strong> A 'keyboard trap' in a modal or form.</li>
                    <li><strong>Signal:</strong> Pressing Tab 15+ times with no focus change.</li>
                </ul>
                <blockquote className="italic text-slate-600 border-l-4 border-brand-yellow pl-4">
                    "I want to move freely through all content via keyboard, so that I never get stuck."
                </blockquote>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-dark text-white rounded-lg">
                    <MousePointerClick size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display">The Rage Click</h3>
            </div>
             <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-sm text-slate-500 uppercase tracking-wide mb-2">Persona Snapshot</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 mb-6">
                    <li><strong>Who:</strong> User with Neurodiverse Condition (e.g., ADHD)</li>
                    <li><strong>Barrier:</strong> Unresponsive buttons or confusing UI.</li>
                    <li><strong>Signal:</strong> Rapidly clicking an element or abandoning input.</li>
                </ul>
                <blockquote className="italic text-slate-600 border-l-4 border-brand-yellow pl-4">
                    "I want interfaces that guide me and don't mislead, so I can complete my task without giving up."
                </blockquote>
            </div>
          </div>
        </div>
        
        {/* The Developer Problem */}
        <div className="bg-brand-dark text-beige-50 rounded-2xl p-8 md:p-12 relative overflow-hidden mt-8">
            <div className="relative z-10 max-w-2xl">
                 <div className="flex items-center gap-2 text-brand-yellow mb-4">
                    <AlertTriangle size={20} />
                    <span className="font-bold uppercase tracking-widest text-sm">The Gap</span>
                 </div>
                 <h3 className="text-3xl font-display font-bold mb-4">The developers building the product cannot feel this pain.</h3>
                 <p className="text-beige-200 mb-6">
                    <strong>Technical Privilege:</strong> Teams often lack lived experience of disability.<br/>
                    <strong>Data Blindness:</strong> Analytics show <em>that</em> users drop off, but not <em>why</em>.
                 </p>
                 <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                    <p className="italic">
                        "As a front-end developer... I want a real-time alert when any user struggles... so that I can fix the underlying cause."
                    </p>
                 </div>
            </div>
            {/* Abstract dev graphic */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 bg-brand-yellow transform skew-x-12 translate-x-12"></div>
        </div>

      </div>
    </section>
  );
};

export default Problem;