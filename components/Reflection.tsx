import React from 'react';
import { SectionId } from '../types';
import { Brain, Users, Map } from 'lucide-react';

const Reflection: React.FC = () => {
  return (
    <section id={SectionId.REFLECTION} className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">Conscious Service Design Reflection</h2>
            <p className="text-lg text-brand-gray">
                How we applied central methods to ensure our product is sustainable, inclusive, and socially responsible.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-beige-50 p-8 rounded-xl border border-beige-200">
                <Users className="w-10 h-10 text-brand-yellow mb-6" />
                <h3 className="text-xl font-bold text-brand-dark mb-4">Inclusive Segment Cards</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    We utilized the 'Dead-End Tab' and 'Rage Click' personas to move beyond generic accessibility checklists. These cards helped us simulate real emotional friction points, driving the need for a tool that detects <em>behavior</em> rather than just code errors.
                </p>
            </div>

            <div className="bg-beige-50 p-8 rounded-xl border border-beige-200">
                <Brain className="w-10 h-10 text-brand-yellow mb-6" />
                <h3 className="text-xl font-bold text-brand-dark mb-4">Critical Reflection</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    We constantly asked: "Are we solving the right problem?" We realized that simply reporting errors isn't enough; we need to foster empathy. This led to the session replay feature, ensuring developers <em>see</em> the struggle.
                </p>
            </div>

            <div className="bg-beige-50 p-8 rounded-xl border border-beige-200">
                <Map className="w-10 h-10 text-brand-yellow mb-6" />
                <h3 className="text-xl font-bold text-brand-dark mb-4">Systemic Journey Map</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    Mapping the developer's journey alongside the user's journey revealed the disconnect. Our tool acts as the bridge in the system, turning a user's negative moment into a developer's positive action.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;