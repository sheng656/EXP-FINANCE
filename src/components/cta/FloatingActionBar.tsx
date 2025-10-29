import { useState } from 'react';
import { Phone, MessageCircle, Mail, X, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n-context';
import { COMPANY_INFO } from '../../lib/company-data';

export function FloatingActionBar() {
  const { locale, t } = useI18n();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-in slide-in-from-bottom-2">
          
          {/* WeChat */}
          <Button
            onClick={() => {
              setIsExpanded(false);
              // Open WeChat modal
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center gap-2 h-12"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('cta.wechat')}</span>
          </Button>

          {/* Phone */}
          <Button
            asChild
            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center gap-2 h-12"
          >
            <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}>
              <Phone className="w-5 h-5" />
              <span>{t('cta.call')}</span>
            </a>
          </Button>

          {/* Email */}
          <Button
            onClick={() => {
              setIsExpanded(false);
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="w-full bg-white shadow-lg flex items-center justify-center gap-2 h-12 border-2"
          >
            <Mail className="w-5 h-5" />
            <span>{t('cta.email')}</span>
          </Button>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="lg"
        className={`w-14 h-14 rounded-full shadow-2xl transition-all ${
          isExpanded 
            ? 'bg-gray-800 hover:bg-gray-900' 
            : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
        }`}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Plus className="w-6 h-6 text-gray-900" />
        )}
      </Button>
    </div>
  );
}
