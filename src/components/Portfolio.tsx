"use client";
import { useI18n } from "@/contexts/I18nContext";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
    const { t } = useI18n();

    const projects = [
        {
            icon: "🛒",
            title: "Golozur",
            description: t("project1_description"),
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            achievements: [
                t("project1_achievement1"),
                t("project1_achievement2"),
                t("project1_achievement3"),
            ],
            projectLink: "#",
            codeLink: "#",
        },
        {
            icon: "👁️",
            title: "Óptica Selecta",
            description: t("project2_description"),
            technologies: ['React', 'TypeScript', 'Express', 'MySQL'],
            achievements: [
                t("project2_achievement1"),
                t("project2_achievement2"),
                t("project2_achievement3"),
            ],
            projectLink: "#",
            codeLink: "#",
        },
    ];

    return (
        <section id="portfolio" className="section bg-[var(--surface)]/60 border-t border-b border-[var(--border)] min-h-screen flex items-center">
            <div className="container">
                <h2 className="section-title text-center">{t("portfolio_title")}</h2>
                <p className="text-center text-[var(--muted)] text-sm">{t("portfolio_subtitle")}</p>
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            icon={project.icon}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            achievements={project.achievements}
                            projectLink={project.projectLink}
                            codeLink={project.codeLink}
                            viewProjectText={t("project_view")}
                            codeText={t("project_code")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

