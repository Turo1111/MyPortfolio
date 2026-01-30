"use client";
import { useEffect, useState } from "react";
import { useI18n } from "@/contexts/I18nContext";

const LABELS = [
    "Frontend Developer",
    "Fullstack Developer",
    "Data Analyst",
    "React, TypeScript, Next.js, Tailwind CSS",
    "Node.js, Express, MongoDB, PostgreSQL",
    "Flow agent, RAG, LLM, AI",
];

export default function Hero() {
    const { t } = useI18n();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % LABELS.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section hero min-h-screen flex items-center">
            <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 fade-in">
                    <h1 className="mt-3 text-6xl md:text-7xl font-bold leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {t("hero_title")} <span className="text-[var(--accent)]">Matías Zurita</span>
                    </h1>
                    <p className="mt-3 text-2xl md:text-3xl font-bold leading-tight text-[var(--muted)]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {t("hero_subtitle")}
                    </p>
                    <p className="mt-6 text-xl text-[var(--muted)] max-w-[60ch]">{t("hero_sub")}</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a className="px-5 py-3 rounded-[16px] bg-[var(--accent)] text-black font-medium shadow-soft inline-flex items-center gap-2 hover:border-2 hover:text-white hover:bg-black/10 hover:border-[var(--accent)] transition-all duration-300" href="mailto:matiaszurita1998@gmail.com">
                            <span>⚙️</span> {t("cta_hire")}
                        </a>
                        <a className="px-5 py-3 rounded-[16px] border border-[var(--border)] hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2" href="https://github.com/Turo1111" target="_blank" rel="noreferrer">
                            <span>◎</span> {t("cta_github")}
                        </a>
                    </div>
                </div>
                <div className="md:col-span-5">
                    <div className="card aspect-square w-full shadow-soft flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.7]" style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(255,138,0,0.2), transparent)" }} />
                        <span className="relative text-[var(--accent)] text-6xl">{`</>`}</span>
                        <p
                            key={LABELS[currentIndex]}
                            className="mt-8 text-center text-2xl font-bold fade-in"
                        >
                            {LABELS[currentIndex]}
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
