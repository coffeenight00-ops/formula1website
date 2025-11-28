import { Calendar, User, ArrowRight } from 'lucide-react';
import { themeConfig, Theme } from '../utils/themeColors';

interface BlogSectionProps {
  theme: Theme;
}

export default function BlogSection({ theme }: BlogSectionProps) {
  const colors = themeConfig[theme];

  const posts = [
    {
      date: 'Nov 15, 2024',
      author: 'Engineering Team',
      title: 'Breaking New Speed Records: Our Latest Achievements',
      excerpt: 'We achieved a new personal best speed record this week, pushing our car beyond all previous benchmarks.',
      category: 'Achievement',
    },
    {
      date: 'Nov 10, 2024',
      author: 'Design Lead',
      title: 'Aerodynamic Breakthrough: CFD Analysis Results',
      excerpt: 'Our advanced computational fluid dynamics analysis revealed critical improvements for downforce optimization.',
      category: 'Technology',
    },
    {
      date: 'Nov 5, 2024',
      author: 'Project Manager',
      title: 'Team Expansion: Welcome New Members',
      excerpt: 'Excited to announce we are growing our team with fresh talent across multiple disciplines.',
      category: 'Team',
    },
    {
      date: 'Oct 28, 2024',
      author: 'Electronics Team',
      title: 'Custom Control System Development Complete',
      excerpt: 'Our in-house designed control system is now fully operational and exceeding performance targets.',
      category: 'Development',
    },
  ];

  return (
    <section id="blog" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" style={{ color: colors.text }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-12 h-1 ${colors.accent}`}></div>
              <span className={`${colors.text} font-semibold tracking-widest uppercase`}>Latest Updates</span>
              <div className={`w-12 h-1 ${colors.accent}`}></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Blog</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest news, achievements, and technical insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden border border-gray-700/50 hover:border-current transition-all hover:scale-105`}
              style={{ borderColor: 'currentColor', color: colors.text }}
            >
              <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.accentLight} ${colors.text}`}>
                    {post.category}
                  </span>
                  <span className={`text-xs ${colors.text}`}>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <button className={`${colors.textLight} hover:${colors.text} transition-colors group/btn`}>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`bg-gradient-to-r ${colors.bg} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all`} style={{ boxShadow: `0 0 20px ${colors.glowShadow.split('/')[0]}50` }}>
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
