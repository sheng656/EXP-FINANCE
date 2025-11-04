import { createContext, useContext, useState, ReactNode } from 'react';

export type Locale = 'zh' | 'en';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.team': '我们的团队',
    'nav.services': '我们的服务',
    'nav.blog': '最新文章',
    'nav.contact': '联系我们',
    'nav.legal': '法律与合规',
    
    // Hero
    'hero.title': '专业、真诚，帮你省钱、赚钱、安心买房',
    'hero.subtitle': '奥克兰华人贷款专家 · 10年+经验 · 服务1000+家庭',
    'hero.cta.primary': '立即咨询',
    'hero.cta.secondary': '了解更多',
    
    // CTA
    'cta.contact': '立即咨询',
    'cta.contactUs': '联系我们',
    'cta.call': '电话咨询',
    'cta.wechat': '添加微信',
    'cta.email': '邮件咨询',
    'cta.learnMore': '了解更多',
    'cta.xiaohongshu': '关注小红书',
    'cta.backToTop': '返回顶部',
    
    // Team
    'team.title': '我们的团队',
    'team.subtitle': '专业持牌顾问领衔，资深银行专家助力，用心服务每一位客户',
    
    // Services
    'services.title': '我们的服务',
    'services.subtitle': '一站式贷款解决方案',
    
    // Footer
    'footer.quickLinks': '快速链接',
    'footer.legal': '法律与合规',
    'footer.contact': '联系我们',
    'footer.followUs': '关注我们',
    'footer.copyright': '版权所有',
    
    // Legal Pages
    'legal.privacy': '隐私政策',
    'legal.terms': '网站条款',
    'legal.disclosure': '公开披露',
    'legal.complaints': '投诉流程',
    'legal.dataNotes': '数据口径说明',
    
    // Data Notes
    'dataNotes.title': '数据口径说明',
    'dataNotes.clientsServed': '服务家庭数：基于2015年至今的累计成交客户统计',
    'dataNotes.satisfaction': '客户满意度：基于客户反馈调查及推荐率统计',
    'dataNotes.volume': '成交金额：基于2025年上半年实际成交金额统计',
    'dataNotes.savings': '节省金额：基于客户实际利率优化案例的平均值',
    'dataNotes.disclaimer': '以上数据仅供参考，实际情况可能因个人条件而异',
    
    // Compliance
    'compliance.notAdvice': '本网站提供的信息仅供一般参考，不构成财务建议',
    'compliance.dataExample': '所示数据为示例，实际结果可能有所不同，以最终批复为准',
    'compliance.fsp': 'FSP 注册金融服务提供商',
    
    // Contact Form
    'form.name': '姓名',
    'form.email': '邮箱',
    'form.phone': '电话',
    'form.message': '您的咨询内容',
    'form.submit': '提交咨询',
    'form.sending': '发送中...',
    'form.success': '感谢您的咨询！我们会尽快与您联系。',
    'form.error': '提交失败，请稍后重试。',
    'form.agreeTerms': '我已阅读并同意',
    'form.and': '和',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.team': 'Our Team',
    'nav.services': 'Our Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.legal': 'Legal & Compliance',
    
    // Hero
    'hero.title': 'Professional, Sincere Mortgage Advisory',
    'hero.subtitle': 'Auckland Mortgage Broker · 10+ Years Experience · 1000+ Families Served',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    
    // CTA
    'cta.contact': 'Get Started',
    'cta.contactUs': 'Contact Us',
    'cta.call': 'Call Now',
    'cta.wechat': 'WeChat',
    'cta.email': 'Email Us',
    'cta.learnMore': 'Learn More',
    'cta.xiaohongshu': 'Follow on RED',
    'cta.backToTop': 'Back to Top',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Licensed advisor leading, banking experts supporting, dedicated to your success',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive mortgage solutions',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal & Compliance',
    'footer.contact': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.copyright': 'All rights reserved',
    
    // Legal Pages
    'legal.privacy': 'Privacy Policy',
    'legal.terms': 'Terms of Service',
    'legal.disclosure': 'Public Disclosure',
    'legal.complaints': 'Complaint Process',
    'legal.dataNotes': 'Data Methodology',
    
    // Data Notes
    'dataNotes.title': 'Data Methodology',
    'dataNotes.clientsServed': 'Families Served: Cumulative clients since 2015',
    'dataNotes.satisfaction': 'Client Satisfaction: Based on customer surveys and referral rates',
    'dataNotes.volume': 'Transaction Volume: Based on actual settlements in H1 2025',
    'dataNotes.savings': 'Savings Amount: Average based on actual rate optimization cases',
    'dataNotes.disclaimer': 'Data shown are for reference only; actual results may vary based on individual circumstances',
    
    // Compliance
    'compliance.notAdvice': 'General information only; not financial advice',
    'compliance.dataExample': 'Data shown are examples; actual results may vary',
    'compliance.fsp': 'FSP Registered Financial Service Provider',
    
    // Contact Form
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Your Message',
    'form.submit': 'Submit Inquiry',
    'form.sending': 'Sending...',
    'form.success': 'Thank you! We will get back to you soon.',
    'form.error': 'Submission failed. Please try again.',
    'form.agreeTerms': 'I have read and agree to',
    'form.and': 'and',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh');

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
