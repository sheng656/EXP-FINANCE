import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { useI18n } from '../../lib/i18n-context';
import { COMPLIANCE } from '../../lib/compliance-config';

export function ContactForm() {
  const { locale, t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert(locale === 'zh' ? '请先同意隐私政策和网站条款' : 'Please agree to the terms');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
      setAgreedToTerms(false);
    }, 3000);
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
            ? '我们会在1个工作日内与您联系'
            : 'We will contact you within 1 business day'}
        </p>
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
              href="#legal/privacy" 
              className="text-yellow-600 hover:underline"
              target="_blank"
            >
              {t('legal.privacy')}
            </a>
            {' '}{t('form.and')}{' '}
            <a 
              href="#legal/terms" 
              className="text-yellow-600 hover:underline"
              target="_blank"
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
