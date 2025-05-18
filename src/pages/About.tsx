import React from 'react';
import { motion } from 'framer-motion';
import { Map, Mail, Phone, Award, Users, Globe, BrainCircuit } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';

const About: React.FC = () => {
  const team = [
    {
      name: 'Sunny Grewal',
      role: 'Principal Architect & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 15 years of experience in AI and machine learning, Sunny leads ConnectureAI with a vision to make advanced AI solutions accessible to Canadian businesses.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously explore new AI technologies and approaches to deliver cutting-edge solutions.',
      icon: <BrainCircuit className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Canadian Focus',
      description: 'We build AI solutions tailored for Canadian businesses, considering our unique market and regulatory environment.',
      icon: <Map className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions that exceed client expectations.',
      icon: <Award className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure our solutions address their specific needs and goals.',
      icon: <Users className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <>
      <PageHeader 
        title="About ConnectureAI"
        subtitle="Canadian AI solutions crafted by experts for businesses looking to leverage the power of artificial intelligence."
        backgroundImage="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                ConnectureAI was founded in 2023 by Sunny Grewal with a clear mission: to make advanced artificial intelligence solutions accessible to Canadian businesses of all sizes. Drawing on his extensive experience in machine learning and data science, Sunny recognized that many Canadian companies were struggling to implement AI effectively.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a specialized consulting service has grown into a comprehensive AI solutions provider, offering services across several domains including SEO optimization, stock market analysis, business forecasting, and data visualization through Power BI dashboards.
              </p>
              <p className="text-lg text-gray-600">
                Today, ConnectureAI is proud to serve clients across Canada, helping them leverage the power of artificial intelligence to gain competitive advantages, increase efficiency, and make better data-driven decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="ConnectureAI team working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Canadian AI Excellence</h3>
                <p className="text-white/90">
                  Leveraging Canada's position as a global leader in artificial intelligence research.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              At ConnectureAI, these core values guide everything we do and how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts behind ConnectureAI's innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="col-span-1 md:col-span-3 bg-white rounded-xl shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a 
                        href="mailto:sunnyg@berkeley.edu" 
                        className="text-gray-500 hover:text-primary-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href="tel:6046129585" 
                        className="text-gray-500 hover:text-primary-600 transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose ConnectureAI?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Canadian Expertise</h3>
                    <p className="text-gray-600">
                      We understand the Canadian market, regulations, and business environment, allowing us to provide AI solutions that are properly contextualized for local needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BrainCircuit className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-gray-600">
                      Our team brings deep expertise in machine learning, natural language processing, computer vision, and other AI disciplines, ensuring high-quality solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client-Focused Approach</h3>
                    <p className="text-gray-600">
                      We work closely with our clients to understand their specific challenges and goals, delivering tailored solutions rather than one-size-fits-all products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Our AI solutions have delivered measurable business impact across various industries, from improved search rankings to more accurate forecasts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-lg text-gray-600 mb-8">
                "Our mission at ConnectureAI is to democratize artificial intelligence for Canadian businesses, making advanced AI solutions accessible, practical, and impactful regardless of company size or technical expertise."
              </blockquote>
              <p className="text-gray-600 mb-6">
                We believe that AI should not be limited to large corporations with massive budgets. By developing approachable, scalable AI solutions and focusing on delivering clear business value, we're helping companies across Canada harness the transformative power of artificial intelligence.
              </p>
              <p className="text-gray-600">
                Our goal is to be Canada's leading provider of practical AI solutions that solve real business problems and create measurable competitive advantages for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Partner with ConnectureAI?"
        subtitle="Contact us today to discuss how our AI solutions can help your business thrive."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;