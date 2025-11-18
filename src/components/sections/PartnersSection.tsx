import { useState, useRef } from 'react';
import { useI18n } from '../../lib/i18n-context';

// Partner logos configuration
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
  { name: 'SBS Bank', id: 'sbs', category: 'bank' },
  
  // Non-Bank Lenders
  { name: 'Pepper Money', id: 'pepper', category: 'lender' },
  { name: 'Liberty Financial', id: 'liberty', category: 'lender' },
  { name: 'Avanti Finance', id: 'avanti', category: 'lender' },
  { name: 'Basecorp Finance', id: 'basecorp', category: 'lender' },
  { name: 'Bizcap', id: 'bizcap', category: 'lender' },
  { name: 'Finbase', id: 'finbase', category: 'lender' },
  
  // Specialist Lenders
  { name: 'First Mortgage Trust', id: 'fmt', category: 'specialist' },
  { name: 'Southern Cross Partners', id: 'scp', category: 'specialist' },
  { name: 'Funding Partners', id: 'funding-partners', category: 'specialist' },
  { name: 'XCEDA Finance', id: 'xceda', category: 'specialist' },
  { name: 'Prospa', id: 'prospa', category: 'specialist' },
  { name: 'CFM Loans', id: 'cfm', category: 'specialist' },
  { name: 'Midlands Funds Management', id: 'midlands', category: 'specialist' },
  
  // Property Finance
  { name: 'ASAP Finance', id: 'asap', category: 'property' },
  { name: 'DBR Property Finance', id: 'dbr', category: 'property' },
  { name: 'Cressida Capital', id: 'cressida', category: 'property' },
  { name: 'Unity', id: 'unity', category: 'property' },
  { name: 'AIP', id: 'aip', category: 'property' },
];

// Component to display partner logo
function PartnerLogo({ name, id }: { name: string; id: string }) {
  const [imageError, setImageError] = useState(false);
  const [imageFormat, setImageFormat] = useState<'png' | 'jpg'>('png');
  
  const handleImageError = () => {
    if (imageFormat === 'png') {
      // Try jpg if png fails
      setImageFormat('jpg');
    } else {
      // If both fail, show text fallback
      setImageError(true);
    }
  };
  
  return (
    <div className="text-center px-2">
      {!imageError ? (
        <img
          src={`/partners/${id}.${imageFormat}`}
          alt={name}
          className="h-12 md:h-16 lg:h-20 w-auto object-contain mx-auto group-hover:scale-105 transition-transform"
          onError={handleImageError}
        />
      ) : (
        <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors whitespace-nowrap">
          {name}
        </p>
      )}
    </div>
  );
}

export function PartnersSection() {
  const { locale } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate partners array for seamless infinite scroll
  const allPartners = [...PARTNERS, ...PARTNERS];

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

        {/* Infinite Scroll Carousel */}
        <div 
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex gap-8 md:gap-12 lg:gap-16"
            style={{
              animation: 'scroll 12s linear infinite',
            }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-6 py-4 group"
                title={partner.name}
                style={{ minWidth: '150px' }}
              >
                <PartnerLogo name={partner.name} id={partner.id} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-8">
          {locale === 'zh' 
            ? '* 合作机构名单截至2025年9月，具体产品供应以实际为准' 
            : '* Partner list as of September 2025, product availability subject to change'}
        </p>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
