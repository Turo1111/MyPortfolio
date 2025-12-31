"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import {
    dict,
    navDict,
    heroDict,
    aboutDict,
    skillsDict,
    portfolioDict,
    experienceDict,
    contactDict,
    footerDict,
    type Lang
} from "@/i18n/dict";

type I18nContextType = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
    nav: Record<string, string>;
    hero: Record<string, string>;
    about: Record<string, string>;
    skills: Record<string, string>;
    portfolio: Record<string, string>;
    experience: Record<string, string>;
    contact: Record<string, string>;
    footer: Record<string, string>;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("es");

    useEffect(() => {
        const saved = (localStorage.getItem("lang") as Lang) || "es";
        setLangState(saved);
    }, []);

    function setLang(l: Lang) {
        setLangState(l);
        localStorage.setItem("lang", l);
    }

    const value = useMemo<I18nContextType>(
        () => ({
            lang,
            setLang,
            t: (key: string) => dict[lang][key] ?? key,
            nav: navDict[lang],
            hero: heroDict[lang],
            about: aboutDict[lang],
            skills: skillsDict[lang],
            portfolio: portfolioDict[lang],
            experience: experienceDict[lang],
            contact: contactDict[lang],
            footer: footerDict[lang],
        }),
        [lang]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
}


