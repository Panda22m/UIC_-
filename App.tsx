import React, { useState } from 'react';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { RankingScreen } from './screens/RankingScreen';
import { ChallengeScreen } from './screens/ChallengeScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { StatisticsScreen } from './screens/StatisticsScreen';
import { BottomNav } from './components/BottomNav';
import { CreateChallengeModal } from './components/CreateChallengeModal';
import { generateChallenges } from './services/geminiService';
import { Challenge, GeneratorOptions, NavView, UserStats } from './types';

const App: React.FC = () => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedChallenges, setGeneratedChallenges] = useState<Challenge[]>([]);

  // Mock User Data
  const userStats: UserStats = {
    level: 'Lv.8 숲',
    levelName: 'Lv.8 숲',
    currentPoints: 6240,
    nextLevelPoints: 8000,
    co2Saved: 2.7,
    activities: {
      walk: 8.5,
      bike: 2.3,
      transit: 3.7
    }
  };

  const handleGenerate = async (options: GeneratorOptions) => {
    setIsLoading(true);
    try {
      const results = await generateChallenges(options);
      // Mark as generated for styling if needed
      const markedResults = results.map(c => ({ ...c, isGenerated: true, id: Date.now().toString() }));
      setGeneratedChallenges(prev => [...markedResults, ...prev]);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("챌린지 생성 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOnboarded) {
    return <OnboardingScreen onComplete={() => setIsOnboarded(true)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeScreen stats={userStats} onNavigate={(view) => setCurrentView(view)} />;
      case 'ranking':
        return <RankingScreen />;
      case 'challenge':
        return (
          <ChallengeScreen 
            challenges={generatedChallenges} 
            onOpenAIGenerator={() => setIsModalOpen(true)} 
          />
        );
      case 'community':
        return <CommunityScreen />;
      case 'statistics':
        return <StatisticsScreen />;
      default:
        return <HomeScreen stats={userStats} onNavigate={(view) => setCurrentView(view)} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
      {renderView()}
      
      <BottomNav 
        currentView={currentView} 
        onChangeView={setCurrentView} 
      />

      <CreateChallengeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;