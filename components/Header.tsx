import React from 'react';
import { Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-emerald-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-100 p-2 rounded-full">
            <Leaf className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">EcoChallenge AI</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-emerald-600 transition-colors">홈</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">소개</a>
          <a href="#gallery" className="hover:text-emerald-600 transition-colors">챌린지 갤러리</a>
        </nav>
        <button className="md:hidden text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
};
