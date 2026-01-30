"use client";
import { useI18n } from "@/contexts/I18nContext";

export default function About() {
    const { t } = useI18n();
    return (
        <section id="about" className="section bg-[var(--surface)]/60 border-t border-b border-[var(--border)] min-h-screen flex items-center">
            <div className="container grid md:grid-cols-12 gap-12 items-start">
                {/* Columna izquierda: Sobre mí */}
                <div className="md:col-span-6 fade-in">
                    <h2 className="section-title">{t("about_title")}</h2>
                    <div className="mt-4 grid gap-4 text-[15px] leading-relaxed text-[var(--muted)] max-w-[66ch]">
                        <p className="text-about">{t("about_p1")}</p>
                        <p className="text-about">{t("about_p2")}</p>
                        <p className="text-about">{t("about_p3")}</p>
                    </div>
                </div>

                {/* Columna derecha: Educación */}
                <div className="md:col-span-6">
                    <h2 className="section-title fade-in">{t("education_title")}</h2>
                    <div className="mt-5 grid gap-4">
                        <div className="card edu-card p-5 translate-x">
                            <div className="flex items-center gap-4">
                                <div className="edu-icon" aria-hidden>🎓</div>
                                <div className="flex-1">
                                    <p className="font-semibold text-[17px]">{t("edu1_degree")}</p>
                                    <p className="text-[var(--accent)] text-sm font-medium">{t("edu1_institution")}</p>
                                    <p className="text-[var(--muted)] text-xs mt-1">{t("edu1_period")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card edu-card p-5 translate-x">
                            <div className="flex items-center gap-4">
                                <div className="edu-icon" aria-hidden>✦</div>
                                <div className="flex-1">
                                    <p className="font-semibold text-[17px]">{t("edu2_degree")}</p>
                                    <p className="text-[var(--accent)] text-sm font-medium">{t("edu2_institution")}</p>
                                    <p className="text-[var(--muted)] text-xs mt-1">{t("edu2_period")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

