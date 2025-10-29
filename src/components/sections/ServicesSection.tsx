import { Home, TrendingUp, RefreshCw, Hammer, Briefcase, Building2, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n-context';
import { SERVICES } from '../../lib/company-data';

const iconMap = {
  Home,
  TrendingUp,
  RefreshCw,
  Hammer,
  Briefcase,
  Building2
};

export function ServicesSection() {
  const { locale, t } = useI18n();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all hover:-translate-y-1 border-gray-200"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{service.title[locale]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {service.description[locale]}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features[locale].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="w-full text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                  >
                    {t('cta.learnMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12">
            <h3 className="text-white mb-4">
              {locale === 'zh' 
                ? '不确定选择哪种服务？' 
                : 'Not sure which service is right for you?'}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {locale === 'zh'
                ? '联系我们的专业顾问，我们会根据您的具体情况，为您量身定制最优贷款方案'
                : 'Contact our expert advisors for a personalized mortgage solution tailored to your needs'}
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900"
            >
              {t('cta.contact')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
