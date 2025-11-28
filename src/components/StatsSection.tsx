import { Zap, TrendingUp, Users, Gauge } from 'lucide-react';
import { themeConfig, Theme } from '../utils/themeColors';

interface StatsSectionProps {
  theme: Theme;
}

export default function StatsSection({ theme }: StatsSectionProps) {
  const colors = themeConfig[theme];

  const stats = [
    { icon: Gauge, value: '250+', label: 'km/h Max Speed', color: 'from-yellow-500 to-orange-500' },
    { icon: Zap, value: '2500W', label: 'Peak Power Output', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '25', label: 'Team Members', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <section id="stats" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: colors.text }}></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: colors.text }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-12 h-1 ${colors.accent}`}></div>
              <span className={`${colors.text} font-semibold tracking-widest uppercase`}>Performance</span>
              <div className={`w-12 h-1 ${colors.accent}`}></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">By The Numbers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 border border-gray-700/50 hover:border-current transition-all hover:scale-110 overflow-hidden`}
              style={{ borderColor: 'currentColor' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

              <div className="relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`} style={{ background: `linear-gradient(to br, var(--color-1), var(--color-2))`, '--color-1': stat.color.split(' ')[0], '--color-2': stat.color.split(' ')[2] } as any}>
                  <stat.icon size={32} className="text-white" />
                </div>

                <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
