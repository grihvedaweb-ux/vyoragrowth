import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [loc.pathname]);

  return (
    <div className="relative min-h-screen bg-ink-950 text-cream-50 overflow-x-clip">
      <Navbar />
      <main key={loc.pathname} className="relative z-10 page-enter">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
