import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  LineChart, 
  BarChart4,
  ShieldCheck,
  Zap,
  Globe,
  LucideMapPin
} from 'lucide-react';

import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-r from-primary-950 via-primary-900 to-secondary-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-700/20 via-primary-900/20 to-transparent"></div>
        <div className="container-custom relative z-10 pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-700/30 text-primary-200 text-sm font-medium mb-6">
                Canadian AI Solutions
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your Business With <span className="text-accent-500">AI-Powered</span> Insights
              </h1>
              <p className="text-lg md:text-xl text-primary-200 mb-8">
                ConnectureAI provides cutting-edge artificial intelligence solutions to help Canadian businesses optimize SEO, analyze stock markets, forecast trends, and visualize data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <h3 className="text-xl text-white font-semibold mb-3">AI-Powered Solutions</h3>
                    <p className="text-primary-100 mb-4">Leverage machine learning and AI to gain competitive advantages in your industry.</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-success-400" />
                        <span className="text-sm text-white">Data Security</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-warning-400" />
                        <span className="text-sm text-white">Fast Results</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary-400" />
                        <span className="text-sm text-white">Global Insights</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LucideMapPin className="h-5 w-5 text-accent-400" />
                        <span className="text-sm text-white">Canadian Focus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600">
              Delivering advanced artificial intelligence solutions tailored for Canadian businesses across multiple domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="AI SEO"
              description="Optimize your website's search performance using AI-powered analysis and recommendations."
              icon={<Search className="h-6 w-6 text-primary-600" />}
              link="/ai-seo"
              delay={1}
            />
            <ServiceCard
              title="Stock Research"
              description="Make data-driven investment decisions with AI analysis of stock and options markets."
              icon={<TrendingUp className="h-6 w-6 text-primary-600" />}
              link="/stock-research"
              delay={2}
            />
            <ServiceCard
              title="AI Forecasting"
              description="Predict future trends and outcomes using advanced machine learning algorithms."
              icon={<LineChart className="h-6 w-6 text-primary-600" />}
              link="/forecasting"
              delay={3}
            />
            <ServiceCard
              title="Power BI Dashboards"
              description="Transform your data into interactive visual insights with custom Power BI solutions."
              icon={<BarChart4 className="h-6 w-6 text-primary-600" />}
              link="/power-bi"
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Canadian AI Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                At ConnectureAI, we leverage Canada's position as a global leader in artificial intelligence research to deliver cutting-edge solutions for businesses across industries.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Led by Principal Architect and Founder Sunny Grewal, our team combines technical expertise with business acumen to create AI systems that drive real-world results.
              </p>
              <Link to="/about" className="btn btn-primary">
                About ConnectureAI
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="ConnectureAI team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-white font-medium">
                      "Our mission is to make AI accessible and practical for Canadian businesses of all sizes."
                    </p>
                    <p className="text-sm text-white/80 mt-2">— Sunny Grewal, Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Canadian Focus */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Canadian AI Solutions</h2>
            <p className="text-lg text-gray-600">
              We're proud to be a Canadian company serving Canadian businesses with AI solutions that respect our unique market needs and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-white rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-red-50 rounded-lg mb-4">
                <div className="h-8 w-8 rounded-sm bg-accent-600"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Canadian Data Focus</h3>
              <p className="text-gray-600">
                Our AI models are trained on Canadian market data, ensuring better performance for local businesses.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-red-50 rounded-lg mb-4">
                <div className="h-8 w-8 rounded-sm bg-accent-600"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy Compliant</h3>
              <p className="text-gray-600">
                Our solutions are designed with Canadian privacy laws in mind, keeping your data secure and compliant.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 flex items-center justify-center bg-red-50 rounded-lg mb-4">
                <div className="h-8 w-8 rounded-sm bg-accent-600"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Local Support</h3>
              <p className="text-gray-600">
                Get expert support from a team that understands the Canadian business landscape and your unique challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Harness the Power of AI?"
        subtitle="Get in touch with our team today to discuss how ConnectureAI can help your business thrive."
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </>
  );
};

export default Home;