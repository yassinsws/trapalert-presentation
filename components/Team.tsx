import React from 'react';
import { SectionId } from '../types';

const Team: React.FC = () => {
  return (
    <section id={SectionId.TEAM} className="py-24 bg-beige-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-brand-dark mb-12 text-center">The Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-brand-dark rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Team Member" />
                </div>
                <h3 className="font-bold text-lg">Team Member 1</h3>
                <p className="text-sm text-brand-yellow font-medium mb-4">UX Research & Strategy</p>
                <p className="text-xs text-brand-gray">Lead the Inclusive Segment Card workshops and defined the core personas.</p>
            </div>
             {/* Team Member 2 */}
             <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-brand-dark rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Team Member" />
                </div>
                <h3 className="font-bold text-lg">Team Member 2</h3>
                <p className="text-sm text-brand-yellow font-medium mb-4">Technical Lead</p>
                <p className="text-xs text-brand-gray">Developed the TrapAlert SDK and implemented the detection algorithms.</p>
            </div>
             {/* Team Member 3 */}
             <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-brand-dark rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="Team Member" />
                </div>
                <h3 className="font-bold text-lg">Team Member 3</h3>
                <p className="text-sm text-brand-yellow font-medium mb-4">UI/Visual Design</p>
                <p className="text-xs text-brand-gray">Designed the dashboard interface and the project report website.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;