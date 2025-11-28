import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-1 bg-yellow-500"></div>
              <span className="text-yellow-500 font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
              <div className="w-12 h-1 bg-yellow-500"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact & Sponsorship
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in supporting STEM Racing or have questions? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/40 rounded-xl p-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <Mail size={20} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-white">aalshweiki@stud.jubilee.edu.jo</p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/40 rounded-xl p-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <Phone size={20} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-white">0798923055</p>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/40 rounded-xl p-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <MapPin size={20} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-white">Amman, Jordan</p>
            <p className="text-gray-300">Jubilee School</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/40 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>

          <form
            action="https://formspree.io/f/myzqwqwv"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Subject</label>
              <input
                name="subject"
                required
                type="text"
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition flex items-center justify-center space-x-2"
            >
              <Send size={20} className="text-white" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
