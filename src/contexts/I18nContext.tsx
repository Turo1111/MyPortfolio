"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { dict, type Lang } from "@/i18n/dict";

type I18nContextType = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
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


