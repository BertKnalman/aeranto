import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { registerUser } from '@/lib/booking';
import { Button, Input } from '@/components/ui';
import { AuthAside } from '@/pages/Login';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useDocumentHead({
    title: 'Registrieren',
    description: 'Kostenloses Aeranto-Konto erstellen und Buchungen verwalten.',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) {
      setError('Das Passwort muss mindestens 8 Zeichen lang sein.');
      return;
    }
    if (password !== password2) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }
    setLoading(true);
    const result = registerUser(name.trim(), email, password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error || 'Registrierung fehlgeschlagen.');
      return;
    }
    navigate('/meine-buchungen');
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center px-4 py-24 sm:px-6">
        <div className="w-full max-w-[440px]">
          <div className="lg:hidden">
            <Logo variant="header" />
          </div>
          <h1 className="mt-8 text-display-sm lg:mt-0">Konto erstellen.</h1>
          <p className="mt-2 text-body text-neutral-500">Verwalten Sie Ihre Buchungen und reisen Sie schneller.</p>

          {error && (
            <p role="alert" className="mt-6 rounded-md bg-error-50 px-4 py-3 text-body-sm font-medium text-error-500">
              {error}
            </p>
          )}

          <form onSubmit={submit} className="mt-8 space-y-5">
            <Input
              label="Vollständiger Name"
              required
              autoComplete="name"
              placeholder="z. B. Erika Mustermann"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="E-Mail-Adresse"
              type="email"
              required
              autoComplete="email"
              placeholder="z. B. max@example.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Passwort"
              type="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Passwort wiederholen"
              type="password"
              required
              autoComplete="new-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <p className="text-caption text-neutral-400">
              Mit der Registrierung akzeptieren Sie unsere <Link to="/agb" className="underline">AGB</Link> und{' '}
              <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link>.
            </p>
            <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full">
              Registrieren
            </Button>
          </form>

          <p className="mt-6 text-body-sm text-neutral-500">
            Bereits registriert?{' '}
            <Link to="/login" className="font-semibold text-navy-600 underline underline-offset-4">
              Anmelden
            </Link>
          </p>
        </div>
      </div>
      <AuthAside
        quote="Ihr Flug. Präzise geplant."
        author="Aeranto — die Flugbuchung aus Hamburg"
      />
    </div>
  );
}
