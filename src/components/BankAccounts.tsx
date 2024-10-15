import React, { useState } from 'react';
import { CreditCard, Plus } from 'lucide-react';

interface BankAccount {
  id: number;
  accountName: string;
  accountNumber: string;
  balance: number;
}

const BankAccounts: React.FC = () => {
  const [accounts, setAccounts] = useState<BankAccount[]>([
    { id: 1, accountName: 'Main Account', accountNumber: '1234567890', balance: 10000 },
    { id: 2, accountName: 'Savings Account', accountNumber: '0987654321', balance: 5000 },
  ]);

  const [newAccount, setNewAccount] = useState({ accountName: '', accountNumber: '', balance: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const handleAddAccount = () => {
    if (newAccount.accountName && newAccount.accountNumber && newAccount.balance) {
      setAccounts([...accounts, { id: Date.now(), ...newAccount, balance: parseFloat(newAccount.balance) }]);
      setNewAccount({ accountName: '', accountNumber: '', balance: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bank Accounts Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white p-4 rounded shadow">
            <CreditCard className="w-12 h-12 text-purple-500 mb-2" />
            <h3 className="text-lg font-semibold">{account.accountName}</h3>
            <p className="text-gray-600">Account: {account.accountNumber}</p>
            <p className="text-gray-500">Balance: ${account.balance.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Add New Bank Account</h3>
        <div className="space-y-2">
          <input
            type="text"
            name="accountName"
            value={newAccount.accountName}
            onChange={handleInputChange}
            placeholder="Account Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="accountNumber"
            value={newAccount.accountNumber}
            onChange={handleInputChange}
            placeholder="Account Number"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="balance"
            value={newAccount.balance}
            onChange={handleInputChange}
            placeholder="Initial Balance"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddAccount}
            className="w-full bg-purple-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add Bank Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;