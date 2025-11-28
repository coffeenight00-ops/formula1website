import { Image, X } from "lucide-react";
import { useState } from "react";

// ⭐ Import images instead of /src/... paths
import g1 from "../assets/images/gallery/gallery1.jpeg";
import g2 from "../assets/images/gallery/gallery2.jpeg";
import g3 from "../assets/images/gallery/gallery3.jpeg";
import g4 from "../assets/images/gallery/gallery4.jpeg";
import g5 from "../assets/images/gallery/gallery5.jpeg";
import g6 from "../assets/images/gallery/gallery6.jpeg";
import g7 from "../assets/images/gallery/gallery7.jpeg";
import g8 from "../assets/images/gallery/gallery8.jpeg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];

export default function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Snapshots from our design and build process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIndex(idx)}
              className="group h-48 rounded-lg overflow-hidden border border-yellow-400/10 shadow-lg"
            >
              <img
                src={src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/40"
          >
            <X className="text-white" />
          </button>

          <img
            src={images[openIndex]}
            className="max-w-5xl w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
