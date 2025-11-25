import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, X, Download, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useI18n } from '../../lib/i18n-context';
import { BlogThumbnailImage } from '../figma/ResponsiveImage';
import { trackBlogRead, trackPDFDownload } from '../../lib/analytics';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  contentType: 'pdf';
  pdfUrl: string;
}

const blogPosts: { zh: BlogPost[], en: BlogPost[] } = {
  zh: [
    {
      id: 1,
      title: '深度解析：新西兰央行2025年10月官方现金利率下调的全面影响',
      excerpt: 'RBNZ大胆下调OCR 50个基点至2.5%，这一"震慑疗法"决策如何影响你的房贷、储蓄和投资？从借款人到储户，从房市到纽元汇率，全方位解读央行政策及应对策略...',
      category: '市场动态',
      date: '2025-01-15',
      readTime: '12分钟',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      contentType: 'pdf',
      pdfUrl: '/blog-content/降息对大众生活的影响分析.pdf'
    },
    {
      id: 2,
      title: '房贷利率"快触底"！锁多久更划算？',
      excerpt: '多家银行表示利率已接近最低点，6个月、12个月还是2-3年锁定？灵活性与确定性如何平衡？分段策略让你睡得最香，专业顾问3分钟带你看懂当前形势和最优选择...',
      category: '贷款知识',
      date: '2025-01-12',
      readTime: '5分钟',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      contentType: 'pdf',
      pdfUrl: '/blog-content/房贷利率！快触底？到期后，锁多久更划算？.pdf'
    },
    {
      id: 3,
      title: '用真诚与专业——为每一个家庭"贷"来安心的未来',
      excerpt: '从业10余年，Michelle见证了无数家庭的购房梦想。真实案例分享：首次购房者如何克服挑战成功上车？自雇人士怎样优化财务获得投资贷款？专业服务+人性化关怀，让贷款之路更温暖...',
      category: '顾问访谈',
      date: '2025-01-08',
      readTime: '8分钟',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      contentType: 'pdf',
      pdfUrl: '/blog-content/用真诚与专业为每一个家庭贷来安心的未来.pdf'
    }
  ],
  en: [
    {
      id: 1,
      title: 'In-Depth Analysis: RBNZ October 2025 OCR Cut and Its Full Impact',
      excerpt: 'RBNZ boldly cut OCR by 50 basis points to 2.5% – how does this "shock therapy" affect your mortgage, savings, and investments? From borrowers to savers, housing market to NZD exchange rate, comprehensive policy analysis and response strategies...',
      category: 'Market Updates',
      date: '2025-01-15',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      contentType: 'pdf',
      pdfUrl: '/blog-content/降息对大众生活的影响分析.pdf'
    },
    {
      id: 2,
      title: 'Mortgage Rates Near Bottom – How Long Should You Fix?',
      excerpt: 'Banks indicate rates approaching historic lows. Fix for 6 months, 12 months, or 2-3 years? Balance flexibility with certainty. Split strategy for peace of mind – expert guidance to navigate current market conditions in 3 minutes...',
      category: 'Mortgage Tips',
      date: '2025-01-12',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      contentType: 'pdf',
      pdfUrl: '/blog-content/房贷利率！快触底？到期后，锁多久更划算？.pdf'
    },
    {
      id: 3,
      title: 'Building Dreams with Integrity – Securing a Confident Future for Every Family',
      excerpt: 'With over 10 years of experience, Michelle has witnessed countless families achieve their homeownership dreams. Real success stories: How first-home buyers overcome challenges? How self-employed clients optimize finances for investment loans? Professional service with personal care...',
      category: 'Personal Interview',
      date: '2025-01-08',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      contentType: 'pdf',
      pdfUrl: '/blog-content/用真诚与专业为每一个家庭"贷"来安心的未来.pdf'
    }
  ]
};

export function BlogSection() {
  const { locale } = useI18n();
  const posts = blogPosts[locale];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? posts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === posts.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / posts.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="mb-4">
              {locale === 'zh' ? '最新文章' : 'Latest Articles'}
            </h2>
            <p className="text-xl text-gray-600">
              {locale === 'zh'
                ? '专业见解，助您做出明智决策'
                : 'Expert insights for informed decisions'}
            </p>
          </div>
          <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700">
            {locale === 'zh' ? '查看全部' : 'View All'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Blog Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                trackBlogRead(post.title, post.id, 'clicked');
                trackPDFDownload(post.title, post.pdfUrl);
                window.open(post.pdfUrl, '_blank');
              }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full hover:scale-105 transition-transform duration-300">
                  <BlogThumbnailImage
                    src={post.image}
                    alt={post.title}
                  />
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge variant="outline" className="mb-3">
                  {post.category}
                </Badge>

                {/* Title */}
                <h3 className="mb-3 line-clamp-2 hover:text-yellow-600 transition">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Carousel - Mobile */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-8"
          >
            {posts.map((post) => (
              <Card 
                key={post.id} 
                className="min-w-[85vw] snap-center overflow-hidden shadow-lg cursor-pointer"
                onClick={() => {
                  trackBlogRead(post.title, post.id, 'clicked');
                  trackPDFDownload(post.title, post.pdfUrl);
                  window.open(post.pdfUrl, '_blank');
                }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <BlogThumbnailImage
                    src={post.image}
                    alt={post.title}
                  />
                </div>

                <CardContent className="p-6">
                  {/* Category Badge */}
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-yellow-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
