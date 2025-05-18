import React from 'react';
import { LineChart, TrendingUp, Calendar, BarChart4, PieChart, Clock, Brain, Database } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import FeatureSection from '../components/FeatureSection';
import CTA from '../components/CTA';

const Forecasting: React.FC = () => {
  const features = [
    {
      title: 'Time Series Forecasting',
      description: 'Predict future values based on historical patterns with advanced AI time series analysis.',
      icon: <LineChart className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Demand Prediction',
      description: 'Optimize inventory and resources with AI-powered demand forecasting models.',
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Seasonal Trend Analysis',
      description: 'Identify and predict seasonal patterns in your business data for better planning.',
      icon: <Calendar className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Sales Forecasting',
      description: 'Project future sales with models that account for multiple variables and market factors.',
      icon: <BarChart4 className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Market Share Prediction',
      description: 'Forecast potential market share changes and competitive landscape shifts.',
      icon: <PieChart className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Real-time Forecasting',
      description: 'Update predictions automatically as new data becomes available for timely decision-making.',
      icon: <Clock className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <>
      <PageHeader 
        title="AI-Powered Forecasting"
        subtitle="Predict future trends and make data-driven decisions with our advanced artificial intelligence forecasting solutions."
        backgroundImage="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Predict the Future with AI</h2>
              <p className="text-lg text-gray-600 mb-6">
                ConnectureAI's forecasting solutions use state-of-the-art machine learning algorithms to analyze historical data, identify patterns, and predict future outcomes with remarkable accuracy. Our AI models can process vast amounts of information from multiple sources to generate forecasts that help businesses plan more effectively.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need to forecast sales, demand, resource requirements, or market trends, our AI systems can be trained on your specific data to provide insights that drive better decision-making and business performance.
              </p>
              <p className="text-lg text-gray-600">
                Our Canadian-focused approach ensures that forecasts take into account the unique aspects of the Canadian market, including regional economic factors, seasonality patterns, and industry-specific trends relevant to Canadian businesses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="bg-primary-900 p-6">
                <h3 className="text-xl font-bold text-white mb-2">How Our AI Forecasting Works</h3>
                <p className="text-primary-200">
                  Our advanced forecasting models combine multiple AI techniques for optimal prediction accuracy.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Database className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">1. Data Integration</h4>
                      <p className="text-sm text-gray-600">We collect and integrate data from multiple relevant sources.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">2. AI Processing</h4>
                      <p className="text-sm text-gray-600">Our machine learning models analyze the data to identify patterns and relationships.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <LineChart className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">3. Forecast Generation</h4>
                      <p className="text-sm text-gray-600">The AI produces predictions with confidence intervals and scenario analysis.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">4. Continuous Improvement</h4>
                      <p className="text-sm text-gray-600">Models automatically retrain as new data arrives, improving over time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Our Forecasting Services"
        subtitle="Predict with confidence using advanced AI"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Forecasting for Every Industry</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI forecasting solutions can be tailored to meet the specific needs of various industries and business functions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">Retail & E-commerce</h3>
                  <p className="text-gray-600">Forecast product demand, seasonal trends, and inventory requirements.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                  <p className="text-gray-600">Predict production needs, supply chain requirements, and maintenance timing.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">Financial Services</h3>
                  <p className="text-gray-600">Forecast market movements, risk factors, and economic indicators.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                  <p className="text-gray-600">Predict patient admissions, resource needs, and treatment outcomes.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">Energy</h3>
                  <p className="text-gray-600">Forecast energy demand, production, and pricing fluctuations.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                  <h3 className="font-semibold text-lg mb-2">Telecommunications</h3>
                  <p className="text-gray-600">Predict network loads, service demand, and infrastructure needs.</p>
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
                  src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Forecasting Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to See into the Future?"
        subtitle="Discover how our AI forecasting solutions can help your business make better decisions with accurate predictions."
        buttonText="Start Forecasting"
        buttonLink="/contact"
      />
    </>
  );
};

export default Forecasting;