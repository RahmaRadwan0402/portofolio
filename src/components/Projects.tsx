import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string;
  demoUrl: string;
  sourceUrl: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.1.title'),
      description: t('projects.1.description'),
    image: "/images/img1.jpeg",

      technologies: t('projects.1.tech'),
      demoUrl: 'https://portofolio-six-rosy.vercel.app/',
      sourceUrl: 'https://github.com/RahmaRadwan0402/portofolio.git',
    },
    {
      id: 2,
      title: t('projects.2.title'),
      description: t('projects.2.description'),
      image: '/images/img2.jpeg',
      technologies: t('projects.2.tech'),
      demoUrl: '#',
      sourceUrl: 'https://github.com/RahmaRadwan0402/e-commerce.git',
    },
    {
      id: 3,
      title: t('projects.3.title'),
      description: t('projects.3.description'),
      image: '/images/img3.jpeg',
      technologies: t('projects.3.tech'),
      demoUrl: '#',
      sourceUrl: 'https://github.com/RahmaRadwan0402/tech.git',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="card overflow-hidden group"
              variants={item}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3">
                      <a href={project.demoUrl} className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                      <a href={project.sourceUrl} className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="text-sm font-medium text-primary">{project.technologies}</div>
                <div className="mt-4 flex space-x-4">
                  <a href={project.demoUrl} className="text-sm font-medium text-primary hover:text-primary/80 flex items-center">
                    {t('projects.view')}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a href={project.sourceUrl} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center">
                    {t('projects.source')}
                    <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;