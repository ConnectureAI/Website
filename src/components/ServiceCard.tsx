import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  delay = 0
}) => {
  return (
    <motion.div 
      className="card group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors mt-auto"
        >
          Learn more 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;