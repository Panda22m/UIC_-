import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';

export const RankingScreen: React.FC = () => {
  const rankingData = [
    { rank: 1, name: '이그린', region: '서울 강남구', score: 8742, reduction: 43.2, avatar: 'bg-yellow-100 text-yellow-600' },
    { rank: 2, name: '박환경', region: '서울 성북구', score: 7951, reduction: 38.7, avatar: 'bg-slate-200 text-slate-600' },
    { rank: 3, name: '최지구', region: '인천 부평구', score: 7634, reduction: 35.1, avatar: 'bg-orange-100 text-orange-600' },
    { rank: 4, name: '정대중', region: '경기 고양시', score: 7210, reduction: 32.8, avatar: 'bg-blue-100 text-blue-600' },
    { rank: 5, name: '김나무', region: '서울 마포구', score: 6985, reduction: 31.5, avatar: 'bg-emerald-100 text-emerald-600' },
  ];

  return (
    <div className="pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          GreenPass 랭킹
        </h1>
        <p className="text-sm text-slate-500 mt-1">2023년 6월 마지막 주 기준</p>
        
        <div className="flex p-1 bg-slate-200 rounded-xl mt-6">
          <button className="flex-1 py-2 text-sm font-bold rounded-lg bg-white text-slate-800 shadow-sm transition-all">전체 랭킹</button>
          <button className="flex-1 py-2 text-sm font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-all">친구 랭킹</button>
        </div>
      </div>

      <div className="px-4">
        {/* My Rank */}
        <div className="my-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-emerald-600 w-6 text-center">12</span>
            <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold border-2 border-white shadow-sm">
              나
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">김그린 (나)</p>
              <p className="text-xs text-slate-500">서울 송파구</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-emerald-700">6,240점</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1">
              <span className="inline-block w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-emerald-600"></span>
              3위 상승
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {rankingData.map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-2">
              <div className="flex items-center gap-4">
                <div className="w-8 flex justify-center">
                  {user.rank === 1 && <Crown size={24} className="text-yellow-500" />}
                  {user.rank === 2 && <Medal size={24} className="text-slate-400" />}
                  {user.rank === 3 && <Medal size={24} className="text-orange-400" />}
                  {user.rank > 3 && <span className="text-lg font-bold text-slate-400">{user.rank}</span>}
                </div>
                
                <div className={`w-12 h-12 rounded-full ${user.avatar} flex items-center justify-center font-bold text-lg border-2 border-slate-50 shadow-sm`}>
                  {user.name[0]}
                </div>
                
                <div>
                  <p className="font-bold text-slate-800">{user.name}</p>
                  <p className="text-xs text-slate-400">{user.region}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-slate-900">{user.score.toLocaleString()}점</p>
                <p className="text-xs text-slate-500">CO₂ {user.reduction}kg</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-slate-50 rounded-xl text-center">
          <p className="text-sm text-emerald-600 font-medium">🏃‍♂️ 많이 걸을수록 지구는 더 푸르러집니다.</p>
        </div>
      </div>
    </div>
  );
};