import { Trophy, Medal, Star } from 'lucide-react';
import { themeConfig, Theme } from '../utils/themeColors';

interface AchievementsSectionProps {
  theme: Theme;
}

export default function AchievementsSection({ theme }: AchievementsSectionProps) {
  const colors = themeConfig[theme];

  const achievements = [
    { icon: Trophy, title: '1st Place Regional', desc: 'Won regional STEM racing competition' },
    { icon: Medal, title: 'Design Award', desc: 'Best Aerodynamic Design' },
    { icon: Star, title: 'Innovation Prize', desc: 'Breakthrough in control systems' },
  ];

  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-12 h-1 ${colors.accent}`}></div>
              <span className={`${colors.text} font-semibold tracking-widest uppercase`}>Success</span>
              <div className={`w-12 h-1 ${colors.accent}`}></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <div key={i} className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border ${colors.accentLight} hover:scale-105 transition-transform`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${colors.bg}`}>
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
