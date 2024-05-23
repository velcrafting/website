import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import UserCreator from '../../components/Builders/UserBuilder';

const UserBuilderPage = () => {
    const { currentUser } = useAuth();

    if (currentUser?.role !== 'admin' && currentUser?.role !== 'manager') {
      return <div>Access Denied</div>;
    }
  
    return (
      <div>
        <UserCreator />
      </div>
    );
  };
  
  export default UserBuilderPage;