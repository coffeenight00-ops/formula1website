import React from "react";
import { User } from "lucide-react";

/**
 * Note:
 * - Change `IMAGE_CONTAINER_H` to increase/decrease image area height (h-64 / h-72 / h-80).
 * - You can set `imgPos` per member (CSS object-position like "center 20%").
 */

const IMAGE_CONTAINER_H = "h-72"; // try "h-64" or "h-80" if you want different crop size

const members = [
  {
    name: "Anas Alshweiki",
    role: "Website & Social Media",
    description:
      "Manages the team's website and social media presence with strong digital communication.",
    img: "/src/assets/images/Teamimages/Anas.jpeg",
  },
  {
    name: "Saif Abusalameh",
    role: "Research & Team Identity",
    description:
      "Leads research and helps shape the team’s identity and professional image.",
    img: "/src/assets/images/Teamimages/Saif.jpeg",
  },
  {
    name: "Tala Kamel",
    role: "Research & Car Design",
    description:
      "Contributes to engineering research and plays a key role in car design development.",
    img: "/src/assets/images/Teamimages/Tala.jpeg",
  },
  {
    name: "Zaid Loay",
    role: "Website & Social Media",
    description:
      "Supports website development and builds creative social media content for the team.",
    img: "/src/assets/images/Teamimages/Zaid.jpeg",
  },
  {
    name: "Abdullah Quttawi",
    role: "Car Design",
    description:
      "Focuses on designing and refining the car’s aerodynamic and structural elements.",
    img: "/src/assets/images/Teamimages/Abdullah.jpeg",
  },
  {
    name: "Malik Etier",
    role: "Team Identity",
    description:
      "Works on branding, visuals, and building a strong identity for the STEM Racing team.",
    img: "/src/assets/images/Teamimages/Malik.jpg",
    // tweak this value to nudge Malik's image vertically (object-position)
    // examples: "center 10%", "center 25%", "center 40%"
    imgPos: "center 30%",
  },
];

export default function MembersSection() {
  return (
    <section id="members" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-1 bg-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-widest uppercase">The Team</span>
              <div className="w-12 h-1 bg-yellow-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Engineers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The brilliant minds behind STEM Racing, each bringing unique skills and expertise.
          </p>
        </div>

        {/* GRID - items-stretch makes all cards same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {members.map((m, i) => (
            <article
              key={i}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400 transition-all hover:scale-105 flex flex-col h-full"
            >
              {/* IMAGE CONTAINER - fixed height so cards line up */}
              <div className={`${IMAGE_CONTAINER_H} w-full overflow-hidden bg-black/40 flex items-start justify-center`}>
                {m.img ? (
                  <img
                    src={m.img}
                    alt={m.name}
                    // object-contain preserves entire image (no head cropping).
                    // objectPosition lets us nudge particular images (like Malik).
                    style={{ objectPosition: m.imgPos ?? "center top" }}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <User size={64} className="text-yellow-400 opacity-70" />
                  </div>
                )}
              </div>

              {/* CONTENT - flex-1 ensures content area is the same height across cards */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-0.5 bg-yellow-400" />
                  <p className="text-yellow-500 text-sm font-semibold">{m.role}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">{m.description}</p>

                {/* optional action area - keeps vertical spacing consistent */}
                <div className="mt-4" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </section>
  );
}
