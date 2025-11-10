const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">First Construction Zone</h3>
            <p className="text-primary-foreground/80">
              Building Excellence Since 2005
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 mb-1">
              2692 Coney Island Ave #2fl, Brooklyn, NY 11235
            </p>
            <p className="text-primary-foreground/80">
              (646) 533-7097 • fcznyc@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} First Construction Zone Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
