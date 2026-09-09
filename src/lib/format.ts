/**
 * Zentrale Format-Helfer: Währung (EUR, de-DE), Datum (de-DE), Buchungsreferenzen.
 */

const eurFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

export function formatEUR(amount: number): string {
  return eurFormatter.format(amount);
}

const dateFormatter = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDateDE(isoDate: string): string {
  const d = new Date(isoDate + (isoDate.length === 10 ? 'T12:00:00' : ''));
  return dateFormatter.format(d);
}

const shortDateFormatter = new Intl.DateTimeFormat('de-DE', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
});

export function formatDateShortDE(isoDate: string): string {
  const d = new Date(isoDate + (isoDate.length === 10 ? 'T12:00:00' : ''));
  return shortDateFormatter.format(d);
}

/** Heutiges Datum als ISO (YYYY-MM-DD) für <input type="date"> */
export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Datum + n Tage als ISO */
export function addDaysISO(isoDate: string, days: number): string {
  const d = new Date(isoDate + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Buchungsreferenz im Stil „AER-4K9M2X" (ohne leicht verwechselbare Zeichen).
 */
export function generateBookingReference(): string {
  const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `AER-${code}`;
}
