import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useI18n } from '../../lib/i18n-context';

const blogPosts = {
  zh: [
    {
      id: 1,
      title: '2025年新西兰房贷市场展望',
      excerpt: '随着利率政策调整，2025年将是购房和转贷的好时机。本文分析最新市场趋势和策略建议...',
      category: '市场动态',
      date: '2025-01-15',
      readTime: '5分钟',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop'
    },
    {
      id: 2,
      title: '首次购房者完整指南：从零到交房',
      excerpt: '详细解读首次购房流程，包括Welcome Home Loan、First Home Grant申请，以及如何优化首付比例...',
      category: '贷款知识',
      date: '2025-01-10',
      readTime: '8分钟',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      title: '案例分享：自雇人士成功申请投资贷款',
      excerpt: 'Michelle顾问帮助一位自雇华人客户，通过优化财务报表，成功获批150万投资房贷款...',
      category: '成功案例',
      date: '2025-01-05',
      readTime: '6分钟',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop'
    }
  ],
  en: [
    {
      id: 1,
      title: '2025 NZ Mortgage Market Outlook',
      excerpt: 'With interest rate policy adjustments, 2025 presents opportunities for home buyers and refinancing...',
      category: 'Market Updates',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop'
    },
    {
      id: 2,
      title: 'First Home Buyer Complete Guide',
      excerpt: 'Comprehensive guide covering Welcome Home Loan, First Home Grant applications, and deposit optimization...',
      category: 'Mortgage Tips',
      date: '2025-01-10',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      title: 'Case Study: Self-Employed Investment Loan Success',
      excerpt: 'How Michelle helped a self-employed client secure $1.5M investment property loan through financial optimization...',
      category: 'Success Stories',
      date: '2025-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop'
    }
  ]
};

export function BlogSection() {
  const { locale } = useI18n();
  const posts = blogPosts[locale];

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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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
      </div>
    </section>
  );
}
