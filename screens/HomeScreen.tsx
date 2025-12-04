import React from 'react';
import { Leaf, Footprints, Bike, Bus, ChevronRight, Bell } from 'lucide-react';
import { UserStats, NavView } from '../types';

interface HomeScreenProps {
  stats: UserStats;
  onNavigate: (view: NavView) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ stats, onNavigate }) => {
  return (
    <div className="pb-20 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white sticky top-0 z-10 border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-100 p-1.5 rounded-lg">
            <Leaf className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="font-bold text-lg text-slate-800">GreenPass</span>
        </div>
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell size={24} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </header>

      <div className="px-6 space-y-6">
        {/* User Status Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm mb-1">안녕하세요,</p>
              <h2 className="text-2xl font-bold text-slate-900">김그린님!</h2>
            </div>
            <div className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <span className="text-xs font-semibold text-emerald-700">현재 레벨</span>
            </div>
          </div>
          
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl font-bold text-emerald-600">{stats.levelName}</span>
            <span className="text-sm text-slate-400 font-medium mb-1.5">{stats.level}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span>{stats.currentPoints.toLocaleString()} 포인트</span>
              <span>다음 레벨까지 {stats.nextLevelPoints.toLocaleString()}점</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000"
                style={{ width: `${(stats.currentPoints / 8000) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Today's Activity */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            오늘의 활동
            <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">6월 18일 기준</span>
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <Footprints size={20} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-0.5">걷기</p>
                <p className="text-lg font-bold text-slate-800">{stats.activities.walk}km</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-md flex flex-col items-center gap-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 bg-emerald-500 rounded-bl-lg">
                <Leaf size={10} className="text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Bike size={20} />
              </div>
              <div className="text-center">
                <p className="text-xs text-emerald-600 font-medium mb-0.5">자전거</p>
                <p className="text-lg font-bold text-emerald-800">{stats.activities.bike}km</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <Bus size={20} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-0.5">대중교통</p>
                <p className="text-lg font-bold text-slate-800">{stats.activities.transit}km</p>
              </div>
            </div>
          </div>
        </div>

        {/* CO2 Savings Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg shadow-emerald-200 transform transition-transform hover:scale-[1.02]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-emerald-100 text-sm font-medium">오늘의 환경 기여</span>
            <Leaf className="text-emerald-200 animate-bounce" size={18} />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold tracking-tight">{stats.co2Saved}kg</span>
            <span className="text-lg font-medium text-emerald-100 mb-1">CO₂ 절감!</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-emerald-100 bg-white/20 px-3 py-1.5 rounded-lg w-fit backdrop-blur-sm">
            <span>+68 포인트 획득 예정</span>
          </div>
        </div>

        {/* Active Challenge Mini View */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">진행 중인 챌린지</h3>
            <button 
              onClick={() => onNavigate('challenge')}
              className="text-xs text-emerald-600 font-medium flex items-center gap-1 hover:underline"
            >
              더보기 <ChevronRight size={14} />
            </button>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">주간 미션</span>
                <h4 className="font-bold text-slate-800">대중교통으로 출근하기</h4>
              </div>
              <span className="text-emerald-600 font-bold text-sm">+200점</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>진행률: 4/7일</span>
                <span>57%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[57%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};