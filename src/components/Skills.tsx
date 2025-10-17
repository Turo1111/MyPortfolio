"use client";
import { useI18n } from "@/contexts/I18nContext";
import {
    IconHTML,
    IconCSS,
    IconTS,
    IconReact,
    IconNext,
    IconRN,
    IconRedux,
    IconStyled,
    IconTailwind,
    IconSass,
    IconLess,
    IconNode,
    IconExpress,
    IconSocket,
    IconMongo,
    IconSQL,
    IconGit,
    IconFigma,
    IconJira,
    IconTrello,
    IconScrum,
    IconCheck,
} from "@/components/icons";

export default function Skills() {
    const { t } = useI18n();

    const softSkills = [
        t("soft_skill_1"),
        t("soft_skill_2"),
        t("soft_skill_3"),
        t("soft_skill_4"),
        t("soft_skill_5")
    ];

    return (
        <section id="skills" className="section min-h-screen flex items-center">
            <div className="container">
                <h2 className="section-title text-center">{t("skills_title")}</h2>
                <p className="text-center text-[var(--muted)] text-sm">{t("skills_subtitle")}</p>
                {/* Diseño compacto en chips por categoría */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="card p-4">
                        <h3 className="font-semibold">{t("skills_frontend")}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="chip">{IconHTML()} HTML5</span>
                            <span className="chip">{IconCSS()} CSS3</span>
                            <span className="chip">{IconTS()} JavaScript</span>
                            <span className="chip">{IconTS()} TypeScript</span>
                            <span className="chip">{IconReact()} ReactJS</span>
                            <span className="chip">{IconNext()} Next.js</span>
                            <span className="chip">{IconRN()} React Native</span>
                            <span className="chip">{IconRedux()} Redux</span>
                            <span className="chip">{IconStyled()} Styled-Components</span>
                            <span className="chip">{IconTailwind()} TailwindCSS</span>
                            <span className="chip">{IconSass()} SASS</span>
                            <span className="chip">{IconLess()} LESS</span>
                        </div>
                    </div>
                    <div className="card p-4">
                        <h3 className="font-semibold">{t("skills_backend")}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="chip">{IconNode()} Node.js</span>
                            <span className="chip">{IconExpress()} Express.js</span>
                            <span className="chip">{IconSocket()} Socket.io</span>
                        </div>
                    </div>
                    <div className="card p-4">
                        <h3 className="font-semibold">{t("skills_database")}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="chip">{IconMongo()} MongoDB</span>
                            <span className="chip">{IconSQL()} SQL (MySQL)</span>
                        </div>
                    </div>
                    <div className="card p-4">
                        <h3 className="font-semibold">{t("skills_tools")}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="chip">{IconGit()} Git/GitHub</span>
                            <span className="chip">{IconFigma()} Figma</span>
                            <span className="chip">{IconJira()} Jira</span>
                            <span className="chip">{IconTrello()} Trello</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="card p-4">
                        <h3 className="font-semibold">{t("skills_methodologies")}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="chip">{IconScrum()} SCRUM</span>
                            <span className="chip">{IconScrum()} {t("skills_agile")}</span>
                        </div>
                    </div>
                    <div className="card p-4">
                        <h3 className="font-semibold">{t("skills_soft")}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {softSkills.map((skill) => (
                                <span key={skill} className="chip">{IconCheck()} {skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

