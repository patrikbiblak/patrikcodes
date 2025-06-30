import "../../styles/aboutsection.css";
import { useRef } from 'react';
import ScrollAnimation from "../../hooks/ScrollAnimation";

const AboutSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  ScrollAnimation(leftRef, { customClass: 'left' });
  ScrollAnimation(rightRef, { customClass: 'right' });

  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-item" ref={leftRef}>
          <h2>O mne</h2>
          <p>Venujem sa front-end vývoju a neustále sa učím nové technológie, aby som mohol prinášať funkčné a vizuálne príťažlivé riešenia.</p>
          <p>Mám skúsenosti s HTML, CSS, JavaScriptom a pracujem najmä s Reactom pri tvorbe dynamických používateľských rozhraní.</p>
          <p>Rád budujem veci od nuly a spolupracujem s ľuďmi, ktorí chcú kvalitný a spoľahlivý web či už ide o portfólio, blog, e-shop alebo firemnú stránku.</p>
        </div>
        <div className="about-item" ref={rightRef}>
          <img src="images/profile.png" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;