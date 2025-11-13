import { Shield, Users, TrendingUp, Clock, Award, Heart, Building2 } from 'lucide-react';
import { useI18n } from '../../lib/i18n-context';

const advantages = {
  zh: [
    {
      icon: Shield,
      title: '专业持牌',
      description: '持FSP执照顾问，受FMA监管，专业资质有保障'
    },
    {
      icon: Building2,
      title: '25+合作银行及金融机构',
      description: '合作主流银行及非银行贷款机构，为您提供更多选择和最优方案'
    },
    {
      icon: Users,
      title: '双语服务',
      description: '中英文无缝沟通，深谙华人客户需求，贴心服务每一步'
    },
    {
      icon: TrendingUp,
      title: '优化利率',
      description: '对比新西兰各大银行产品，为您争取最优利率，每年节省数千元*'
    },
    {
      icon: Clock,
      title: '高效快捷',
      description: '24小时内响应，平均7天完成预审，加速您的购房进程'
    },
    {
      icon: Award,
      title: '成功案例',
      description: '10+年行业经验，服务1000+*家庭，专业口碑有保障'
    },
    {
      icon: Heart,
      title: '全程陪伴',
      description: '从咨询到交割，专业顾问全程跟进，让您安心无忧'
    }
  ],
  en: [
    {
      icon: Shield,
      title: 'Licensed Professionals',
      description: 'All advisors are FSP licensed and FMA regulated with proven credentials'
    },
    {
      icon: Building2,
      title: '25+ Financial Partners',
      description: 'Access to major banks and non-bank lenders for more options and best solutions'
    },
    {
      icon: Users,
      title: 'Bilingual Service',
      description: 'Seamless Mandarin and English communication, understanding your needs'
    },
    {
      icon: TrendingUp,
      title: 'Best Rates',
      description: 'Compare all major NZ bank products to secure the best rates, save thousands annually*'
    },
    {
      icon: Clock,
      title: 'Fast & Efficient',
      description: '24-hour response, 7-day average pre-approval, accelerate your home purchase'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '10+ years experience, 1000+* families served, trusted professional reputation'
    },
    {
      icon: Heart,
      title: 'Full Support',
      description: 'From consultation to settlement, dedicated advisors guide you every step'
    }
  ]
};

export function AdvantagesSection() {
  const { locale } = useI18n();
  const items = advantages[locale];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            {locale === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '专业、真诚、高效，为您提供最优质的贷款服务'
              : 'Professional, sincere, and efficient mortgage services'}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First row with 4 items on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-3 md:mb-6">
            {items.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-4 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-3 md:mb-6">
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Second row with 3 items centered */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:max-w-4xl lg:mx-auto">
            {items.slice(4).map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div 
                  key={index + 4}
                  className="bg-white rounded-lg md:rounded-xl p-4 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-3 md:mb-6">
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-3 gap-4 md:gap-12 text-center text-white max-w-4xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-xs md:text-sm text-gray-300">
                {locale === 'zh' ? '年行业经验' : 'Years Experience'}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                1000+*
              </div>
              <div className="text-xs md:text-sm text-gray-300">
                {locale === 'zh' ? '服务家庭' : 'Families Served'}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                25+
              </div>
              <div className="text-xs md:text-sm text-gray-300">
                {locale === 'zh' ? '合作金融机构' : 'Financial Partners'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
