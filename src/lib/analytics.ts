// Google Analytics 4 事件追踪工具

/**
 * 发送 GA4 事件
 * @param eventName - 事件名称
 * @param parameters - 事件参数
 */
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
    console.log('[GA4 Event]', eventName, parameters);
  }
};

/**
 * 追踪电话点击事件
 * @param phoneNumber - 电话号码
 * @param source - 点击来源（如：header, footer, hero等）
 */
export const trackPhoneClick = (phoneNumber: string, source: string) => {
  trackEvent('phone_call_click', {
    phone_number: phoneNumber,
    source: source,
    event_category: 'engagement',
    event_label: `Phone: ${phoneNumber}`
  });
};

/**
 * 追踪表单提交事件
 * @param formName - 表单名称
 * @param formData - 表单数据（可选，注意隐私）
 */
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    event_category: 'conversion',
    ...formData
  });
};

/**
 * 追踪微信二维码扫描/打开
 * @param qrType - 二维码类型（wechat, wechat-official, xiaohongshu）
 * @param action - 操作（open_modal, view_qr）
 */
export const trackWeChatQR = (qrType: string, action: string) => {
  trackEvent('wechat_qr_interaction', {
    qr_type: qrType,
    action: action,
    event_category: 'engagement',
    event_label: `WeChat QR: ${qrType}`
  });
};

/**
 * 追踪博客文章阅读
 * @param articleTitle - 文章标题
 * @param articleId - 文章ID
 * @param readDepth - 阅读深度（可选）
 */
export const trackBlogRead = (articleTitle: string, articleId: string | number, readDepth?: string) => {
  trackEvent('blog_article_read', {
    article_title: articleTitle,
    article_id: articleId,
    read_depth: readDepth || 'opened',
    event_category: 'engagement',
    event_label: articleTitle
  });
};

/**
 * 追踪PDF下载
 * @param pdfName - PDF名称
 * @param pdfUrl - PDF链接
 */
export const trackPDFDownload = (pdfName: string, pdfUrl: string) => {
  trackEvent('pdf_download', {
    file_name: pdfName,
    file_url: pdfUrl,
    event_category: 'engagement',
    event_label: `PDF: ${pdfName}`
  });
};

/**
 * 追踪邮件点击
 * @param emailAddress - 邮箱地址
 * @param source - 点击来源
 */
export const trackEmailClick = (emailAddress: string, source: string) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    source: source,
    event_category: 'engagement',
    event_label: `Email: ${emailAddress}`
  });
};

/**
 * 追踪语言切换
 * @param fromLang - 切换前语言
 * @param toLang - 切换后语言
 */
export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent('language_switch', {
    from_language: fromLang,
    to_language: toLang,
    event_category: 'engagement'
  });
};

/**
 * 追踪导航点击
 * @param section - 导航到的部分
 * @param source - 点击来源（nav, footer等）
 */
export const trackNavigation = (section: string, source: string) => {
  trackEvent('navigation_click', {
    section: section,
    source: source,
    event_category: 'navigation'
  });
};

/**
 * 追踪按钮点击
 * @param buttonName - 按钮名称
 * @param buttonLocation - 按钮位置
 */
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    event_category: 'engagement'
  });
};
