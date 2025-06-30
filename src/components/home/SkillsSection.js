import "../../styles/skillssection.css";

const SkillsSection = () => {

    const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 55 },
    { name: 'React', level: 50 },
    { name: 'GIT', level: 70 },
  ];

    return (
        <section className="skills-section">
            <h2>Zručnosti</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill" style={{ '--level': `${skill.level}%` }}>
                        <div>
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;