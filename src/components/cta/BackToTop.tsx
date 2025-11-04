import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n-context';

export function BackToTop() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="lg"
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full shadow-lg bg-gray-800 hover:bg-gray-900 text-white p-0"
      aria-label={t('cta.backToTop')}
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}
