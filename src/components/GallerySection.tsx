import { Image, X } from "lucide-react";
import { useState } from "react";
import { themeConfig, Theme } from "../utils/themeColors"; // optional if you use theme colors; remove if not needed

interface GallerySectionProps {
  theme?: Theme;
}

export default function GallerySection({ theme = "dark" }: GallerySectionProps) {
  // 8 images: gallery1..gallery8.jpeg
  const images = Array.from({ length: 8 }, (_, i) => `/src/assets/images/gallery/gallery${i + 1}.jpeg`);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-1 bg-yellow-500"></div>
              <span className="text-yellow-500 font-semibold tracking-widest uppercase">Gallery</span>
              <div className="w-12 h-1 bg-yellow-500"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Snapshots from our design and build process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIndex(idx)}
              className="group h-48 rounded-lg overflow-hidden border border-yellow-400/10 shadow-lg p-0 focus:outline-none"
              aria-label={`Open gallery image ${idx + 1}`}
            >
              <div className="w-full h-full relative">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
            aria-label="Close gallery"
          >
            <X className="text-white" />
          </button>

          <div className="max-w-5xl w-full max-h-full">
            <img
              src={images[openIndex]}
              alt={`Open gallery ${openIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
