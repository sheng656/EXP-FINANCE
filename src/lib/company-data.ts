import michellePhoto from 'figma:asset/88f32fd31e98c066a3394bd3268dc44738bbf0ac.png';
import bettyPhoto from 'figma:asset/f9fcf5a1e3933c3246a1e0815ab75bea4589a79a.png';
import leoPhoto from 'figma:asset/f21f6303f57bccce6132c9509d923a7e429ace54.png';

export const COMPANY_INFO = {
  name: {
    zh: '速捷信贷',
    en: 'EXP Finance'
  },
  legalName: 'EXP Finance Limited',
  established: '2015',
  
  contact: {
    phone: '022 314 5326',
    email: 'hello@expfin.co.nz',
    address: {
      zh: 'Level 3, B:HIVE, 72–74 Taharoto Road, Takapuna, Auckland 0622, New Zealand',
      en: 'Level 3, B:HIVE, 72–74 Taharoto Road, Takapuna, Auckland 0622, New Zealand'
    },
    serviceArea: {
      zh: '新西兰',
      en: 'New Zealand'
    }
  },
  
  social: {
    wechat: {
      id: 'EXPFinance',
      qrCode: '/qrcodes/company-wechat.png'
    },
    xiaohongshu: 'https://www.xiaohongshu.com/expfinance',
    facebook: '#',
    linkedin: '#'
  },
  
  stats: {
    experience: '10+',
    clientsServed: '1000+*',
    satisfaction: '95%*',
    volumeH1_2025: '5000万*',
    teamSize: '4'
  }
};

export const TEAM_MEMBERS = [
  {
    id: 'michelle',
    name: {
      zh: 'Michelle Xie',
      en: 'Michelle XIE'
    },
    role: {
      zh: 'Director/10年+资深贷款顾问',
      en: 'Director / 10+ Years Senior Mortgage Advisor'
    },
    fspNumber: 'FSP1000123',
    photo: michellePhoto,
    contact: {
      phone: '020 446 6883',
      email: 'michelle@expfinance.co.nz',
      wechatQR: '/qrcodes/michelle-wechat.png'
    },
    bio: {
      zh: [
        '速捷信贷创始人，勤奋拼搏的福建人',
        '奥克兰大学商业管理学硕士',
        '10年+从业经验，帮助数千名客户圆家的梦想',
        '擅长生意/自雇收入复杂案例及多套投资房组合设计',
        '亲自设计监工建造自住房和投资房，丰富实战经验'
      ],
      en: [
        'Founder of EXP Finance, hardworking Fujian native',
        'Master of Business Management (UoA)',
        '10+ years helping thousands of clients achieve home ownership',
        'Expert in complex self-employed cases and multi-property portfolios',
        'Hands-on experience in property development and investment'
      ]
    },
    highlights: {
      zh: ['10年+经验', '持牌FSP顾问', '复杂案例专家'],
      en: ['10+ Years', 'Licensed FSP', 'Complex Cases Expert']
    },
    displayOrder: 1
  },
  {
    id: 'helen',
    name: {
      zh: 'Helen Yang',
      en: 'Helen YANG'
    },
    role: {
      zh: '资深贷款申请专家',
      en: 'Senior Loan Application Specialist'
    },
    fspNumber: null,
    photo: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400',
    contact: {
      phone: '020 446 6884',
      email: 'helen@expfinance.co.nz',
      wechatQR: '/qrcodes/helen-wechat.png'
    },
    bio: {
      zh: [
        '工商管理硕士，20年新西兰银行工作经验',
        '2002-2011年任职ASB，2011-2021年任职Westpac',
        '熟悉各大银行产品，尤其是民宅贷款领域',
        '擅长首次置业、转贷、贷款重组、建筑贷款等',
        '超强业务能力，常在工作外时间帮助客户完成申请'
      ],
      en: [
        'MBA, 20 years banking experience in New Zealand',
        'ASB (2002-2011), Westpac (2011-2021)',
        'Expert in all major bank products, especially residential loans',
        'Specialized in first home, refinancing, restructuring, construction',
        'Exceptional service, often assists clients after hours'
      ]
    },
    highlights: {
      zh: ['20年银行经验', 'ASB+Westpac', '民宅贷款专家'],
      en: ['20 Years Banking', 'ASB+Westpac', 'Residential Expert']
    },
    displayOrder: 2
  },
  {
    id: 'betty',
    name: {
      zh: 'Betty Hu',
      en: 'Betty HU'
    },
    role: {
      zh: '贷款助理',
      en: 'Loan Assistant'
    },
    fspNumber: null,
    photo: bettyPhoto,
    contact: {
      phone: '020 446 6885',
      email: 'betty@expfinance.co.nz',
      wechatQR: '/qrcodes/betty-wechat.png'
    },
    bio: {
      zh: [
        '浙江大学博士（2020），曾赴法国和荷兰学术交流',
        '前中国上市公司集团子公司部门副总监',
        '负责贷款申请后期对接、条件确认、结构优化',
        '丰富的跨行业管理与多项目协调经验',
        '具备大数据信息编程与社交媒体运营背景'
      ],
      en: [
        'PhD from Zhejiang University (2020), studied in France & Netherlands',
        'Former Deputy Director at listed company subsidiary',
        'Handles post-application coordination and structure optimization',
        'Extensive cross-industry and multi-project management experience',
        'Background in data analytics and social media operations'
      ]
    },
    highlights: {
      zh: ['浙大博士', '数据分析', '多项目管理'],
      en: ['PhD (ZJU)', 'Data Analytics', 'Project Management']
    },
    displayOrder: 3
  },
  {
    id: 'leo',
    name: {
      zh: 'Leo Liu',
      en: 'Leo LIU'
    },
    role: {
      zh: '市场营销',
      en: 'Marketing Manager'
    },
    fspNumber: null,
    photo: leoPhoto,
    contact: {
      phone: '020 446 6886',
      email: 'leo@expfinance.co.nz',
      wechatQR: '/qrcodes/leo-wechat.png'
    },
    bio: {
      zh: [
        '梅西大学市场营销专业本科',
        '负责公司品牌推广、客户拓展与市场活动执行',
        '校内期间在传媒公司与留学中介从事市场推广',
        '曾在新西兰大型教育集团负责市场营销管理',
        '擅长整合营销、渠道建设、团队管理与活动落地'
      ],
      en: [
        'Bachelor of Marketing, Massey University',
        'Manages brand promotion, client expansion and marketing events',
        'Marketing experience in media companies and education agencies',
        'Former marketing manager at large NZ education group',
        'Expert in integrated marketing, channel building, event management'
      ]
    },
    highlights: {
      zh: ['市场营销', '品牌推广', '活动策划'],
      en: ['Marketing', 'Brand Building', 'Event Planning']
    },
    displayOrder: 4
  }
];

export const SERVICES = [
  {
    id: 'first-home',
    title: {
      zh: '首次购房贷款',
      en: 'First Home Buyer'
    },
    description: {
      zh: '专业指导首次购房流程，帮您申请政府补贴，优化贷款方案',
      en: 'Expert guidance for first-time buyers, government grants assistance'
    },
    icon: 'Home',
    features: {
      zh: [
        'Welcome Home Loan 申请',
        'First Home Grant 补贴',
        '最低首付方案',
        '全流程指导'
      ],
      en: [
        'Welcome Home Loan application',
        'First Home Grant assistance',
        'Low deposit solutions',
        'Full process guidance'
      ]
    }
  },
  {
    id: 'investment',
    title: {
      zh: '投资房贷款',
      en: 'Investment Property'
    },
    description: {
      zh: '优化投资组合，最大化税务效益，专业投资策略建议',
      en: 'Portfolio optimization, tax efficiency, investment strategy'
    },
    icon: 'TrendingUp',
    features: {
      zh: [
        '投资组合优化',
        '现金流分析',
        '税务规划配合',
        '跨行贷款整合'
      ],
      en: [
        'Portfolio optimization',
        'Cash flow analysis',
        'Tax planning support',
        'Multi-bank consolidation'
      ]
    }
  },
  {
    id: 'refinance',
    title: {
      zh: '转贷优化',
      en: 'Refinancing'
    },
    description: {
      zh: '降低利率，整合债务，释放房产equity，每年帮客户节省数万元',
      en: 'Lower rates, debt consolidation, equity release, save thousands annually'
    },
    icon: 'RefreshCw',
    features: {
      zh: [
        '利率优化比较',
        '债务整合方案',
        'Equity释放',
        '节省计算器'
      ],
      en: [
        'Rate comparison',
        'Debt consolidation',
        'Equity release',
        'Savings calculator'
      ]
    }
  },
  {
    id: 'construction',
    title: {
      zh: '建房贷款',
      en: 'Construction Loan'
    },
    description: {
      zh: '新房建造、旧房翻新，专业的建房贷款方案和进度管理',
      en: 'New builds, renovations, progress payment management'
    },
    icon: 'Hammer',
    features: {
      zh: [
        '分阶段放款',
        '建筑商审查',
        '预算管理',
        '风险控制'
      ],
      en: [
        'Progress payments',
        'Builder assessment',
        'Budget management',
        'Risk control'
      ]
    }
  },
  {
    id: 'self-employed',
    title: {
      zh: '自雇人士贷款',
      en: 'Self-Employed'
    },
    description: {
      zh: '灵活的收入证明方式，专为自雇人士和企业主设计的贷款方案',
      en: 'Flexible income verification for self-employed and business owners'
    },
    icon: 'Briefcase',
    features: {
      zh: [
        '灵活收入证明',
        '公司财报分析',
        '多种验证方式',
        '海外收入认可'
      ],
      en: [
        'Flexible documentation',
        'Business financials analysis',
        'Multiple verification methods',
        'Offshore income accepted'
      ]
    }
  },
  {
    id: 'commercial',
    title: {
      zh: '商业贷款',
      en: 'Commercial Loan'
    },
    description: {
      zh: '商业物业购买、企业扩张融资，专业的商业贷款解决方案',
      en: 'Commercial property purchase, business expansion financing'
    },
    icon: 'Building2',
    features: {
      zh: [
        '商业物业贷款',
        '设备融资',
        '营运资金',
        '企业扩张'
      ],
      en: [
        'Commercial property',
        'Equipment finance',
        'Working capital',
        'Business expansion'
      ]
    }
  }
];
