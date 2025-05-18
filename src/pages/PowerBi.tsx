import React from 'react';
import { BarChart4, PieChart, LineChart, Table2, Laptop, Database, Settings2, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import FeatureSection from '../components/FeatureSection';
import CTA from '../components/CTA';

const PowerBi: React.FC = () => {
  const features = [
    {
      title: 'Custom Dashboard Creation',
      description: 'Bespoke Power BI dashboards designed specifically for your business needs and data requirements.',
      icon: <BarChart4 className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources including databases, spreadsheets, and cloud services.',
      icon: <Database className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Interactive Visualizations',
      description: 'Create dynamic, interactive charts and graphs that enable deeper data exploration.',
      icon: <PieChart className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'AI-Enhanced Analytics',
      description: 'Leverage AI capabilities to uncover hidden insights and patterns in your business data.',
      icon: <LineChart className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Automated Reporting',
      description: 'Set up scheduled reports and alerts to keep stakeholders informed with the latest data.',
      icon: <Table2 className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Mobile Accessibility',
      description: 'Access your dashboards anytime, anywhere with responsive designs for all devices.',
      icon: <Laptop className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <>
      <PageHeader 
        title="Power BI Dashboard Solutions"
        subtitle="Transform your data into actionable insights with custom Power BI dashboards enhanced by artificial intelligence."
        backgroundImage="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visualize Data Like Never Before</h2>
              <p className="text-lg text-gray-600 mb-6">
                At ConnectureAI, we combine the power of Microsoft's Power BI platform with our artificial intelligence expertise to create dashboard solutions that transform raw data into clear, actionable business insights.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our custom Power BI dashboards go beyond standard visualizations by incorporating AI-powered analytics that can identify trends, anomalies, and opportunities that might otherwise remain hidden in your data.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're tracking sales performance, monitoring operational metrics, or analyzing customer behavior, our Power BI solutions provide the clarity and depth of insight needed to make better business decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Power BI Dashboard Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">AI-Enhanced Dashboards</h3>
                    <p className="text-white/80">
                      Our Power BI solutions incorporate advanced AI to uncover deeper insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4">Benefits of AI-Enhanced Power BI:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-primary-600 mt-0.5" />
                    <span>Uncover hidden patterns and correlations in complex datasets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings2 className="h-5 w-5 text-primary-600 mt-0.5" />
                    <span>Automated data preparation and cleansing powered by AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LineChart className="h-5 w-5 text-primary-600 mt-0.5" />
                    <span>Predictive analytics that forecast future trends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary-600 mt-0.5" />
                    <span>Natural language queries for easier data exploration</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection 
        title="Our Power BI Services"
        subtitle="Comprehensive solutions for your data visualization needs"
        features={features}
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Power BI Development Process
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We follow a structured approach to creating Power BI solutions that deliver maximum value.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Requirements Analysis</h3>
                <p className="text-gray-600">
                  We begin by thoroughly understanding your business goals, key metrics, and data sources to ensure our solution addresses your specific needs.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Data Integration</h3>
                <p className="text-gray-600">
                  We connect and consolidate data from various sources, ensuring proper relationships and data integrity for accurate analysis.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Dashboard Design</h3>
                <p className="text-gray-600">
                  Our team creates intuitive, visually appealing dashboards with the right mix of visualizations to communicate insights effectively.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">4</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">AI Enhancement</h3>
                <p className="text-gray-600">
                  We implement AI-powered features including predictive analytics, anomaly detection, and natural language querying capabilities.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">5</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Testing & Refinement</h3>
                <p className="text-gray-600">
                  We thoroughly test the solution with real data and refine based on user feedback to ensure it meets and exceeds expectations.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">6</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">Deployment & Support</h3>
                <p className="text-gray-600">
                  We deploy your solution, provide training, and offer ongoing support to ensure you get maximum value from your Power BI investment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA 
        title="Transform Your Data into Actionable Insights"
        subtitle="Contact us today to discuss how our Power BI solutions can help your business visualize and understand your data."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
};

export default PowerBi;