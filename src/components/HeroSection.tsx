
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';

const HeroSection = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePremiumAccessClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Khan Trading World
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Your trusted partner in trading success. Get expert consultation, premium trading tips, and comprehensive support to elevate your trading journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handlePremiumAccessClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-200 hover-lift"
                >
                  Get Premium Access
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('#about')}
                  className="px-8 py-3 text-lg font-semibold border-2 hover:bg-accent/10 transition-all duration-200"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
