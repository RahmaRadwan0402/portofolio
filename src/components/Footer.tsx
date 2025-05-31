import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin,  Code } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/RahmaRadwan0402 ', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rahma-radwan-youssef-91078a353/ ', label: 'LinkedIn' },
   
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">Rahma Radwan</span>
            </div>
            <p className="text-gray-400 max-w-md">
              {t('hero.description')}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="flex space-x-4 mb-6 justify-center md:justify-end">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-gray-800 hover:bg-primary transition-colors duration-300 p-2 rounded-full"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400">
              &copy; {currentYear} Rahma Radwan. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {t('footer.designed')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;