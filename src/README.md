# 速捷信贷 (EXP Finance) - 官方网站

专业华人贷款中介网站 | Professional Mortgage Broker Website

## 🎯 项目概述

这是为奥克兰华人金融贷款中介"速捷信贷(EXP Finance)"打造的专业双语网站，重点突出：

- ✅ **合规化**：满足新西兰金融服务行业监管要求
- ✅ **双语化**：中英文无缝切换，服务华人及本地客户
- ✅ **响应式**：完美适配桌面、平板、手机各种设备
- ✅ **高转化**：多层次CTA设计，提升客户咨询率

## 🏗️ 技术栈

- **框架**: React 18 + TypeScript
- **样式**: Tailwind CSS v4.0
- **组件库**: shadcn/ui
- **图标**: Lucide React
- **图片**: Unsplash API

## 📂 项目结构

```
├── components/
│   ├── shared/              # 共享组件
│   │   ├── Header.tsx       # 导航栏（含语言切换）
│   │   └── Footer.tsx       # 页脚（含合规链接）
│   │
│   ├── sections/            # 页面区块
│   │   ├── Hero.tsx         # 首页大图
│   │   ├── AdvantagesSection.tsx    # 优势展示
│   │   ├── TeamSection.tsx          # 团队介绍
│   │   ├── ServicesSection.tsx      # 服务项目
│   │   ├── BlogSection.tsx          # 文章列表
│   │   └── ContactSection.tsx       # 联系我们
│   │
│   ├── forms/               # 表单组件
│   │   └── ContactForm.tsx  # 联系表单（含合规勾选）
│   │
│   ├── compliance/          # 🛡️ 合规组件系统
│   │   └── ComplianceDisclaimer.tsx
│   │
│   ├── cta/                 # CTA组件库
│   │   └── FloatingActionBar.tsx    # 移动端悬浮按钮
│   │
│   └── ui/                  # shadcn/ui 组件
│
├── lib/
│   ├── i18n-context.tsx     # 国际化上下文
│   ├── compliance-config.ts # 🛡️ 合规配置中心
│   └── company-data.ts      # 公司数据
│
└── styles/
    └── globals.css          # 全局样式
```

## 🌍 双语支持

网站支持中文和英文，通过React Context实现：

- 右上角语言切换按钮
- 所有内容自动切换
- 表单提示、错误信息双语化
- SEO友好的URL结构

## 🛡️ 合规系统

### 核心特性

1. **FSP执照展示**：所有页面Footer显示FSP注册信息
2. **法律页面链接**：隐私政策、网站条款、公开披露等
3. **表单合规**：自动插入隐私政策和条款同意勾选
4. **数据免责**：所有数据展示附带来源说明和免责声明
5. **全局声明**：每页底部显示"信息仅供参考，不构成财务建议"

### 配置中心

所有合规相关配置集中在 `/lib/compliance-config.ts`：

```typescript
export const COMPLIANCE = {
  fsp: { number: 'FSP1000123', ... },
  disclaimers: { ... },
  legalPages: [ ... ],
  dataSources: { ... }
};
```

## 📱 响应式设计

- **桌面** (>1024px): 完整导航、三列布局
- **平板** (768-1024px): 两列布局、简化导航
- **手机** (<768px): 单列布局、汉堡菜单、悬浮操作栏

## 🎨 品牌识别

### 配色方案

- **主色调**: 金色渐变 (Yellow 500-600) - 象征专业、信任
- **辅助色**: 深灰 (Gray 900) - 稳重、专业
- **强调色**: 绿色 (微信) - 亲和力

### Logo

提供三个版本：
- 黑底金字（主版）
- 白底金字（常规）
- 纯英文版

## 🚀 功能特性

### 1. 多层次CTA设计

- **首要动作**: 立即咨询、电话咨询
- **次要动作**: 添加微信、订阅资讯
- **软性引导**: 了解更多、查看案例

### 2. 团队展示

- 三位专业顾问完整介绍
- FSP执照编号显示
- 一键微信、电话、邮件联系
- 个人亮点标签展示

### 3. 服务项目

- 6大核心服务：首次购房、投资贷款、转贷优化、建房贷款、自雇人士、商业贷款
- 每个服务4个核心特性
- 图标化展示，直观易懂

### 4. 联系表单

- 实时表单验证
- 合规勾选强制
- 自动回复模拟
- 成功提示动画

### 5. 移动端优化

- 悬浮操作栏（微信、电话、邮件）
- 展开式菜单设计
- 一键拨打电话
- 快速跳转联系表单

## 📞 联系方式配置

在 `/lib/company-data.ts` 中配置：

```typescript
export const COMPANY_INFO = {
  contact: {
    phone: '020 446 6883',
    email: 'info@expfinance.co.nz',
    address: { ... }
  },
  social: {
    wechat: { ... },
    ...
  }
};
```

## 👥 团队信息管理

团队成员信息在 `/lib/company-data.ts` 的 `TEAM_MEMBERS` 数组中：

**当前团队成员：**

1. **Michelle XIE** - Director/10年+资深贷款顾问（持牌FSP）
2. **Helen YANG** - 资深贷款申请专家（20年银行经验）
3. **Betty HU** - 贷款助理（浙大博士）
4. **Leo LIU** - 市场营销（梅西大学）

```typescript
{
  name: { zh: 'Michelle 谢', en: 'Michelle XIE' },
  role: { zh: 'Director/10年+资深贷款顾问', en: 'Director / 10+ Years Senior Mortgage Advisor' },
  fspNumber: 'FSP1000123', // 只有Michelle有FSP执照
  photo: 'https://...',
  contact: { ... },
  bio: { ... },
  highlights: { ... }
}
```

## 🎯 下一步计划

1. **集成CMS**: 连接Sanity CMS，实现内容可视化管理
2. **表单后端**: 集成Supabase或其他后端，实现真实表单提交
3. **SEO优化**: 添加结构化数据、sitemap生成
4. **Analytics**: 集成Google Analytics，追踪用户行为
5. **微信集成**: 添加微信二维码弹窗组件

## 📝 使用说明

### 修改联系方式

编辑 `/lib/company-data.ts` 中的 `COMPANY_INFO` 对象。

### 添加团队成员

在 `/lib/company-data.ts` 的 `TEAM_MEMBERS` 数组中添加新对象。

### 修改服务项目

编辑 `/lib/company-data.ts` 中的 `SERVICES` 数组。

### 更新合规信息

编辑 `/lib/compliance-config.ts` 中的配置。

### 切换语言

点击右上角的语言切换按钮（地球图标）。

## 🛡️ 重要提示

- 所有显示的数据（客户数量、成交量等）仅为示例
- 实际使用时需要替换为真实FSP执照编号
- 建议咨询法律顾问审核所有合规相关内容
- 图片来源于Unsplash，商用需确认授权

## 📄 许可

© 2025 EXP Finance Limited. All rights reserved.
