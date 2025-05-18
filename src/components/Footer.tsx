import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <BrainCircuit className="h-7 w-7 text-primary-400" />
              <span className="text-xl font-bold">
                Connecture<span className="text-accent-500">AI</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Canadian AI solutions for businesses looking to leverage the power of artificial intelligence in SEO, stock research, forecasting, and data visualization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-seo" className="text-gray-400 hover:text-white transition duration-200">
                  AI SEO
                </Link>
              </li>
              <li>
                <Link to="/stock-research" className="text-gray-400 hover:text-white transition duration-200">
                  Stock Research
                </Link>
              </li>
              <li>
                <Link to="/forecasting" className="text-gray-400 hover:text-white transition duration-200">
                  AI Forecasting
                </Link>
              </li>
              <li>
                <Link to="/power-bi" className="text-gray-400 hover:text-white transition duration-200">
                  Power BI Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <a href="mailto:sunnyg@berkeley.edu" className="text-gray-400 hover:text-white transition duration-200">
                  sunnyg@berkeley.edu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <a href="tel:6046129585" className="text-gray-400 hover:text-white transition duration-200">
                  (604) 612-9585
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  Vancouver, BC, Canada
                </span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ConnectureAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;