import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n-context';
import logoEnLight from 'figma:asset/516127ab8114ccc3ac2e9ee9e287d6e0b0f40818.png';
import logoEnDark from 'figma:asset/089c4be095df59bbcd6336db2f3a396e2ab56ba2.png';
import logoCn from 'figma:asset/fc1a1fa97a6996b5bd2f20ffe982f91816b443f2.png';

export function Header() {
  const { locale, setLocale, t } = useI18n();
  const currentLogo = locale === 'en' ? logoEnLight : logoCn;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'team', href: '#team' },
    { key: 'services', href: '#services' },
    { key: 'blog', href: '#blog' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 gap-4">
            <div className="flex items-center gap-6">
              <a href="tel:0223145326" className="flex items-center gap-2 hover:text-yellow-400 transition text-base font-medium">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">022 314 5326</span>
              </a>
              <a href="mailto:hello@expfin.co.nz" className="flex items-center gap-2 hover:text-yellow-400 transition text-base font-medium">
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">hello@expfin.co.nz</span>
              </a>
            </div>
            
            <button
              onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-2 hover:text-yellow-400 transition text-base font-medium"
            >
              <Globe className="w-5 h-5" />
              {locale === 'zh' ? 'English' : '中文'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src={currentLogo} 
              alt="EXP Finance" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="hover:text-yellow-600 transition"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('cta.wechat')}
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
            >
              {t('cta.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="py-2 hover:text-yellow-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button 
                  variant="outline"
                  className="w-full border-yellow-600 text-yellow-600"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('cta.wechat')}
                </Button>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600">
                  {t('cta.contact')}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
