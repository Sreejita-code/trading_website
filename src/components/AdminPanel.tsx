
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdmin } from '@/contexts/AdminContext';
import { Users, Shield, CreditCard, Home } from 'lucide-react';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { adminData, setIsAdminLoggedIn, setAdminData } = useAdmin();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userFilter, setUserFilter] = useState('all');

  // Mock data - would come from backend
  const mockUsers = [
    { id: '#USR00123', name: 'John Doe', email: 'john@example.com', type: 'Premium' },
    { id: '#USR00124', name: 'Jane Smith', email: 'jane@example.com', type: 'Non-Premium' },
    { id: '#USR00125', name: 'Bob Johnson', email: 'bob@example.com', type: 'Premium' },
  ];

  const [withdrawalForm, setWithdrawalForm] = useState({
    userId: '',
    transactionId: '',
    amountPaid: '',
    dateOfPayment: '',
    nextPaymentDate: '',
    status: ''
  });

  const [premiumForm, setPremiumForm] = useState({
    userId: '',
    transactionId: '',
    amountPaid: '',
    dateOfPayment: '',
    premiumDuration: '',
    status: ''
  });

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminData(null);
    navigate('/');
  };

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setActiveTab('user-profile');
  };

  const handleWithdrawalFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawalForm({
      ...withdrawalForm,
      [e.target.name]: e.target.value
    });
  };

  const handleWithdrawalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Withdrawal payment form submitted:', withdrawalForm);
    alert('Withdrawal payment record saved successfully!');
    setWithdrawalForm({
      userId: '',
      transactionId: '',
      amountPaid: '',
      dateOfPayment: '',
      nextPaymentDate: '',
      status: ''
    });
  };

  const handlePremiumFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPremiumForm({
      ...premiumForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePremiumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Premium payment form submitted:', premiumForm);
    alert('Premium payment record saved successfully!');
    setPremiumForm({
      userId: '',
      transactionId: '',
      amountPaid: '',
      dateOfPayment: '',
      premiumDuration: '',
      status: ''
    });
  };

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = userFilter === 'all' || user.type.toLowerCase() === userFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const totalUsers = mockUsers.length;
  const premiumUsers = mockUsers.filter(u => u.type === 'Premium').length;
  const nonPremiumUsers = mockUsers.filter(u => u.type === 'Non-Premium').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <span className="text-sm text-muted-foreground">
              Welcome, {adminData?.name}
            </span>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-card border-r border-border min-h-screen p-4">
          <div className="space-y-2">
            <Button
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant={activeTab === 'users' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('users')}
            >
              <Users className="h-4 w-4 mr-2" />
              Users
            </Button>
            <Button
              variant={activeTab === 'payments' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('payments')}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Payments
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Admin Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{totalUsers}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Premium Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">{premiumUsers}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Non-Premium Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-600">{nonPremiumUsers}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">User List</h2>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('dashboard')}
                >
                  Back to Dashboard
                </Button>
              </div>
              
              <div className="flex gap-4 mb-4">
                <Input
                  placeholder="Search by User ID, Name, or Email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <select
                  value={userFilter}
                  onChange={(e) => setUserFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="all">All Users</option>
                  <option value="premium">Premium</option>
                  <option value="non-premium">Non-Premium</option>
                </select>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>User Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Account Type</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.type === 'Premium' ? 'default' : 'secondary'}>
                            {user.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUserClick(user)}
                          >
                            View Profile
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === 'user-profile' && selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">User Profile - {selectedUser.name}</h2>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('users')}
                >
                  Back to Users
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">User ID</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.id}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Account Type</label>
                        <Badge variant={selectedUser.type === 'Premium' ? 'default' : 'secondary'}>
                          {selectedUser.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Role Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Current Status: <Badge variant={selectedUser.type === 'Premium' ? 'default' : 'secondary'}>
                          {selectedUser.type}
                        </Badge>
                      </p>
                      <Button
                        variant={selectedUser.type === 'Premium' ? 'destructive' : 'default'}
                        onClick={() => {
                          const newType = selectedUser.type === 'Premium' ? 'Non-Premium' : 'Premium';
                          setSelectedUser({...selectedUser, type: newType});
                          alert(`User status changed to ${newType}`);
                        }}
                      >
                        Toggle to {selectedUser.type === 'Premium' ? 'Non-Premium' : 'Premium'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="withdrawals">
                    <TabsList>
                      <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
                      <TabsTrigger value="premium">Premium Purchases</TabsTrigger>
                    </TabsList>
                    <TabsContent value="withdrawals">
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
                          <TableRow>
                            <TableCell>TXN001</TableCell>
                            <TableCell>₹5,000</TableCell>
                            <TableCell>2024-01-15</TableCell>
                            <TableCell><Badge variant="default">Completed</Badge></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                    <TabsContent value="premium">
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
                          <TableRow>
                            <TableCell>PMT001</TableCell>
                            <TableCell>₹10,000</TableCell>
                            <TableCell>2024-01-10</TableCell>
                            <TableCell><Badge variant="default">Completed</Badge></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Payment Management</h2>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('dashboard')}
                >
                  Back to Dashboard
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Add Payment Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="withdrawal">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="withdrawal">Add Withdrawal Payment</TabsTrigger>
                      <TabsTrigger value="premium">Add Premium Payment</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="withdrawal" className="space-y-4">
                      <form onSubmit={handleWithdrawalSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="withdrawal-userId" className="block text-sm font-medium mb-2">
                              User ID *
                            </label>
                            <Input
                              id="withdrawal-userId"
                              name="userId"
                              type="text"
                              required
                              value={withdrawalForm.userId}
                              onChange={handleWithdrawalFormChange}
                              placeholder="e.g., #USR00123"
                            />
                          </div>
                          <div>
                            <label htmlFor="withdrawal-transactionId" className="block text-sm font-medium mb-2">
                              Transaction ID *
                            </label>
                            <Input
                              id="withdrawal-transactionId"
                              name="transactionId"
                              type="text"
                              required
                              value={withdrawalForm.transactionId}
                              onChange={handleWithdrawalFormChange}
                              placeholder="e.g., TXN001"
                            />
                          </div>
                          <div>
                            <label htmlFor="withdrawal-amountPaid" className="block text-sm font-medium mb-2">
                              Amount Paid *
                            </label>
                            <Input
                              id="withdrawal-amountPaid"
                              name="amountPaid"
                              type="number"
                              required
                              value={withdrawalForm.amountPaid}
                              onChange={handleWithdrawalFormChange}
                              placeholder="Enter amount"
                            />
                          </div>
                          <div>
                            <label htmlFor="withdrawal-dateOfPayment" className="block text-sm font-medium mb-2">
                              Date of Payment *
                            </label>
                            <Input
                              id="withdrawal-dateOfPayment"
                              name="dateOfPayment"
                              type="date"
                              required
                              value={withdrawalForm.dateOfPayment}
                              onChange={handleWithdrawalFormChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="withdrawal-nextPaymentDate" className="block text-sm font-medium mb-2">
                              Next Payment Date *
                            </label>
                            <Input
                              id="withdrawal-nextPaymentDate"
                              name="nextPaymentDate"
                              type="date"
                              required
                              value={withdrawalForm.nextPaymentDate}
                              onChange={handleWithdrawalFormChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="withdrawal-status" className="block text-sm font-medium mb-2">
                              Status *
                            </label>
                            <Select value={withdrawalForm.status} onValueChange={(value) => setWithdrawalForm({...withdrawalForm, status: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Paid">Paid</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          Save Withdrawal Payment Record
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="premium" className="space-y-4">
                      <form onSubmit={handlePremiumSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="premium-userId" className="block text-sm font-medium mb-2">
                              User ID *
                            </label>
                            <Input
                              id="premium-userId"
                              name="userId"
                              type="text"
                              required
                              value={premiumForm.userId}
                              onChange={handlePremiumFormChange}
                              placeholder="e.g., #USR00123"
                            />
                          </div>
                          <div>
                            <label htmlFor="premium-transactionId" className="block text-sm font-medium mb-2">
                              Transaction ID *
                            </label>
                            <Input
                              id="premium-transactionId"
                              name="transactionId"
                              type="text"
                              required
                              value={premiumForm.transactionId}
                              onChange={handlePremiumFormChange}
                              placeholder="e.g., PMT001"
                            />
                          </div>
                          <div>
                            <label htmlFor="premium-amountPaid" className="block text-sm font-medium mb-2">
                              Amount Paid *
                            </label>
                            <Input
                              id="premium-amountPaid"
                              name="amountPaid"
                              type="number"
                              required
                              value={premiumForm.amountPaid}
                              onChange={handlePremiumFormChange}
                              placeholder="Enter amount"
                            />
                          </div>
                          <div>
                            <label htmlFor="premium-dateOfPayment" className="block text-sm font-medium mb-2">
                              Date of Payment *
                            </label>
                            <Input
                              id="premium-dateOfPayment"
                              name="dateOfPayment"
                              type="date"
                              required
                              value={premiumForm.dateOfPayment}
                              onChange={handlePremiumFormChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="premium-premiumDuration" className="block text-sm font-medium mb-2">
                              Premium Duration *
                            </label>
                            <Select value={premiumForm.premiumDuration} onValueChange={(value) => setPremiumForm({...premiumForm, premiumDuration: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1 Month (₹5000)">1 Month (₹5000)</SelectItem>
                                <SelectItem value="3 Months (₹12000)">3 Months (₹12000)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="premium-status" className="block text-sm font-medium mb-2">
                              Status *
                            </label>
                            <Select value={premiumForm.status} onValueChange={(value) => setPremiumForm({...premiumForm, status: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Expired">Expired</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          Save Premium Payment Record
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
