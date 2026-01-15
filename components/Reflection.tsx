
import React from 'react';
import { SectionId } from '../types';
import { Brain, Users, EyeOff, ShieldCheck, Zap, UserCircle, Accessibility, Code } from 'lucide-react';

const Reflection: React.FC = () => {
  return (
    <section id={SectionId.REFLECTION} className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-6 tracking-tight">Conscious Service Design</h2>
            <p className="text-xl text-brand-gray">
                We "stress-tested" TrapAlert across individual, social, and environmental dimensions to ensure it remains ethically grounded and truly inclusive.
            </p>
        </div>

        {/* Part 1: Inclusive Segment Cards */}
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
                <Users className="w-8 h-8 text-brand-yellow" />
                <h3 className="text-2xl font-bold font-display">Inclusive Segment Cards</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Group 1 */}
                <div className="group bg-beige-50 p-8 rounded-2xl border border-beige-200 hover:border-brand-yellow transition-all shadow-sm">
                    <Accessibility className="w-10 h-10 text-brand-dark mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold mb-4">Screen Reader & Keyboard Users</h4>
                    <p className="text-sm text-brand-gray leading-relaxed mb-6">
                        <strong>The Privilege Gap:</strong> Visual-only UI defaults create systemic barriers. Lack of keyboard access has been a top issue for 14+ years.
                    </p>
                    <div className="space-y-3">
                        <div className="px-3 py-1 bg-white border border-beige-200 rounded text-xs font-semibold uppercase text-brand-dark inline-block">Gains</div>
                        <p className="text-xs text-brand-gray">Detection of "Dead-End Tabs" flags critical failures (WCAG 2.1.2) giving silent users a voice in the development cycle.</p>
                    </div>
                </div>

                {/* Group 2 */}
                <div className="group bg-beige-50 p-8 rounded-2xl border border-beige-200 hover:border-brand-yellow transition-all shadow-sm">
                    <Brain className="w-10 h-10 text-brand-dark mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold mb-4">Cognitive & Neurodiverse</h4>
                    <p className="text-sm text-brand-gray leading-relaxed mb-6">
                        <strong>The Invisible Struggle:</strong> ADHD or dyslexia can lead to quick frustration with unintuitive UI. These users often leave without articulating why.
                    </p>
                    <div className="space-y-3">
                        <div className="px-3 py-1 bg-white border border-beige-200 rounded text-xs font-semibold uppercase text-brand-dark inline-block">Gains</div>
                        <p className="text-xs text-brand-gray">BehaviorEngine picks up rage clicks and abandonment as proxies for confusion, prompting UI simplification.</p>
                    </div>
                </div>

                {/* Group 3 */}
                <div className="group bg-beige-50 p-8 rounded-2xl border border-beige-200 hover:border-brand-yellow transition-all shadow-sm">
                    <Code className="w-10 h-10 text-brand-dark mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold mb-4">Developers & Specialists</h4>
                    <p className="text-sm text-brand-gray leading-relaxed mb-6">
                        <strong>The Power Gap:</strong> Developers hold high technical privilege but often lack lived experience of disabilities.
                    </p>
                    <div className="space-y-3">
                        <div className="px-3 py-1 bg-white border border-beige-200 rounded text-xs font-semibold uppercase text-brand-dark inline-block">Gains</div>
                        <p className="text-xs text-brand-gray">Acts as an "accessibility smoke detector," surfacing evidence that would otherwise be ignored until a lawsuit happens.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Part 2: Critical Reflection Cards */}
        <div>
            <div className="flex items-center gap-3 mb-10">
                <ShieldCheck className="w-8 h-8 text-brand-yellow" />
                <h3 className="text-2xl font-bold font-display">Critical Reflection Scenarios</h3>
            </div>
            <div className="space-y-8">
                {/* Scenario 1 */}
                <div className="flex flex-col md:flex-row gap-8 bg-brand-dark text-white p-8 md:p-12 rounded-3xl overflow-hidden relative">
                    <div className="md:w-1/3">
                        <div className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4">Scenario 01</div>
                        <h4 className="text-2xl font-display font-bold mb-4">"Stuck and Watched"</h4>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 italic text-sm text-beige-200">
                            "A keyboard user is trapped. TrapAlert records them, but they remain stuck. Does this help the user or just the dev?"
                        </div>
                    </div>
                    <div className="md:w-2/3 border-l border-white/10 md:pl-12">
                        <h5 className="font-bold mb-4 flex items-center gap-2">
                            <Zap className="text-brand-yellow w-5 h-5" /> Our Reflection & Pivot
                        </h5>
                        <p className="text-beige-200 text-sm leading-relaxed mb-4">
                            We identified an ethical tension: reporting helps the future, but the current user is still suffering.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-beige-100/70">
                            <li>Proposed "Real-time Hints": Detected traps trigger subtle, accessible pop-ups like "Press ESC to exit".</li>
                            <li>Transparency: We moved from "silent monitoring" to optional "User Assistance Mode".</li>
                            <li>Avoid treating users as "mere data points".</li>
                        </ul>
                    </div>
                </div>

                {/* Scenario 2 */}
                <div className="flex flex-col md:flex-row gap-8 bg-beige-50 border border-beige-200 p-8 md:p-12 rounded-3xl">
                    <div className="md:w-1/3">
                        <div className="text-brand-dark/50 font-bold uppercase tracking-widest text-xs mb-4">Scenario 02</div>
                        <h4 className="text-2xl font-display font-bold mb-4 text-brand-dark">Privacy & Trust</h4>
                        <div className="p-4 bg-white rounded-xl border border-beige-200 italic text-sm text-brand-gray">
                            "Capturing video of a user filling a form could inadvertently log PII (Personal Identifiable Information)."
                        </div>
                    </div>
                    <div className="md:w-2/3 border-l border-beige-200 md:pl-12">
                        <h5 className="font-bold mb-4 text-brand-dark flex items-center gap-2">
                            <ShieldCheck className="text-brand-yellow w-5 h-5" /> Privacy-First Design
                        </h5>
                        <p className="text-brand-gray text-sm leading-relaxed mb-4">
                            Session replays must be surveillance-free. We implemented:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-brand-gray">
                            <li><strong>Automated Masking:</strong> All text input elements are automatically blurred or replaced with dummy text in recordings.</li>
                            <li><strong>Consent-Driven Logging:</strong> Clients must disclose detection tools in privacy notices.</li>
                            <li><strong>Event-Only Mode:</strong> Option to log only "metadata" (which element caused the trap) rather than a full DOM snapshot.</li>
                        </ul>
                    </div>
                </div>

                {/* Scenario 3 */}
                <div className="flex flex-col md:flex-row gap-8 bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-3xl">
                    <div className="md:w-1/3">
                        <div className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Scenario 03</div>
                        <h4 className="text-2xl font-display font-bold mb-4 text-slate-800">Environmental Load</h4>
                        <div className="p-4 bg-white rounded-xl border border-slate-200 italic text-sm text-slate-600">
                            "Scaling to millions of users means petabytes of video data. What is the carbon footprint?"
                        </div>
                    </div>
                    <div className="md:w-2/3 border-l border-slate-200 md:pl-12">
                        <h5 className="font-bold mb-4 text-slate-800 flex items-center gap-2">
                            <Zap className="text-green-600 w-5 h-5" /> Systemic Sustainability
                        </h5>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Continuous data upload drains battery and uses cloud energy. Our mitigation:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                            <li><strong>Rolling Buffer:</strong> We only store and send the *last 30 seconds* of activity around a detected frustration event.</li>
                            <li><strong>Sampling:</strong> Not every rage click needs a video; we sample high-frustration sessions to reduce aggregate load.</li>
                            <li><strong>"Green Mode":</strong> A developer toggle to prefer textual event logs over data-heavy snapshots.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
