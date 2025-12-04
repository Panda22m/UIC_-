import React, { useState } from 'react';
import { User } from 'lucide-react';

type Period = 'daily' | 'weekly' | 'monthly' | 'yearly';

export const StatisticsScreen: React.FC = () => {
  const [period, setPeriod] = useState<Period>('weekly');

  // Mock data for different periods
  const data = {
    daily: { date: '2023년 6월 18일', distance: 5.2, co2: 1.1, score: 68, activities: { walk: 2.1, bike: 1.5, transit: 1.6 } },
    weekly: { date: '2023년 6월 12일 - 6월 18일', distance: 52.3, co2: 10.2, score: 425, activities: { walk: 8.5, bike: 3.7, transit: 40.1 } },
    monthly: { date: '2023년 6월', distance: 184.5, co2: 45.3, score: 1850, activities: { walk: 35.2, bike: 20.5, transit: 128.8 } },
    yearly: { date: '2023년', distance: 1240.0, co2: 320.5, score: 12500, activities: { walk: 250, bike: 150, transit: 840 } },
  };

  const currentData = data[period];

  // Bar chart data (mock percentages relative to 100 for display)
  const barChartData = [40, 68, 55, 72, 82, 45, 60]; 
  const yLabels = [90, 80, 70, 60, 50, 40, 30, 20];

  return (
    <div className="pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white p-6 sticky top-0 z-10 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
            <span className="text-emerald-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#10B981" fillOpacity="0.2"/>
                    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#10B981"/>
                </svg>
            </span>
            <h1 className="text-xl font-bold text-slate-900">활동 통계</h1>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">김그린님</span>
            <div className="bg-emerald-100 p-1.5 rounded-full">
                <User size={16} className="text-emerald-600" />
            </div>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Tabs */}
        <div className="bg-white p-1.5 rounded-full flex shadow-sm border border-slate-100">
          {(['daily', 'weekly', 'monthly', 'yearly'] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${
                period === p
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {p === 'daily' ? '일간' : p === 'weekly' ? '주간' : p === 'monthly' ? '월간' : '연간'}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 font-medium">{currentData.date}</p>

        {/* Total Distance & Donut Chart Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">총 이동거리</h3>
              <p className="text-3xl font-bold text-emerald-600">
                {currentData.distance} <span className="text-base font-normal text-slate-400">km</span>
              </p>
            </div>
            {/* Simple CSS Donut Chart */}
            <div className="relative w-28 h-28">
               <svg className="w-full h-full transform -rotate-90">
                 <circle cx="56" cy="56" r="46" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                 <circle cx="56" cy="56" r="46" stroke="#10b981" strokeWidth="10" fill="transparent" strokeDasharray="289" strokeDashoffset="80" strokeLinecap="round" />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
                  <span className="text-[10px] text-emerald-600 font-bold mb-1">CO₂ 절감</span>
                  <span className="text-lg font-bold text-slate-800">{currentData.co2}kg</span>
               </div>
            </div>
          </div>

          <div className="space-y-4">
             {/* Walk */}
             <div>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🏃</span>
                        <span className="text-sm font-bold text-slate-700">걷기</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{currentData.activities.walk}km</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
             </div>

             {/* Bike */}
             <div>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🚲</span>
                        <span className="text-sm font-bold text-slate-700">자전거</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{currentData.activities.bike}km</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
             </div>

             {/* Transit */}
             <div>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🚌</span>
                        <span className="text-sm font-bold text-slate-700">대중교통</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{currentData.activities.transit}km</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
             </div>
          </div>
        </div>

        {/* Environmental Score & Bar Chart Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
           <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">환경 점수</h3>
                    <p className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg inline-block">지난주 대비 ▲8.3%</p>
                </div>
                <span className="text-3xl font-bold text-emerald-800">425 <span className="text-base font-normal text-slate-800">점</span></span>
           </div>

           {/* Chart Container */}
           <div className="mt-8 flex gap-3 h-56 items-end">
              
              {/* Y-Axis Labels */}
              <div className="flex flex-col justify-between h-full text-xs text-slate-400 font-medium pb-8 w-6 text-right">
                  {yLabels.map((label) => (
                      <span key={label} className="leading-none">{label}</span>
                  ))}
              </div>

              {/* Chart Area */}
              <div className="flex-1 h-full relative flex flex-col justify-end">
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between h-full pb-8 pointer-events-none">
                      {yLabels.map((_, i) => (
                          <div key={i} className="border-b border-slate-100 w-full h-px border-dashed"></div>
                      ))}
                  </div>

                  {/* Bars Container */}
                  <div className="flex justify-between items-end h-[85%] pb-8 relative z-10 px-1">
                      {barChartData.map((height, idx) => (
                        <div key={idx} className="w-full flex flex-col items-center group h-full justify-end relative">
                            {/* Bar */}
                            <div 
                                className="w-3 bg-emerald-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out hover:w-4" 
                                style={{ height: `${height}%` }}
                            ></div>
                            
                            {/* Tooltip */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                                {height}점
                            </div>
                        </div>
                      ))}
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute bottom-0 w-full flex justify-between text-xs text-slate-400 font-medium px-1">
                       <span className="w-full text-center">월</span>
                       <span className="w-full text-center">화</span>
                       <span className="w-full text-center">수</span>
                       <span className="w-full text-center">목</span>
                       <span className="w-full text-center">금</span>
                       <span className="w-full text-center">토</span>
                       <span className="w-full text-center">일</span>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};