
import React, { useEffect, useState } from 'react';
import { SECTIONS } from '../constants';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white font-serif font-bold text-xl">U</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-serif font-bold text-slate-900 leading-none">UDL Evaluation</h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 mt-1">Game Creation Unit</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-1">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="flex items-center">
            <div className="hidden md:flex flex-col items-end">
                <span className="text-xs font-bold text-slate-900">Kiprotich Lang’at</span>
                <span className="text-[10px] text-slate-500">Integrationist</span>
            </div>
        </div>
      </div>
      
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
    </nav>
  );
};
