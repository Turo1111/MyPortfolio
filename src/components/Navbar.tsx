"use client";
import { useEffect, useState } from "react";
import { useI18n } from "@/contexts/I18nContext";

const sections = [
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experiencia" },
    { id: "contact", label: "Contacto" },
];

export default function Navbar() {
    const { lang, setLang, t } = useI18n();
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handler = () => {
            let current = "";
            for (const s of sections) {
                const el = document.getElementById(s.id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = s.id;
                    break;
                }
            }
            setActive(current);
        };
        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] border-b border-[var(--border)]">
            <div className="container flex items-center justify-between h-14">
                <a href="#" className="font-semibold tracking-wide">Matias Zurita</a>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={
                                "hover:text-[var(--accent)] transition-colors" +
                                (active === s.id ? " text-[var(--accent)]" : " text-[var(--muted)]")
                            }
                        >
                            {t(`nav_${s.id}`)}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setLang(lang === "es" ? "en" : "es")}
                        aria-label="Cambiar idioma"
                        className="px-3 py-1 rounded-[12px] border border-[var(--border)] hover:bg-white/5"
                    >
                        {lang.toUpperCase()}
                    </button>
                    <a
                        href="/cv/Jose_Matias_Zurita_CV.pdf"
                        className="hidden sm:inline-flex px-3 py-1 rounded-[12px] bg-[var(--accent)] text-black font-medium"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
}


