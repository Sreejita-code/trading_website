
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PromotionalPosterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const posters = [
    {
      id: 1,
      title: "90%+ Accuracy Tips",
      subtitle: "Bank Nifty Expertise",
      description: "Get premium trading tips with proven 90%+ accuracy rate",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-green-500/90 to-emerald-600/90",
      textColor: "text-white",
      accentColor: "text-green-100"
    },
    {
      id: 2,
      title: "₹50Cr+ Managed",
      subtitle: "Professional Fund Management",
      description: "Over 7 years of experience managing client portfolios",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-blue-500/90 to-indigo-600/90",
      textColor: "text-white",
      accentColor: "text-blue-100"
    },
    {
      id: 3,
      title: "Guaranteed 6% Returns",
      subtitle: "Account Handling Service",
      description: "Professional management with capital safety priority",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-purple-500/90 to-violet-600/90",
      textColor: "text-white",
      accentColor: "text-purple-100"
    },
    {
      id: 4,
      title: "Franchise Opportunity",
      subtitle: "Start Your Trading Business",
      description: "Join our proven business model with complete support",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
      bgColor: "bg-gradient-to-br from-orange-500/90 to-red-600/90",
      textColor: "text-white",
      accentColor: "text-orange-100"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posters.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [posters.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posters.length) % posters.length);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-max section-padding">
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden relative h-96 md:h-80">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${posters[currentSlide].image})`
              }}
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 ${posters[currentSlide].bgColor}`} />
            
            <div className="relative z-10 h-full flex items-center justify-center p-8 md:p-12">
              <div className="text-center space-y-6 max-w-3xl">
                <div className="space-y-2">
                  <div className={`text-sm font-semibold tracking-wide uppercase ${posters[currentSlide].accentColor}`}>
                    {posters[currentSlide].subtitle}
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-bold ${posters[currentSlide].textColor}`}>
                    {posters[currentSlide].title}
                  </h2>
                </div>
                
                <p className={`text-xl max-w-2xl mx-auto ${posters[currentSlide].accentColor}`}>
                  {posters[currentSlide].description}
                </p>

                <div className="flex justify-center space-x-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8"
                  >
                    Learn More
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-white/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-white/50"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {posters.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
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

export default PromotionalPosterSlider;
