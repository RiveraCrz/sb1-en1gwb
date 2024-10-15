import React, { useState } from 'react';
import { Briefcase, Plus } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'Website Redesign', description: 'Redesign company website', status: 'In Progress' },
    { id: 2, name: 'Mobile App Development', description: 'Develop a new mobile app', status: 'Not Started' },
  ]);

  const [newProject, setNewProject] = useState({ name: '', description: '', status: 'Not Started' as const });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, { id: Date.now(), ...newProject }]);
      setNewProject({ name: '', description: '', status: 'Not Started' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <Briefcase className="w-12 h-12 text-indigo-500 mb-2" />
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className={`text-sm font-semibold ${
              project.status === 'Completed' ? 'text-green-500' :
              project.status === 'In Progress' ? 'text-yellow-500' :
              'text-red-500'
            }`}>
              {project.status}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Add New Project</h3>
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            value={newProject.name}
            onChange={handleInputChange}
            placeholder="Project Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <select
            name="status"
            value={newProject.status}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            onClick={handleAddProject}
            className="w-full bg-indigo-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;