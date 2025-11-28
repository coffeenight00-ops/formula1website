import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + text */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white font-bold">SR</span>
            </div>
            <span className="text-white text-xl font-bold">STEM RACING</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Engineering excellence in motion. Building the future of STEM education through competitive racing.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#car" className="hover:text-yellow-500">Our Car</a></li>
            <li><a href="#team" className="hover:text-yellow-500">About Team</a></li>
            <li><a href="#members" className="hover:text-yellow-500">Team Members</a></li>
          </ul>
        </div>

        {/* Contact Only (Email + Instagram) */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>

          <div className="flex space-x-4 mb-4">
            {/* Email */}
            <a
              href="mailto:aalshweiki@stud.jubilee.edu.jo"
              className="w-10 h-10 bg-[#1a1d21] rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
            >
              <Mail className="text-white" size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jubilee_stemracing2/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-[#1a1d21] rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
            >
              <Instagram className="text-white" size={18} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">aalshweiki@stud.jubilee.edu.jo</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-yellow-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © 2025 STEM Racing. All rights reserved.
      </div>
    </footer>
  );
}
