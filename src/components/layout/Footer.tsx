import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Twitter, Linkedin, Facebook, Instagram, Mail } from 'lucide-react'; // Example icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand/About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Landmark className="h-8 w-8 mr-2 text-primary" />
              <span className="text-xl font-bold text-white">InnovateU</span>
            </Link>
            <p className="text-sm text-slate-400">
              Pioneering the future through education, research, and innovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/academics" className="text-sm hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-sm hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/research" className="text-sm hover:text-primary transition-colors">Research</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/library" className="text-sm hover:text-primary transition-colors">Library</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/student-portal" className="text-sm hover:text-primary transition-colors">Student Portal</Link></li>
              <li><Link to="/faculty-portal" className="text-sm hover:text-primary transition-colors">Faculty Portal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
            <a href="mailto:info@innovateu.edu" className="flex items-center text-sm hover:text-primary transition-colors mb-3">
              <Mail className="h-4 w-4 mr-2" /> info@innovateu.edu
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} InnovateU. All rights reserved. Designed with Passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;