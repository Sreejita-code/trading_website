
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, MessageSquare, TrendingUp, Phone } from 'lucide-react';

const AccountHandlingSection = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Guaranteed 6% Returns",
      description: "Monthly guaranteed returns with professional fund management",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Capital Safety First",
      description: "Your capital protection is our top priority with risk management",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "SMS After Every Call",
      description: "Complete transparency with SMS updates after each trading decision",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 financial support and guidance from our expert team",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi, I\'m interested in Account Handling Services. Please provide more details.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary px-4 py-2">
            Professional Fund Management
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Account Handling Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let our experts manage your trading account with guaranteed returns and complete transparency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Choose Our Account Handling?</h3>
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <div className={feature.color}>{feature.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 glass-effect">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Service Highlights</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">6%</div>
                    <div className="text-sm text-muted-foreground">Monthly Returns</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">₹50Cr+</div>
                    <div className="text-sm text-muted-foreground">Funds Managed</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Professional Management</span>
                    <Badge variant="secondary">✓ Included</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>SMS Updates</span>
                    <Badge variant="secondary">✓ Included</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>24/7 Support</span>
                    <Badge variant="secondary">✓ Included</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Capital Safety</span>
                    <Badge variant="secondary">✓ Priority</Badge>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Enquire About Account Handling
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Process Flow */}
        <Card className="p-8 glass-effect">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">How It Works</h3>
            <p className="text-muted-foreground">Simple process to get started with professional account handling</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-sm text-muted-foreground">Reach out via WhatsApp or call</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold">Account Setup</h4>
              <p className="text-sm text-muted-foreground">We help setup your trading account</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold">Start Trading</h4>
              <p className="text-sm text-muted-foreground">Our experts manage your trades</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">4</span>
              </div>
              <h4 className="font-semibold">Track Returns</h4>
              <p className="text-sm text-muted-foreground">Monitor guaranteed monthly returns</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AccountHandlingSection;
