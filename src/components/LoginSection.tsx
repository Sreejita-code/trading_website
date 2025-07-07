import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser } from '@/contexts/UserContext';

const LoginSection = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData } = useUser();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountNumber: '',
    ifscCode: ''
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    
    // Set user as logged in with dummy data
    setIsLoggedIn(true);
    setUserData({
      name: 'John Doe',
      userId: '#USR00123'
    });
    
    alert('Login functionality will be implemented with backend integration.');
    navigate('/user-panel');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Registration attempt:', registerData);
    
    // Set user as logged in with signup data
    setIsLoggedIn(true);
    setUserData({
      name: registerData.name,
      userId: '#USR00123'
    });
    
    alert('Registration functionality will be implemented with backend integration.');
    navigate('/user-panel');
  };

  return (
    <section id="login" className="py-20 bg-muted/20">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Login / Signup</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access your dashboard, payment details, and premium benefits. New to Khan Trading World? Create your account today.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="p-8 glass-effect">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Welcome Back</h3>
                  <p className="text-muted-foreground">Sign in to your account</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      required
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <Input
                      id="login-password"
                      name="password"
                      type="password"
                      required
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Enter your password"
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-200 hover-lift"
                  >
                    Sign In
                  </Button>
                </form>

                <div className="text-center">
                  <Button variant="link" className="text-primary">
                    Forgot your password?
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Create Account</h3>
                  <p className="text-muted-foreground">Join Khan Trading World today</p>
                </div>
                
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label htmlFor="register-name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="register-name"
                      name="name"
                      type="text"
                      required
                      value={registerData.name}
                      onChange={handleRegisterChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="register-phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="register-phone"
                      name="phone"
                      type="tel"
                      required
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="register-email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="register-email" 
                      name="email"
                      type="email"
                      required
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="register-password" className="block text-sm font-medium mb-2">
                      Password *
                    </label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      required
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      placeholder="Create a strong password"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="register-confirm-password" className="block text-sm font-medium mb-2">
                      Confirm Password *
                    </label>
                    <Input
                      id="register-confirm-password"
                      name="confirmPassword"
                      type="password"
                      required
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      placeholder="Confirm your password"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary">Bank Information (for payouts)</h4>
                    
                    <div>
                      <label htmlFor="register-account" className="block text-sm font-medium mb-2">
                        Account Number *
                      </label>
                      <Input
                        id="register-account"
                        name="accountNumber"
                        type="text"
                        required
                        value={registerData.accountNumber}
                        onChange={handleRegisterChange}
                        placeholder="Your bank account number"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="register-ifsc" className="block text-sm font-medium mb-2">
                        IFSC Code *
                      </label>
                      <Input
                        id="register-ifsc"
                        name="ifscCode"
                        type="text"
                        required
                        value={registerData.ifscCode}
                        onChange={handleRegisterChange}
                        placeholder="Bank IFSC code"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-200 hover-lift"
                  >
                    Create Account
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  <p>By creating an account, you agree to our terms and conditions.</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="mt-6 p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center text-sm">
              <h4 className="font-semibold mb-2">What you get with your account:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Access to your premium membership dashboard</li>
                <li>• Track your payment history and benefits</li>
                <li>• Manage your bank information for payouts</li>
                <li>• Receive personalized trading recommendations</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
