import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import image from '../images/profile.jpeg';
function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Neev Ahuja</h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Web Developer | Tech Creator</p>
            <a href="#projects" className="bg-white text-indigo-600 font-medium py-2 px-6 rounded-md hover:bg-indigo-50 transition duration-300">Explore My Work</a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-white rounded-full overflow-hidden border-4 border-white shadow-xl"> 
              <img
                src={image}
                alt="Neev Ahuja"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-lg max-w-2xl mx-auto">
          I'm a B.Tech Computer Science student at GTBIT, passionate about web development,  and building innovative tech solutions. Welcome to my portfolio!
          </p>
  
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/neev-ahuja" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors">
              <GitHub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/neev-ahuja-94b742327/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:neevahuja888@gmail.com" className="text-white hover:text-indigo-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    );
  }

  export default HeroSection;