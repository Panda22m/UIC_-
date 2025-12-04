import React from 'react';
import { Home, Trophy, Target, Users, BarChart3 } from 'lucide-react';
import { NavView } from '../types';

interface BottomNavProps {
  currentView: NavView;
  onChangeView: (view: NavView) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  const navItems: { view: NavView; label: string; icon: React.ReactNode }[] = [
    { view: 'ranking', label: '랭킹', icon: <Trophy size={20} /> },
    { view: 'challenge', label: '챌린지', icon: <Target size={20} /> },
    { view: 'home', label: '홈', icon: <Home size={24} /> }, // Home is slightly larger/central
    { view: 'community', label: '커뮤니티', icon: <Users size={20} /> },
    { view: 'statistics', label: '통계', icon: <BarChart3 size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
      <div className="flex justify-between items-end max-w-md mx-auto h-14 pb-2">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onChangeView(item.view)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? 'text-emerald-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className={`p-1.5 rounded-full ${isActive ? 'bg-emerald-50' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};