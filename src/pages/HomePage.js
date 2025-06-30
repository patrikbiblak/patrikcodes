import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactSection from "../components/home/ContactSection";

const HomePage = () => {

    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;