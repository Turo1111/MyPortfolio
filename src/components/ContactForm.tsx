"use client";
export default function ContactForm() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    return (
        <form className="card p-5 grid gap-3" onSubmit={handleSubmit} aria-label="Formulario de contacto">
            <label className="grid gap-1">
                <span className="text-sm">Nombre</span>
                <input className="px-3 py-2 rounded-[12px] bg-black/30 border border-[var(--border)]" placeholder="Tu nombre" required />
            </label>
            <label className="grid gap-1">
                <span className="text-sm">Email</span>
                <input type="email" className="px-3 py-2 rounded-[12px] bg-black/30 border border-[var(--border)]" placeholder="tucorreo@email.com" required />
            </label>
            <label className="grid gap-1">
                <span className="text-sm">Mensaje</span>
                <textarea className="px-3 py-2 rounded-[12px] bg-black/30 border border-[var(--border)] min-h-32" placeholder="Cuéntame sobre tu proyecto" required />
            </label>
            <button className="mt-2 px-4 py-2 rounded-[14px] bg-[var(--accent)] text-black font-medium shadow-soft" type="submit">Enviar</button>
            <p className="text-xs text-[var(--muted)]">Incluiremos reCAPTCHA más adelante.</p>
        </form>
    );
}


