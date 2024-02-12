import React from 'react';
import AppSidebar from '../common/Sidebar';

// MainLayout component
const MainLayout = ({ children }) => (
  <div className="page-background">
    <div className="flex flex-col lg:flex-row h-screen"> {/* Ensure full screen height */}
      <AppSidebar />
      <main className="flex-1 overflow-auto lg:h-auto min-h-screen lg:min-h-0">
        {children}
      </main>
    </div>
  </div>
);


export default MainLayout;