import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CarSection from './components/CarSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import MembersSection from './components/MembersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const THEME = 'yellow';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation theme={THEME} />
      <Hero theme={THEME} />
      <CarSection theme={THEME} />
      <GallerySection theme={THEME} />
      <TeamSection theme={THEME} />
      <MembersSection theme={THEME} />
      <ContactSection theme={THEME} />
      <Footer theme={THEME} />
    </div>
  );
}

export default App;
