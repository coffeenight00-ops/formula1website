import { ChevronDown } from 'lucide-react';
import WhiteCarLogo from "../assets/images/car/white_design_clean.png";

export default function Hero(): JSX.Element {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-950 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Top and bottom lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          {/* Logo circle with controllable logo */}
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-yellow-400"></div>

              {/* Circle with car logo inside */}
              <div
                className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full shadow-lg relative"
                style={{ boxShadow: '0 0 30px rgba(234, 179, 8, 0.6)' }}
              >
                <img
                  src={WhiteCarLogo}
                  alt="F1 Car Logo"
                  className="w-[68px] h-[68px] object-contain absolute"
                  style={{
                    top: '55%',   // adjust vertical position
                    left: '51.5%',  // adjust horizontal position
                    transform: 'translate(-50%, -50%)', // keeps it centered at the top/left position
                  }}
                />
              </div>

              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            STEM <span className="text-yellow-400">RACING</span>
          </h1>

          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6"></div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
            Engineering Excellence in Motion
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Where innovation meets speed. Our Formula 1 model car represents the pinnacle of STEM education,
            combining aerodynamics, precision engineering, and cutting-edge design.
          </p>

          <button
            onClick={() => scrollToSection('car')}
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:scale-105"
            style={{ boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)' }}
          >
            Explore Our Car
          </button>
        </div>
      </div>

      {/* Scroll down button */}
      <button
        onClick={() => scrollToSection('car')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
