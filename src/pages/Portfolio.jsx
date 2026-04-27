import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Github, Linkedin, ExternalLink, ArrowRight,
  Brain, ChevronDown, Train, Cpu, BarChart3, Shield
} from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'expertise', 'projects', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 0) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    {
      category: 'RAMS & Safety Engineering',
      icon: <Shield className="text-cyan-400" size={20} />,
      items: ['EN 50126 / EN 50129', 'FMECA / FTA', 'Hazard Log Management', 'Reliability Analysis', 'RCM', 'ISO 55000', 'GoA4 Driverless Systems', 'SIL Assessment'],
    },
    {
      category: 'AI & Automation',
      icon: <Brain className="text-purple-400" size={20} />,
      items: ['Python', 'LLMs & Prompt Engineering', 'AI Workflow Design', 'Chatbots (WhatsApp / Telegram)', 'Ollama', 'RAG Pipelines', 'NLP', 'Computer Vision'],
    },
    {
      category: 'Backend & Cloud',
      icon: <Cpu className="text-pink-400" size={20} />,
      items: ['Flask', 'Supabase', 'Docker', 'REST APIs', 'SQL / PostgreSQL', 'Oracle Maximo', 'IBM Maximo', 'Data Pipelines'],
    },
    {
      category: 'Frontend & Analytics',
      icon: <BarChart3 className="text-orange-400" size={20} />,
      items: ['React', 'Tailwind CSS', 'Power BI', 'Data Visualization', 'Dashboard Design', 'GitHub', 'VS Code', 'Jupyter Notebooks'],
    },
  ];

  const featuredProjects = [
    {
      id: 'depot-iq',
      title: 'Depot IQ',
      tagline: 'Real-Time Depot Occupancy Intelligence',
      description:
        'Python-based real-time monitoring system replacing manual coordination at Metro depot. Integrated MMS data feeds, reduced shunting conflicts by 40%, and improved fleet-turn planning.',
      tech: ['Python', 'Real-time Data', 'Fleet Analytics', 'Dashboard'],
      icon: '📊',
      color: 'from-cyan-900 to-blue-900',
      border: 'border-cyan-400',
    },
    {
      id: 'train-iq',
      title: 'Train IQ',
      tagline: 'AI-Powered Train Health Monitor',
      description:
        'Intelligent monitoring platform combining sensor telemetry, historical failure data, and ML models to predict component degradation before failures occur across Metro rolling stock.',
      tech: ['ML / AI', 'Python', 'Telemetry', 'Predictive Analytics'],
      icon: '🚆',
      color: 'from-purple-900 to-indigo-900',
      border: 'border-purple-400',
    },
    {
      id: 'startm',
      title: 'StartM',
      tagline: 'Smart Maintenance Workflow Automation',
      description:
        'Automated maintenance planning and scheduling engine that transforms static work-order queues into dynamic, priority-weighted workflows aligned with asset criticality and operational windows.',
      tech: ['Python', 'Flask', 'Maximo API', 'Workflow Automation'],
      icon: '⚙️',
      color: 'from-orange-900 to-red-900',
      border: 'border-orange-400',
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance AI',
      tagline: 'Data-Driven Asset Health Forecasting',
      description:
        'Data-driven maintenance optimisation using Python (pandas, scikit-learn) and Power BI dashboards. Developed anomaly detection and time-series forecasting for asset health monitoring.',
      tech: ['scikit-learn', 'pandas', 'Power BI', 'Time-Series'],
      icon: '📈',
      color: 'from-green-900 to-emerald-900',
      border: 'border-green-400',
    },
  ];

  const timeline = [
    {
      role: 'RAMS Engineer',
      company: 'Keolis MHI • Metro',
      period: 'Sep 2021 – Present',
      highlight:
        'Led FRACAS implementation, hazard log governance, PSD door failure FTA (40% reduction in shunting conflicts), EN 50126-compliant KPI framework.',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      role: 'Team Leader — Rolling Stock & ATC',
      company: 'Serco Ltd. • Metro',
      period: 'Jan 2020 – Sep 2021',
      highlight:
        'Managed R2020 Red Line Extension DLP, secured OEM liability extension, received RTA Award for infrastructure contribution.',
      color: 'from-purple-600 to-pink-500',
    },
    {
      role: 'Junior Engineer, Reliability',
      company: 'GE Transportation • Indian Railways',
      period: 'Jun 2018 – Dec 2019',
      highlight:
        'Field technical support for diesel-electric locomotives, fault diagnosis with sub-30-minute resolution, preventive maintenance coordination.',
      color: 'from-orange-600 to-red-500',
    },
    {
      role: 'Technician — Integrated Plant',
      company: 'GAIL India Ltd.',
      period: 'Aug 2016 – May 2018',
      highlight:
        "Commissioned 59 MW turbine generators and 6 MW solar plant (India's 2nd largest at the time). Electrical & instrumentation maintenance.",
      color: 'from-green-600 to-emerald-500',
    },
  ];

  const education = [
    { degree: 'M.Tech — Embedded Systems', school: 'BITS Pilani', year: '2024' },
    { degree: 'B.Tech — Electrical & Electronics', school: 'Dr. A.P.J. Abdul Kalam Technical University', year: '2021' },
    { degree: 'Diploma — Electrical Engineering', school: 'Government Polytechnic, Jhansi', year: '2016' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1425 100%)' }}>
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'backdrop-blur-md bg-black bg-opacity-50' : 'bg-transparent'} border-b border-white border-opacity-10`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vinamra Duvey
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://linkedin.com/in/ivinamra" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vinamra.duvey@gmail.com" className="text-gray-300 hover:text-cyan-400 transition">
              <Mail size={20} />
            </a>
            {/* Mobile hamburger */}
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-5 h-0.5 bg-current" />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 px-6 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 py-1 text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ─────────────────────────────────── HERO ─────────────────────────────────── */}
      <section id="home" className="relative pt-32 pb-24 px-6">
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
                RAMS engineer with ~10 years at Metro, now building AI-powered systems and automation tools to solve real-world problems at scale.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:vinamra.duvey@gmail.com"
                  className="px-8 py-3 border border-cyan-400 border-opacity-50 rounded-lg font-semibold hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-300"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-900 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl border border-cyan-400 border-opacity-30 p-8 flex flex-col justify-center items-center space-y-6">
                <Train className="text-cyan-400" size={64} />
                <p className="text-center text-gray-300 text-lg">Transforming complex rail systems into intelligent solutions</p>
                <div className="grid grid-cols-3 gap-4 w-full pt-2 text-center text-sm">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">10+</div>
                    <div className="text-gray-400">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">6+</div>
                    <div className="text-gray-400">AI Projects</div>
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ─────────────────────────────────── ABOUT ─────────────────────────────────── */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Who I Am</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a results-driven engineer with a unique journey — starting with deep expertise in reliability engineering (RAMS) on Metro's advanced GoA4 fully driverless system, to now pioneering AI-powered automation and digital transformation solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Metro, I've led critical initiatives in hazard management, failure analysis, and predictive maintenance — delivering measurable reliability improvements across complex subsystems including Rolling Stock, ATC, AFC, and PSD. I built the only real-time digital depot monitoring tool in-house, demonstrating my ability to bridge the gap between engineering theory and practical innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Now, I'm applying that same engineering rigour and problem-solving mindset to AI and automation — building intelligent systems, chatbots, and consulting on digital transformation strategies. I believe the future belongs to engineers who can think <em>systematically</em> AND <em>creatively</em>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through <strong className="text-cyan-400">Metro IQ</strong>, I'm building AI-powered digital solutions at the intersection of engineering knowledge and modern intelligence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-6 border border-cyan-400 border-opacity-20">
                <h3 className="text-sm font-bold text-cyan-400 mb-3">🏆 KEY MILESTONE</h3>
                <p className="text-gray-300 text-sm">RTA Award for R2020 Red Line Extension — one of the GCC's highest-profile rail infrastructure projects.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 border border-purple-400 border-opacity-20">
                <h3 className="text-sm font-bold text-purple-400 mb-3">🎯 CURRENT FOCUS</h3>
                <p className="text-gray-300 text-sm">Building <strong className="text-purple-300">MetroIQ</strong> — AI-powered digital solutions & marketing. Exploring LLMs, automation workflows, and AI consultancy.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-6 border border-orange-400 border-opacity-20">
                <h3 className="text-sm font-bold text-orange-400 mb-3">📍 LOCATION</h3>
                <p className="text-gray-300 text-sm">Dubai, UAE<br />Open to remote collaboration worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────── EXPERTISE ─────────────────────────────────── */}
      <section id="expertise" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Professional Journey</span>
          </h2>

          {/* Timeline */}
          <div className="space-y-8 mb-20">
            {timeline.map((item, idx) => (
              <div key={idx} className="group flex gap-6">
                <div className="relative flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} mt-2`} />
                  {idx < timeline.length - 1 && (
                    <div className="absolute top-4 left-[7px] w-0.5 h-24 bg-gradient-to-b from-cyan-600 to-transparent" />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-40 rounded-xl p-6 border border-cyan-400 border-opacity-20 group-hover:border-opacity-50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                        <p className="text-cyan-400">{item.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 whitespace-nowrap">{item.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h3 className="text-3xl font-bold mb-8 text-white">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-6 border border-purple-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <h4 className="text-purple-400 text-sm font-bold mb-2">{edu.year}</h4>
                <h3 className="text-white font-bold mb-1">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.school}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h3 className="text-3xl font-bold mb-8 text-white">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {skillGroup.icon}
                  <h4 className="text-white font-bold">{skillGroup.category}</h4>
                </div>
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

      {/* ─────────────────────────────────── PROJECTS PREVIEW ─────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Work</span>
            </h2>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects#${project.id}`}
                className={`group bg-gradient-to-br ${project.color} rounded-2xl p-8 border ${project.border} border-opacity-20 hover:border-opacity-60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 block`}
              >
                <div className="text-5xl mb-4">{project.icon}</div>
                <div className="mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{project.tagline}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-white bg-opacity-10 text-gray-200 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Read Full Case Study <ExternalLink size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Explore All Railway AI Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────── VISION ─────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-3xl p-12 border border-cyan-400 border-opacity-30 text-center">
            <Brain className="mx-auto mb-6 text-cyan-400" size={48} />
            <h2 className="text-4xl font-bold text-white mb-6">My Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build a strong AI consultancy that helps businesses adopt AI responsibly, efficiently, and at scale. Combine deep engineering knowledge with cutting-edge AI innovation to solve complex, real-world problems. Create meaningful impact by automating, optimising, and transforming how organisations operate.
            </p>
            <p className="text-lg text-gray-400 mt-6">💡 Always exploring &nbsp;•&nbsp; 🚀 Always building &nbsp;•&nbsp; 🌍 Always learning</p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────── BEYOND TECH ─────────────────────────────────── */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Beyond Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-6 border border-orange-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-white font-bold mb-2">Hiking & Exploration</h3>
              <p className="text-gray-300 text-sm">Exploring new trails and peaks across UAE and beyond. Getting lost in nature fuels creativity.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900 to-purple-900 rounded-xl p-6 border border-pink-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="text-white font-bold mb-2">Travel & Storytelling</h3>
              <p className="text-gray-300 text-sm">Documenting experiences through videos and stories. Every place has a narrative worth sharing.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl p-6 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-white font-bold mb-2">Content Creation</h3>
              <p className="text-gray-300 text-sm">Sharing insights on tech, AI, automation, and engineering through engaging content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────── CONTACT ─────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-gray-300 mb-12">
            Open to collaborations, consulting, and new opportunities in AI, automation, and digital innovation.
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
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-cyan-400 border-opacity-50 rounded-lg font-semibold hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/oculanet"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-purple-400 border-opacity-50 rounded-lg font-semibold hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white border-opacity-10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>© 2026 Vinamra Duvey. Crafted with precision, powered by innovation.</p>
          <p className="text-sm">Dubai, UAE &nbsp;•&nbsp; vinamra.me</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
