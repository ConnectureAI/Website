import React from 'react';
import { TrendingUp, LineChart, BarChart4, Activity, Eye, BrainCircuit, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import FeatureSection from '../components/FeatureSection';
import CTA from '../components/CTA';

const StockResearch: React.FC = () => {
  const features = [
    {
      title: 'Market Sentiment Analysis',
      description: 'Our AI analyzes news, social media, and financial reports to gauge market sentiment for better investment decisions.',
      icon: <Activity className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Options Strategy Optimization',
      description: 'Maximize your options trading with AI-powered recommendations based on volatility forecasts and market conditions.',
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Technical Pattern Recognition',
      description: 'Our AI identifies complex chart patterns and technical signals that human analysts might miss.',
      icon: <LineChart className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Fundamental Analysis',
      description: 'Get deep insights into company financials, valuation metrics, and growth potential through AI-powered analysis.',
      icon: <BarChart4 className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Risk Assessment',
      description: 'Understand potential risks in your investment strategy with AI-powered scenario analysis and stress testing.',
      icon: <ShieldCheck className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Real-time Market Insights',
      description: 'Stay ahead of market movements with AI-generated alerts and insights delivered in real-time.',
      icon: <Zap className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <>
      <PageHeader 
        title="AI-Powered Stock & Options Research"
        subtitle="Make data-driven investment decisions with our advanced artificial intelligence analysis and insights."
        backgroundImage="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transform Your Investment Strategy</h2>
              <p className="text-lg text-gray-600 mb-6">
                ConnectureAI's stock and options research platform leverages advanced artificial intelligence to analyze vast amounts of market data, identify patterns, and generate actionable insights that give investors a competitive edge.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our AI systems process information from multiple sources including financial statements, economic indicators, news articles, social media sentiment, and technical chart patterns to provide a comprehensive view of potential investments.
              </p>
              <p className="text-lg text-gray-600">
                With a focus on the Canadian market while maintaining global perspective, our research tools help investors at all levels make more informed decisions, manage risk effectively, and potentially improve returns.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-primary-900 p-6">
                <h3 className="text-xl font-bold text-white mb-4">AI Advantage in Stock Research</h3>
                <p className="text-primary-200">
                  Our AI analyzes data points at a scale impossible for human analysts, uncovering hidden insights and patterns.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Pattern Recognition</h4>
                    <p className="text-sm text-gray-600">Identifies complex market patterns human analysts might miss</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sentiment Analysis</h4>
                    <p className="text-sm text-gray-600">Processes thousands of news articles and social media posts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-time Processing</h4>
                    <p className="text-sm text-gray-600">Analyzes market changes as they happen for timely insights</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Bias Elimination</h4>
                    <p className="text-sm text-gray-600">Makes decisions based on data, not emotions or cognitive biases</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Our Stock & Options Research Services"
        subtitle="Advanced AI tools for smarter investing"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Canadian Market Focus</h2>
              <p className="text-lg text-gray-600 mb-6">
                While our AI systems monitor global markets, we maintain a special focus on Canadian equities and options, giving investors in Canada access to insights specifically calibrated for our unique market dynamics.
              </p>
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">TSX & TSX Venture Expertise</h3>
                  <p className="text-gray-600">Our AI is trained on historical data from Canadian exchanges, providing deeper insights into TSX and TSX Venture listed companies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Resource Sector Analysis</h3>
                  <p className="text-gray-600">Specialized models for analyzing Canada's important resource sectors including mining, energy, and forestry stocks.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Regulatory Awareness</h3>
                  <p className="text-gray-600">Our analysis takes into account Canadian securities regulations and their potential impact on trading strategies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cross-Border Insights</h3>
                  <p className="text-gray-600">Analysis of Canada-US market relationships, currency effects, and dual-listed stocks for comprehensive North American coverage.</p>
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
                  src="https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Stock market analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA 
        title="Elevate Your Investment Strategy"
        subtitle="Discover how our AI-powered stock and options research can help you make more informed investment decisions."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
};

export default StockResearch;