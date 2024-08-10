import React, { useState } from 'react';
import { IconLayoutGrid, IconHanger2} from '@tabler/icons-react';
import Grid from './Grid';

const NavTab = ({ icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-4 flex justify-center items-center transition-colors duration-300 ${
      isActive ? 'bg-mystic' : 'bg-gray-900 hover:bg-gray-800'
    }`}
  >
    {icon}
  </button>
);

const Nav = () => {
  const [activeTab, setActiveTab] = useState('grid');

  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <nav className="flex text-gray-300">
          <NavTab
            icon={<IconLayoutGrid size={24} stroke={1.5} />}
            isActive={activeTab === 'grid'}
            onClick={() => setActiveTab('grid')}
          />
          <NavTab
            icon={<IconHanger2 size={24} stroke={1.5} />}
            isActive={activeTab === 'door'}
            onClick={() => setActiveTab('door')}
          />
        </nav>
      </div>
      {/* Content based on active tab */}
      <div className="px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'grid' && <div><Grid /></div>}
          {activeTab === 'door' && <div>We are working on this feature.</div>}
        </div>
      </div>
    </div>
  );
};

export default Nav;