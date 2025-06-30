import "../../styles/aboutsection.css";

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-item">
                    <h2>O mne</h2>
                    <p>Venujem sa front-end vývoju a neustále sa učím nové technológie, aby som mohol prinášať funkčné a vizuálne príťažlivé riešenia.</p>
                    <p>Mám skúsenosti s HTML, CSS, JavaScriptom a pracujem najmä s Reactom pri tvorbe dynamických používateľských rozhraní.</p>
                    <p>Rád budujem veci od nuly a spolupracujem s ľuďmi, ktorí chcú kvalitný a spoľahlivý web – či už ide o portfólio, blog, e-shop alebo firemnú stránku.</p>
                </div>
                <div className="about-item">
                    <img src="/me_photo.png" alt="me" />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;