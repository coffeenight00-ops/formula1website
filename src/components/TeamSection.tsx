import { Trophy, Target, Lightbulb, Users } from "lucide-react";

export default function TeamSection() {
  const values = [
    {
      icon: Trophy,
      title: "Excellence",
      description: "We push ourselves to deliver high-quality engineering and design.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every measurement and decision is made with accuracy and intention.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We explore creative solutions to overcome challenges.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Our strength comes from supporting and learning from each other.",
    },
  ];

  return (
    <section id="team" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <span className="text-yellow-400 font-semibold tracking-widest uppercase">
                About Us
              </span>
              <div className="w-12 h-1 bg-yellow-400"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            STEM Racing Team
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A team of passionate students dedicated to engineering, design, and competition.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-yellow-400/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              STEM Racing was built on a simple but powerful idea: bringing engineering to life through
              hands-on experience. We combine creativity, problem-solving, and technical skill to develop
              a competitive Formula 1 model car.
            </p>

            <p className="text-gray-300 leading-relaxed">
              From concept sketches to real-world testing, every step teaches us how precision,
              teamwork, and determination shape great engineering. Our car represents more than a final
              product—it represents growth, resilience, and passion.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400 transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all">
                <value.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
