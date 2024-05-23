import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import PageBuilder from '../../components/Builders/PageBuilder';

const PageBuilderPage = () => {
    const { currentUser } = useAuth();

    if (currentUser?.role !== 'admin' && currentUser?.role !== 'manager') {
      return <div>Access Denied</div>;
    }
  
    return (
      <div>
        <PageBuilder />
      </div>
    );
  };
  
  export default PageBuilderPage;