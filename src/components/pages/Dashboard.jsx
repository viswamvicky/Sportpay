  import './Dashboard.css'; // Assuming you have a CSS file for styling
const Dashboard = () => {

  return (
<div className="navbar">
      <div className="navbar-left">
        <button className="navbar-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="navbar-center">
        <a className="navbar-brand">daisyUI</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
// export default Navbar;

 export default Dashboard;  

