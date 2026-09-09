import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'header' | 'footer' | 'icon';
  className?: string;
  /** Nur bei Variante header/footer: als Link zur Startseite */
  linked?: boolean;
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#0B1F3F" />
      {/* Stilisiertes „A" als aufsteigendes Flugzeug */}
      <path d="M16 47 L32 15 L48 47 L39.5 47 L32 28.5 L24.5 47 Z" fill="#D9A03D" />
      {/* Querbalken als Horizont/Contrail in Himmelblau */}
      <path d="M23 40 H41" stroke="#7FB3F0" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Aeranto-Logo: navy Rounded Square + goldenes „A" (aufsteigendes Flugzeug) + Wordmark.
 * header = dunkle Schrift (für helle Navbar), footer = helle Schrift, icon = nur Mark.
 */
export default function Logo({ variant = 'header', className = '', linked = true }: LogoProps) {
  const mark = <LogoMark className={variant === 'icon' ? 'h-8 w-8' : 'h-7 w-7'} />;

  if (variant === 'icon') {
    return <span className={className}>{mark}</span>;
  }

  const wordmark = (
    <span
      className={`font-display text-title-md font-semibold tracking-tight ${
        variant === 'footer' ? 'text-white' : 'text-navy-900'
      }`}
    >
      Aer<span className="text-gold-500">anto</span>
    </span>
  );

  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      {wordmark}
    </span>
  );

  if (!linked) return content;
  return (
    <Link to="/" aria-label="Aeranto – Zur Startseite" className="inline-flex rounded-sm">
      {content}
    </Link>
  );
}

export { LogoMark };
