"use client";

import { useEffect, useRef, useState, ComponentType } from "react";

/** Mapa de nombres a loaders: los imports se hacen dentro del Client Component */
const SECTION_LOADERS: Record<string, () => Promise<{ default: ComponentType }>> = {
  Hero: () => import("@/components/Hero"),
  About: () => import("@/components/About"),
  Skills: () => import("@/components/Skills"),
  MainSkills: () => import("@/components/MainSkills"),
  Portfolio: () => import("@/components/Portfolio"),
  Experience: () => import("@/components/Experience"),
  Contact: () => import("@/components/Contact"),
  Footer: () => import("@/components/Footer"),
};

interface LazySectionProps {
  /** Nombre del componente a cargar (debe existir en SECTION_LOADERS) */
  component: keyof typeof SECTION_LOADERS;
  /** Altura mínima del placeholder para evitar saltos de layout (ej: "400px") */
  minHeight?: string;
  /** Componente o elemento mostrado mientras no es visible o está cargando */
  fallback?: React.ReactNode;
  /** Porcentaje del elemento que debe ser visible para disparar la carga (0-1). Por defecto 0.1 */
  threshold?: number;
  /** Margen del viewport en px para cargar un poco antes de que sea visible */
  rootMargin?: string;
}

export default function LazySection({
  component,
  minHeight = "200px",
  fallback = null,
  threshold = 0.1,
  rootMargin = "50px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [LazyComponent, setLazyComponent] = useState<ComponentType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const loader = SECTION_LOADERS[component];

  useEffect(() => {
    if (!isVisible || !loader) return;

    let cancelled = false;
    loader().then((mod) => {
      if (!cancelled) setLazyComponent(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [isVisible, component]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const placeholder = (
    <div style={{ minHeight }} aria-hidden="true" />
  );

  if (!isVisible) {
    return <div ref={containerRef}>{placeholder}</div>;
  }

  if (!LazyComponent) {
    return (
      <div ref={containerRef}>
        <div style={{ minHeight }} className="flex items-center justify-center">
          {fallback}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <LazyComponent />
    </div>
  );
}
