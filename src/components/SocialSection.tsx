import { Youtube, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { themeConfig, Theme } from '../utils/themeColors';

interface SocialSectionProps {
  theme: Theme;
}

export default function SocialSection({ theme }: SocialSectionProps) {
  const colors = themeConfig[theme];

  const socials = [
    { icon: Youtube, name: 'YouTube', followers: '12.5K', link: '#', desc: 'Race highlights & tutorials' },
    { icon: Instagram, name: 'Instagram', followers: '8.3K', link: '#', desc: 'Behind the scenes' },
    { icon: Twitter, name: 'Twitter', followers: '5.2K', link: '#', desc: 'Live updates & news' },
    { icon: Linkedin, name: 'LinkedIn', followers: '3.1K', link: '#', desc: 'Professional insights' },
  ];

  return (
    <section id="social" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-12 h-1 ${colors.accent}`}></div>
              <span className={`${colors.text} font-semibold tracking-widest uppercase`}>Follow Us</span>
              <div className={`w-12 h-1 ${colors.accent}`}></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with us on social media for exclusive content, live updates, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className={`group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover:border-current transition-all hover:scale-105 hover:shadow-lg`}
              style={{ borderColor: 'currentColor', boxShadow: `0 0 20px ${colors.glowShadow.split('/')[0]}0` }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${colors.bg} group-hover:shadow-lg transition-all`} style={{ boxShadow: `0 0 30px ${colors.glowShadow.split('/')[0]}40` }}>
                <social.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{social.name}</h3>
              <p className={`${colors.text} font-semibold mb-2`}>{social.followers}</p>
              <p className="text-gray-400 text-sm">{social.desc}</p>
            </a>
          ))}
        </div>

        <div className={`bg-gradient-to-r ${colors.accentLight} rounded-2xl p-8 md:p-12 text-center border border-current`} style={{ borderColor: colors.text }}>
          <div className="flex items-center justify-center mb-4">
            <MessageCircle size={40} className={colors.text} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Updates</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Get the latest news directly to your inbox. Never miss important announcements about competitions, achievements, and team updates.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-current transition-colors"
              style={{ focusBorderColor: colors.text }}
            />
            <button className={`bg-gradient-to-r ${colors.bg} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all`} style={{ boxShadow: `0 0 20px ${colors.glowShadow.split('/')[0]}50` }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
