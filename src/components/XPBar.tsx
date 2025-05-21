import React from 'react';
import { useXPStore } from '../store/xpStore';
import { Trophy } from 'lucide-react';

const XPBar: React.FC = () => {
  const { xp, maxXP } = useXPStore();
  const progress = (xp / maxXP) * 100;
  const level = Math.floor(xp / 100) + 1;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800/80 backdrop-blur-sm p-2">
      <div className="container mx-auto flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-400" />
          <span className="text-white font-bold">Level {level}</span>
        </div>
        <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-white font-medium">{xp}/{maxXP} XP</span>
      </div>
    </div>
  );
};

export default XPBar;