import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how ConnectureAI can help your business leverage the power of artificial intelligence."
        backgroundImage="https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our AI solutions? Want to discuss a potential project? We'd love to hear from you. Reach out using any of the methods below, or fill out the contact form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:sunnyg@berkeley.edu" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      sunnyg@berkeley.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:6046129585" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      (604) 612-9585
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Vancouver, British Columbia, Canada</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday - Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our AI solutions and services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">What industries do you serve?</h3>
              <p className="text-gray-600">
                We work with clients across various industries including retail, finance, manufacturing, healthcare, and technology. Our AI solutions can be tailored to meet the specific needs of your industry.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">How long does it take to implement an AI solution?</h3>
              <p className="text-gray-600">
                Implementation timelines vary depending on the complexity of the solution and your specific requirements. Simple projects might take a few weeks, while more complex solutions could take several months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">What data do you need to get started?</h3>
              <p className="text-gray-600">
                The specific data requirements depend on the AI solution you're interested in. Generally, we'll need access to relevant historical data related to the problem you're trying to solve. Don't worry if your data isn't perfectly organized—part of our service includes data preparation and cleaning.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">How do you ensure data privacy and security?</h3>
              <p className="text-gray-600">
                We take data security extremely seriously. We comply with all relevant Canadian privacy laws and implement robust security measures to protect your data. All data is encrypted both in transit and at rest, and we can sign NDAs before beginning any project.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-600">
                Yes, we offer various support and maintenance options for all our AI solutions. These can include regular updates, performance monitoring, additional training, and technical support. We'll work with you to determine the right level of ongoing support for your needs.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">What makes your AI solutions unique?</h3>
              <p className="text-gray-600">
                Our solutions stand out due to our focus on Canadian businesses, practical implementation approach, and commitment to delivering measurable business value. We don't just implement AI for its own sake—we ensure it solves real business problems and delivers ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;