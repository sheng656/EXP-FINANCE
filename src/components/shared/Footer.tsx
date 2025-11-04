import { Phone, Mail, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import { useI18n } from '../../lib/i18n-context';
import { COMPLIANCE } from '../../lib/compliance-config';
import { COMPANY_INFO } from '../../lib/company-data';
import logoEnDark from 'figma:asset/089c4be095df59bbcd6336db2f3a396e2ab56ba2.png';
import logoCnLight from 'figma:asset/fc1a1fa97a6996b5bd2f20ffe982f91816b443f2.png';

export function Footer() {
  const { locale, t } = useI18n();
  const currentLogo = locale === 'en' ? logoEnDark : logoCnLight;

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'team', href: '#team' },
    { key: 'services', href: '#services' },
    { key: 'blog', href: '#blog' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <img 
              src={currentLogo} 
              alt="EXP Finance" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              {locale === 'zh' 
                ? '专业、真诚，帮你省钱、赚钱、安心买房' 
                : 'Professional, sincere mortgage advisory'}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{COMPANY_INFO.contact.address[locale]}</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t('footer.quickLinks')}</h4>
            <nav className="space-y-2">
              {quickLinks.map(link => (
                <a 
                  key={link.key}
                  href={link.href} 
                  className="block text-gray-400 hover:text-yellow-400 transition text-sm"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Legal & Compliance */}
          <div>
            <h4 className="mb-4">{t('footer.legal')}</h4>
            <nav className="space-y-2">
              {COMPLIANCE.legalPages
                .sort((a, b) => a.priority - b.priority)
                .map(page => (
                  <a 
                    key={page.key}
                    href={`#legal/${page.key}`}
                    className="block text-gray-400 hover:text-yellow-400 transition text-sm"
                  >
                    {page.label[locale]}
                  </a>
                ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a 
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition text-sm"
              >
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.contact.phone}
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition text-sm"
              >
                <Mail className="w-4 h-4" />
                {COMPANY_INFO.contact.email}
              </a>
              <button 
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {t('cta.wechat')}
              </button>
            </div>
          </div>
        </div>
        
        {/* Compliance Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            {/* FSP License */}
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="w-5 h-5 text-yellow-400" />
              <span>
                FSP: {COMPLIANCE.fsp.number} | {COMPLIANCE.fsp.registrar}
              </span>
            </div>
            
            {/* Disclaimer */}
            <div className="text-sm text-gray-400 italic max-w-2xl">
              {COMPLIANCE.disclaimers.notAdvice[locale]}
            </div>
          </div>
        </div>

        {/* Data Methodology */}
        <div id="data-notes" className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="mb-4 text-center">{t('dataNotes.title')}</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <span className="text-yellow-400">* </span>
              {t('dataNotes.clientsServed')}
            </div>
            <div>
              <span className="text-yellow-400">* </span>
              {t('dataNotes.satisfaction')}
            </div>
            <div>
              <span className="text-yellow-400">* </span>
              {t('dataNotes.volume')}
            </div>
            <div>
              <span className="text-yellow-400">* </span>
              {t('dataNotes.savings')}
            </div>
          </div>
          <p className="text-xs text-gray-500 italic text-center mt-6">
            {t('dataNotes.disclaimer')}
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {COMPLIANCE.fsp.holder[locale]}. {t('footer.copyright')}.
        </div>
      </div>
    </footer>
  );
}
