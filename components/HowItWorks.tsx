import React from 'react';
import { Brain, Zap, Activity, AlertTriangle, Layers, MousePointer2 } from 'lucide-react';
import { SectionId } from '../types';

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-beige-50 rounded-full shadow-sm mb-6">
                        <Brain className="text-brand-dark w-6 h-6 mr-2" />
                        <span className="font-bold text-brand-dark">Under the Hood</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
                        The Behavioral Brain
                    </h2>
                    <p className="text-xl text-brand-gray">
                        TrapAlert uses a sophisticated <strong>Struggle Score</strong> system (0-100). When the score hits 100, the "Ghost" UI triggers to offer assistance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Column 1 */}
                    <div className="space-y-8">

                        {/* 1. Success Momentum */}
                        <div className="bg-beige-50 p-6 rounded-xl border border-beige-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-2 rounded-lg text-green-700">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark">1. Success Momentum</h3>
                            </div>
                            <p className="text-brand-gray mb-3">
                                The Struggle Score isn't static—it's a "leaky bucket" that constantly drains.
                            </p>
                            <ul className="list-disc list-inside text-sm text-brand-gray space-y-1">
                                <li><strong>Normal Decay:</strong> 2 points/second.</li>
                                <li><strong>Momentum:</strong> Productive actions (typing, clicking) increase drain to 10 points/s for 5s.</li>
                            </ul>
                            <div className="mt-3 text-xs bg-white p-2 rounded text-brand-gray/80 italic border border-beige-100">
                                "As long as the user is winning, the engine stays quiet."
                            </div>
                        </div>

                        {/* 2. Notification Escalation */}
                        <div className="bg-beige-50 p-6 rounded-xl border border-beige-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                                    <Activity size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark">2. Empathy Thresholds</h3>
                            </div>
                            <p className="text-brand-gray mb-3">
                                To prevent notification fatigue, we use a tiered escalation system:
                            </p>
                            <ul className="space-y-2 text-sm text-brand-gray">
                                <li className="flex gap-2">
                                    <span className="font-bold min-w-[60px]">Level 1:</span>
                                    <span>Triggers at 100 pts. A subtle notice appears.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold min-w-[60px]">Level 2:</span>
                                    <span>Triggers at 200 pts (if stuck). Re-triggers appropriately.</span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Efficiency Ratio */}
                        <div className="bg-beige-50 p-6 rounded-xl border border-beige-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg text-purple-700">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark">3. Efficiency Ratio</h3>
                            </div>
                            <p className="text-brand-gray mb-3">
                                Maintains a buffer of focus events to calculate efficiency.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-white p-3 rounded border border-beige-100">
                                    <div className="font-bold text-green-600 mb-1">Power User (&gt;0.8)</div>
                                    <div className="text-xs text-brand-gray">Exploring new content. Score reduced.</div>
                                </div>
                                <div className="bg-white p-3 rounded border border-beige-100">
                                    <div className="font-bold text-red-600 mb-1">Stuck User (&lt;0.3)</div>
                                    <div className="text-xs text-brand-gray">Looping elements. Score +5/event.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Column 2 */}
                    <div className="space-y-8">

                        {/* 4. Context Shift */}
                        <div className="bg-beige-50 p-6 rounded-xl border border-beige-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-orange-100 p-2 rounded-lg text-orange-700">
                                    <AlertTriangle size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark">4. Context Sensitivity</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-brand-gray">
                                <li className="bg-white p-3 rounded border border-beige-100">
                                    <strong>Submission Monitoring:</strong> Clicking submit clears momentum and doubles sensitivity (2x) for 30s.
                                </li>
                                <li className="bg-white p-3 rounded border border-beige-100">
                                    <strong>Error Detection:</strong> Spikes sensitivity immediately if an alert/error appears.
                                </li>
                            </ul>
                        </div>

                        {/* 5. Advanced Heuristics */}
                        <div className="bg-brand-dark text-white p-6 rounded-xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-brand-yellow/20 p-2 rounded-lg text-brand-yellow">
                                    <MousePointer2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold">5. Advanced Heuristics</h3>
                            </div>

                            <div className="space-y-0 text-sm">
                                <div className="grid grid-cols-12 gap-2 text-xs uppercase tracking-wider text-gray-400 border-b border-gray-700 pb-2 mb-2">
                                    <div className="col-span-8">Metric</div>
                                    <div className="col-span-4 text-right">Penalty</div>
                                </div>

                                {[
                                    { name: 'The Cluster-Loop', desc: '5 events in 300px area', score: '+15 pts' },
                                    { name: 'The U-Turn', desc: 'A → B → C → B → A pattern', score: '+30 pts' },
                                    { name: 'Rage Clicking', desc: '>5 clicks in <2s', score: '+60 pts' },
                                    { name: 'Dead-End Tab', desc: '>15 tabs without input', score: '+40 pts' },
                                    { name: 'Input Abandonment', desc: 'Type, delete, tab away', score: '+20 pts' },
                                ].map((item, i) => (
                                    <div key={i} className="grid grid-cols-12 gap-2 py-2 border-b border-gray-800 last:border-0">
                                        <div className="col-span-8">
                                            <div className="font-bold text-brand-yellow">{item.name}</div>
                                            <div className="text-xs text-gray-400">{item.desc}</div>
                                        </div>
                                        <div className="col-span-4 text-right font-mono text-red-400">
                                            {item.score}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
