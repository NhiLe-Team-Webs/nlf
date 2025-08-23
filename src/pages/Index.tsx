import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import TransparencySection from '@/components/TransparencySection';
import ProjectsSection from '@/components/ProjectsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProjectsSection />
        <TransparencySection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
