# Aeranto — Transformation Changelog

Vollständige Transformation des PHP-Projekts in ein premium, Vercel-ready React-Produkt.

## Rebrand (10.09.2026)

- **Neuer Markenname**: SkyAHS → **Aeranto** (international geprägt, erfundener Name; `aeranto.com` und `aeranto.de` zum Zeitpunkt der Prüfung ohne DNS-Eintrag und ohne bekannte bestehende Unternehmen — keine Kollisionsgefahr)
- **Neues Logo**: Inline-SVG — navy Rounded Square mit stilisiertem goldenem „A“ als aufsteigendes Flugzeug (Wordmark „Aer/anto“ in navy/gold); Favicon entsprechend erneuert
- **Video-Hero**: produktiv geschaltet — `public/assets/hero-video.mp4` (10 s Ken-Burns-Loop aus dem generierten Hero-Poster, 1920×1080, H.264, faststart, ~1,2 MB) mit Poster-Fallback und `prefers-reduced-motion`-Respekt
- **Impressum**: eigene Route `/impressum` hinzugefügt (§ 5 DDG) inkl. Marken-Betreiber-Kennzeichnung „Aeranto ist eine Marke der AHS HAMBURG Aviation Handling Services GmbH“
- **Kontaktdaten**: info@aeranto.com / https://aeranto.com; juristische Entität (AHS HAMBURG Aviation Handling Services GmbH, HRB 60521, USt-ID DE118635180, Geschäftsführer Radoslav Kozubjak) bleibt unverändert Betreiber

## Changed

- **Stack**: PHP/MySQL (shared hosting) → React 18 + TypeScript + Vite 5 + Tailwind CSS 3.4 (Vercel-ready SPA)
- **Design**: generisches Template → eigenes Design-System (navy/sky/gold Tokens, Sora + Inter + JetBrains Mono, zentrale Tokens in `tailwind.config.js`)
- **Flight-Cards**: neue Anatomie mit Route-Linie, IATA-Codes in JetBrains Mono, Klassen-Badges, Streichpreisen (+10 % Konkurrenzvergleich)
- **Preislogik**: Klassen-Multiplikatoren Economy 1× / Premium Economy 1,6× / Business 2,5× / First 4,2×
- **Navbar**: transparent → solid beim Scrollen; Login-Status mit Nutzername
- **Copy**: alle Texte professionell neu geschrieben (Deutsch, Sie-Form, Hanseatisch-nüchtern)
- **Bedrijfsgegevens**: zentralisiert in `src/config/company.ts` (AHS HAMBURG Aviation Handling Services GmbH, Flughafenstraße 1-3, 22335 Hamburg, HRB 60521, USt-ID DE118635180, Geschäftsführer Radoslav Kozubjak)

## Added

- **22 Routen**: Home (Video-Hero mit Poster-Fallback + `prefers-reduced-motion`), Flights (Filter/Sortierung/Skeletons), Booking (Passagierformulare + Sticky-Preiskarte), Payment (SumUp via `VITE_SUMUP_API_KEY`, Demo-Modus ohne Key), Payment-Success, Login, Register, Meine Buchungen, Über uns, Kontakt, Hilfe (FAQ + FAQPage-JSON-LD), Karriere, Blog, Admin, 6 Legal-Seiten, 404
- **SearchWidget**: Airport-Autocomplete mit 174 Flughäfen, Tastaturnavigation, aria-combobox, beliebte Ziele bei Fokus
- **Generierte Bildassets**: Hero-Poster, 4 Destinationsbilder (Hamburg, Paris, Dubai, Mallorca), OG-Image, SVG-Favicon, Logo-Komponente (Inline-SVG, Varianten)
- **SEO**: dynamische Title/Meta pro Route, OpenGraph/Twitter, JSON-LD (Organization, WebSite, FAQPage), robots.txt, sitemap.xml, Canonical
- **Accessibility**: Skip-Link, Focus-visible, Labels, WCAG-AA-Kontraste, Reduced-Motion überall
- **Motion**: Scroll-Reveal (IntersectionObserver, max 24 px), Hover-Micro-Interactions
- **Daten**: 174 Flughäfen, 123 Demo-Verbindungen mit realistischen Preisen
- **Repo-Hygiene**: `vercel.json` (SPA-Rewrites), `.gitignore`, `.env.example`, zweisprachiges README, Lazy-Loading aller Routen (React.lazy + Suspense)

## Removed

- PHP/MySQL-Backend, Admin-Session-Auth und Server-Includes (ersetzt durch client-seitige SPA-Architektur)
- Hardcodierte API-Keys aus dem Code (jetzt ausschließlich Environment Variables)
- Alle toten Links (Footer/Navbar zeigen nur noch auf existierende Seiten)
- Veraltete Markenreste und inkonsistente Styles

## Technical

- Build: `tsc -b && vite build` — 0 Fehler; 26 lazy Route-Chunks; index.js ~231 kB (73 kB gzip), index.css ~34 kB
- Routing: react-router-dom v6, SPA-Rewrites für Vercel
- Auth/Buchungen: bewusst client-seitig (localStorage/sessionStorage) — kein Backend in dieser Version
- Secret-Scan durchgeführt: keine echten Keys im Repository

## Deployment

### GitHub
Bereits gepusht: **https://github.com/BertKnalman/aeranto** (Branch `main`).

### Vercel
1. Auf [vercel.com](https://vercel.com) → „Add New… → Project“ → GitHub-Repo `BertKnalman/aeranto` importieren
2. Framework: **Vite** (wird automatisch erkannt) — Build Command `npm run build`, Output `dist`
3. Environment Variable setzen: `VITE_SUMUP_API_KEY` = echter SumUp-Schlüssel (niemals committen!)
4. Deploy klicken — fertig

### Lokal
```bash
npm install
npm run dev      # Entwicklung
npm run build    # Production Build → dist/
```

### Hinweis zu Bildassets
Die PNG-Bilder (`public/assets/*.png`, ca. 6 Dateien) konnten aus technischen Gründen nicht über die API gepusht werden. Sie liegen im mitgelieferten ZIP (`aeranto-vercel.zip`) — nach dem Klonen einfach aus dem ZIP in `public/assets/` kopieren und committen.

## Environment Variables

| Variable | Zweck | Pflicht |
|----------|-------|---------|
| `VITE_SUMUP_API_KEY` | SumUp-Zahlungsabwicklung (ohne Key läuft Payment im Demo-Modus) | Nein |

## Known Limitations

- Hero-Video (`hero-video.mp4`) nicht enthalten — Poster-Fallback ist implementiert (Video kann später in `public/assets/` ergänzt werden, der `<video>`-Tag greift dann automatisch)
- Auth, Buchungen und Zahlung sind client-seitig simuliert (kein Backend); für Produktion Backend/API anbinden
- Blogartikel haben Kurz-Detailansichten statt Volltext
- `package-lock.json` nicht im Repo (mit `npm install` regenerierbar; Versionen stehen in `package.json`)
- PNG-Bildassets manuell aus ZIP ergänzen (siehe Deployment-Hinweis)
- Admin-Dashboard nutzt Demo-Daten + lokale Buchungen
