// Dashboard.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Dashboard.css'; // Import the CSS file for styling


const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAddStudentMessage, setShowAddStudentMessage] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  // Function to handle the option click and update the selected section
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false); // Close menu after selecting an option on mobile
    if (option === 'option2') {
      setShowAddStudentMessage(false); // Reset message when navigating away from Student Info
    }
  };

  // Function to toggle mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const handleAddStudent = () => {
    navigate('/add-student');  // Navigate to the correct path
  };


  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <button className="menu-toggle" onClick={handleMenuToggle}>☰</button>
        <ul className={isMenuOpen ? 'show' : ''}>
          <li>
            <a href="#home" onClick={() => handleSelectOption('home')} className={selectedOption === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#option2" onClick={() => handleSelectOption('option2')} className={selectedOption === 'option2' ? 'active' : ''}>Student Info</a>
          </li>
          <li>
            <a href="#option3" onClick={() => handleSelectOption('option3')} className={selectedOption === 'option3' ? 'active' : ''}>Option 3</a>
          </li>
          <li>
            <a href="#profile" onClick={() => handleSelectOption('profile')} className={selectedOption === 'profile' ? 'active' : ''}>User Profile</a>
          </li>
        </ul>
      </nav>

      <div className="content">
        {selectedOption === 'home' && <div><h1>Home</h1><p>Welcome to the home page!</p></div>}
        {selectedOption === 'option2' && (
          <div>
            <button onClick={handleAddStudent} className="student-button">Add Student</button>
          </div>
        )}
        {selectedOption === 'option3' && <div><h1>Option 3</h1><p>This is option 3's content.</p></div>}
        {selectedOption === 'profile' && <div><h1>User Profile</h1><p>This is your user profile page.</p></div>}
      </div>
    </div>
  );
};

export default Dashboard;
