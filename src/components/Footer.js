import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

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

export default Footer;