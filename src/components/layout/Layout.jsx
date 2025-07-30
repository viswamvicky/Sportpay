import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
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
    <Router>
    <div style={{ width: '100vw', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <ScrollToTop />
      <Routers />
    </div>
  </Router>
  );
}

export default Layout;
