import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import BackgroundMotion from './BackgroundMotion';
import VideoBackground from './VideoBackground';

const PAGE_BACKGROUND_VIDEO_URL = 'https://www.youtube-nocookie.com/embed/vbzBAyHB6N8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&playlist=vbzBAyHB6N8&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&showinfo=0&autohide=1';

export default function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const showPageVideo = loc.pathname !== '/';
  useEffect(() => { window.scrollTo({ top: 0 }); }, [loc.pathname]);

  return (
    <div className="relative min-h-screen bg-ink-950 text-cream-50 noise overflow-x-clip">
      <BackgroundMotion />
      {showPageVideo && <VideoBackground src={PAGE_BACKGROUND_VIDEO_URL} />}
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
