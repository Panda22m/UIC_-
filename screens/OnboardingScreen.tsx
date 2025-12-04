import React, { useState } from 'react';
import { Leaf, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 z-10 text-center transition-all duration-500">
        
        {step === 1 && (
          <div className="animate-fade-in space-y-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">환영합니다!</h1>
            <p className="text-slate-600 leading-relaxed">
              <span className="font-bold text-emerald-600">GreenPass</span>와 함께<br/>
              일상 속 탄소중립에 동참하세요.
            </p>
            <Button size="lg" className="w-full mt-4" onClick={() => setStep(2)}>
              간편하게 시작하기
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in space-y-6">
             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">위치 권한 허용</h2>
            <p className="text-slate-600 text-sm">
              친환경 행동(걷기, 자전거, 대중교통)을<br/>
              자동으로 기록하기 위해 위치 권한이 필요합니다.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-left space-y-2 border border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>이동 거리 자동 측정</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>교통 수단 자동 판별</span>
              </div>
            </div>
            <Button size="lg" className="w-full" onClick={() => setStep(3)}>
              위치 권한 허용하기
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in space-y-6">
             <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎁</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">웰컴 리워드 지급!</h2>
            <p className="text-slate-600">
              가입 축하 <span className="font-bold text-emerald-600">500 포인트</span>가<br/>
              지급되었습니다.
            </p>
            <div className="py-4">
              <div className="text-4xl font-black text-emerald-600 tracking-tight">500 P</div>
            </div>
            <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={onComplete}>
              GreenPass 시작하기 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-8">
          <div className={`w-2 h-2 rounded-full transition-colors ${step >= 1 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
          <div className={`w-2 h-2 rounded-full transition-colors ${step >= 2 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
          <div className={`w-2 h-2 rounded-full transition-colors ${step >= 3 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
        </div>
      </div>
    </div>
  );
};