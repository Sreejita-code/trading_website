
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PremiumSection = () => {
  const features = [
    'Exclusive WhatsApp trading tips',
    'Daily market analysis',
    'Real-time trade alerts',
    'Risk management strategies',
    'Portfolio optimization',
    '1-on-1 consultation sessions',
    'Priority customer support',
    'Monthly performance reports'
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi, I\'m interested in the Premium Membership. Please provide more details.', '_blank');
  };

  return (
    <section id="premium" className="py-20 bg-muted/20">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Premium Membership</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock exclusive trading insights and personalized guidance with our premium membership program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 glass-effect hover-lift transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">₹2,999</div>
                  <div className="text-muted-foreground">for 3 months</div>
                  <div className="text-sm text-accent font-medium">Special Launch Price</div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What You Get:</h3>
                  <ul className="space-y-2 text-left">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 hover-lift"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Contact via WhatsApp
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Premium?</h3>
            
            <div className="space-y-6">
              <Card className="p-6 hover-lift transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Direct WhatsApp Access</h4>
                    <p className="text-muted-foreground">Get trading tips directly on WhatsApp for instant notifications and easy access on your mobile device.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Proven Results</h4>
                    <p className="text-muted-foreground">Our premium members see an average of 25% improvement in their trading performance within the first month.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Secure Payment Process</h4>
                    <p className="text-muted-foreground">Premium payments are processed manually via WhatsApp/UPI for your security and convenience.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <p className="text-muted-foreground mb-4">
              <strong>Note:</strong> Premium payments are made externally via WhatsApp/UPI for your convenience and security. 
              Our team will guide you through the simple payment process.
            </p>
            <Button 
              variant="outline" 
              onClick={handleWhatsAppContact}
              className="border-accent text-accent hover:bg-accent/10"
            >
              Learn More About Payment Process
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
