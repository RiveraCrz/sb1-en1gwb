import React, { useState } from 'react';
import { User, Plus } from 'lucide-react';

interface Person {
  id: number;
  name: string;
  position: string;
  email: string;
}

const Personnel: React.FC = () => {
  const [personnel, setPersonnel] = useState<Person[]>([
    { id: 1, name: 'John Doe', position: 'Developer', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', position: 'Designer', email: 'jane@example.com' },
  ]);

  const [newPerson, setNewPerson] = useState({ name: '', position: '', email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const handleAddPerson = () => {
    if (newPerson.name && newPerson.position && newPerson.email) {
      setPersonnel([...personnel, { id: Date.now(), ...newPerson }]);
      setNewPerson({ name: '', position: '', email: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personnel Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {personnel.map((person) => (
          <div key={person.id} className="bg-white p-4 rounded shadow">
            <User className="w-12 h-12 text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-600">{person.position}</p>
            <p className="text-gray-500">{person.email}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Add New Person</h3>
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            value={newPerson.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="position"
            value={newPerson.position}
            onChange={handleInputChange}
            placeholder="Position"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={newPerson.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddPerson}
            className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personnel;