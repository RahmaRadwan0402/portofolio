import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 80 },
    
  ];

  const toolsSkills: Skill[] = [
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Figma', level: 75 }, 
    { name: 'Responsive Design', level: 95 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => (
    <motion.div 
      className="mb-6"
      variants={item}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="h-2.5 rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay * 0.1 }}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">{t('skills.frontend')}</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-secondary">{t('skills.tools')}</h3>
            {toolsSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;