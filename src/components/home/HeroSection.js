import { Link } from "react-router-dom";
import "../../styles/herosection.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div>
                <h1>PatrikCodes</h1>
                <p>Pretváram nápady na moderné a kreatívne webové stránky, ktoré vyniknú v digitálnom svete. Vytvorme online zážitok, ktorý zaujme podľa vašich predstáv.</p>
                <button>
                    <Link to="/src/pages/ProjectsPage.js">Projekty</Link>
                </button>
                <button>
                    <Link to="/src/pages/ContactPage.js">Kontakt</Link>
                </button>
            </div>
        </section>
    )
}

export default HeroSection;