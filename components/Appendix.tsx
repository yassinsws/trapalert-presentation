import React from 'react';
import { SectionId } from '../types';
import { FileText, Download } from 'lucide-react';

const Appendix: React.FC = () => {
    return (
        <section id={SectionId.APPENDIX} className="py-16 bg-brand-dark text-beige-200 border-t border-white/10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4">Appendix</h3>
                        <p className="mb-6 max-w-md text-sm">
                            Supplementary materials documenting our Conscious Service Design process and project details.
                        </p>
                    </div>
                    <div className="grid gap-4 w-full md:w-auto">
                        {/* Links removed as per user request */}
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} TrapAlert Project. All AI-generated content has been reviewed and marked.</p>
                </div>
            </div>
        </section>
    );
};

export default Appendix;