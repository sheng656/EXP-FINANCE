import { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

/**
 * 响应式图片组件 - 自动优化加载性能
 * 
 * 功能:
 * 1. 根据屏幕尺寸加载不同大小的图片
 * 2. 支持 WebP 格式降级到 JPG/PNG
 * 3. 懒加载非关键图片
 * 4. 预加载关键图片
 * 5. 移动端优先策略
 */
export function ResponsiveImage({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw',
  priority = false,
  quality = 85
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  // 生成不同尺寸的图片路径
  const generateSrcSet = (originalSrc: string) => {
    // 如果是外部URL (Unsplash等)，使用其提供的参数
    if (originalSrc.startsWith('http')) {
      return {
        mobile: originalSrc.replace(/w=\d+/, 'w=640').replace(/h=\d+/, 'h=400'),
        tablet: originalSrc.replace(/w=\d+/, 'w=1024').replace(/h=\d+/, 'h=640'),
        desktop: originalSrc.replace(/w=\d+/, 'w=1920').replace(/h=\d+/, 'h=1080'),
      };
    }

    // 本地图片：生成不同尺寸版本的路径
    const ext = originalSrc.split('.').pop();
    const basePath = originalSrc.replace(`.${ext}`, '');
    
    return {
      mobile: `${basePath}-mobile.${ext}`,
      tablet: `${basePath}-tablet.${ext}`,
      desktop: originalSrc,
      webpMobile: `${basePath}-mobile.webp`,
      webpTablet: `${basePath}-tablet.webp`,
      webpDesktop: `${basePath}.webp`,
    };
  };

  const srcSet = generateSrcSet(src);

  // 根据屏幕尺寸选择合适的图片
  useEffect(() => {
    const updateImageSrc = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        setCurrentSrc(srcSet.mobile);
      } else if (width < 1024) {
        setCurrentSrc(srcSet.tablet);
      } else {
        setCurrentSrc(srcSet.desktop);
      }
    };

    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);
    
    return () => window.removeEventListener('resize', updateImageSrc);
  }, [src]);

  // 构建 srcset 和 sizes
  const buildSrcSet = () => {
    if (src.startsWith('http')) {
      return `${srcSet.mobile} 640w, ${srcSet.tablet} 1024w, ${srcSet.desktop} 1920w`;
    }
    return undefined;
  };

  return (
    <picture>
      {/* WebP 格式优先 (现代浏览器) */}
      {!src.startsWith('http') && (
        <>
          <source
            type="image/webp"
            srcSet={`${srcSet.webpMobile} 640w, ${srcSet.webpTablet} 1024w, ${srcSet.webpDesktop} 1920w`}
            sizes={sizes}
          />
          <source
            type="image/jpeg"
            srcSet={buildSrcSet()}
            sizes={sizes}
          />
        </>
      )}
      
      {/* 降级方案 */}
      <img
        src={currentSrc || src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        srcSet={src.startsWith('http') ? buildSrcSet() : undefined}
        sizes={sizes}
      />
      
      {/* 加载占位符 */}
      {!isLoaded && (
        <div className={`${className} absolute inset-0 bg-gray-200 animate-pulse`} />
      )}
    </picture>
  );
}

/**
 * 团队成员照片专用组件
 * 针对 609x812 显示尺寸优化
 */
export function TeamMemberImage({ src, alt }: { src: string; alt: string }) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 609px"
      quality={80}
    />
  );
}

/**
 * 博客缩略图专用组件
 * 针对 609x381 显示尺寸优化
 */
export function BlogThumbnailImage({ src, alt }: { src: string; alt: string }) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 609px"
      quality={75}
    />
  );
}

/**
 * Hero背景图专用组件
 * 全屏显示，优先加载
 */
export function HeroBackgroundImage({ src, alt }: { src: string; alt: string }) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      className="w-full h-full object-cover opacity-30"
      sizes="100vw"
      priority={true}
      quality={75}
    />
  );
}

/**
 * Logo图片专用组件
 * 小尺寸，优先加载
 */
export function LogoImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      decoding="sync"
      width="186"
      height="70"
    />
  );
}
