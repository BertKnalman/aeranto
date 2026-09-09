import { Link, useSearchParams } from 'react-router-dom';
import { getBooking } from '@/lib/booking';
import { CLASS_LABELS } from '@/config/company';
import { formatDateDE, formatEUR } from '@/lib/format';
import { Button } from '@/components/ui';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export default function PaymentSuccess() {
  const [params] = useSearchParams();
  const ref = params.get('ref') || '';
  const booking = ref ? getBooking(ref) : undefined;

  useDocumentHead({
    title: 'Buchung bestätigt',
    description: 'Ihre Zahlung war erfolgreich. Die Buchungsbestätigung wurde an Ihre E-Mail-Adresse gesendet.',
  });

  return (
    <div className="container-page max-w-2xl py-16 pt-28">
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-md sm:p-12">
        <svg className="mx-auto h-16 w-16 text-success-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
        <h1 className="mt-6 text-display-sm md:text-display-md">Zahlung erfolgreich</h1>
        <p className="mt-3 text-body text-neutral-500">
          Vielen Dank für Ihre Buchung. Die Bestätigung wurde an {booking?.email ? <strong className="text-navy-900">{booking.email}</strong> : 'Ihre E-Mail-Adresse'} gesendet.
        </p>

        {booking && (
          <div className="mt-8 rounded-lg bg-neutral-50 p-6 text-left" aria-label="Buchungsdetails">
            <p className="text-center">
              <span className="text-body-sm text-neutral-500">Ihre Buchungsreferenz</span>
              <br />
              <span className="font-mono text-title-lg font-bold tracking-wider text-navy-900">{booking.reference}</span>
            </p>
            <dl className="mt-6 space-y-2 border-t border-neutral-200 pt-6 text-body-sm">
              <div className="flex justify-between">
                <dt className="text-neutral-500">Strecke</dt>
                <dd className="font-medium text-navy-900">
                  {booking.fromCity} → {booking.toCity}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Flug</dt>
                <dd className="font-medium text-navy-900">
                  {booking.airline} <span className="font-mono text-mono-code">{booking.flightNumber}</span>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Datum</dt>
                <dd className="font-medium text-navy-900">
                  {formatDateDE(booking.departDate)} · {booking.departTime} Uhr
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Klasse</dt>
                <dd className="font-medium text-navy-900">{CLASS_LABELS[booking.travelClass]}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-neutral-500">Passagiere</dt>
                <dd className="font-medium text-navy-900">
                  {booking.passengers.map((p) => `${p.firstName} ${p.lastName}`).join(', ')}
                </dd>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-3">
                <dt className="font-semibold text-navy-900">Gesamt bezahlt</dt>
                <dd className="font-bold text-navy-900 tnum">{formatEUR(booking.totalPrice)}</dd>
              </div>
            </dl>
          </div>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="secondary" onClick={() => window.print()}>
            Bestätigung drucken
          </Button>
          <Link to="/meine-buchungen">
            <Button variant="primary" className="w-full sm:w-auto">
              Zu meinen Buchungen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
