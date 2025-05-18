import React from 'react';
import { Search, Tag, Globe, TrendingUp, BarChart4, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import FeatureSection from '../components/FeatureSection';
import CTA from '../components/CTA';

const AiSeo: React.FC = () => {
  const features = [
    {
      title: 'Keyword Intelligence',
      description: 'Discover high-value keywords with our AI-powered analysis that goes beyond traditional keyword research.',
      icon: <Tag className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Content Optimization',
      description: 'Get AI-generated recommendations to optimize your content for search engines and user engagement.',
      icon: <Search className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Technical SEO Audits',
      description: 'Identify and fix technical issues that could be holding back your search performance.',
      icon: <Globe className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Competitor Analysis',
      description: 'Gain insights into your competitors\' strategies and identify opportunities to outrank them.',
      icon: <Users className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Performance Tracking',
      description: 'Monitor your SEO performance with real-time analytics and actionable insights.',
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'ROI Reporting',
      description: 'Understand the business impact of your SEO efforts with clear, comprehensive reporting.',
      icon: <BarChart4 className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <>
      <PageHeader 
        title="AI-Powered SEO Solutions"
        subtitle="Leverage artificial intelligence to improve your search engine rankings and drive qualified traffic to your website."
        backgroundImage="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transform Your Search Strategy</h2>
              <p className="text-lg text-gray-600 mb-6">
                At ConnectureAI, we combine cutting-edge artificial intelligence with deep SEO expertise to deliver results that traditional approaches simply can't match. Our AI SEO solutions are designed to help Canadian businesses achieve higher rankings, more traffic, and better conversion rates.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By analyzing millions of data points across search engines, competitor websites, and user behavior patterns, our AI systems can identify opportunities and strategies that human analysts might miss. This data-driven approach leads to more effective SEO campaigns and better ROI.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a small business looking to improve local search visibility or an enterprise-level company targeting national or international markets, our AI SEO solutions can be tailored to your specific goals and challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Increase Organic Traffic</h3>
                    <p className="text-gray-600">Our clients see an average 68% increase in organic search traffic within 6 months of implementation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Higher Conversion Rates</h3>
                    <p className="text-gray-600">By targeting high-intent keywords identified by our AI, clients typically see a 42% improvement in conversion rates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reduced SEO Costs</h3>
                    <p className="text-gray-600">Our AI-focused approach often reduces overall SEO spending by 35% while delivering better results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Canadian Market Expertise</h3>
                    <p className="text-gray-600">Our AI models are specifically trained on Canadian search patterns and consumer behavior for better local results.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Our AI SEO Services"
        subtitle="Comprehensive solutions powered by artificial intelligence"
        features={features}
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our AI SEO Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Analysis & Strategy</h3>
                  <p className="text-gray-600">We begin with a comprehensive analysis of your current SEO performance, business goals, and competitive landscape. Our AI systems then develop a customized strategy designed to achieve your specific objectives.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Implementation</h3>
                  <p className="text-gray-600">Our team of SEO experts works with you to implement the recommended changes to your website, content, and overall digital presence, guided by AI-generated insights.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Continuous Optimization</h3>
                  <p className="text-gray-600">SEO is not a one-time project. Our AI systems continuously monitor your performance, search engine updates, and competitor activities, making real-time adjustments to your strategy.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Reporting & Insights</h3>
                  <p className="text-gray-600">You'll receive regular reports with clear, actionable insights about your SEO performance, including detailed analysis from our AI and recommendations for ongoing improvement.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-xl overflow-hidden h-[500px]">
                <img 
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI SEO Process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Transform Your SEO Strategy?"
        subtitle="Contact us today to discover how our AI-powered SEO solutions can help your business achieve better search visibility and more conversions."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
};

export default AiSeo;