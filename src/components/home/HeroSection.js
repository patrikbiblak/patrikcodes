import { Link } from "react-router-dom";
import "../../styles/herosection.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div>
                <h1>PatrikCodes</h1>
                <p>Pretváram nápady na moderné a kreatívne webové stránky, ktoré vyniknú v digitálnom svete. Vytvorme spolu online zážitok, ktorý zaujme podľa vašich predstáv.</p>
                <button>
                    <Link to="">Projekty</Link>
                </button>
                <button>
                    <Link to="">Kontakt</Link>
                </button>
            </div>
        </section>
    )
}

export default HeroSection;