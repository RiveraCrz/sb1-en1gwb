import React, { useState } from 'react';
import { Tag, Plus } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Technology', description: 'Tech-related projects and tasks' },
    { id: 2, name: 'Marketing', description: 'Marketing campaigns and strategies' },
  ]);

  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleAddCategory = () => {
    if (newCategory.name && newCategory.description) {
      setCategories([...categories, { id: Date.now(), ...newCategory }]);
      setNewCategory({ name: '', description: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded shadow">
            <Tag className="w-12 h-12 text-green-500 mb-2" />
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Add New Category</h3>
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            value={newCategory.name}
            onChange={handleInputChange}
            placeholder="Category Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            value={newCategory.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddCategory}
            className="w-full bg-green-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;