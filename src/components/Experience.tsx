"use client";
import { useI18n } from "@/contexts/I18nContext";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    const { t } = useI18n();

    const experiences = [
        {
            badge: "💼",
            company: "Óptica Selecta",
            position: t("exp1_position"),
            period: t("exp1_period"),
            technologies: ['ReactJS', 'Styled-Components', 'Next.js', 'NodeJS', 'ExpressJS', 'MongoDB', 'Redux', 'Socket.io'],
            responsibilities: [
                t("exp1_resp1"),
                t("exp1_resp2"),
                t("exp1_resp3"),
                t("exp1_resp4"),
                t("exp1_resp5"),
            ],
            kpis: [
                { text: t("exp1_kpi1"), type: 'success' as const },
                { text: t("exp1_kpi2"), type: 'info' as const },
                { text: t("exp1_kpi3"), type: 'success' as const },
                { text: t("exp1_kpi4"), type: 'warning' as const },
            ],
        },
        {
            badge: "</>",
            company: "Golozur",
            position: t("exp2_position"),
            period: t("exp2_period"),
            technologies: ['ReactJS', 'React Native', 'Styled-Components', 'TypeScript', 'Socket.io', 'Google Maps', 'NodeJS', 'ExpressJS'],
            responsibilities: [
                t("exp2_resp1"),
                t("exp2_resp2"),
                t("exp2_resp3"),
                t("exp2_resp4"),
                t("exp2_resp5"),
                t("exp2_resp6"),
                t("exp2_resp7"),
                t("exp2_resp8"),
            ],
            kpis: [
                { text: t("exp2_kpi1"), type: 'success' as const },
                { text: t("exp2_kpi2"), type: 'warning' as const },
                { text: t("exp2_kpi3"), type: 'info' as const },
                { text: t("exp2_kpi4"), type: 'info' as const },
            ],
        },
        {
            badge: "🤝",
            company: "Gestión Olea",
            position: t("exp3_position"),
            period: t("exp3_period"),
            technologies: ['Electron', 'React', 'Node.js', 'Express', 'Git', 'MongoDB'],
            responsibilities: [
                t("exp3_resp1"),
                t("exp3_resp2"),
                t("exp3_resp3"),
                t("exp3_resp4"),
                t("exp3_resp5"),
            ],
            kpis: [
                { text: t("exp3_kpi1"), type: 'success' as const },
                { text: t("exp3_kpi2"), type: 'info' as const },
                { text: t("exp3_kpi3"), type: 'success' as const },
            ],
        },
    ];

    return (
        <section id="experience" className="section min-h-screen flex items-center">
            <div className="container">
                <h2 className="section-title text-center">{t("experience_title")}</h2>
                <div className="mt-10 grid gap-10 timeline">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            badge={exp.badge}
                            company={exp.company}
                            position={exp.position}
                            period={exp.period}
                            technologies={exp.technologies}
                            responsibilities={exp.responsibilities}
                            kpis={exp.kpis}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

