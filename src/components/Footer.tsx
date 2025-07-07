
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Disclaimer', href: '#' },
    { label: 'Support', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container-max section-padding">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KTW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">KHAN TRADING WORLD</h3>
                  <p className="text-sm text-muted-foreground">Trading Consultancy</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Your trusted partner in trading success. We provide expert consultation, premium trading tips, 
                and comprehensive support to help you achieve your financial goals.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a 
                  href="mailto:contact@khantradingworld.com"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-200"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('#home')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#about')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#premium')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Premium Info
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#franchise')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Franchise
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Email: contact@khantradingworld.com
                </p>
                <p className="text-muted-foreground text-sm">
                  Phone: +91-XXXXXXXXXX
                </p>
                <p className="text-muted-foreground text-sm">
                  WhatsApp: Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Khan Trading World. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href, '_blank')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
