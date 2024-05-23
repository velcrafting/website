import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Box, Typography, CircularProgress } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const PageViewer = () => {
  const router = useRouter();
  const { page } = router.query;
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      if (page) {
        const docRef = doc(db, 'pages', page);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPageData(docSnap.data());
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      }
    };
    fetchPage();
  }, [page]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {pageData.title}
      </Typography>
      <ReactMarkdown>{pageData.content}</ReactMarkdown>
    </Box>
  );
};

export default PageViewer;
