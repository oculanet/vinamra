import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ArrowRight, Code, Zap, Brain } from 'lucide-react';

const VinamraPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    {
      category: 'RAMS & Engineering',
      items: ['EN 50126', 'FMECA/FTA', 'Hazard Log', 'Reliability Analysis', 'RCM', 'ISO 55000']
    },
    {
      category: 'AI & Automation',
      items: ['Python', 'LLMs', 'Prompt Engineering', 'AI Workflows', 'Chatbots', 'Automation']
    },
    {
      category: 'Backend & Cloud',
      items: ['Flask', 'Supabase', 'Docker', 'APIs', 'SQL', 'Oracle/IBM Maximo']
    },
    {
      category: 'Frontend & Tools',
      items: ['React', 'Power BI', 'Data Visualization', 'GitHub', 'Ollama', 'VS Code']
    }
  ];

  const projects = [
    {
      title: 'Real-Time Depot Occupancy Dashboard',
      description: 'Python-based real-time monitoring system replacing manual coordination at Dubai Metro depot. Integrated MMS data feeds, reduced shunting conflicts by 40%, and improved fleet-turn planning.',
      tech: ['Python', 'Real-time Data', 'Fleet Analytics'],
      icon: '📊'
    },
    {
      title: 'FRACAS Management System',
      description: 'End-to-end Failure Reporting & Corrective Action System across Rolling Stock, ATC, AFC, and PSD subsystems. Implemented EN 50126-compliant failure classification and KPI tracking.',
      tech: ['EN 50126', 'Reliability Engineering', 'Data Management'],
      icon: '🔧'
    },
    {
      title: 'AI-Powered Automation Suite',
      description: 'Building intelligent systems and automation tools for business processes. Developing chatbots for WhatsApp/Telegram and AI consultancy solutions for digital transformation.',
      tech: ['LLMs', 'Python', 'Chatbots', 'Automation'],
      icon: '🤖'
    },
    {
      title: 'Predictive Maintenance Models',
      description: 'Data-driven maintenance optimization using Python (pandas, scikit-learn) and Power BI dashboards. Developed anomaly detection and time-series forecasting for asset health monitoring.',
      tech: ['ML/AI', 'Power BI', 'Predictive Analytics'],
      icon: '📈'
    }
  ];

  const timeline = [
    {
      role: 'RAMS Engineer',
      company: 'Keolis MHI • Dubai Metro',
      period: 'Sep 2021 – Present',
      highlight: 'Led FRACAS implementation, hazard log governance, PSD door failure FTA (40% reduction)',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      role: 'Team Leader, Rolling Stock & ATC',
      company: 'Serco Ltd. • Dubai Metro',
      period: 'Jan 2020 – Sep 2021',
      highlight: 'Managed R2020 Extension DLP, secured OEM liability extension, RTA Award',
      color: 'from-purple-600 to-pink-500'
    },
    {
      role: 'Junior Engineer, Reliability',
      company: 'GE Transportation • Indian Railways',
      period: 'Jun 2018 – Dec 2019',
      highlight: 'Field technical support, locomotive maintenance, <30min fault resolution',
      color: 'from-orange-600 to-red-500'
    },
    {
      role: 'Technician • GAIL India',
      company: 'Integrated Oil & Gas Processing',
      period: 'Aug 2016 – May 2018',
      highlight: 'Commissioned 59 MW turbine generators, 6 MW solar plant (India\'s 2nd largest)',
      color: 'from-green-600 to-emerald-500'
    }
  ];

  const education = [
    { degree: 'M.Tech — Embedded Systems', school: 'BITS Pilani', year: '2024' },
    { degree: 'B.Tech — Electrical & Electronics', school: 'Dr. A.P.J. Abdul Kalam TU', year: '2021' },
    { degree: 'Diploma — Electrical Engineering', school: 'Government Polytechnic, Jhansi', year: '2016' }
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1425 100%)' }}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vinamra.
          </div>
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/ivinamra" className="text-gray-300 hover:text-cyan-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vinamra.duvey@gmail.com" className="text-gray-300 hover:text-cyan-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500 bg-opacity-20 text-cyan-300 border border-cyan-500 border-opacity-30">
                  🚀 RAMS Engineer → AI Innovator
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Engineering
                </span>
                <br />
                <span className="text-white">Meets</span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                RAMS engineer with ~10 years at Dubai Metro, now building AI-powered systems and automation tools to solve real-world problems at scale.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
                  <a href="#projects" className="flex items-center gap-2">
                    See My Work <ArrowRight size={18} />
                  </a>
                </button>
                <button className="px-8 py-3 border border-cyan-400 border-opacity-50 rounded-lg font-semibold hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-300">
                  <a href="mailto:vinamra.duvey@gmail.com">Let's Talk</a>
                </button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-900 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl border border-cyan-400 border-opacity-30 p-8 flex flex-col justify-center items-center space-y-4">
                <div className="text-6xl">⚡</div>
                <p className="text-center text-gray-300">Transforming complex systems into intelligent solutions</p>
                <div className="grid grid-cols-3 gap-4 w-full pt-6 text-center text-sm">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">10+</div>
                    <div className="text-gray-400">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">20+</div>
                    <div className="text-gray-400">Tech Stack</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400">∞</div>
                    <div className="text-gray-400">Innovations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a results-driven engineer with a unique journey: starting with deep expertise in reliability engineering (RAMS) on Dubai Metro's advanced GoA4 driverless system, to now pioneering AI-powered automation and digital transformation solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Keolis MHI/Dubai Metro, I've led critical initiatives in hazard management, failure analysis, and predictive maintenance—delivering measurable reliability improvements across complex subsystems. I built the only real-time digital depot monitoring tool in-house, demonstrating my ability to bridge gap between theory and practical innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Now, I'm applying that same engineering rigor and problem-solving mindset to AI and automation—building intelligent systems, chatbots, and consulting on digital transformation strategies. I believe the future belongs to engineers who can think systematically AND creatively.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-6 border border-cyan-400 border-opacity-20">
                <h3 className="text-sm font-bold text-cyan-400 mb-4">KEY MILESTONE</h3>
                <p className="text-gray-300 mb-3">RTA Award for R2020 Red Line Extension contribution—one of the GCC's highest-profile rail infrastructure projects.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 border border-purple-400 border-opacity-20">
                <h3 className="text-sm font-bold text-purple-400 mb-4">CURRENT FOCUS</h3>
                <p className="text-gray-300">Building Oculanet—AI-powered digital solutions & marketing. Exploring LLMs, automation workflows, and AI consultancy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="expertise" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          
          <div className="space-y-8 mb-16">
            {timeline.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-6">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} mt-2`}></div>
                    {idx < timeline.length - 1 && (
                      <div className="absolute top-4 left-2 w-0.5 h-24 bg-gradient-to-b from-cyan-600 to-transparent"></div>
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <div className="bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-40 rounded-xl p-6 border border-cyan-400 border-opacity-20 group-hover:border-opacity-50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <p className="text-cyan-400">{item.company}</p>
                        </div>
                        <span className="text-sm text-gray-400">{item.period}</span>
                      </div>
                      <p className="text-gray-300">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-6 border border-purple-400 border-opacity-20">
                <h4 className="text-purple-400 text-sm font-bold mb-2">{edu.year}</h4>
                <h3 className="text-white font-bold mb-1">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.school}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-white">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <h4 className="text-cyan-400 font-bold mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span key={sidx} className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-purple-500 bg-opacity-30 text-purple-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-3xl p-12 border border-cyan-400 border-opacity-30 text-center">
            <Brain className="mx-auto mb-6 text-cyan-400" size={48} />
            <h2 className="text-4xl font-bold text-white mb-6">My Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build a strong AI consultancy that helps businesses adopt AI responsibly, efficiently, and at scale. 
              Combine deep engineering knowledge with cutting-edge AI innovation to solve complex, real-world problems. 
              Create meaningful impact by automating, optimizing, and transforming how organizations operate.
            </p>
            <p className="text-lg text-gray-400 mt-6">
              💡 Always exploring • 🚀 Always building • 🌍 Always learning
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Beyond Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-6 border border-orange-400 border-opacity-20">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-white font-bold mb-2">Hiking & Exploration</h3>
              <p className="text-gray-300 text-sm">Exploring new trails and peaks across UAE and beyond. Getting lost in nature fuels creativity.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900 to-purple-900 rounded-xl p-6 border border-pink-400 border-opacity-20">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="text-white font-bold mb-2">Travel & Storytelling</h3>
              <p className="text-gray-300 text-sm">Documenting experiences through videos and stories. Every place has a narrative.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl p-6 border border-cyan-400 border-opacity-20">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-white font-bold mb-2">Content Creation</h3>
              <p className="text-gray-300 text-sm">Sharing insights on tech, AI, automation, and engineering through engaging content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm open to collaborations, consulting, and new opportunities in AI, automation, and digital innovation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="mailto:vinamra.duvey@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Email Me
            </a>
            <a 
              href="https://linkedin.com/in/ivinamra"
              className="px-8 py-4 border border-cyan-400 border-opacity-50 rounded-lg font-semibold hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
              href="#"
              className="px-8 py-4 border border-purple-400 border-opacity-50 rounded-lg font-semibold hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white border-opacity-10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Vinamra Duvey. Crafted with precision and powered by innovation.</p>
          <p className="text-sm mt-2">Dubai, UAE • +971 56 177 4657</p>
        </div>
      </footer>
    </div>
  );
};

export default VinamraPortfolio;