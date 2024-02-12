// hooks/useResponsiveLayout.js
import { useMediaQuery } from 'react-responsive';

const useResponsiveLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  // Add more breakpoints if needed
  return { isDesktop };
};

export default useResponsiveLayout;
