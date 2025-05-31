import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, LayoutGrid, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t, dir } = useLanguage();

  const stats = [
    { icon: <Clock className="w-8 h-8 text-primary" />, value: '1+', label: t('about.experience') },
    { icon: <LayoutGrid className="w-8 h-8 text-secondary" />, value: '15+', label: t('about.projects') },
    { icon: <Users className="w-8 h-8 text-accent" />, value: '15+', label: t('about.clients') },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className={`w-full md:w-1/2 ${dir === 'rtl' ? 'md:order-2' : ''}`}
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3727468/pexels-photo-3727468.jpeg" 
                  alt="About Professional Developer" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <div className="grid grid-cols-3 gap-6">
                      {stats.map((stat, index) => (
                        <motion.div 
                          key={index} 
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <motion.div 
                            className="flex justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {stat.icon}
                          </motion.div>
                          <div className="text-2xl font-bold text-white mt-3">{stat.value}</div>
                          <div className="text-sm text-gray-200">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={`w-full md:w-1/2 ${dir === 'rtl' ? 'md:order-1 text-right' : ''}`}
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">{t('about.title')}</h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-6">
              {t('about.description')
                .split('\n\n')
                .map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;