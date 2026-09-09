/**
 * Aeranto — Unternehmensdaten (zentrale Quelle für Footer, Legal, JSON-LD)
 */
export const company = {
  brand: 'Aeranto',
  legalName: 'AHS HAMBURG Aviation Handling Services GmbH',
  tagline: 'Ihr Flug. Präzise geplant.',
  address: {
    street: 'Flughafenstraße 1-3',
    zip: '22335',
    city: 'Hamburg',
    country: 'Deutschland',
    countryCode: 'DE',
  },
  phone: '+49 40 123 4567',
  phoneDisplay: '+49 40 123 4567',
  email: 'info@aeranto.com',
  supportEmail: 'info@aeranto.com',
  website: 'https://aeranto.com',
  commercialRegister: 'HRB 60521',
  registerCourt: 'Amtsgericht Hamburg',
  vatId: 'DE118635180',
  managingDirector: 'Radoslav Kozubjak',
} as const;

export const CLASS_MULTIPLIERS = {
  economy: 1,
  premium: 1.6,
  business: 2.5,
  first: 4.2,
} as const;

export type TravelClass = keyof typeof CLASS_MULTIPLIERS;

export const CLASS_LABELS: Record<TravelClass, string> = {
  economy: 'Economy',
  premium: 'Premium Economy',
  business: 'Business',
  first: 'First Class',
};
