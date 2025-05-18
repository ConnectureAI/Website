import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <section className="py-32 px-4 flex items-center min-h-screen bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-10">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary inline-flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;