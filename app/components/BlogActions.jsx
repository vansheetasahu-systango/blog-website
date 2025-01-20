 'use client';

import { useState } from 'react';
import EditModal from './Blog/EditModal';

export default function BlogActions({ blogId, blog }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Track if the edit modal is open

  const handleDelete = async () => {
    setIsLoading(true);
    await fetch(`https://6787e220c4a42c9161089db1.mockapi.io/blogs/${blog.id}`, {
      method: "DELETE"
    });
    alert("Blog deleted successfully");
    window.location.reload();
  };

  const handleEdit = () => {
    setIsEditing(true);  
  };

  const handleSave = () => {
     
    setIsEditing(false);
    alert('Blog updated successfully');
  };

  const handleClose = () => {
    setIsEditing(false); // Close the edit modal
  };

  return (
    <div className="space-x-4">
      <button
        onClick={handleEdit}
        className="px-6 py-2 text-white bg-gradient-to-r from-pink-500 to-amber-500 rounded-lg shadow-md hover:from-pink-600 hover:to-amber-600 transition duration-200"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        disabled={isLoading}
        className="px-6 py-2 text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>

      {/* Show EditModal when isEditing is true */}
      {isEditing && (
        <EditModal
          blog={blog}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
