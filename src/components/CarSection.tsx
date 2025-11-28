import React from "react";
import { Wind, Settings } from "lucide-react";

import car1 from "../assets/images/car/PIECE1.png";
import car2 from "../assets/images/car/PIECE3.jpeg";  // FIXED EXTENSION
import car3 from "../assets/images/car/PIECE12.png";
import car4 from "../assets/images/car/PIECE13.jpeg"; // FIXED EXTENSION
import car5 from "../assets/images/car/PIECE15.jpeg"; // FIXED EXTENSION
import car6 from "../assets/images/car/18.jpeg";      // FIXED EXTENSION

export default function CarSection() {
  const specs = [
    { icon: Wind, label: "Aerodynamics", value: "Optimized" },
    { icon: Settings, label: "Weight", value: "50 g" },
  ];

  const carImages = [car1, car2, car3, car4, car5, car6];

  return (
    <section
      id="car"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <span className="text-yellow-400 font-semibold tracking-widest uppercase">
                Our Machine
              </span>
              <div className="w-12 h-1 bg-yellow-400"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Formula SR
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A masterpiece of engineering, designed and built by our talented
            team using cutting-edge manufacturing techniques.
          </p>
        </div>

        {/* CAR IMAGE GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {carImages.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-yellow-400/20 shadow-lg hover:scale-105 transition-transform bg-black"
            >
              <img
                src={img}
                alt={`Car ${index + 1}`}
                className="w-full h-48 object-contain bg-black"
              />
            </div>
          ))}
        </div>

        {/* SPECS */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400 transition-all hover:scale-105 w-64"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all">
                <spec.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{spec.label}</h3>
              <p className="text-gray-400">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
