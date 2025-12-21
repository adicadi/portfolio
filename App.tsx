
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  Terminal,
  BrainCircuit,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  EXPERIENCES, 
  EDUCATION, 
  SKILLS 
} from './constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold heading-font gradient-text"
        >
          AC.
        </motion.span>
        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium hover:text-indigo-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-indigo-400 font-medium mb-4 tracking-wider flex items-center gap-2">
              <span className="w-8 h-[1px] bg-indigo-400"></span>
              GUTEN TAG, I AM
            </h2>
            <h1 className="text-6xl md:text-8xl font-black heading-font mb-6 leading-tight">
              {PERSONAL_INFO.name.split(' ')[0]} <br />
              <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              An <span className="text-white">AI Specialist</span> currently pursuing M.Sc. in AI at BTU Cottbus. I build intelligent systems that bridge the gap between complex data and real-world solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 border border-slate-700 hover:border-indigo-400 rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
                Get In Touch
              </a>
            </div>

            <div className="mt-16 flex gap-6">
              {[
                { icon: Github, href: PERSONAL_INFO.github },
                { icon: Linkedin, href: PERSONAL_INFO.linkedin },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#818cf8' }}
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all shadow-xl"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-16">
    <h3 className="text-indigo-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-bold heading-font text-white">{title}</h2>
  </div>
);

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
            <p className="text-indigo-400 text-sm font-medium">{project.subtitle}</p>
          </div>
<a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
            onClick={(e) => e.stopPropagation()} // optional safety
          >
            <ExternalLink size={20} />
          </a>        </div>

        <ul className="space-y-3 mb-6">
          {project.description.map((item, idx) => (
            <li key={idx} className="text-slate-400 text-sm leading-relaxed flex gap-2">
              <span className="text-indigo-500 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 group-hover:border-indigo-500/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0], index: number }> = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-12 border-l border-slate-800 last:pb-0"
  >
    <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
    
    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-colors group">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
          <p className="text-slate-400 font-medium">{exp.company}</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full uppercase tracking-wider">{exp.period}</span>
          <p className="text-xs text-slate-500 mt-1 flex items-center justify-end gap-1">
            <MapPin size={12} /> {exp.location}
          </p>
        </div>
      </div>
      <ul className="space-y-2">
        {exp.achievements.map((item, idx) => (
          <li key={idx} className="text-slate-400 text-sm flex gap-2">
            <ChevronRight size={14} className="text-indigo-500 mt-1 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Machine Learning': return <BrainCircuit className="text-indigo-400" />;
      case 'Programming': return <Terminal className="text-purple-400" />;
      case 'Cloud & DevOps': return <Cloud className="text-blue-400" />;
      case 'Data': return <Database className="text-pink-400" />;
      default: return <Code2 />;
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Arsenal" subtitle="Skills & Tools" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:scale-[1.02] transition-all hover:border-slate-700 shadow-xl"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                {getIcon(cat.category)}
              </div>
              <h4 className="text-xl font-bold text-white mb-6">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="text-sm text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800/50">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white heading-font mb-4">Let's Connect.</h2>
            <p className="text-indigo-100 text-lg md:text-xl max-w-md">
              Whether you want to discuss AI research, a potential role, or just say hello — my inbox is always open.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
              <Mail size={20} /> Say Hello
            </a>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-slate-950 text-slate-200">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[100] origin-left" style={{ scaleX }} />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-950">
          <div className="container mx-auto px-6">
            <SectionHeading title="Featured Projects" subtitle="Portfolio" />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-24 bg-slate-950 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <SectionHeading title="Working History" subtitle="Experience" />
                <div className="mt-12">
                  {EXPERIENCES.map((exp, idx) => (
                    <ExperienceItem key={idx} exp={exp} index={idx} />
                  ))}
                </div>
              </div>

              <div id="education">
                <SectionHeading title="Academic Journey" subtitle="Education" />
                <div className="space-y-8 mt-12">
                  {EDUCATION.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 transition-all"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white leading-tight">{edu.institution}</h4>
                          <p className="text-indigo-400 text-sm font-medium">{edu.period}</p>
                        </div>
                      </div>
                      <p className="text-slate-200 font-semibold mb-2">{edu.degree}</p>
                      <p className="text-sm text-slate-500 mb-4">{edu.location}</p>
                      <div className="pt-4 border-t border-slate-800">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Key Coursework</p>
                        <p className="text-sm text-slate-400 leading-relaxed italic">{edu.coursework}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />
        
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with ❤️ in Berlin.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-slate-600">
            <p>Artificial Intelligence</p>
            <span>•</span>
            <p>Machine Learning</p>
            <span>•</span>
            <p>Mobile Systems</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
