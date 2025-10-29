export const COMPLIANCE = {
  // FSP 信息
  fsp: {
    number: 'FSP1000123',
    holder: {
      zh: '速捷信贷有限公司',
      en: 'EXP Finance Limited'
    },
    registrar: 'Financial Markets Authority (FMA)'
  },
  
  // 全局免责声明
  disclaimers: {
    notAdvice: {
      zh: '本网站提供的信息仅供一般参考，不构成财务建议。在做出任何财务决策之前，请咨询持牌财务顾问。',
      en: 'Information on this website is for general reference only and does not constitute financial advice. Please consult with a licensed financial advisor before making any financial decisions.'
    },
    dataExample: {
      zh: '所示数据为示例，实际结果可能有所不同，以最终批复为准',
      en: 'Data shown are examples; actual results may vary and are subject to final approval'
    },
    serviceScope: {
      zh: '我们提供贷款咨询服务，不提供法律或税务建议',
      en: 'We provide loan advisory services, not legal or tax advice'
    }
  },
  
  // 法律页面导航
  legalPages: [
    {
      key: 'privacy',
      label: { zh: '隐私政策', en: 'Privacy Policy' },
      priority: 1
    },
    {
      key: 'terms',
      label: { zh: '网站条款', en: 'Website Terms' },
      priority: 1
    },
    {
      key: 'disclosure',
      label: { zh: '公开披露', en: 'Public Disclosure' },
      priority: 2
    },
    {
      key: 'complaints',
      label: { zh: '投诉流程', en: 'Complaint Process' },
      priority: 2
    },
    {
      key: 'data-notes',
      label: { zh: '数据口径说明', en: 'Data Methodology' },
      priority: 3
    }
  ],
  
  // 数据来源声明
  dataSources: {
    clientCount: {
      zh: '基于2015-2025年服务记录统计',
      en: 'Based on service records from 2015-2025'
    },
    volumeData: {
      zh: '基于2025年1-6月实际成交数据',
      en: 'Based on actual transactions Jan-Jun 2025'
    },
    savingsExample: {
      zh: '基于30年期贷款利率差计算的示例，实际节省因个人情况而异',
      en: 'Example based on 30-year loan rate differential; actual savings vary'
    }
  }
};
