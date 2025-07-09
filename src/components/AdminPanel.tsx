import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAdmin } from '@/contexts/AdminContext';
import { Users, Shield, Home, Plus, Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Transaction types
interface WithdrawalTransaction {
  id: string;
  amount: string;
  date: string;
  status: string;
}

interface PremiumTransaction {
  id: string;
  amount: string;
  date: string;
  duration: string;
  status: string;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const { adminData, setIsAdminLoggedIn, setAdminData } = useAdmin();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userFilter, setUserFilter] = useState('all');

  // Dialog states
  const [isWithdrawalDialogOpen, setIsWithdrawalDialogOpen] = useState(false);
  const [isPremiumDialogOpen, setIsPremiumDialogOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<any>(null);
  const [transactionType, setTransactionType] = useState<'withdrawal' | 'premium'>('withdrawal');

  // Mock data with state management
  const [mockUsers, setMockUsers] = useState([
    { 
      id: '#USR00123', 
      name: 'John Doe', 
      email: 'john@example.com', 
      type: 'Premium',
      phone: '+91 9876543210',
      dob: '1990-01-15',
      age: '34',
      gender: 'Male',
      pan: 'ABCDE1234F',
      aadhar: '1234-5678-9012',
      bankInfo: {
        accountHolderName: 'John Doe',
        accountNumber: '1234567890',
        bankName: 'State Bank of India',
        ifsc: 'SBIN0001234',
        branchName: 'Main Branch'
      },
      upcomingPayment: {
        amount: 5000,
        nextDate: '2024-02-15'
      }
    },
    { 
      id: '#USR00124', 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      type: 'Non-Premium',
      phone: '+91 9876543211',
      dob: '1985-05-20',
      age: '39',
      gender: 'Female',
      pan: 'FGHIJ5678K',
      aadhar: '5678-9012-3456',
      bankInfo: {
        accountHolderName: 'Jane Smith',
        accountNumber: '0987654321',
        bankName: 'HDFC Bank',
        ifsc: 'HDFC0001234',
        branchName: 'City Branch'
      },
      upcomingPayment: {
        amount: 0,
        nextDate: ''
      }
    },
    { 
      id: '#USR00125', 
      name: 'Bob Johnson', 
      email: 'bob@example.com', 
      type: 'Premium',
      phone: '+91 9876543212',
      dob: '1992-12-10',
      age: '32',
      gender: 'Male',
      pan: 'KLMNO9012P',
      aadhar: '9012-3456-7890',
      bankInfo: {
        accountHolderName: 'Bob Johnson',
        accountNumber: '1122334455',
        bankName: 'ICICI Bank',
        ifsc: 'ICIC0001234',
        branchName: 'Tech Park Branch'
      },
      upcomingPayment: {
        amount: 12000,
        nextDate: '2024-02-20'
      }
    },
  ]);

  // Transaction data with state management
  const [withdrawalTransactions, setWithdrawalTransactions] = useState<WithdrawalTransaction[]>([
    { id: 'TXN001', amount: '₹5,000', date: '2024-01-15', status: 'Completed' },
    { id: 'TXN002', amount: '₹3,000', date: '2024-01-10', status: 'Pending' },
  ]);

  const [premiumTransactions, setPremiumTransactions] = useState<PremiumTransaction[]>([
    { id: 'PMT001', amount: '₹10,000', date: '2024-01-10', duration: '3 Months', status: 'Active' },
  ]);

  const [withdrawalForm, setWithdrawalForm] = useState({
    transactionId: '',
    amount: '',
    dateOfPayment: '',
    status: ''
  });

  const [premiumForm, setPremiumForm] = useState({
    transactionId: '',
    amount: '',
    dateOfPayment: '',
    premiumDuration: '',
    status: ''
  });

  const [upcomingPayment, setUpcomingPayment] = useState({
    amount: selectedUser?.upcomingPayment?.amount || 0,
    nextDate: selectedUser?.upcomingPayment?.nextDate || ''
  });

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminData(null);
    navigate('/');
  };

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setUpcomingPayment({
      amount: user.upcomingPayment?.amount || 0,
      nextDate: user.upcomingPayment?.nextDate || ''
    });
    setActiveTab('user-profile');
  };

  const handleWithdrawalFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawalForm({
      ...withdrawalForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePremiumFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPremiumForm({
      ...premiumForm,
      [e.target.name]: e.target.value
    });
  };

  const handleAddWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTransaction) {
      // Edit existing transaction
      setWithdrawalTransactions(prev => 
        prev.map(t => t.id === editingTransaction.id 
          ? {
              ...t,
              id: withdrawalForm.transactionId,
              amount: `₹${withdrawalForm.amount}`,
              date: withdrawalForm.dateOfPayment,
              status: withdrawalForm.status
            }
          : t
        )
      );
      toast({
        title: "Success",
        description: "Withdrawal transaction updated successfully!",
      });
    } else {
      // Add new transaction
      const newTransaction: WithdrawalTransaction = {
        id: withdrawalForm.transactionId,
        amount: `₹${withdrawalForm.amount}`,
        date: withdrawalForm.dateOfPayment,
        status: withdrawalForm.status
      };
      setWithdrawalTransactions(prev => [...prev, newTransaction]);
      toast({
        title: "Success",
        description: "Withdrawal transaction added successfully!",
      });
    }
    
    resetWithdrawalForm();
    setIsWithdrawalDialogOpen(false);
  };

  const handleAddPremium = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTransaction) {
      // Edit existing transaction
      setPremiumTransactions(prev => 
        prev.map(t => t.id === editingTransaction.id 
          ? {
              ...t,
              id: premiumForm.transactionId,
              amount: `₹${premiumForm.amount}`,
              date: premiumForm.dateOfPayment,
              duration: premiumForm.premiumDuration,
              status: premiumForm.status
            }
          : t
        )
      );
      toast({
        title: "Success",
        description: "Premium transaction updated successfully!",
      });
    } else {
      // Add new transaction
      const newTransaction: PremiumTransaction = {
        id: premiumForm.transactionId,
        amount: `₹${premiumForm.amount}`,
        date: premiumForm.dateOfPayment,
        duration: premiumForm.premiumDuration,
        status: premiumForm.status
      };
      setPremiumTransactions(prev => [...prev, newTransaction]);
      toast({
        title: "Success",
        description: "Premium transaction added successfully!",
      });
    }
    
    resetPremiumForm();
    setIsPremiumDialogOpen(false);
  };

  const handleEditWithdrawal = (transaction: WithdrawalTransaction) => {
    setEditingTransaction(transaction);
    setWithdrawalForm({
      transactionId: transaction.id,
      amount: transaction.amount.replace('₹', ''),
      dateOfPayment: transaction.date,
      status: transaction.status
    });
    setIsWithdrawalDialogOpen(true);
  };

  const handleEditPremium = (transaction: PremiumTransaction) => {
    setEditingTransaction(transaction);
    setPremiumForm({
      transactionId: transaction.id,
      amount: transaction.amount.replace('₹', ''),
      dateOfPayment: transaction.date,
      premiumDuration: transaction.duration,
      status: transaction.status
    });
    setIsPremiumDialogOpen(true);
  };

  const handleDeleteWithdrawal = (transactionId: string) => {
    setWithdrawalTransactions(prev => prev.filter(t => t.id !== transactionId));
    toast({
      title: "Success",
      description: "Withdrawal transaction deleted successfully!",
    });
  };

  const handleDeletePremium = (transactionId: string) => {
    setPremiumTransactions(prev => prev.filter(t => t.id !== transactionId));
    toast({
      title: "Success",
      description: "Premium transaction deleted successfully!",
    });
  };

  const resetWithdrawalForm = () => {
    setWithdrawalForm({
      transactionId: '',
      amount: '',
      dateOfPayment: '',
      status: ''
    });
    setEditingTransaction(null);
  };

  const resetPremiumForm = () => {
    setPremiumForm({
      transactionId: '',
      amount: '',
      dateOfPayment: '',
      premiumDuration: '',
      status: ''
    });
    setEditingTransaction(null);
  };

  const handleUpcomingPaymentUpdate = () => {
    console.log('Upcoming payment updated:', upcomingPayment);
    alert('Upcoming payment information updated successfully!');
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
                <Button variant="outline" onClick={() => setActiveTab('dashboard')}>
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
                            Open Full Profile
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
                <h2 className="text-3xl font-bold">User Full Profile (Admin View) - {selectedUser.name}</h2>
                <Button variant="outline" onClick={() => setActiveTab('users')}>
                  Back to Users
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Info</CardTitle>
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
                        <label className="text-sm font-medium">Phone</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">DOB</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.dob}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Age</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.age}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Gender</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.gender}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">PAN</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.pan}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Aadhar</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.aadhar}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bank Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bank Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="text-sm font-medium">Account Holder Name</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.bankInfo?.accountHolderName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Account Number</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.bankInfo?.accountNumber}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Bank Name</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.bankInfo?.bankName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">IFSC</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.bankInfo?.ifsc}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Branch Name</label>
                        <p className="text-sm text-muted-foreground">{selectedUser.bankInfo?.branchName}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* User Role Control */}
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

                {/* Upcoming Payment */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Payment</CardTitle>
                    <p className="text-sm text-muted-foreground">Displayed on user's dashboard</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Payment Amount</label>
                      <Input
                        type="number"
                        value={upcomingPayment.amount}
                        onChange={(e) => setUpcomingPayment({...upcomingPayment, amount: Number(e.target.value)})}
                        placeholder="Enter amount"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Next Payment Date</label>
                      <Input
                        type="date"
                        value={upcomingPayment.nextDate}
                        onChange={(e) => setUpcomingPayment({...upcomingPayment, nextDate: e.target.value})}
                      />
                    </div>
                    <Button onClick={handleUpcomingPaymentUpdate}>
                      Update Payment Info
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="withdrawals">
                    <TabsList>
                      <TabsTrigger value="withdrawals">Withdrawal History</TabsTrigger>
                      <TabsTrigger value="premium">Premium History</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="withdrawals" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">Withdrawal Transactions</h4>
                        <Dialog open={isWithdrawalDialogOpen} onOpenChange={setIsWithdrawalDialogOpen}>
                          <DialogTrigger asChild>
                            <Button size="sm" className="flex items-center gap-2" onClick={() => resetWithdrawalForm()}>
                              <Plus className="h-4 w-4" />
                              Add Transaction
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                {editingTransaction ? 'Edit Withdrawal Transaction' : 'Add Withdrawal Transaction'}
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleAddWithdrawal} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                  <label htmlFor="withdrawal-amount" className="block text-sm font-medium mb-2">
                                    Amount *
                                  </label>
                                  <Input
                                    id="withdrawal-amount"
                                    name="amount"
                                    type="number"
                                    required
                                    value={withdrawalForm.amount}
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
                                  <label htmlFor="withdrawal-status" className="block text-sm font-medium mb-2">
                                    Status *
                                  </label>
                                  <Select 
                                    value={withdrawalForm.status} 
                                    onValueChange={(value) => setWithdrawalForm({...withdrawalForm, status: value})}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Paid">Paid</SelectItem>
                                      <SelectItem value="Pending">Pending</SelectItem>
                                      <SelectItem value="Completed">Completed</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <Button type="submit" className="w-full">
                                {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                      
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Transaction ID</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {withdrawalTransactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                              <TableCell>{transaction.id}</TableCell>
                              <TableCell>{transaction.amount}</TableCell>
                              <TableCell>{transaction.date}</TableCell>
                              <TableCell>
                                <Badge variant={transaction.status === 'Completed' || transaction.status === 'Paid' ? 'default' : 'secondary'}>
                                  {transaction.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleEditWithdrawal(transaction)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleDeleteWithdrawal(transaction.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>

                    <TabsContent value="premium" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">Premium Transactions</h4>
                        <Dialog open={isPremiumDialogOpen} onOpenChange={setIsPremiumDialogOpen}>
                          <DialogTrigger asChild>
                            <Button size="sm" className="flex items-center gap-2" onClick={() => resetPremiumForm()}>
                              <Plus className="h-4 w-4" />
                              Add Transaction
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                {editingTransaction ? 'Edit Premium Transaction' : 'Add Premium Transaction'}
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleAddPremium} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                  <label htmlFor="premium-amount" className="block text-sm font-medium mb-2">
                                    Amount *
                                  </label>
                                  <Input
                                    id="premium-amount"
                                    name="amount"
                                    type="number"
                                    required
                                    value={premiumForm.amount}
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
                                  <Select 
                                    value={premiumForm.premiumDuration} 
                                    onValueChange={(value) => setPremiumForm({...premiumForm, premiumDuration: value})}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1 Month">1 Month</SelectItem>
                                      <SelectItem value="3 Months">3 Months</SelectItem>
                                      <SelectItem value="6 Months">6 Months</SelectItem>
                                      <SelectItem value="12 Months">12 Months</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="md:col-span-2">
                                  <label htmlFor="premium-status" className="block text-sm font-medium mb-2">
                                    Status *
                                  </label>
                                  <Select 
                                    value={premiumForm.status} 
                                    onValueChange={(value) => setPremiumForm({...premiumForm, status: value})}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Active">Active</SelectItem>
                                      <SelectItem value="Expired">Expired</SelectItem>
                                      <SelectItem value="Pending">Pending</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <Button type="submit" className="w-full">
                                {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                      
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Transaction ID</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {premiumTransactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                              <TableCell>{transaction.id}</TableCell>
                              <TableCell>{transaction.amount}</TableCell>
                              <TableCell>{transaction.date}</TableCell>
                              <TableCell>{transaction.duration}</TableCell>
                              <TableCell>
                                <Badge variant={transaction.status === 'Active' ? 'default' : 'secondary'}>
                                  {transaction.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleEditPremium(transaction)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleDeletePremium(transaction.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
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
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
