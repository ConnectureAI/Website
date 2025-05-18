import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="bg-primary-900 py-16 md:py-20">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-primary-200 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={buttonLink} className="btn bg-white text-primary-700 hover:bg-gray-100 group">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="btn bg-transparent text-white border border-white hover:bg-primary-800">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;