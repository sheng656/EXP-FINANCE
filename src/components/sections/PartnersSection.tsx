import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../../lib/i18n-context';

// Partner logos configuration
// Place SVG or PNG files in /public/partners/ directory
// File names should match the 'id' field below (e.g., anz.svg or anz.png)
const PARTNERS = [
  // Major Banks
  { name: 'ANZ', id: 'anz', category: 'bank' },
  { name: 'ASB', id: 'asb', category: 'bank' },
  { name: 'BNZ', id: 'bnz', category: 'bank' },
  { name: 'Westpac', id: 'westpac', category: 'bank' },
  { name: 'Kiwibank', id: 'kiwibank', category: 'bank' },
  { name: 'TSB Bank', id: 'tsb', category: 'bank' },
  { name: 'The Co-operative Bank', id: 'cooperative', category: 'bank' },
  { name: 'Heartland Bank', id: 'heartland', category: 'bank' },
  
  // Non-Bank Lenders
  { name: 'Pepper Money', id: 'pepper', category: 'lender' },
  { name: 'Liberty Financial', id: 'liberty', category: 'lender' },
  { name: 'Avanti Finance', id: 'avanti', category: 'lender' },
  { name: 'Basecorp Finance', id: 'basecorp', category: 'lender' },
  { name: 'RESIMAC', id: 'resimac', category: 'lender' },
  { name: 'Bluestone', id: 'bluestone', category: 'lender' },
  
  // Specialist Lenders
  { name: 'First Mortgage Trust', id: 'fmt', category: 'specialist' },
  { name: 'Southern Cross Partners', id: 'scp', category: 'specialist' },
  { name: 'Funding Partners', id: 'funding-partners', category: 'specialist' },
  { name: 'XCEDA Finance', id: 'xceda', category: 'specialist' },
  { name: 'Prospa', id: 'prospa', category: 'specialist' },
  { name: 'Finance Direct', id: 'finance-direct', category: 'specialist' },
  
  // Property Finance
  { name: 'ASAP Finance', id: 'asap', category: 'property' },
  { name: 'DER Property Finance', id: 'der', category: 'property' },
  { name: 'Cressida Capital', id: 'cressida', category: 'property' },
  { name: 'MTF Finance', id: 'mtf', category: 'property' },
  { name: 'Unity', id: 'unity', category: 'property' },
];

// Component to handle loading SVG or PNG with fallback
function PartnerLogo({ name, id }: { name: string; id: string }) {
  const [imageSrc, setImageSrc] = useState<string>(`/partners/${id}.svg`);
  const [showFallback, setShowFallback] = useState(false);

  const handleError = () => {
    // If SVG fails, try PNG
    if (imageSrc.endsWith('.svg')) {
      setImageSrc(`/partners/${id}.png`);
    } else {
      // If PNG also fails, show text fallback
      setShowFallback(true);
    }
  };

  if (showFallback) {
    return (
      <div className="text-center px-2">
        <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
          {name}
        </p>
      </div>
    );
  }

  return (
    <img 
      src={imageSrc}
      alt={name}
      className="w-full h-full object-contain object-center opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
      onError={handleError}
      style={{ objectPosition: 'center' }}
    />
  );
}

export function PartnersSection() {
  const { locale } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logosPerView, setLogosPerView] = useState(6);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate how many logos to show based on screen width
  useEffect(() => {
    const updateLogosPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setLogosPerView(6);  // 桌面显示6个
      } else if (width >= 640) {
        setLogosPerView(3);  // 平板显示3个
      } else {
        setLogosPerView(2);  // 手机显示2个
      }
    };

    updateLogosPerView();
    window.addEventListener('resize', updateLogosPerView);
    return () => window.removeEventListener('resize', updateLogosPerView);
  }, []);

  const totalLogos = PARTNERS.length;
  const maxIndex = Math.max(0, totalLogos - logosPerView);

  // Auto-play carousel
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isHovered) {
          setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
      }, 3000); // Change every 3 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Get visible logos with wrapping
  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < logosPerView; i++) {
      const index = (currentIndex + i) % totalLogos;
      visible.push(PARTNERS[index]);
    }
    return visible;
  };

  const visibleLogos = getVisibleLogos();

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mb-3">
            {locale === 'zh' ? '合作金融机构' : 'Our Financial Partners'}
          </h2>
          <p className="text-lg text-gray-600">
            {locale === 'zh' 
              ? '与25+家银行及贷款机构合作，为您提供最优金融方案' 
              : 'Partnering with 25+ banks and lenders to bring you the best financial solutions'}
          </p>
        </div>

        {/* Logos Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          {totalLogos > logosPerView && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 transition-all border border-gray-200"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 transition-all border border-gray-200"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Logos Container */}
          <div className="overflow-hidden px-4 md:px-8">
            <div 
              className="grid gap-6 md:gap-8 lg:gap-12 transition-all duration-500"
              style={{
                gridTemplateColumns: `repeat(${logosPerView}, 1fr)`
              }}
            >
              {visibleLogos.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex items-center justify-center p-4 md:p-6 hover:scale-110 transition-all h-20 md:h-24 lg:h-32 group cursor-pointer"
                  title={partner.name}
                >
                  <PartnerLogo name={partner.name} id={partner.id} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {totalLogos > logosPerView && maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.min(maxIndex + 1, 8) }).map((_, index) => {
                const step = Math.max(1, Math.ceil((maxIndex + 1) / 8));
                const dotIndex = index * step;
                const isActive = currentIndex >= dotIndex && currentIndex < Math.min(dotIndex + step, maxIndex + 1);
                
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(Math.min(dotIndex, maxIndex))}
                    className={`h-2 rounded-full transition-all ${
                      isActive 
                        ? 'bg-yellow-500 w-8' 
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-8">
          {locale === 'zh' 
            ? '* 合作机构名单截至2025年9月，具体产品供应以实际为准' 
            : '* Partner list as of September 2025, product availability subject to change'}
        </p>
      </div>
    </section>
  );
}
