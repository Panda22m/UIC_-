import React, { useState } from 'react';
import { TargetAudience, Difficulty } from '../types';
import { Button } from './Button';
import { X, User, Users, Target, BarChart3 } from 'lucide-react';

interface CreateChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (options: { target: TargetAudience; theme: string; difficulty: Difficulty }) => void;
  isLoading: boolean;
}

export const CreateChallengeModal: React.FC<CreateChallengeModalProps> = ({
  isOpen,
  onClose,
  onGenerate,
  isLoading
}) => {
  const [target, setTarget] = useState<TargetAudience>('Individual');
  const [theme, setTheme] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ target, theme, difficulty });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl transform transition-all overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800">친환경 챌린지 만들기</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <form id="challenge-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Target Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Target size={18} />
                대상 선택
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setTarget('Individual')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    target === 'Individual' 
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                      : 'border-slate-200 hover:border-emerald-200 text-slate-600'
                  }`}
                >
                  <User size={32} className="mb-2" />
                  <span className="font-medium">개인</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTarget('Group')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    target === 'Group' 
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                      : 'border-slate-200 hover:border-emerald-200 text-slate-600'
                  }`}
                >
                  <Users size={32} className="mb-2" />
                  <span className="font-medium">친구/팀</span>
                </button>
              </div>
            </div>

            {/* Theme Input */}
            <div className="space-y-3">
              <label htmlFor="theme" className="text-sm font-semibold text-slate-700">
                중점 테마 (선택사항)
              </label>
              <input
                id="theme"
                type="text"
                placeholder="예: 플라스틱 줄이기, 에너지 절약, 지역사회 봉사"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all placeholder:text-slate-400"
              />
              <p className="text-xs text-slate-400">
                * 친구들과 함께하는 즐거운 친환경 경쟁을 위한 맞춤형 목표를 제안해드립니다.
              </p>
            </div>

            {/* Difficulty Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <BarChart3 size={18} />
                난이도
              </label>
              <div className="flex gap-2">
                {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setDifficulty(level)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                      difficulty === level
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {level === 'Easy' ? '쉬움' : level === 'Medium' ? '보통' : '어려움'}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <Button 
            type="submit" 
            form="challenge-form" 
            className="w-full" 
            size="lg"
            isLoading={isLoading}
          >
            AI 챌린지 생성하기
          </Button>
        </div>
      </div>
    </div>
  );
};