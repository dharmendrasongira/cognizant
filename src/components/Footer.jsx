import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css'; // We'll create a custom CSS file for animations

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 animate-footer-enter">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="animate-slide-in-left">
          <h3 className="text-xl font-bold mb-4 animate-fade-in">Cognizant</h3>
          <p className="text-blue-200 animate-fade-in delay-100">
            Driving digital transformation and technology innovation for global businesses.
          </p>
        </div>
        
        <div className="animate-slide-in-up">
          <h4 className="text-lg font-semibold mb-4 animate-fade-in">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'Services', 'Contact', 'Careers'].map((link, index) => (
              <li 
                key={link} 
                className={`animate-fade-in delay-${200 + (index * 100)}`}
              >
                <a 
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-blue-300 transition-all duration-300 group"
                >
                  <span className="group-hover:ml-2 transition-all duration-300 inline-block">
                    {link}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="animate-slide-in-right">
          <h4 className="text-lg font-semibold mb-4 animate-fade-in">Connect With Us</h4>
          <div className="flex space-x-4 animate-social-icons">
            {[
              { Icon: Facebook, link: 'https://facebook.com/cognizant' },
              { Icon: Twitter, link: 'https://twitter.com/cognizant' },
              { Icon: Linkedin, link: 'https://linkedin.com/company/cognizant' },
              { Icon: Instagram, link: 'https://instagram.com/cognizant' }
            ].map(({ Icon, link }, index) => (
              <a 
                key={link}
                href={link}
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:text-blue-300 transition-transform duration-300 transform hover:scale-110 animate-icon-pop delay-${300 + (index * 100)}`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="mt-4 text-blue-200 flex items-center justify-between animate-fade-in delay-500">
            <p>© 2025 Cognizant. All Rights Reserved.</p>
            <a 
              href="/privacy-policy" 
              className="text-sm hover:text-blue-300 transition-colors duration-300 group"
            >
              <span className="group-hover:ml-1 transition-all duration-300 inline-block">
                Privacy Policy
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;