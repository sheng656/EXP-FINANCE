import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ContactForm } from '../forms/ContactForm';
import { useI18n } from '../../lib/i18n-context';
import { COMPANY_INFO } from '../../lib/company-data';
import { WeChatModal } from '../ui/wechat-modal';

export function ContactSection() {
  const { locale } = useI18n();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [isWechatOfficialModalOpen, setIsWechatOfficialModalOpen] = useState(false);
  const [isXiaohongshuModalOpen, setIsXiaohongshuModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '专业顾问随时为您服务'
              : 'Our expert advisors are ready to help'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  {locale === 'zh' ? '在线咨询' : 'Send Us a Message'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {locale === 'zh' ? '直接联系' : 'Get in Touch'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '电话咨询' : 'Call Us'}
                    </div>
                    <div className="text-gray-600">{COMPANY_INFO.contact.phone}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '邮箱咨询' : 'Email Us'}
                    </div>
                    <div className="text-gray-600 text-sm break-all">
                      {COMPANY_INFO.contact.email}
                    </div>
                  </div>
                </a>

                <button 
                  onClick={() => setIsWeChatModalOpen(true)}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition w-full text-left"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '微信咨询' : 'WeChat'}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {locale === 'zh' ? '扫码添加顾问微信' : 'Scan to add advisor'}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setIsWechatOfficialModalOpen(true)}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition w-full text-left"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '关注公众号' : 'Follow Official Account'}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {locale === 'zh' ? '扫码关注微信公众号' : 'Scan to follow WeChat Official'}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setIsXiaohongshuModalOpen(true)}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition w-full text-left"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '关注小红书' : 'Follow on rednote'}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {locale === 'zh' ? '扫码关注获取最新资讯' : 'Scan to get latest updates'}
                    </div>
                  </div>
                </button>

                <div className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '办公地址' : 'Office Address'}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {COMPANY_INFO.contact.address[locale]}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">
                      {locale === 'zh' ? '服务地区' : 'Service Area'}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {COMPANY_INFO.contact.serviceArea[locale]}
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {locale === 'zh' ? '营业时间' : 'Office Hours'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-600">
                        {locale === 'zh' ? '周一至周五' : 'Mon - Fri'}
                      </span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-600">
                        {locale === 'zh' ? '周六、周日' : 'Sat - Sun'}
                      </span>
                      <span className="font-medium">
                        {locale === 'zh' ? '预约服务' : 'By Appointment'}
                      </span>
                    </div>
                    <p className="text-gray-500 italic mt-4">
                      {locale === 'zh'
                        ? '* 紧急事务可通过微信或电话联系，我们会尽快回复'
                        : '* For urgent matters, contact us via WeChat or phone'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)}
        type="wechat"
      />

      {/* WeChat Official Account QR Code Modal */}
      <WeChatModal 
        isOpen={isWechatOfficialModalOpen} 
        onClose={() => setIsWechatOfficialModalOpen(false)}
        type="wechat-official"
      />

      {/* Xiaohongshu QR Code Modal */}
      <WeChatModal 
        isOpen={isXiaohongshuModalOpen} 
        onClose={() => setIsXiaohongshuModalOpen(false)}
        type="xiaohongshu"
      />
    </section>
  );
}
