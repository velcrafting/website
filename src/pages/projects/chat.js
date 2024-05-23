import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import MyChat from '../../components/Chat/Chat';

const ChatPage = () => {
  const { currentUser } = useAuth();

  if (currentUser?.role !== 'admin' && currentUser?.role !== 'manager') {
    return <div>Access Denied</div>;
  }

  return <MyChat />;
};

export default ChatPage;
