interface ProjectCardProps {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    achievements: string[];
    projectLink?: string;
    codeLink?: string;
    viewProjectText: string;
    codeText: string;
}

export default function ProjectCard({
    icon,
    title,
    description,
    technologies,
    achievements,
    projectLink,
    codeLink,
    viewProjectText,
    codeText,
}: ProjectCardProps) {
    return (
        <article className="card overflow-hidden shadow-soft h-full flex flex-col">
            <div className="project-banner grid place-items-center">
                <span className="project-icon">{icon}</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-[var(--muted)] text-sm mt-2 max-w-[65ch] line-clamp-3">{description}</p>
                <div className="mt-3 flex flex-wrap gap-2 min-h-[40px]">
                    {technologies.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
                <ul className="mt-4 text-sm grid gap-1 text-[var(--muted)] flex-grow">
                    {achievements.map((achievement, index) => (
                        <li key={index}>✔ {achievement}</li>
                    ))}
                </ul>
                <div className="mt-5 flex items-center gap-4 text-sm">
                    {projectLink && (
                        <a className="text-[var(--accent)] flex items-center gap-2" href={projectLink}>
                            ⚑ {viewProjectText}
                        </a>
                    )}
                    {codeLink && (
                        <a className="text-[var(--muted)] flex items-center gap-2" href={codeLink}>
                            ⌂ {codeText}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

