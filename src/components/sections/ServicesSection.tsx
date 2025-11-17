import { Home, TrendingUp, RefreshCw, Hammer, Briefcase, Building2, ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? SERVICES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / SERVICES.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

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

        {/* Services Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                    asChild
                  >
                    <a href="#contact">
                      {t('cta.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services Carousel - Mobile */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-8"
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              
              return (
                <Card 
                  key={service.id} 
                  className="min-w-[85vw] snap-center border-gray-200 shadow-lg"
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
                      asChild
                    >
                      <a href="#contact">
                        {t('cta.learnMore')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {SERVICES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-yellow-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
              asChild
            >
              <a href="#contact">
                {t('cta.contact')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
