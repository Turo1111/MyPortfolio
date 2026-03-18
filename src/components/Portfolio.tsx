"use client";
import { useI18n } from "@/contexts/I18nContext";
import ProjectCard from "./ProjectCard";
import { useRef, useState, useEffect } from "react";

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'mobile' | 'fullstack' | 'api' | 'dashboard' | 'ml';

export default function Portfolio() {
    const { portfolio } = useI18n(); // ✨ Usando el nuevo sistema de diccionarios por sección
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 460; // ancho de card + gap
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        checkScroll();
        // También verificar al cambiar el tamaño de la ventana
        const handleResize = () => checkScroll();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset scroll cuando cambia el filtro
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeFilter]);

    const allProjects = [
        {
            icon: "📊",
            title: "Golozur Gestión",
            description: portfolio.project1_description,
            technologies: ['Next.js', 'TypeScript', 'Redux', 'Material UI', 'Socket.io'],
            achievements: [
                portfolio.project1_achievement1,
                portfolio.project1_achievement2,
                portfolio.project1_achievement3,
            ],
            categories: ['fullstack', 'frontend', 'dashboard'] as ProjectCategory[],
            projectLink: portfolio.project1_projectLink,
            codeLink: portfolio.project1_codeLink,
        },
        {
            icon: "👁️",
            title: "Óptica Selecta",
            description: portfolio.project2_description,
            technologies: ['Next.js', 'React', 'Redux', 'Socket.io', 'Material UI', 'jsPDF'],
            achievements: [
                portfolio.project2_achievement1,
                portfolio.project2_achievement2,
                portfolio.project2_achievement3,
            ],
            categories: ['fullstack', 'frontend', 'dashboard'] as ProjectCategory[],
            projectLink: portfolio.project2_projectLink,
            codeLink: portfolio.project2_codeLink,
        },
        {
            icon: "📱",
            title: "Golozur Mobile",
            description: portfolio.project3_description,
            technologies: ['React Native', 'TypeScript', 'Redux', 'Socket.io', 'Google Maps'],
            achievements: [
                portfolio.project3_achievement1,
                portfolio.project3_achievement2,
                portfolio.project3_achievement3,
            ],
            categories: ['mobile', 'frontend'] as ProjectCategory[],
            projectLink: portfolio.project3_projectLink,
            codeLink: portfolio.project3_codeLink,
        },
        {
            icon: "🔌",
            title: "Golozur API",
            description: portfolio.project4_description,
            technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Socket.io', 'JWT'],
            achievements: [
                portfolio.project4_achievement1,
                portfolio.project4_achievement2,
                portfolio.project4_achievement3,
            ],
            categories: ['backend', 'api'] as ProjectCategory[],
            projectLink: portfolio.project4_projectLink,
            codeLink: portfolio.project4_codeLink,
        },
        {
            icon: "☕",
            title: "Store Management API",
            description: portfolio.project5_description,
            technologies: ['Spring Boot', 'Java 17', 'MongoDB', 'JPA', 'Cucumber', 'Maven'],
            achievements: [
                portfolio.project5_achievement1,
                portfolio.project5_achievement2,
                portfolio.project5_achievement3,
            ],
            categories: ['backend', 'api'] as ProjectCategory[],
            projectLink: portfolio.project5_projectLink,
            codeLink: portfolio.project5_codeLink,
        },
        {
            icon: "♻️",
            title: "Simulador Smurfit Kappa",
            description: portfolio.project6_description,
            technologies: ['Next.js', 'React', 'Styled Components', 'Estadística', 'Algoritmos'],
            achievements: [
                portfolio.project6_achievement1,
                portfolio.project6_achievement2,
                portfolio.project6_achievement3,
            ],
            categories: ['frontend'] as ProjectCategory[],
            projectLink: portfolio.project6_projectLink,
            codeLink: portfolio.project6_codeLink,
        },
        {
            icon: "🎓",
            title: "Test Vocacional IA",
            description: portfolio.project7_description,
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'IA Simbólica'],
            achievements: [
                portfolio.project7_achievement1,
                portfolio.project7_achievement2,
                portfolio.project7_achievement3,
            ],
            categories: ['frontend'] as ProjectCategory[],
            projectLink: portfolio.project7_projectLink,
            codeLink: portfolio.project7_codeLink,
        },
        {
            icon: "📊",
            title: "Toyota ML Pipeline",
            description: portfolio.project8_description,
            technologies: ['Python', 'Scikit-learn', 'MLflow', 'Dagster', 'Pandas', 'Jupyter'],
            achievements: [
                portfolio.project8_achievement1,
                portfolio.project8_achievement2,
                portfolio.project8_achievement3,
            ],
            categories: ['ml'] as ProjectCategory[],
            projectLink: portfolio.project8_projectLink,
            codeLink: portfolio.project8_codeLink,
        },
        {
            icon: "🔍",
            title: "Clustering Data Mining",
            description: portfolio.project9_description,
            technologies: ['Python', 'K-means', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
            achievements: [
                portfolio.project9_achievement1,
                portfolio.project9_achievement2,
                portfolio.project9_achievement3,
            ],
            categories: ['ml'] as ProjectCategory[],
            projectLink: portfolio.project9_projectLink,
            codeLink: portfolio.project9_codeLink,
        },
    ];

    // Filtrar proyectos según la categoría activa
    const projects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(project => project.categories.includes(activeFilter));

    const filters: { key: ProjectCategory; label: keyof typeof portfolio }[] = [
        { key: 'all', label: 'filter_all' },
        { key: 'fullstack', label: 'filter_fullstack' },
        { key: 'frontend', label: 'filter_frontend' },
        { key: 'backend', label: 'filter_backend' },
        { key: 'mobile', label: 'filter_mobile' },
        { key: 'api', label: 'filter_api' },
        { key: 'dashboard', label: 'filter_dashboard' },
        { key: 'ml', label: 'filter_ml' },
    ];

    return (
        <section id="portfolio" className="section bg-[var(--surface)]/60 border-t border-b border-[var(--border)] min-h-screen flex items-center">
            <div className="container">
                <h2 className="section-title text-center">{portfolio.title}</h2>
                <p className="text-center text-[var(--muted)] text-sm">{portfolio.subtitle}</p>

                {/* Pills de filtrado */}
                <div className="mt-6 flex justify-center">
                    <div className="inline-flex gap-2 flex-wrap justify-center max-w-3xl">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${activeFilter === filter.key
                                        ? 'bg-[var(--accent)] text-white shadow-md scale-105'
                                        : 'bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                                    }
                                `}
                            >
                                {portfolio[filter.label]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Contador de proyectos */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-[var(--muted)]">
                        {projects.length} {projects.length === 1 ? portfolio.project_singular : portfolio.project_plural}
                    </p>
                </div>

                <div className="mt-6 relative">
                    <style jsx>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        .project-card-animate {
                            animation: fadeIn 0.3s ease-out;
                        }
                    `}</style>

                    {/* Botón Izquierdo */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--surface)] hover:bg-[var(--accent)] border border-[var(--border)] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            aria-label="Anterior"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Botón Derecho */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--surface)] hover:bg-[var(--accent)] border border-[var(--border)] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            aria-label="Siguiente"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="overflow-x-auto pb-4 scrollbar-hide"
                    >
                        <div className="flex gap-6 min-w-max px-4">
                            {projects.map((project, index) => (
                                <div
                                    key={`${project.title}-${index}`}
                                    className="w-[400px] md:w-[450px] h-[550px] flex-shrink-0 project-card-animate"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <ProjectCard
                                        icon={project.icon}
                                        title={project.title}
                                        description={project.description}
                                        technologies={project.technologies}
                                        achievements={project.achievements}
                                        projectLink={project.projectLink}
                                        codeLink={project.codeLink}
                                        viewProjectText={portfolio.view}
                                        codeText={portfolio.code}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

