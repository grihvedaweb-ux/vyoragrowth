import { Sun, Moon, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTheme, Theme } from '../lib/theme';

const ICONS: Record<Theme, LucideIcon> = {
  dark: Moon,
  light: Sun,
  sand: Palette,
};

const LABELS: Record<Theme, string> = {
  dark: 'Dark',
  light: 'Light',
  sand: 'Sand',
};

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, cycle } = useTheme();
  const Icon = ICONS[theme];
  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme (current: ${LABELS[theme]})`}
      className={`group relative inline-flex items-center gap-2 rounded-full border border-cream-50/15 hover:border-gold-400 transition-colors ${compact ? 'w-10 h-10 justify-center' : 'px-3 h-10 text-sm'}`}
    >
      <Icon className="w-4 h-4 text-cream-50/80 group-hover:text-gold-400 transition" />
      {!compact && <span className="text-cream-50/80 group-hover:text-cream-50">{LABELS[theme]}</span>}
    </button>
  );
}
