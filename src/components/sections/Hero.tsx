import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n-context';
import { COMPANY_INFO } from '../../lib/company-data';

export function Hero() {
  const { locale, t } = useI18n();

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image - 根据语言切换 */}
      <div className="absolute inset-0">
        <img 
          src={locale === 'zh' ? '/hero-bg-cn.png' : '/hero-bg-en.png'}
          alt="Happy family home"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm text-yellow-200">
              {locale === 'zh' ? '奥克兰华人贷款专家' : 'Auckland Mortgage Specialists'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {COMPANY_INFO.stats.experience}
              </div>
              <div className="text-sm text-gray-400">
                {locale === 'zh' ? '年经验' : 'Years'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {COMPANY_INFO.stats.clientsServed}
              </div>
              <div className="text-sm text-gray-400">
                {locale === 'zh' ? '服务家庭' : 'Families'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                ${COMPANY_INFO.stats.volumeH1_2025}
              </div>
              <div className="text-sm text-gray-400">
                {locale === 'zh' ? '2025上半年成交' : '2025 H1 Volume'}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 shadow-lg shadow-yellow-500/50"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('cta.call')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/70 text-white bg-white/5 hover:bg-white/15 hover:border-white backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('cta.wechat')}
            </Button>
            <Button 
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-yellow-400"
            >
              {t('hero.cta.secondary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
