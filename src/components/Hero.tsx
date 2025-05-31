import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, Send, Code, Braces, Laptop, Palette, Sparkles, Box, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();

  const techIcons = [
    { icon: <Code className="w-6 h-6" />, color: 'from-primary/20 to-primary/10' },
    { icon: <Braces className="w-6 h-6" />, color: 'from-secondary/20 to-secondary/10' },
    { icon: <Box className="w-6 h-6" />, color: 'from-accent/20 to-accent/10' },
    { icon: <Layers className="w-6 h-6" />, color: 'from-primary/20 to-primary/10' },
    { icon: <Cpu className="w-6 h-6" />, color: 'from-secondary/20 to-secondary/10' },
  ];

  return (
    <section id="home" className="pt-24 pb-16 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            className={`w-full lg:w-1/2 ${dir === 'rtl' ? 'lg:order-2' : ''}`}
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p 
              className="text-primary text-lg mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t('hero.greeting')}
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t('hero.name')}
            </motion.h1>
            <motion.div 
              className="h-[3.5rem] md:h-[4.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-2xl md:text-3xl font-bold">
                <Typewriter
                  options={{
                    strings: [
                      t('hero.title'),
                      'React Developer',
                      'UI/UX Enthusiast',
                      'TypeScript Expert'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: 'bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text',
                    cursorClassName: 'text-primary'
                  }}
                />
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t('hero.description')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4 mr-2" />
                {t('hero.cta.contact')}
              </motion.a>
              <motion.a 
                href="./src/locales/images/Rahma.cv.pdf" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('hero.cta.resume')}
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={`w-full lg:w-1/2 ${dir === 'rtl' ? 'lg:order-1' : ''}`}
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 rounded-2xl blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative backdrop-blur-lg rounded-2xl p-8 border border-white/10 dark:border-gray-700/30 bg-white/5 dark:bg-gray-800/5">
                <motion.div 
                  className="grid grid-cols-3 gap-4 mb-8"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {techIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} backdrop-blur-md flex items-center justify-center group`}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        show: { opacity: 1, scale: 1, y: 0 }
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-primary/80 group-hover:text-primary transition-colors duration-300"
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>
                  ))}
                  <motion.div
                    className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center relative overflow-hidden"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <Code className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                </motion.div>
                
                <div className="space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="relative h-3 rounded-full overflow-hidden bg-gray-200/10"
                      initial={{ width: "100%" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;