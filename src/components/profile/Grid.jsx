import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import NewPost from '../ui/NewPost';

const GridItem = ({ imageSrc }) => (
  <div className="relative aspect-square overflow-hidden rounded-lg">
    <img src={imageSrc} alt="Grid item" className="object-cover w-full h-full" />
  </div>
);

const Grid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gridItems = [
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-300">Posts</h2>
        <Button 
          onClick={() => setIsModalOpen(true)} 
          className="text-white" 
          color="primary"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gridItems.map((src, index) => (
          <GridItem key={index} imageSrc={src} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <NewPost closeModal={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Grid;
