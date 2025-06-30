import { useState, useRef } from 'react';
import "../../styles/projectssection.css";
import ScrollAnimation from "../../hooks/ScrollAnimation";

const ProjectsSection = () => {
    const ref = useRef(null);
    ScrollAnimation(ref);

    const scrollRef = useRef(null);
    const [activePage, setActivePage] = useState(0);

    const boxes = 5;
    const boxesPerPage = 3;
    const totalPages = Math.ceil(boxes / boxesPerPage);

    const scrollToPage = (pageIndex) => {
        if (scrollRef.current) {
            const containerWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: pageIndex * containerWidth,
                behavior: 'smooth',
            });
            setActivePage(pageIndex);
        }
    };

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const containerWidth = e.target.offsetWidth;
        const pageIndex = Math.round(scrollLeft / containerWidth);
        setActivePage(pageIndex);
    };

    return (
        <section className="projects-section">
            <div>
                <div className="projects-heading" ref={ref}>
                    <h2>Projekty</h2>
                    <p>Niekoľko z mojich prác</p>
                </div>

                <button
                    className="scroll-button left"
                    onClick={() => scrollToPage(Math.max(0, activePage - 1))}
                    aria-label="Scroll left"
                >
                    &#8249;
                </button>

                <button
                    className="scroll-button right"
                    onClick={() => scrollToPage(Math.min(totalPages - 1, activePage + 1))}
                    aria-label="Scroll right"
                >
                    &#8250;
                </button>

                <div className="carousel-container" onScroll={handleScroll} ref={scrollRef}>
                    <div className="carousel-track">
                        {[...Array(boxes)].map((_, index) => (
                            <div key={index} className="project-box" />
                        ))}
                    </div>
                </div>

                <div className="dots">
                    {[...Array(totalPages)].map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activePage ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;