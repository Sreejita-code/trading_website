
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const FranchiseSection = () => {
  const benefits = [
    {
      title: 'Proven Business Model',
      description: 'Leverage our tested and successful trading consultancy framework'
    },
    {
      title: 'Complete Training',
      description: 'Comprehensive training program to get you started quickly'
    },
    {
      title: 'Marketing Support',
      description: 'Full marketing materials and ongoing promotional support'
    },
    {
      title: 'Technology Platform',
      description: 'Access to our proprietary trading tools and client management system'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="franchise" className="py-20">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Franchise Opportunity</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Khan Trading World family and build your own successful trading consultancy business 
            with our proven system and comprehensive support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Partner With Us?</h3>
            <p className="text-muted-foreground">
              Starting your own trading consultancy can be challenging, but with Khan Trading World's 
              franchise program, you get all the tools, knowledge, and support needed to succeed in 
              this lucrative industry.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold transition-all duration-200 hover-lift"
            >
              Get Franchise Information
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center hover-lift transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">₹5L+</div>
              <div className="text-sm text-muted-foreground">Average Monthly Revenue Potential</div>
            </Card>
            <Card className="p-6 text-center hover-lift transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Successful Franchises</div>
            </Card>
            <Card className="p-6 text-center hover-lift transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Months ROI Timeline</div>
            </Card>
            <Card className="p-6 text-center hover-lift transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Ongoing Support</div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards financial independence. Contact us today to learn more about 
              our franchise opportunities and how we can help you build a successful trading consultancy business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="px-8 py-3 text-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-all duration-200"
              >
                Request Information
              </Button>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-200"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FranchiseSection;
