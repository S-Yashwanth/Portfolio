import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import { projects, experiences, research } from './data';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              YS
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'research', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize ${
                    activeSection === item
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'hover:text-purple-600 dark:hover:text-purple-400'
                  } transition-colors`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20">
            <div className="container mx-auto px-6 flex flex-col space-y-6">
              {['home', 'about', 'experience', 'projects', 'research', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="text-xl capitalize hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0))]" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Hi, I'm Yashwanth Sathyan
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300">
              Machine Learning Enthusiast | Software Developer | Problem Solver
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/yashwanth-s" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/S-Yashwanth" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:yashwanthsathyan2003@gmail.com" className="hover:text-purple-600 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+916381139735" className="hover:text-purple-600 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden ring-4 ring-purple-600 ring-offset-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg mb-6">
                  I am a Computer Science student at Amrita Vishwa Vidyapeetham, passionate about AI, ML, and Deep Learning. 
                  I specialize in data-driven solutions and research-backed innovations.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-4">
                    {['Python', 'C++', 'Java', 'SQL', 'Scala', 'React'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center space-x-2">
                    <span>View Resume</span>
                    <ExternalLink size={16} />
                  </button>
                  <button className="border border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors flex items-center space-x-2">
                    <span>Download CV</span>
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-12 border-l-2 border-purple-600 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-600 rounded-full" />
                  <div className="mb-1 text-purple-600 font-semibold">{exp.date}</div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Problem:</strong> {project.problem}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Solution:</strong> {project.solution}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700"
                    >
                      <Github size={20} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Research</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {research.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">{item.conference}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">
                © 2024 Yashwanth Sathyan | All Rights Reserved
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://linkedin.com/in/yashwanth-s" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/S-Yashwanth" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="mailto:yashwanthsathyan2003@gmail.com" className="hover:text-purple-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;