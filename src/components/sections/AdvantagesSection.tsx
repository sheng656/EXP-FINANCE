import { Shield, Users, TrendingUp, Clock, Award, Heart } from 'lucide-react';
import { useI18n } from '../../lib/i18n-context';

const advantages = {
  zh: [
    {
      icon: Shield,
      title: '专业持牌',
      description: '所有顾问持FSP执照，受FMA监管，专业资质有保障'
    },
    {
      icon: Users,
      title: '双语服务',
      description: '中英文无缝沟通，深谙华人客户需求，贴心服务每一步'
    },
    {
      icon: TrendingUp,
      title: '优化利率',
      description: '对比30+银行产品，为您争取最优利率，每年节省数千元'
    },
    {
      icon: Clock,
      title: '高效快捷',
      description: '24小时内响应，平均7天完成预审，加速您的购房进程'
    },
    {
      icon: Award,
      title: '成功案例',
      description: '10年行业经验，服务1000+家庭，95%客户满意度'
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
      icon: Users,
      title: 'Bilingual Service',
      description: 'Seamless Mandarin and English communication, understanding your needs'
    },
    {
      icon: TrendingUp,
      title: 'Best Rates',
      description: 'Compare 30+ bank products to secure the best rates, save thousands annually'
    },
    {
      icon: Clock,
      title: 'Fast & Efficient',
      description: '24-hour response, 7-day average pre-approval, accelerate your home purchase'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '10 years experience, 1000+ families served, 95% client satisfaction'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-gray-300">
                {locale === 'zh' ? '年行业经验' : 'Years Experience'}
              </div>
            </div>
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm text-gray-300">
                {locale === 'zh' ? '服务家庭' : 'Families Served'}
              </div>
            </div>
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-gray-300">
                {locale === 'zh' ? '客户满意度' : 'Client Satisfaction'}
              </div>
            </div>
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                30+
              </div>
              <div className="text-sm text-gray-300">
                {locale === 'zh' ? '合作银行' : 'Partner Banks'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
