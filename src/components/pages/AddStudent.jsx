import React, { useState } from 'react';

const AddStudent = () => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentAge, setStudentAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Student Added:', { studentName, studentEmail, studentAge });
  };

  const handleCancel = () => {
    // Redirect back to the previous page (Dashboard)
    window.history.back(); // Go back to the previous page
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <div>
          <label>Student Email:</label>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            placeholder="Enter student email"
          />
        </div>
        <div>
          <label>Student Age:</label>
          <input
            type="number"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            placeholder="Enter student age"
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddStudent;
