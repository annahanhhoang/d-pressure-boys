import { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/views/Services';
import { Reviews } from '@/app/views/Reviews';
import { About } from '@/app/views/About';
import { Footer } from '@/app/components/Footer';

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = getCookie('theme');
    if (saved) return saved === 'dark';
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    setCookie('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div className="min-h-screen transition-colors duration-300">
      <Navbar dark={dark} onToggleTheme={() => setDark(d => !d)} />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <About />
      </main>
      <Footer />
    </div>
  );
}
