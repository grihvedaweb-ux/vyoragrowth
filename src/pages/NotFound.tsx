import { Link } from 'react-router-dom';
import Aurora from '../components/Aurora';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Aurora />
      <div className="relative z-10 text-center px-6">
        <div className="font-display text-[22vw] md:text-[12vw] leading-none text-gradient">404</div>
        <p className="text-cream-50/65 text-lg mt-4">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn-primary mt-10">Return home</Link>
      </div>
    </div>
  );
}
