import { Phone, Mail, MessageCircle, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useI18n } from '../../lib/i18n-context';
import { TEAM_MEMBERS } from '../../lib/company-data';

export function TeamSection() {
  const { locale, t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? TEAM_MEMBERS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === TEAM_MEMBERS.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / TEAM_MEMBERS.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const TeamCard = ({ member }: { member: typeof TEAM_MEMBERS[0] }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        
        {/* Photo */}
        <div className="relative h-80 bg-gray-200 overflow-hidden">
          <img 
            src={member.photo}
            alt={`${member.name[locale]} - ${member.role[locale]}${member.fspNumber ? ` FSP${member.fspNumber} 持牌顾问` : ''} - EXP Finance团队成员`}
            className="w-full h-full object-cover"
          />
          {/* FSP Badge - Only for licensed advisors */}
          {member.fspNumber && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500 text-gray-900">
                <ShieldCheck className="w-3 h-3 mr-1" />
                FSP Licensed
              </Badge>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="mb-1">{member.name[locale]}</h3>
          <p className="text-gray-600 mb-4">{member.role[locale]}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {member.highlights[locale].map((highlight, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>

          {/* Bio */}
          <ul className="space-y-2 mb-6 text-sm text-gray-600">
            {member.bio[locale].slice(0, 3).map((line, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1 flex-shrink-0">•</span>
                <span className="line-clamp-2">{line}</span>
              </li>
            ))}
            {member.bio[locale].length > 3 && (
              <li className="text-xs text-gray-500 italic">
                {locale === 'zh' ? '... 更多详情请咨询' : '... Contact for more details'}
              </li>
            )}
          </ul>

          {/* Contact Actions */}
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex-1 text-xs"
              asChild
            >
              <a href={`tel:${member.contact.phone.replace(/\s/g, '')}`}>
                <Phone className="w-3 h-3 mr-1" />
                {member.contact.phone}
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="flex-1 text-xs"
              asChild
            >
              <a href={`mailto:${member.contact.email}`}>
                <Mail className="w-3 h-3 mr-1" />
                Email
              </a>
            </Button>
          </div>

          {/* FSP Number - Only for licensed advisors */}
          {member.fspNumber && (
            <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
              FSPR Number: {member.fspNumber}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">{t('team.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Team Carousel - Mobile */}
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
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="min-w-[85vw] snap-center">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {TEAM_MEMBERS.map((_, index) => (
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

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>
            {locale === 'zh' 
              ? '* Michelle XIE持有新西兰金融服务提供商(FSP)执照，受金融市场管理局(FMA)监管。团队其他成员为专业助理和市场营销人员。'
              : '* Michelle XIE is a licensed Financial Service Provider (FSP) regulated by the Financial Markets Authority (FMA). Other team members are professional assistants and marketing staff.'}
          </p>
        </div>
      </div>
    </section>
  );
}
