// src/components/layout/Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Routers from '../routers/Routers';  // Your routing component

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ width: '100vw', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <ScrollToTop />
      {/* Routers will handle page navigation */}
      <Routers />
    </div>
  );
}

export default Layout;
