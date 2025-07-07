
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, Users, CreditCard } from 'lucide-react';

const PromotionalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Daily Trading Tips",
      description: "Get expert trading insights delivered to your WhatsApp every day",
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      bgGradient: "from-primary/20 to-accent/20"
    },
    {
      id: 2,
      title: "Franchise Opportunity",
      description: "Start your own trading consultancy with our proven business model",
      icon: <Users className="w-8 h-8 text-accent" />,
      bgGradient: "from-accent/20 to-primary/20"
    },
    {
      id: 3,
      title: "Manual Payout System",
      description: "Transparent and secure payouts handled personally by our team",
      icon: <CreditCard className="w-8 h-8 text-accent" />,
      bgGradient: "from-primary/20 to-accent/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-8 bg-muted/30">
      <div className="container-max section-padding">
        <div className="relative">
          <Card className={`p-8 glass-effect bg-gradient-to-r ${slides[currentSlide].bgGradient} border-primary/20`}>
            <div className="flex items-center justify-center text-center space-x-6">
              <div className="flex-shrink-0">
                {slides[currentSlide].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSlider;
