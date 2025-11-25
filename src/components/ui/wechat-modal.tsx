import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useI18n } from '@/lib/i18n-context';
import { trackWeChatQR } from '@/lib/analytics';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'wechat' | 'wechat-official' | 'xiaohongshu';
}

export function WeChatModal({ isOpen, onClose, type = 'wechat' }: WeChatModalProps) {
  const { locale } = useI18n();
  
  const content = {
    wechat: {
      image: '/qrcodes/michelle-wechat.jpg',
      alt: 'EXP Finance Michelle XIE微信二维码 - 扫码添加咨询新西兰房贷问题| Michelle WeChat QR Code',
      text: {
        zh: '扫描二维码添加微信',
        en: 'Scan QR code to add WeChat'
      }
    },
    'wechat-official': {
      image: '/qrcodes/wechat-official.jpg',
      alt: 'EXP Finance速捷信贷微信公众号二维码 - 获取最新房贷资讯和利率动态| EXP Finance WeChat Official Account QR Code',
      text: {
        zh: '扫描二维码关注公众号',
        en: 'Scan to follow Official Account'
      }
    },
    xiaohongshu: {
      image: '/qrcodes/michelle-xiaohongshu.jpg',
      alt: 'EXP Finance Michelle XIE小红书二维码 - 关注获取新西兰购房贷款实用攻略 | Michelle Xiaohongshu QR Code',
      text: {
        zh: '扫描二维码关注小红书',
        en: 'Scan to follow on rednote'
      }
    }
  };
  
  const currentContent = content[type];
  
  // Close on ESC key and track QR code view
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      // Track WeChat QR code view
      trackWeChatQR(type, 'view_qr');
      
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, type]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content - 桌面1/6屏幕，移动端更大 */}
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-w-[85vw] mx-auto overflow-hidden animate-in zoom-in-95 duration-200"
        style={{
          width: window.innerWidth >= 768 ? '450px' : '280px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1.5 right-1.5 z-10 p-0.5 rounded-full bg-gray-100/90 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5 text-gray-600" />
        </button>

        {/* QR Code Image */}
        <div className="p-2">
          <img 
            src={currentContent.image} 
            alt={currentContent.alt} 
            className="w-full h-auto rounded object-contain"
          />
          <div className="mt-1.5 text-center">
            <p className="text-[10px] text-gray-600 leading-tight">
              {currentContent.text[locale]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
