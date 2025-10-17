interface ExperienceCardProps {
    badge: string;
    company: string;
    position: string;
    period: string;
    technologies: string[];
    responsibilities: string[];
    kpis: Array<{
        text: string;
        type: 'success' | 'warning' | 'info' | 'danger';
    }>;
}

export default function ExperienceCard({
    badge,
    company,
    position,
    period,
    technologies,
    responsibilities,
    kpis,
}: ExperienceCardProps) {
    return (
        <div className="timeline-item">
            <div className="timeline-badge">{badge}</div>
            <div className="card p-5">
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-semibold">{company} — {position}</h3>
                    </div>
                    <span className="text-sm text-[var(--muted)]">{period}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
                <ul className="mt-3 text-sm text-[var(--muted)] grid gap-1 list-disc pl-4">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                    {kpis.map((kpi, index) => (
                        <span key={index} className={`chip kpi kpi-${kpi.type}`}>
                            {kpi.text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

