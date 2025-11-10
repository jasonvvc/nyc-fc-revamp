import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full -mr-36 -mb-36" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">First Construction Zone</h3>
                <p className="text-primary-foreground/80 text-sm">Est. 2005</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6 max-w-md">
              Brooklyn's trusted construction partner delivering exceptional quality and 
              craftsmanship for over 15 years.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-lg font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-lg font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-lg font-bold">ig</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  2692 Coney Island Ave #2fl<br />Brooklyn, NY 11235
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">(646) 533-7097</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">fcznyc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-8 text-center">
          <p className="text-primary-foreground/70">
            © {currentYear} First Construction Zone Inc. All rights reserved. | 
            <span className="text-primary-foreground/50"> Fully Licensed & Insured</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
