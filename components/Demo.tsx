import React, { useState } from 'react';
import { ExternalLink, Play, Monitor, AlertCircle, Maximize2 } from 'lucide-react';
import { SectionId } from '../types';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'product' | 'dashboard'>('product');
  const [isLoading, setIsLoading] = useState(true);

  const productUrl = 'https://db-clone.vercel.app/';
  const dashboardUrl = 'https://trap-alert-dashboard.vercel.app/dashboard';

  const currentUrl = activeTab === 'product' ? productUrl : dashboardUrl;

  const handleTabChange = (tab: 'product' | 'dashboard') => {
    setActiveTab(tab);
    setIsLoading(true);
  };

  return (
    <section id={SectionId.DEMO} className="py-24 scroll-mt-24 bg-brand-dark text-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4">
                    Live Demo
                </div>
                <h2 className="text-4xl font-display font-bold text-white mb-4">See It In Action</h2>
                <p className="text-beige-200 max-w-lg">
                    Interact with the live environment below. Switch between the <strong>Product</strong> (where users get stuck) and the <strong>Dashboard</strong> (where developers see the issue).
                </p>
            </div>
            
            {/* Tab Switcher */}
            <div className="bg-white/10 p-1 rounded-lg inline-flex flex-shrink-0">
                <button 
                    onClick={() => handleTabChange('product')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'product' ? 'bg-brand-yellow text-brand-dark shadow-lg' : 'text-white hover:bg-white/5'}`}
                >
                    <AlertCircle size={16} />
                    1. The Trap (Product)
                </button>
                <button 
                    onClick={() => handleTabChange('dashboard')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard' ? 'bg-brand-yellow text-brand-dark shadow-lg' : 'text-white hover:bg-white/5'}`}
                >
                    <Monitor size={16} />
                    2. The Insight (Dashboard)
                </button>
            </div>
        </div>

        {/* Demo Window Container */}
        <div className="w-full bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-stone-700 ring-1 ring-white/10">
            {/* Fake Browser Header */}
            <div className="bg-stone-800 px-4 py-3 flex items-center gap-4 border-b border-stone-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
                </div>
                <div className="bg-stone-900 flex-1 px-4 py-1.5 rounded text-xs text-stone-400 font-mono flex justify-between items-center group">
                    <span className="truncate">{currentUrl}</span>
                    <a href={currentUrl} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-brand-yellow" title="Open in new tab">
                        <ExternalLink size={12} />
                    </a>
                </div>
            </div>

            {/* Iframe Container */}
            <div className="relative w-full h-[600px] bg-white">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-100 z-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-dark"></div>
                    </div>
                )}
                <iframe
                    src={currentUrl}
                    className="w-full h-full border-0"
                    title="Live Demo"
                    onLoad={() => setIsLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                
                {/* Overlay for "Product" tab to give context if needed */}
                {activeTab === 'product' && !isLoading && (
                    <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-brand-dark/90 backdrop-blur text-white p-4 rounded-lg text-sm shadow-xl border border-white/10 pointer-events-none">
                        <p className="font-bold text-brand-yellow mb-1">Try this:</p>
                        <p>Tab through the page quickly without clicking, or rage-click on the "Add to Cart" buttons to trigger an alert.</p>
                    </div>
                )}
            </div>
        </div>
        
        <div className="mt-4 text-center">
             <a 
                href={currentUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-beige-200 hover:text-white transition-colors"
             >
                <Maximize2 size={14} />
                Open {activeTab === 'product' ? 'Product Simulation' : 'Dashboard'} in full screen
             </a>
        </div>

      </div>
    </section>
  );
};

export default Demo;