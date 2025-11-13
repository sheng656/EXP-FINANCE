import { X } from 'lucide-react';
import { useEffect } from 'react';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-[16vw] min-w-[200px] max-w-[320px] max-h-[16vh] min-h-[180px] mx-4 overflow-auto animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 z-10 p-0.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-3 h-3 text-gray-600" />
        </button>

        {/* QR Code Image */}
        <div className="p-2 flex flex-col">
          <img 
            src="/qrcodes/michelle-wechat.jpg" 
            alt="Michelle WeChat QR Code" 
            className="w-full h-auto rounded object-contain"
          />
          <div className="mt-1 text-center flex-shrink-0">
            <p className="text-[10px] font-semibold text-gray-900 mb-0.5 leading-tight">
              添加微信咨询
            </p>
            <p className="text-[8px] text-gray-600 leading-tight">
              扫描二维码添加顾问
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
