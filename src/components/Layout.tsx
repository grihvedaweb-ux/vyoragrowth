import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import CursorGlow from './CursorGlow';

export default function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [loc.pathname]);

  return (
    <div className="min-h-screen bg-ink-950 text-cream-50 noise overflow-x-clip">
      <CursorGlow />
      <Navbar />
      <main key={loc.pathname} className="page-enter">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
