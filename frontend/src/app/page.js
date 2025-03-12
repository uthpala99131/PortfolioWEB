import Hero from "./compnents/Hero";
import Navbar from "./compnents/Navbar";
import AboutSection from "./compnents/AboutSection";
import ProjectsSection from "./compnents/ProjectsSection";
import EmailSection from "./compnents/EmailSection";
import Footer from "./compnents/Footer";
import AchievementsSection from "./compnents/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="w-full h-screen">
        <Hero />
        <div className="container mt-24 mx-auto px-0 py-0">
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      </div>
      
    </main>
  );
}
