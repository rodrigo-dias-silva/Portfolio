import Header from "../../components/Header";
import InitialSection from "../../sections/InitialSection";
import AboutSection from '../../sections/AboutSection';
import ProjectsSection from '../../sections/ProjectsSection';
import ContactSection from '../../sections/ContactSection';
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <div className="w-full md:max-w-5xl px-6 flex flex-col transition">
      <Header />
      <InitialSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}