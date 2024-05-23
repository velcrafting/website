import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import BlogBuilder from '../../components/Builders/BlogBuilder';

const BlogBuilderPage = () => {
    const { currentUser } = useAuth();

    if (currentUser?.role !== 'admin' && currentUser?.role !== 'manager') {
      return <div>Access Denied</div>;
    }
  
    return (
      <div>
        <BlogBuilder />
      </div>
    );
  };
  
  export default BlogBuilderPage;