import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Palette,
  Wrench,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Calendar,
  Send,
  User,
  MessageSquare,
  FileText,
  FolderOpen,
  Download,
  Star,
  Sparkles,
  Zap,
  Target,
  Rocket,
  Coffee,
  Heart,
  CheckCircle,
  Shield,
  TrendingUp,
  BookOpen,
  Globe
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / windowHeight) * 100;
      setScrollProgress(progress);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      }, observerOptions);

      // Observe all sections
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: "GrowingUpp",
      description: "A modern Tech company website built for GrowingUpp to showcase their brand, services, and student‑focused learning solutions. The platform includes marketing pages, course highlights, and clear CTAs for students, parents, and institutions, all wrapped in a clean, responsive UI.",
      tech: ["HTML", "JavaScript", "React", "Tailwind CSS", "PostgreSQL", "Django REST Framework"],
      github: "https://github.com/Shivansh1606?tab=repositories",
      live: "https://growingupp.vercel.app/",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "ASIC School Website",
      description: "Professional school website featuring modern UI/UX with dark theme support, student registration forms, and admission management. Streamlined information architecture with responsive design for optimal viewing across all devices. Dynamic content management for announcements and events",
      tech: ["HTML", "JavaScript", "React", "Tailwind CSS", "PostgreSQL", "Django REST Framework"],
      github: "https://github.com/Shivansh1606?tab=repositories",
      live: "https://asic-school.vercel.app/",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Aruba - CRUD Management System",
      description: "A production-ready full-stack management platform with role-based authentication and real-time CRUD operations. Built with modern React patterns featuring multi-entity data management for Language, Country, State, and District. Includes advanced search, filtering, image upload with live preview, and seamless mobile-first responsive design.",
      tech: ["HTML", "JavaScript", "React", "Tailwind CSS"],
      github: "https://github.com/Shivansh1606?tab=repositories",
      live: "https://aruba-assignment-delta.vercel.app/",
      gradient: "from-teal-500 to-green-600"
    },
{
      title: "Advocate Chat Consultation App",
      description: "A browser-based advocate consultation app that allows users to start a chat session with a lawyer through a clean and simple interface. Built using vanilla HTML, CSS, and JavaScript with focus on responsive layout and smooth user interaction.",
      tech: ["Python", "Scikit-learn", "TensorFlow", "Plotly", "Streamlit"],
      github: "https://github.com/Shivansh1606?tab=repositories",
      live: "https://advocate-chat-app-7mqp.onrender.com/",
      gradient: "from-orange-500 to-red-600"
    },    
    {
      title: "Nishu-Digital",
      description: "A modern digital marketplace offering templates, SaaS, and scripts. Clean UI, responsive design, and seamless shopping experience",
      tech: ["HTML", "JavaScript", "React", "Tailwind CSS", "MySQL", "Node.js"],
      github: "https://github.com/Shivansh1606?tab=repositories",
      live: "https://nishu-digital-front-end.vercel.app/",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Dr. Serena Blake - Therapist Website",
      description: "AI-powered therapist website with modern design and user-friendly interface. Currently live and fully functional for therapy consultations.",
      tech: ["HTML", "JavaScript", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
      github: "https://github.com/Shivansh1606",
      live: "https://drblake.netlify.app/",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Hawan-Karao",
      description: "Comprehensive platform for booking qualified pandits for various religious ceremonies. Streamlined booking process with detailed service options.",
      tech: ["HTML", "JavaScript", "React", "Tailwind CSS", "MongoDB", "Node.js"],
      github: "https://github.com/Shivansh1606/hawN-KARAO",
      live: "https://hawan-karao.netlify.app/",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Crafo Food",
      description: "Modern food ordering platform with intuitive design and seamless user experience. Features real-time order tracking and payment integration.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shivansh1606?tab=repositories",
      live: "https://crafofood.netlify.app/",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Job-n-Hire",
      description: "Professional job search platform connecting employers with talented candidates. Advanced filtering and matching algorithms for better job discovery.",
      tech: ["HTML", "JavaScript", "React", "Tailwind CSS", "MongoDB", "Node.js"],
      github: "https://github.com/Shivansh1606",
      live: "https://jobn-hire-job-portal.vercel.app/",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 78, color: "bg-yellow-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "C++", level: 75, color: "bg-blue-500" },
        { name: "Python", level: 70, color: "bg-green-500" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 85, color: "bg-blue-400" },
        { name: "Node.js", level: 80, color: "bg-red-500" },
        { name: "Django", level: 75, color: "bg-pink-600" },
        { name: "Tailwind CSS", level: 80, color: "bg-teal-500" }
      ]
    },
    {
      title: "Design & Frontend",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-600" },
        { name: "Responsive Design", level: 85, color: "bg-purple-500" },
        { name: "UI/UX Design", level: 75, color: "bg-pink-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 85, color: "bg-orange-500" },
        { name: "VS Code", level: 90, color: "bg-blue-500" },
        { name: "CURSOR", level: 80, color: "bg-indigo-500" },
        { name: "MongoDB", level: 75, color: "bg-green-500" }
      ]
    },
    {
      title: "AI Tools",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Bolt AI", level: 85, color: "bg-purple-600" },
        { name: "Supabase", level: 80, color: "bg-green-600" },
        { name: "GitLabs", level: 75, color: "bg-orange-500" },
        { name: "Lovable.dev", level: 80, color: "bg-pink-500" }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Problem Solving", level: 85, icon: <Target className="w-5 h-5" /> },
    { name: "Team Collaboration", level: 80, icon: <User className="w-5 h-5" /> },
    { name: "Project Management", level: 75, icon: <Briefcase className="w-5 h-5" /> },
    { name: "Communication", level: 85, icon: <MessageSquare className="w-5 h-5" /> }
  ];

  const certifications = [
    {
      title: "Fullstack Certification",
      issuer: "Simplilearn",
      icon: <Code className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1foNS1RG7QmzmgxybQEOjnFI--yTbx2Qj/view?usp=sharing",
      gradient: "from-blue-500 to-blue-600",
      description: "Comprehensive full-stack development certification"
    },
    {
      title: "GenAI Certification",
      issuer: "BGX",
      icon: <Brain className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1TiNvELbu2wyp0sp1Ot7QeLklxxdahLK1/view?usp=drive_link",
      gradient: "from-purple-500 to-purple-600",
      description: "Generative AI and machine learning expertise"
    },
    {
      title: "Solution Architecture",
      issuer: "AWS",
      icon: <Shield className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1sapSmBdYXngrcALLqVXF2jdPTufS2ceS/view?usp=sharing",
      gradient: "from-orange-500 to-orange-600",
      description: "Cloud architecture and AWS solutions"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Accenture",
      icon: <Briefcase className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1qvxp0BZqFwO3UoL6Rf__GKjJ4k0K85bn/view?usp=drive_link",
      gradient: "from-green-500 to-green-600",
      description: "Real-world software engineering experience"
    },
    {
      title: "Power-BI Certification",
      issuer: "PWC",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1AyGGTzti7TUd6ZzRXgv47-VH5Zo42UiO/view?usp=drive_link",
      gradient: "from-yellow-500 to-yellow-600",
      description: "Business intelligence and data visualization"
    },
    {
      title: "Advanced Software Engineering",
      issuer: "Walmart",
      icon: <Globe className="w-8 h-8" />,
      link: "https://drive.google.com/file/d/1mCG82n2NZAFRGdgzFcj8FWr6YdWoEtIv/view?usp=drive_link",
      gradient: "from-indigo-500 to-indigo-600",
      description: "Advanced software development practices"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shivanshsingh255@gmail.com",
      href: "mailto:shivanshsingh255@gmail.com",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7078496801",
      href: "tel:+917078496801",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/shivansh-0270532a0/",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/Shivansh1606",
      gradient: "from-gray-700 to-gray-800"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Certifications",
      value: "View certificates",
      href: "https://drive.google.com/drive/folders/1l84o5ypbvBfxtnCVkDbK2QAZXFabDTZo?usp=sharing",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Download className="w-6 h-6" />,
      label: "Resume",
      value: "Download CV",
      href: "https://drive.google.com/drive/folders/17-itrk6lxOgwmJRU9WFBOjxFWC8JnRjW?usp=sharing",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              <img
                src="https://i.ibb.co/JFbw7NTx/IMG-20250706-212555.jpg"
                alt="Shivansh"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shivansh
              </span>
            </button>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 animate-slide-down">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isVisible.home ? 'animate-fade-in' : 'opacity-0'
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              >
                <div className="w-2 h-2 bg-blue-400/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse-slow">
                Hi, I'm Shivansh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
              Passionate about creating innovative web solutions and analyzing data to drive insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg btn-hover"
              >
                <span className="flex items-center justify-center">
                  <Rocket className="w-5 h-5 mr-2" />
                  View My Work
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator - Moved down */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-white dark:bg-gray-900 transition-all duration-500 ${
        isVisible.about ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-delay">
              <div className="prose prose-lg dark:prose-invert">
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Shivansh</span>, a
  full-stack developer with a Master's in Computer Applications (MCA) from IMSEC,
  Ghaziabad, achieving a CGPA of 8.13 (77.19%). I bring practical industry experience
  through a 3-month internship and 4-5 months of freelancing, where I've delivered
  multiple production-ready web applications from concept to deployment.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  During my
  <span className="font-semibold text-purple-600 dark:text-purple-400">
    {" "}3-month internship at GrowingUpp{" "}
  </span>
  (August 2025 – October 2025), I worked as a Full-Stack Developer building an EdTech
  platform with React.js, Django, and PostgreSQL. I developed secure RESTful APIs,
  implemented role-based authentication for 1,000+ users, optimized database queries
  (reducing execution time by 30%), and integrated payment gateways—achieving a 20%
  overall performance boost.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  As a
  <span className="font-semibold text-teal-600 dark:text-teal-400">
    {" "}freelance developer{" "}
  </span>
  over the past 4-5 months, I've built custom web solutions including:
  <br />• <strong>School Management System</strong> – Complete admin panel with
  student registration, attendance tracking, and academic management using React,
  Django, and PostgreSQL
  <br />• <strong>Aruba E-commerce Platform</strong> – Full CRUD management system
  with multi-entity data handling, role-based access control (Admin/Manager/User),
  search/filtering, and responsive mobile-first design
  <br />• <strong>Advocate Chat Application</strong> – Real-time consultation
  platform with clean messaging UI built using HTML, CSS, and JavaScript
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  My tech stack includes
  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
    {" "}React.js, Tailwind CSS, Django, Node.js, PostgreSQL, MySQL{" "}
  </span>
  with hands-on experience in Git/GitHub, Vercel/Netlify deployments, API
  integration, form validation, and modern UI/UX design. I also leverage AI tools
  like Bolt AI, Supabase, and Cursor to accelerate development and build smarter
  solutions.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  I'm excited to bring my internship learnings, freelance project experience, and
  passion for clean code to a growth-oriented team. I'm actively seeking full-stack
  developer roles where I can contribute to impactful products, collaborate with
  experienced developers, and continue growing my skills in modern web technologies.
</p>

              </div>

              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Java Programming', 'Data Analysis', 'AI Tools', 'Problem Solving', 'Team Collaboration'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium animate-fade-in-delay"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-delay-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 animate-pulse-slow"></div>
                <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
                  <img
                    src="https://i.ibb.co/JFbw7NTx/IMG-20250706-212555.jpg"
                    alt="Shivansh - Web Developer"
                    className="w-80 h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500 ${
        isVisible.projects ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-xl`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 btn-hover"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-200 btn-hover`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-white dark:bg-gray-900 transition-all duration-500 ${
        isVisible.skills ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-delay"
                style={{ animationDelay: `${0.1 * categoryIndex}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="animate-fade-in-delay" style={{ animationDelay: `${0.1 * (categoryIndex + skillIndex)}s` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 progress-bar">
                        <div
                          className={`h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 animate-fade-in-delay-3">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Additional Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Soft skills and professional competencies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 card-hover animate-fade-in-delay"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500 ${
        isVisible.education ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education & Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            
            {/* Internship */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 card-hover animate-fade-in-delay-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Software Developer Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    GrowingUpp
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Aug-2025 - Nov-2025</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    At GrowingUpp, I work as a Full‑Stack Developer Intern, building and optimizing scalable web applications with a focus on performance, security, and clean architecture. I develop end‑to‑end features using React.js, Django, and PostgreSQL, design RESTful APIs with secure authentication, and optimize database queries to improve system speed and reliability.
                  </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                    {['React.js', 'Node.js', 'JavaScript', 'AI Tools','Django', 'PostgreSQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
                      
            {/* Freelance Web Developer */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 card-hover animate-fade-in-delay">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Freelance Web Developer
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jan 2025 - Present</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Working on various web development projects, creating responsive websites and web applications using modern technologies like React.js, Node.js, and AI-powered development tools.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['React.js', 'Node.js', 'JavaScript', 'AI Tools'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Master of Computer Applications */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 card-hover animate-fade-in-delay-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    IMSEC, Ghaziabad
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2023 - 2025</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Star className="w-4 h-4 mr-2" />
                    <span>Percentage: 77.19%</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Comprehensive study of computer applications, software development, data structures, algorithms, and modern programming paradigms with focus on practical implementation.
                  </p>
                </div>
              </div>
            </div>

            {/* Bachelor of Science */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 card-hover animate-fade-in-delay-3 md:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Bachelor of Science (B.Sc)
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    CCSU, Meerut
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2020 - 2023</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Hapur</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Strong foundation in advanced mathematics, physics, and chemistry. Developed analytical thinking and problem-solving skills that complement my technical expertise in computer science.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Mathematics', 'Physics', 'Chemistry', 'Analytical Thinking'].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 bg-white dark:bg-gray-900 transition-all duration-500 ${
        isVisible.certifications ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${cert.gradient} rounded-lg text-white mr-4`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </div>
              </a>
            ))}
          </div>

          {/* More Certifications Link */}
          <div className="text-center">
            <a
              href="https://drive.google.com/drive/folders/1l84o5ypbvBfxtnCVkDbK2QAZXFabDTZo?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 btn-hover animate-fade-in-delay-3"
            >
              <div className="flex items-center space-x-3">
                <FolderOpen className="w-6 h-6" />
                <div>
                  <div className="font-semibold text-lg">More Certifications</div>
                  <div className="text-sm opacity-90">View complete certification portfolio</div>
                </div>
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500 ${
        isVisible.contact ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect with Shivansh
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow developers and industry professionals. Whether you're looking for a dedicated developer, have a project in mind, or want to explore potential collaborations, I'd love to hear from you!
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Usually responds within 24 hours</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Cards */}
            <div className="space-y-4 animate-fade-in-delay">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 card-hover animate-fade-in-delay"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${info.gradient} rounded-lg text-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {info.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg animate-fade-in-delay-2">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white form-input transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white form-input transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white form-input transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white form-input transition-all duration-200">
                      <option>Web Development Project</option>
                      <option>Data Analysis Project</option>
                      <option>Freelance Opportunity</option>
                      <option>Job Opportunity</option>
                      <option>Collaboration</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white form-input transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, requirements, or how we can work together..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg btn-hover font-medium"
                >
                  <span className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:shivanshsingh255@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">shivanshsingh255@gmail.com</span>
                </a>
                <a
                  href="tel:+917078496801"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91-7078496801</span>
                </a>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Shivansh
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Passionate web developer and data analyst with expertise in modern technologies and AI tools. Always eager to learn and create innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Shivansh1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivansh-0270532a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shivanshsingh255@gmail.com"
                  className="p-3 bg-red-600 rounded-lg hover:bg-red-500 transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 <span className="font-semibold text-blue-400">Shivansh</span>. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-gray-400 text-sm">and</span>
                <Coffee className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-400 text-sm">in India</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm italic">
                "The only way to do great work is to love what you do." - Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
