"use client";
import { useI18n } from "@/contexts/I18nContext";

export default function Footer() {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--muted)]">
                <div>
                    © {currentYear} José Matías Zurita — {t("footer_rights")}
                </div>
                <div className="flex gap-3">
                    <a className="underline" href="#">{t("footer_download_cv")}</a>
                    <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/Turo1111">
                        {t("footer_github")}
                    </a>
                </div>
            </div>
        </footer>
    );
}

