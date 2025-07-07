
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EnhancedAboutSection = () => {
  const expertise = [
    { title: "Bank Nifty Tips", accuracy: "90%+" },
    { title: "Volatility Strategies", accuracy: "High Success" },
    { title: "Stop-Loss Management", accuracy: "Risk Control" },
    { title: "Account Handling", accuracy: "Professional" }
  ];

  const achievements = [
    { number: "₹50Cr+", label: "Funds Managed" },
    { number: "7+", label: "Years Experience" },
    { number: "90%+", label: "Tip Accuracy" },
    { number: "1000+", label: "Happy Clients" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">About KHAN TRADING WORLD</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the way in professional trading consultancy with expertise in Bank Nifty and comprehensive financial services.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="p-8 glass-effect">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SKH</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Samim Hossain Khan</h3>
                <p className="text-lg text-accent font-semibold">CEO & Fund Manager</p>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge variant="secondary">7+ Years Experience</Badge>
                  <Badge variant="secondary">₹50Cr+ Managed</Badge>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Leadership Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Professional Fund Management</h4>
                  <p className="text-muted-foreground text-sm">Managing over ₹50 Crores in client funds with proven expertise and dedication</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">7+ Years Market Experience</h4>
                  <p className="text-muted-foreground text-sm">Deep understanding of market dynamics and volatility strategies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Bank Nifty Specialist</h4>
                  <p className="text-muted-foreground text-sm">Specialized expertise in Bank Nifty trading with exceptional accuracy rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((item, index) => (
            <Card key={index} className="p-6 text-center hover-lift transition-all duration-300 glass-effect">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold">{item.title}</h4>
                <Badge variant="outline" className="text-accent border-accent">{item.accuracy}</Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="p-8 glass-effect bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Our Achievements</h3>
            <p className="text-muted-foreground">Proven track record of excellence and client satisfaction</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Services Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Our Core Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover-lift transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Premium Trading Tips</h4>
                <p className="text-sm text-muted-foreground">High-accuracy Bank Nifty tips with proper stop-loss management</p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Account Handling</h4>
                <p className="text-sm text-muted-foreground">Professional fund management with guaranteed returns and safety</p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Expert Consultation</h4>
                <p className="text-sm text-muted-foreground">Personalized guidance and volatility strategy development</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;
