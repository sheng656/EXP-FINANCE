import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { useI18n } from '../../lib/i18n-context';
import { COMPLIANCE } from '../../lib/compliance-config';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const { locale, t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert(locale === 'zh' ? '请先同意隐私政策和网站条款' : 'Please agree to the terms');
      return;
    }

    setIsSubmitting(true);
    setIsError(false);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Send email using EmailJS
      await emailjs.sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        publicKey
      );

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
        setAgreedToTerms(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setIsError(true);
      
      // Hide error after 5 seconds
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-green-900 mb-2">
          {t('form.success')}
        </h3>
        <p className="text-green-700 text-sm">
          {locale === 'zh' 
            ? '我们会在3个工作日内与您联系'
            : 'We will contact you within 3 business days'}
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">❌</div>
        <h3 className="text-red-900 mb-2">
          {locale === 'zh' ? '发送失败' : 'Failed to Send'}
        </h3>
        <p className="text-red-700 text-sm mb-4">
          {locale === 'zh' 
            ? '抱歉，消息发送失败。请稍后重试或直接联系我们。'
            : 'Sorry, the message failed to send. Please try again or contact us directly.'}
        </p>
        <Button 
          onClick={() => setIsError(false)}
          variant="outline"
          className="border-red-300 text-red-700 hover:bg-red-50"
        >
          {locale === 'zh' ? '返回' : 'Go Back'}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Name */}
      <div>
        <Label htmlFor="name">{t('form.name')} *</Label>
        <Input 
          id="name"
          name="name"
          required
          placeholder={locale === 'zh' ? '请输入您的姓名' : 'Your name'}
          className="mt-1"
        />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">{t('form.email')} *</Label>
        <Input 
          id="email"
          name="email"
          type="email"
          required
          placeholder={locale === 'zh' ? '请输入您的邮箱' : 'your.email@example.com'}
          className="mt-1"
        />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">{t('form.phone')}</Label>
        <Input 
          id="phone"
          name="phone"
          type="tel"
          placeholder={locale === 'zh' ? '请输入您的电话' : 'Your phone number'}
          className="mt-1"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">{t('form.message')} *</Label>
        <Textarea 
          id="message"
          name="message"
          required
          rows={5}
          placeholder={locale === 'zh' 
            ? '请描述您的贷款需求，例如：首次购房、投资贷款、转贷等'
            : 'Please describe your mortgage needs'}
          className="mt-1"
        />
      </div>

      {/* Compliance Checkbox */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Checkbox 
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
          />
          <Label 
            htmlFor="terms" 
            className="text-sm cursor-pointer leading-relaxed"
          >
            {t('form.agreeTerms')}{' '}
            <a 
              href="/documents/Privacy Policy.pdf"
              download
              className="text-yellow-600 hover:underline"
            >
              {t('legal.privacy')}
            </a>
            {' '}{t('form.and')}{' '}
            <a 
              href="/documents/Website Terms.pdf"
              download
              className="text-yellow-600 hover:underline"
            >
              {t('legal.terms')}
            </a>
          </Label>
        </div>
        
        {/* Disclaimer */}
        <p className="mt-3 text-xs text-gray-500 italic pl-9">
          {COMPLIANCE.disclaimers.notAdvice[locale]}
        </p>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            {t('form.sending')}
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {t('form.submit')}
          </>
        )}
      </Button>
    </form>
  );
}
