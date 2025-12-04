import React from 'react';
import { Challenge } from '../types';
import { Users, User, Clock, CheckCircle2, TrendingUp, Sparkles, Trophy } from 'lucide-react';

interface ChallengeCardProps {
  challenge: Challenge;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const isIndividual = challenge.target === 'Individual';
  const hasProgress = challenge.progress !== undefined;
  
  const difficultyColor = {
    'Easy': 'bg-green-50 text-green-700 border-green-100',
    'Medium': 'bg-yellow-50 text-yellow-700 border-yellow-100',
    'Hard': 'bg-orange-50 text-orange-700 border-orange-100',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:border-emerald-200 transition-all duration-300 group">
      {/* Generated Badge */}
      {challenge.isGenerated && (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold px-3 py-1 flex items-center gap-1">
          <Sparkles size={10} className="text-yellow-300" />
          AI Generated
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-2 mb-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border ${difficultyColor[challenge.difficulty]}`}>
              {challenge.difficulty === 'Easy' ? '쉬움' : challenge.difficulty === 'Medium' ? '보통' : '어려움'}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
              {challenge.category}
            </span>
          </div>
          {challenge.participants && (
            <div className="text-[10px] text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full">
               <Users size={12} />
               {challenge.participants.toLocaleString()}명 참여
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight group-hover:text-emerald-600 transition-colors">
          {challenge.title}
        </h3>
        <p className="text-slate-500 text-xs mb-4 line-clamp-2">
          {challenge.description}
        </p>

        {hasProgress ? (
           <div className="mb-4">
              <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                <span className="font-medium">목표 달성률</span>
                <span className="font-bold text-emerald-600">{challenge.progress}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full" 
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
           </div>
        ) : (
          <div className="flex items-center gap-2 mb-4 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
             <Trophy size={14} className="text-yellow-500" />
             <span>달성 시: <span className="font-bold text-slate-800">{challenge.impact}</span></span>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-slate-50">
           <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock size={12} />
              <span>{challenge.duration}</span>
           </div>
           <button className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${
             hasProgress 
               ? 'bg-slate-100 text-slate-400 cursor-default'
               : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
           }`}>
             {hasProgress ? '참여중' : '참여하기'}
           </button>
        </div>
      </div>
    </div>
  );
};