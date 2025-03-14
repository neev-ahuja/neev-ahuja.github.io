import React, { useState } from 'react';
import { GitHub, Linkedin, Twitter, Mail, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-indigo-600">Neev Ahuja</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#blog" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 py-2">
            <a href="#about" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#blog" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
            <a href="#contact" className="py-2 text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Neev Ahuja</h1>
          <p className="text-xl md:text-2xl mb-8">AI Enthusiast | Stock Trading Innovator | Tech Creator</p>
          <a href="#projects" className="bg-white text-indigo-600 font-medium py-2 px-6 rounded-md hover:bg-indigo-50 transition duration-300">Explore My Work</a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
            {/* Replace with your actual image */}
            <img 
              src="/api/placeholder/400/400" 
              alt="Neev Ahuja" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg max-w-2xl mx-auto">
          I'm a B.Tech Computer Science student at GTBIT, passionate about AI, trading, and building innovative tech solutions. Welcome to my portfolio!
        </p>
        
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="mailto:contact@neevahuja.com" className="text-white hover:text-indigo-200 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
          <p>
            My journey in technology began with a fascination for how AI can transform traditional fields. As a B.Tech Computer Science student at GTBIT (Guru Tegh Bahadur Institute of Technology), affiliated with GGSIPU (Guru Gobind Singh Indraprastha University), I've channeled my passion into creating innovative solutions that bridge AI, stock trading, and healthcare.
          </p>
          
          <p>
            My work in stock trading has focused on developing AI-powered tools that can analyze market trends and assist in making informed trading decisions. Simultaneously, I've explored medical technology applications to create more accessible healthcare solutions.
          </p>
          
          <p>
            Looking forward, I'm committed to training and developing my own Generative AI model. I believe in the transformative potential of AI to solve complex problems across industries, and I'm excited to contribute to this rapidly evolving field.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, demoLink, githubLink, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={image || "/api/placeholder/600/400"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
            >
              Live Demo <ExternalLink size={16} className="ml-1" />
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              GitHub <GitHub size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "AI Trading Assistant",
      description: "An AI-powered stock trading tool that analyzes market trends and provides trading recommendations based on historical data and current market conditions.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Medical History Portal",
      description: "A comprehensive platform that stores medical history and recommends insurance plans and treatments based on personalized health profiles.",
      tech: ["React", "Firebase", "Express", "Node.js"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Sound App",
      description: "An innovative audio-based technology project that processes and analyzes sound inputs to provide meaningful insights and interactions.",
      tech: ["JavaScript", "Web Audio API", "React Native"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/username/project",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Generative AI Research",
      description: "Ongoing research into generative AI models like LLaMA and DeepSeek, exploring their applications and potential for solving complex problems.",
      tech: ["Python", "PyTorch", "LLaMA", "DeepSeek"],
      githubLink: "https://github.com/username/project",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++"],
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Stock Trading",
      skills: ["Market Analysis", "AI Trading Bots", "Technical Analysis", "Algorithmic Trading"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "Firebase", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ title, date, excerpt, link, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <div className="h-40 bg-gray-200 overflow-hidden">
        <img 
          src={image || "/api/placeholder/600/400"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <a 
          href={link} 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}
function BlogSection() {
    const blogPosts = [
      {
        title: "How AI is Changing Stock Trading",
        date: "March 1, 2025",
        excerpt: "Explore how artificial intelligence technologies are revolutionizing traditional stock trading approaches and creating new opportunities for investors.",
        link: "/blog/ai-stock-trading",
        image: "/api/placeholder/600/400",
      },
      {
        title: "Building My First Generative AI Model",
        date: "February 15, 2025",
        excerpt: "A deep dive into my journey of creating a generative AI model, the challenges I faced, and the lessons I learned along the way.",
        link: "/blog/first-generative-ai",
        image: "/api/placeholder/600/400",
      },
      {
        title: "Tech Behind My Medical Portal",
        date: "January 20, 2025",
        excerpt: "An inside look at the technology stack and architecture decisions that power my medical history portal project.",
        link: "/blog/medical-portal-tech",
        image: "/api/placeholder/600/400",
      },
    ];
  
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Blog</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sharing my insights and experiences on AI, stock trading, and technology development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View All Posts <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  function ContactSection() {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, opportunities, or collaborations. 
                Feel free to reach out using the form or through my social media profiles.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contact@neevahuja.com" 
                  className="flex items-center text-gray-700 hover:text-indigo-600"
                >
                  <Mail size={20} className="mr-3" />
                  contact@neevahuja.com
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-700 hover:text-indigo-600"
                >
                  <Linkedin size={20} className="mr-3" />
                  LinkedIn
                </a>
                
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-700 hover:text-indigo-600"
                >
                  <Calendar size={20} className="mr-3" />
                  Schedule a Meeting
                </a>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Neev Ahuja</h3>
              <p className="text-gray-400 mt-2">AI Enthusiast | Stock Trading Innovator | Tech Creator</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@neevahuja.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Neev Ahuja. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default App;