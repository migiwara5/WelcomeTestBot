import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onLanguageChange: (lang: 'en' | 'fr') => void;
  currentLang: 'en' | 'fr';
}

export const LanguageToggle = ({ onLanguageChange, currentLang }: LanguageToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        onClick={() => onLanguageChange(currentLang === 'en' ? 'fr' : 'en')}
        className="card-ocean border-primary/30 hover:border-primary/60 text-foreground hover:bg-primary/10 backdrop-blur-md transition-all duration-300 animate-pulse-glow"
      >
        <span className="font-medium">
          {currentLang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
        </span>
      </Button>
    </div>
  );
};