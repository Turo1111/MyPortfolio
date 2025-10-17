"use client";
import { useI18n } from "@/contexts/I18nContext";
import { IconMail, IconPhone, IconGitHub, IconLinkedIn } from "@/components/icons";

export default function Contact() {
    const { t } = useI18n();
    return (
        <section id="contact" className="section min-h-screen flex items-center">
            <div className="container">
                <h2 className="section-title text-center">{t("contact_title")}</h2>
                <p className="text-center text-[var(--muted)] text-sm">{t("contact_subtitle")}</p>
                <div className="mt-8 grid gap-4 max-w-3xl mx-auto">
                    <div className="flex items-start gap-3">
                        <span className="edu-icon" aria-hidden style={{ width: 36, height: 36 }}>{IconMail()}</span>
                        <div>
                            <p className="text-sm font-semibold">{t("contact_email_label")}</p>
                            <p className="text-sm text-[var(--muted)]">matiaszurita1998@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="edu-icon" aria-hidden style={{ width: 36, height: 36 }}>{IconPhone()}</span>
                        <div>
                            <p className="text-sm font-semibold">{t("contact_phone_label")}</p>
                            <p className="text-sm text-[var(--muted)]">+54 381 6946578</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="edu-icon" aria-hidden style={{ width: 36, height: 36 }}>{IconGitHub()}</span>
                        <div>
                            <p className="text-sm font-semibold">{t("contact_github_label")}</p>
                            <a className="text-sm text-[var(--muted)] hover:text-[var(--accent)] underline" href="https://github.com/Turo1111" target="_blank" rel="noreferrer">github.com/Turo1111</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="edu-icon" aria-hidden style={{ width: 36, height: 36 }}>{IconLinkedIn()}</span>
                        <div>
                            <p className="text-sm font-semibold">{t("contact_linkedin_label")}</p>
                            <a className="text-sm text-[var(--muted)] hover:text-[var(--accent)] underline" href="https://www.linkedin.com/in/jose-matias-zurita/" target="_blank" rel="noreferrer">linkedin.com/in/jose-matias-zurita</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

