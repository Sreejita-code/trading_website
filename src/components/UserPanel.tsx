import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { LayoutDashboard, User, CreditCard, LogOut, ChevronDown, Home } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';

interface UserData {
  accountType: 'Premium' | 'Non-Premium';
  nextPayoutDate: string;
  payoutAmount: string;
  lastPremiumTransaction: string;
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    age: number;
    gender: string;
    pan?: string;
    aadhar?: string;
  };
  bankDetails: {
    accountHolderName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
    branchName: string;
  };
}

const UserPanel = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData } = useUser();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [userData, setUserDataState] = useState<UserData>({
    accountType: 'Premium',
    nextPayoutDate: '15 July 2025',
    payoutAmount: '₹15,000',
    lastPremiumTransaction: '₹5000 on 01 June 2025',
    personalInfo: {
      name: 'John Doe',
      phone: '+91 9876543210',
      email: 'john.doe@example.com',
      dateOfBirth: '1990-01-15',
      age: 34,
      gender: 'Male',
      pan: 'ABCDE1234F',
      aadhar: '1234 5678 9012'
    },
    bankDetails: {
      accountHolderName: 'John Doe',
      accountNumber: '1234567890123456',
      bankName: 'State Bank of India',
      ifscCode: 'SBIN0001234',
      branchName: 'Main Branch'
    }
  });

  const form = useForm();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'payment', label: 'Payment Info', icon: CreditCard }
  ];

  const withdrawalHistory = [
    { id: 'TXN001', amount: '₹5,000', date: '2025-01-01', status: 'Completed' },
    { id: 'TXN002', amount: '₹3,000', date: '2024-12-15', status: 'Completed' },
    { id: 'TXN003', amount: '₹7,500', date: '2024-12-01', status: 'Pending' }
  ];

  const premiumHistory = [
    { id: 'PRM001', amount: '₹5,000', date: '2025-01-06', status: 'Confirmed' },
    { id: 'PRM002', amount: '₹2,500', date: '2024-12-20', status: 'Confirmed' }
  ];

  const upcomingPayouts = [
    { date: '2025-02-15', amount: '₹12,000', status: 'Scheduled' },
    { date: '2025-03-15', amount: '₹15,000', status: 'Pending Approval' }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const openProfilePanel = () => {
    setActiveSection('profile');
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Account Type</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant={userData.accountType === 'Premium' ? 'default' : 'secondary'}>
              {userData.accountType}
            </Badge>
            <p className="text-xs text-muted-foreground mt-1">Set manually by admin</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Payout Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.nextPayoutDate}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payout Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{userData.payoutAmount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Premium Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">{userData.lastPremiumTransaction}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={userData.personalInfo.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={userData.personalInfo.phone} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={userData.personalInfo.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" value={userData.personalInfo.dateOfBirth} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" value={userData.personalInfo.age} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={userData.personalInfo.gender}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pan">PAN (Optional)</Label>
              <Input id="pan" value={userData.personalInfo.pan} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aadhar">Aadhar (Optional)</Label>
              <Input id="aadhar" value={userData.personalInfo.aadhar} />
            </div>
          </div>
          <Button className="mt-4">Update Personal Info</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bank Details</CardTitle>
          <CardDescription>Update your banking information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="accountHolder">Account Holder Name</Label>
              <Input id="accountHolder" value={userData.bankDetails.accountHolderName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input id="accountNumber" value={userData.bankDetails.accountNumber} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName">Bank Name</Label>
              <Input id="bankName" value={userData.bankDetails.bankName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ifsc">IFSC Code</Label>
              <Input id="ifsc" value={userData.bankDetails.ifscCode} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="branch">Branch Name</Label>
              <Input id="branch" value={userData.bankDetails.branchName} />
            </div>
          </div>
          <Button className="mt-4">Update Bank Details</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="withdrawal" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="withdrawal">Withdrawal History</TabsTrigger>
              <TabsTrigger value="premium">Premium History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="withdrawal" className="space-y-4">
              <div className="text-sm text-muted-foreground mb-2">
                Total Withdrawn: <span className="font-semibold text-green-600">₹15,500</span>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {withdrawalHistory.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="premium" className="space-y-4">
              <div className="text-sm text-muted-foreground mb-2">
                Premium transactions are manually marked by admin.
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {premiumHistory.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Badge variant="default">{transaction.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );

  const renderPaymentInfo = () => (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payouts</CardTitle>
        <CardDescription>All payout details are manually updated by admin.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scheduled Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingPayouts.map((payout, index) => (
              <TableRow key={index}>
                <TableCell>{payout.date}</TableCell>
                <TableCell className="text-green-600 font-semibold">{payout.amount}</TableCell>
                <TableCell>
                  <Badge variant={payout.status === 'Scheduled' ? 'default' : 'secondary'}>
                    {payout.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'profile':
        return renderProfile();
      case 'payment':
        return renderPaymentInfo();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="bg-card border-b border-border">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-foreground">User Panel</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Back to Home Button */}
            <Button variant="outline" onClick={handleBackToHome} className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            
            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>User ID: #USR00123</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={openProfilePanel}>
                  <User className="h-4 w-4 mr-2" />
                  View Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Logout Button */}
            <Button variant="outline" onClick={handleLogout} className="flex items-center space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border min-h-[calc(100vh-73px)] p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
            <p className="text-sm text-muted-foreground">Welcome, {userData.personalInfo.name}</p>
          </div>
          
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground capitalize">
                {activeSection === 'payment' ? 'Payment Information' : activeSection}
              </h1>
              <p className="text-muted-foreground mt-2">
                {activeSection === 'dashboard' && 'Overview of your account and recent activity'}
                {activeSection === 'profile' && 'Manage your personal information and settings'}
                {activeSection === 'payment' && 'View upcoming payouts and payment details'}
              </p>
            </div>
            
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
