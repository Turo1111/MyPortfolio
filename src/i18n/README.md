# Sistema de Internacionalización (i18n)

## 📚 Estructura

El diccionario está organizado por secciones para mejor mantenibilidad:

- **navDict** - Navegación
- **heroDict** - Sección Hero
- **aboutDict** - Sección Sobre Mí + Educación
- **skillsDict** - Sección Habilidades
- **portfolioDict** - Sección Portfolio/Proyectos
- **experienceDict** - Sección Experiencia
- **contactDict** - Sección Contacto
- **footerDict** - Footer

## 🎯 Uso

### Método 1: Usando `t()` (tradicional)

```tsx
import { useI18n } from "@/contexts/I18nContext";

export default function MyComponent() {
    const { t } = useI18n();
    
    return (
        <div>
            <h1>{t("portfolio_title")}</h1>
            <p>{t("portfolio_subtitle")}</p>
        </div>
    );
}
```

### Método 2: Usando diccionarios por sección (recomendado)

```tsx
import { useI18n } from "@/contexts/I18nContext";

export default function Portfolio() {
    const { portfolio } = useI18n();
    
    return (
        <div>
            <h1>{portfolio.title}</h1>
            <p>{portfolio.subtitle}</p>
            <button>{portfolio.view}</button>
        </div>
    );
}
```

### Método 3: Desestructuración múltiple

```tsx
import { useI18n } from "@/contexts/I18nContext";

export default function Layout() {
    const { nav, hero, footer } = useI18n();
    
    return (
        <>
            <nav>
                <a href="#about">{nav.about}</a>
                <a href="#skills">{nav.skills}</a>
                <a href="#portfolio">{nav.portfolio}</a>
            </nav>
            
            <section>
                <h1>{hero.title}</h1>
                <p>{hero.sub}</p>
            </section>
            
            <footer>
                <p>{footer.rights}</p>
            </footer>
        </>
    );
}
```

## ✨ Ventajas

1. **Mejor organización**: Cada sección tiene su propio diccionario
2. **Autocompletado**: TypeScript sugiere las claves disponibles
3. **Fácil de mantener**: Agregar traducciones es más intuitivo
4. **Retrocompatible**: `t()` sigue funcionando igual
5. **Code splitting**: Solo importas lo que necesitas

## 🆕 Agregar nuevas traducciones

### Para agregar una nueva clave a una sección existente:

```typescript
// En src/i18n/dict.ts
export const portfolioDict: Record<Lang, Record<string, string>> = {
    es: {
        title: "Proyectos Destacados",
        // ... otras claves
        project4_description: "Nueva descripción aquí", // ✅ Agregar aquí
    },
    en: {
        title: "Featured Projects",
        // ... otras claves
        project4_description: "New description here", // ✅ Agregar aquí
    },
};

// Luego actualizar el dict completo (scroll abajo en el archivo)
export const dict: Record<Lang, Record<string, string>> = {
    es: {
        // ... otras claves
        project4_description: portfolioDict.es.project4_description, // ✅ Agregar aquí
    },
    en: {
        // ... otras claves
        project4_description: portfolioDict.en.project4_description, // ✅ Agregar aquí
    },
};
```

### Para agregar una nueva sección completa:

1. Crear el diccionario de sección en `dict.ts`
2. Exportarlo
3. Importarlo en `I18nContext.tsx`
4. Agregarlo al tipo `I18nContextType`
5. Agregarlo al objeto `value` en el provider

## 🔍 Ejemplo de migración

**Antes:**
```tsx
const { t } = useI18n();
<h1>{t("portfolio_title")}</h1>
<p>{t("portfolio_subtitle")}</p>
<button>{t("project_view")}</button>
```

**Después:**
```tsx
const { portfolio } = useI18n();
<h1>{portfolio.title}</h1>
<p>{portfolio.subtitle}</p>
<button>{portfolio.view}</button>
```

## 📝 Notas

- Los diccionarios por sección usan claves más cortas (sin prefijos)
- El diccionario completo `dict` mantiene las claves con prefijos para retrocompatibilidad
- Ambos métodos funcionan perfectamente y pueden coexistir

