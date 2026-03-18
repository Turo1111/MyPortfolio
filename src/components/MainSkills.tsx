"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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
  IconCheck,
  IconPython,
  IconJava,
  IconSpring,
  IconElectron,
  IconML,
} from "@/components/icons";

type Tier = "core" | "secondary";
type BubbleStyle = React.CSSProperties & {
  "--dx": string;
  "--dy": string;
};

type BubbleItem = {
  id: string;
  label: string;
  icon?: React.ComponentType;
  tier: Tier;
  size: number; // px (diámetro)
};

type LayoutPoint = {
  x: number; // centro
  y: number; // centro
  driftX: number;
  driftY: number;
  dur: number;
  delay: number;
};

function xmur3(str: string) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export default function Skills() {
  const { t } = useI18n();

  // ✅ Toggle rápido
  const showLabels = true; // ponelo en false si querés solo círculos (como tu imagen)

  const softSkills = useMemo(
    () => [t("soft_skill_1"), t("soft_skill_2"), t("soft_skill_3"), t("soft_skill_4"), t("soft_skill_5")],
    [t]
  );

  const items: BubbleItem[] = useMemo(() => {
    // Core (centro)
    const core: BubbleItem[] = [
      { id: "react", label: "ReactJS", icon: IconReact, tier: "core", size: 152 },
      { id: "next", label: "Next.js", icon: IconNext, tier: "core", size: 146 },
      { id: "ts", label: "TypeScript", icon: IconTS, tier: "core", size: 140 },
      { id: "node", label: "Node.js", icon: IconNode, tier: "core", size: 138 },
      { id: "mongo", label: "MongoDB", icon: IconMongo, tier: "core", size: 132 },
    ];

    // Secondary (alrededor)
    const secondary: BubbleItem[] = [
      { id: "html", label: "HTML5", icon: IconHTML, tier: "secondary", size: 78 },
      { id: "css", label: "CSS3", icon: IconCSS, tier: "secondary", size: 74 },
      { id: "js", label: "JavaScript", icon: IconTS, tier: "secondary", size: 84 },
      { id: "rn", label: "React Native", icon: IconRN, tier: "secondary", size: 84 },
      { id: "redux", label: "Redux", icon: IconRedux, tier: "secondary", size: 70 },
      { id: "styled", label: "Styled-Components", icon: IconStyled, tier: "secondary", size: 86 },
      { id: "tailwind", label: "TailwindCSS", icon: IconTailwind, tier: "secondary", size: 80 },
      { id: "sass", label: "SASS", icon: IconSass, tier: "secondary", size: 66 },
      { id: "less", label: "LESS", icon: IconLess, tier: "secondary", size: 64 },

      { id: "express", label: "Express.js", icon: IconExpress, tier: "secondary", size: 74 },
      { id: "socket", label: "Socket.io", icon: IconSocket, tier: "secondary", size: 70 },
      { id: "spring", label: "Spring Boot", icon: IconSpring, tier: "secondary", size: 78 },
      { id: "java", label: "Java", icon: IconJava, tier: "secondary", size: 64 },

      { id: "sql", label: "SQL (MySQL)", icon: IconSQL, tier: "secondary", size: 78 },

      { id: "git", label: "Git/GitHub", icon: IconGit, tier: "secondary", size: 74 },
      { id: "figma", label: "Figma", icon: IconFigma, tier: "secondary", size: 64 },
      { id: "jira", label: "Jira", icon: IconJira, tier: "secondary", size: 62 },
      { id: "trello", label: "Trello", icon: IconTrello, tier: "secondary", size: 64 },
      { id: "electron", label: "Electron", icon: IconElectron, tier: "secondary", size: 70 },

      { id: "python", label: "Python", icon: IconPython, tier: "secondary", size: 66 },
      { id: "langchain", label: "LangChain", icon: IconML, tier: "secondary", size: 74 },
      { id: "autogen", label: "Autogen", icon: IconML, tier: "secondary", size: 68 },
      { id: "mlflow", label: "MLflow", icon: IconML, tier: "secondary", size: 64 },
      { id: "dagster", label: "Dagster", icon: IconML, tier: "secondary", size: 64 },

      // Soft skills como burbujas también (más chicas)
      ...softSkills.map((s, i) => ({
        id: `soft-${i}`,
        label: s,
        icon: IconCheck,
        tier: "secondary" as const,
        size: 58,
      })),
    ];

    return [...core, ...secondary];
  }, [softSkills]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [layout, setLayout] = useState<Record<string, LayoutPoint>>({});

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const compute = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const W = Math.max(1, rect.width);
        const H = Math.max(1, rect.height);

        const cx = W / 2;
        const cy = H / 2;

        const gap = 10; // separación mínima
        const pad = 8; // margen interno
        const minSide = Math.min(W, H);

        // Modelar nodos con posiciones
        const nodes = items.map((it) => {
          const r = it.size / 2;
          return {
            id: it.id,
            tier: it.tier,
            r,
            x: cx,
            y: cy,
            targetR: 0,
          };
        });

        const coreNodes = nodes.filter((n) => n.tier === "core");
        const secNodes = nodes.filter((n) => n.tier !== "core");

        // Inicial: core cerca del centro (pequeño anillo)
        const coreRing = minSide * 0.10;
        coreNodes.forEach((n, i) => {
          const a = (i * Math.PI * 2) / Math.max(coreNodes.length, 1);
          const rr = coreNodes.length > 1 ? coreRing : 0;
          n.x = cx + rr * Math.cos(a);
          n.y = cy + rr * Math.sin(a);
          n.targetR = rr;
        });

        // Inicial: secundarios en espiral (golden angle)
        const golden = Math.PI * (3 - Math.sqrt(5));
        const startR = minSide * 0.24;
        const step = 16;

        secNodes.forEach((n, i) => {
          const a = i * golden;
          const rr = startR + Math.sqrt(i) * step;
          n.x = cx + rr * Math.cos(a);
          n.y = cy + rr * Math.sin(a);
          n.targetR = rr;
        });

        // Relajación para evitar solapes + pull suave al radio objetivo
        const iters = 220;
        for (let k = 0; k < iters; k++) {
          // colisiones
          for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
              const A = nodes[i];
              const B = nodes[j];
              const dx = B.x - A.x;
              const dy = B.y - A.y;
              const dist = Math.hypot(dx, dy) || 0.0001;

              const minDist = A.r + B.r + gap;
              if (dist < minDist) {
                const push = (minDist - dist) / 2;
                const nx = dx / dist;
                const ny = dy / dist;

                A.x -= nx * push;
                A.y -= ny * push;
                B.x += nx * push;
                B.y += ny * push;
              }
            }
          }

          // pull + clamp bounds
          for (const n of nodes) {
            const dx = n.x - cx;
            const dy = n.y - cy;
            const dist = Math.hypot(dx, dy) || 0.0001;

            const diff = dist - n.targetR;
            const kPull = n.tier === "core" ? 0.085 : 0.03;

            n.x -= (dx / dist) * diff * kPull;
            n.y -= (dy / dist) * diff * kPull;

            n.x = clamp(n.x, n.r + pad, W - n.r - pad);
            n.y = clamp(n.y, n.r + pad, H - n.r - pad);
          }
        }

        // Animaciones deterministas por id (para que no cambien en cada render)
        const nextLayout: Record<string, LayoutPoint> = {};
        for (const n of nodes) {
          const seedFn = xmur3(`bubble:${n.id}`);
          const rand = mulberry32(seedFn());

          const floatAmp = n.tier === "core" ? 10 : 14;
          const driftX = (rand() * 2 - 1) * floatAmp;
          const driftY = (rand() * 2 - 1) * floatAmp;
          const dur = 6 + rand() * 7; // 6..13s
          const delay = -rand() * 3; // -0..-3s

          nextLayout[n.id] = { x: n.x, y: n.y, driftX, driftY, dur, delay };
        }

        setLayout(nextLayout);
      });
    };

    compute();

    // ResizeObserver (más fiable que window.resize)
    const ro = new ResizeObserver(() => compute());
    ro.observe(el);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <section id="skills" className="section min-h-screen flex items-center">
      <div className="container">
        <h2 className="section-title text-center">{t("skills_title")}</h2>
        <p className="text-center text-[var(--muted)] text-sm">{t("skills_subtitle")}</p>

        {/* Bubble Cloud */}
        <div
          ref={containerRef}
          className="relative mt-10 mx-auto w-full max-w-6xl h-[520px] sm:h-[600px] lg:h-[640px] overflow-hidden"
          style={{ background: "white", borderRadius: 18 }}
          aria-label="Skills bubble cloud"
        >
          {/* Keyframes inline (así no dependés de globals) */}
          <style jsx>{`
            @keyframes drift {
              from {
                transform: translate3d(0, 0, 0);
              }
              to {
                transform: translate3d(var(--dx), var(--dy), 0);
              }
            }
          `}</style>

          {items.map((it) => {
            const p = layout[it.id];
            if (!p) return null;

            const left = p.x - it.size / 2;
            const top = p.y - it.size / 2;

            const isCore = it.tier === "core";
            const Icon = it.icon;
            const bubbleStyle: BubbleStyle = {
              left,
              top,
              width: it.size,
              height: it.size,
              "--dx": `${p.driftX.toFixed(2)}px`,
              "--dy": `${p.driftY.toFixed(2)}px`,
              animation: `drift ${p.dur.toFixed(2)}s ease-in-out ${p.delay.toFixed(2)}s infinite alternate`,
            };

            return (
              <div
                key={it.id}
                className="absolute rounded-full bg-black text-white grid place-items-center select-none"
                style={bubbleStyle}
              >
                {/* contenido */}
                <div className="flex flex-col items-center justify-center text-center px-2">
                  {Icon ? (
                    <div className="[&_*]:text-white [&_*]:fill-white">
                      <Icon />
                    </div>
                  ) : null}

                  {showLabels ? (
                    <span
                      className={`mt-1 font-semibold leading-tight ${isCore ? "text-[12px] sm:text-sm" : "text-[10px] sm:text-xs"
                        }`}
                      style={{
                        maxWidth: it.size - 12,
                      }}
                    >
                      {it.label}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}

          {/* fallback accesible (sr-only) */}
          <ul className="sr-only">
            {items.map((it) => (
              <li key={`sr-${it.id}`}>{it.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
