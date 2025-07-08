import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useUser } from '@/contexts/UserContext';
import { useAdmin } from '@/contexts/AdminContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData } = useUser();
  const { setIsAdminLoggedIn, setAdminData } = useAdmin();
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [adminData, setAdminLoginData] = useState({
    email: '',
    password: ''
  });

  const [otpCode, setOtpCode] = useState('');
  const [showOtpVerification, setShowOtpVerification] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdminChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminLoginData({
      ...adminData,
      [e.target.name]: e.target.value
    });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    
    setIsLoggedIn(true);
    setUserData({
      name: 'John Doe',
      userId: '#USR00123'
    });
    
    alert('Login functionality will be implemented with backend integration.');
    onClose();
    navigate('/user-panel');
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin login attempt:', adminData);
    
    setIsAdminLoggedIn(true);
    setAdminData({
      name: 'Admin User',
      email: adminData.email
    });
    
    alert('Admin login successful!');
    onClose();
    navigate('/admin-panel');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Registration attempt:', signupData);
    setShowOtpVerification(true);
  };

  const handleOtpVerification = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP verification:', otpCode);
    
    if (otpCode.length === 6) {
      setIsLoggedIn(true);
      setUserData({
        name: signupData.name,
        userId: '#USR00123'
      });
      
      alert('Registration successful! OTP verified.');
      setShowOtpVerification(false);
      onClose();
      navigate('/user-panel');
      
      setSignupData({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setOtpCode('');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login / Signup</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
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
          
          <TabsContent value="signup" className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Create Account</h3>
              <p className="text-muted-foreground">Join Khan Trading World today</p>
            </div>
            
            {!showOtpVerification ? (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label htmlFor="signup-name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="signup-name"
                    name="name"
                    type="text"
                    required
                    value={signupData.name}
                    onChange={handleSignupChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="signup-phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="signup-phone"
                    name="phone"
                    type="tel"
                    required
                    value={signupData.phone}
                    onChange={handleSignupChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="signup-email" 
                    name="email"
                    type="email"
                    required
                    value={signupData.email}
                    onChange={handleSignupChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    value={signupData.password}
                    onChange={handleSignupChange}
                    placeholder="Create a strong password"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium mb-2">
                    Confirm Password *
                  </label>
                  <Input
                    id="signup-confirm-password"
                    name="confirmPassword"
                    type="password"
                    required
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    placeholder="Confirm your password"
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-200 hover-lift"
                >
                  Sign Up
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpVerification} className="space-y-4">
                <div>
                  <label htmlFor="otp-code" className="block text-sm font-medium mb-2">
                    OTP Code *
                  </label>
                  <Input
                    id="otp-code"
                    name="otpCode"
                    type="text"
                    required
                    value={otpCode}
                    onChange={handleOtpChange}
                    placeholder="Enter 6-digit OTP"
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-200 hover-lift"
                >
                  Verify OTP
                </Button>
              </form>
            )}

            <div className="text-center text-sm text-muted-foreground">
              <p>By creating an account, you agree to our terms and conditions.</p>
            </div>
          </TabsContent>

          <TabsContent value="admin" className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Admin Access</h3>
              <p className="text-muted-foreground">Sign in to admin panel</p>
            </div>
            
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-email" className="block text-sm font-medium mb-2">
                  Admin Email
                </label>
                <Input
                  id="admin-email"
                  name="email"
                  type="email"
                  required
                  value={adminData.email}
                  onChange={handleAdminChange}
                  placeholder="admin@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <Input
                  id="admin-password"
                  name="password"
                  type="password"
                  required
                  value={adminData.password}
                  onChange={handleAdminChange}
                  placeholder="Enter admin password"
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-200 hover-lift"
              >
                Admin Sign In
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
