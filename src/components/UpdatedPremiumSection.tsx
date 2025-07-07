
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const UpdatedPremiumSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const { toast } = useToast();

  const features = [
    'Exclusive WhatsApp trading tips',
    'Daily Bank Nifty analysis',
    'Real-time trade alerts',
    'Stop-loss management strategies',
    'Portfolio optimization guidance',
    '1-on-1 consultation sessions',
    'Priority customer support',
    'Monthly performance reports',
    'SMS updates after every call',
    'Volatility strategy development'
  ];

  const handlePremiumButtonClick = (plan: string) => {
    toast({
      title: "Login Required",
      description: "Please log in to access premium plans and proceed with your subscription.",
      variant: "default",
    });
  };

  return (
    <section id="premium" className="py-20 bg-muted/20">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary px-4 py-2">
            Premium Membership Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Choose Your Premium Plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get exclusive access to high-accuracy trading tips, expert guidance, and professional support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Monthly Plan */}
          <Card className={`p-8 hover-lift transition-all duration-300 relative ${
            selectedPlan === 'monthly' ? 'ring-2 ring-primary border-primary' : ''
          }`}>
            <div 
              className="cursor-pointer"
              onClick={() => setSelectedPlan('monthly')}
            >
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold">Monthly Plan</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">₹5,000</div>
                  <div className="text-muted-foreground">per month</div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Most Flexible
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">What's Included:</h4>
                  <ul className="space-y-3 text-left">
                    {features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  onClick={() => handlePremiumButtonClick('monthly')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={selectedPlan !== 'monthly'}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Choose Monthly Plan
                </Button>
              </div>
            </div>
          </Card>

          {/* Quarterly Plan */}
          <Card className={`p-8 hover-lift transition-all duration-300 relative ${
            selectedPlan === 'quarterly' ? 'ring-2 ring-primary border-primary' : ''
          }`}>
            <div 
              className="cursor-pointer"
              onClick={() => setSelectedPlan('quarterly')}
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <Crown className="w-6 h-6 text-amber-600" />
                  <h3 className="text-2xl font-bold">Quarterly Plan</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">₹12,000</div>
                  <div className="text-muted-foreground">for 3 months</div>
                  <div className="space-y-1">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Save ₹3,000
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      <span className="line-through">₹15,000</span> → ₹12,000
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Everything in Monthly, Plus:</h4>
                  <ul className="space-y-3 text-left">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  onClick={() => handlePremiumButtonClick('quarterly')}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  disabled={selectedPlan !== 'quarterly'}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Choose Quarterly Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Payment Process Info */}
        <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Secure Payment Process</h4>
            <p className="text-muted-foreground">
              Premium payments are processed manually via WhatsApp/UPI for your security and convenience. 
              Our team will guide you through the simple payment process and activate your premium access immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline">✓ UPI Payment</Badge>
              <Badge variant="outline">✓ Bank Transfer</Badge>
              <Badge variant="outline">✓ WhatsApp Support</Badge>
              <Badge variant="outline">✓ Instant Activation</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default UpdatedPremiumSection;
