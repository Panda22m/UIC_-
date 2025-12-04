import React, { useRef, useState } from 'react';
import { Challenge } from '../types';
import { ChallengeCard } from '../components/ChallengeCard';
import { Sparkles, Plus } from 'lucide-react';

interface ChallengeScreenProps {
  challenges: Challenge[];
  onOpenAIGenerator: () => void;
}

export const ChallengeScreen: React.FC<ChallengeScreenProps> = ({ challenges, onOpenAIGenerator }) => {
  const [activeTab, setActiveTab] = useState('ai');

  // Categorize challenges (Mocking categorization for demonstration)
  // In a real app, you'd filter by category properties
  const teamChallenges: Challenge[] = [
    {
      title: "2023 탄소중립 팀 챌린지",
      description: "한 달간 친환경 출퇴근으로 탄소 절감하기",
      target: "Group",
      difficulty: "Hard",
      impact: "300kg CO2 감축",
      duration: "6/1 - 6/30",
      category: "팀 챌린지",
      actionItems: ["팀 결성하기", "출퇴근 인증하기"],
      progress: 75,
      participants: 12583
    }
  ];

  const individualChallenges: Challenge[] = [
      {
          title: "일주일 채식 도전",
          description: "하루 한 끼 채식으로 탄소 발자국 줄이기",
          target: "Individual",
          difficulty: "Medium",
          impact: "15kg CO2 감축",
          duration: "7일",
          category: "개인 챌린지",
          actionItems: ["채식 식단 사진 인증"],
          participants: 840
      },
      {
          title: "플로깅 3km",
          description: "조깅하며 쓰레기 줍기",
          target: "Individual",
          difficulty: "Easy",
          impact: "환경 정화",
          duration: "상시",
          category: "개인 챌린지",
          actionItems: ["쓰레기 봉투 사진 인증"],
          participants: 2300
      }
  ];
  
  const companyChallenges: Challenge[] = [
    {
      title: "친환경 커피 마시기",
      description: "텀블러 사용 시 추가 리워드 지급",
      target: "Individual",
      difficulty: "Easy",
      impact: "일회용 컵 0개 도전",
      duration: "상시",
      category: "기업 챌린지",
      actionItems: ["카페 방문 시 텀블러 지참", "인증샷 업로드"],
      status: 'active'
    }
  ];

  const localChallenges: Challenge[] = [
      {
          title: "우리 동네 하천 살리기",
          description: "성북천 주변 환경 정화 활동",
          target: "Group",
          difficulty: "Medium",
          impact: "수질 개선 기여",
          duration: "주말",
          category: "지역 챌린지",
          actionItems: ["봉사활동 참여"],
          participants: 120
      }
  ];

  // Combine generated challenges into "Individual" or their respective category if parsed
  // For simplicity, adding generated ones to individual unless specified
  const aiGeneratedList = challenges.filter(c => c.isGenerated);

  const sections = [
    { id: 'ai', label: 'AI 맞춤' },
    { id: 'individual', label: '개인' },
    { id: 'team', label: '팀(친구)' },
    { id: 'local', label: '지역' },
    { id: 'company', label: '기업' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
        // Adjust for sticky header height
        const headerOffset = 130;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <div className="pb-20 min-h-screen bg-slate-50 relative">
      
      {/* Sticky Header with Title and Tabs */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-200">
        <div className="px-6 py-4">
           <h1 className="text-2xl font-bold text-slate-900">챌린지</h1>
        </div>
        <div className="flex gap-2 overflow-x-auto px-6 pb-3 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === section.id 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-10">
        
        {/* AI Section */}
        <div id="ai" className="scroll-mt-36">
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-indigo-600" size={20} />
                <h3 className="font-bold text-lg text-slate-800">AI 맞춤 챌린지</h3>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg shadow-indigo-200 mb-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-3 border border-white/10">
                    <Sparkles size={12} className="text-yellow-300" />
                    AI 맞춤 생성
                    </div>
                    <h2 className="text-xl font-bold mb-2">친구들과 함께하는<br/>즐거운 친환경 경쟁</h2>
                    <p className="text-indigo-100 text-sm mb-5 opacity-90">
                    친구, 동료들과 함께 실천할 수 있는<br/>
                    맞춤형 목표를 AI가 제안해드립니다.
                    </p>
                    <button 
                    onClick={onOpenAIGenerator}
                    className="bg-white text-indigo-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
                    >
                    <Plus size={16} />
                    AI로 챌린지 만들기
                    </button>
                </div>
            </div>

            {/* Display Generated Challenges */}
            {aiGeneratedList.length > 0 && (
                <div className="space-y-4">
                    {aiGeneratedList.map((challenge, index) => (
                        <ChallengeCard key={`ai-${index}`} challenge={challenge} />
                    ))}
                </div>
            )}
        </div>

        {/* Individual Section */}
        <div id="individual" className="scroll-mt-36">
            <h3 className="font-bold text-lg text-slate-800 mb-4">개인 챌린지</h3>
            <div className="space-y-4">
                {individualChallenges.map((challenge, index) => (
                    <ChallengeCard key={`ind-${index}`} challenge={challenge} />
                ))}
            </div>
        </div>

        {/* Team Section */}
        <div id="team" className="scroll-mt-36">
            <h3 className="font-bold text-lg text-slate-800 mb-4">팀(친구) 챌린지</h3>
            <div className="space-y-4">
                {teamChallenges.map((challenge, index) => (
                    <ChallengeCard key={`team-${index}`} challenge={challenge} />
                ))}
            </div>
        </div>

        {/* Local Section */}
        <div id="local" className="scroll-mt-36">
            <h3 className="font-bold text-lg text-slate-800 mb-4">지역 챌린지</h3>
            <div className="space-y-4">
                {localChallenges.map((challenge, index) => (
                    <ChallengeCard key={`local-${index}`} challenge={challenge} />
                ))}
            </div>
        </div>

        {/* Company Section */}
        <div id="company" className="scroll-mt-36">
            <h3 className="font-bold text-lg text-slate-800 mb-4">기업 연계 챌린지</h3>
            <div className="space-y-4">
                {companyChallenges.map((challenge, index) => (
                    <ChallengeCard key={`comp-${index}`} challenge={challenge} />
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};