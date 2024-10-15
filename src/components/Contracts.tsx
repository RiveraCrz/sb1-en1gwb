import React, { useState } from 'react';
import { FileText, Plus } from 'lucide-react';

interface Contract {
  id: number;
  title: string;
  client: string;
  startDate: string;
  endDate: string;
  value: number;
}

const Contracts: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([
    { id: 1, title: 'Web Development', client: 'ABC Corp', startDate: '2023-01-01', endDate: '2023-12-31', value: 50000 },
    { id: 2, title: 'Mobile App', client: 'XYZ Inc', startDate: '2023-03-15', endDate: '2023-09-15', value: 75000 },
  ]);

  const [newContract, setNewContract] = useState({ title: '', client: '', startDate: '', endDate: '', value: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContract({ ...newContract, [e.target.name]: e.target.value });
  };

  const handleAddContract = () => {
    if (newContract.title && newContract.client && newContract.startDate && newContract.endDate && newContract.value) {
      setContracts([...contracts, { id: Date.now(), ...newContract, value: parseFloat(newContract.value) }]);
      setNewContract({ title: '', client: '', startDate: '', endDate: '', value: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contracts Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {contracts.map((contract) => (
          <div key={contract.id} className="bg-white p-4 rounded shadow">
            <FileText className="w-12 h-12 text-orange-500 mb-2" />
            <h3 className="text-lg font-semibold">{contract.title}</h3>
            <p className="text-gray-600">Client: {contract.client}</p>
            <p className="text-gray-500">Start: {contract.startDate}</p>
            <p className="text-gray-500">End: {contract.endDate}</p>
            <p className="text-gray-700 font-semibold">Value: ${contract.value.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Add New Contract</h3>
        <div className="space-y-2">
          <input
            type="text"
            name="title"
            value={newContract.title}
            onChange={handleInputChange}
            placeholder="Contract Title"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="client"
            value={newContract.client}
            onChange={handleInputChange}
            placeholder="Client Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="startDate"
            value={newContract.startDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="endDate"
            value={newContract.endDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="value"
            value={newContract.value}
            onChange={handleInputChange}
            placeholder="Contract Value"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddContract}
            className="w-full bg-orange-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contracts;