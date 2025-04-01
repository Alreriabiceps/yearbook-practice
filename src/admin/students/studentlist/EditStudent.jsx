import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

const EditStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    courseMajor: '',
    personalQuote: '',
    careerAspirations: '',
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/students/${studentId}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
        alert('Failed to fetch student data.');
      }
    };

    fetchStudent();
  }, [studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/api/students/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        alert('Student updated successfully!');
        navigate('/studentlist'); // Redirect to the student list
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update the student. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-base-200 border border-base-300 p-6 rounded-box">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Student</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              className="input mb-2 w-full"
              value={student.firstName}
              onChange={handleChange}
            />

            <label className="block text-sm font-medium mb-2">Middle Name</label>
            <input
              type="text"
              name="middleName"
              className="input mb-2 w-full"
              value={student.middleName}
              onChange={handleChange}
            />

            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input mb-2 w-full"
              value={student.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Course & Major</label>
            <select
              name="courseMajor"
              className="select mb-2 w-full"
              value={student.courseMajor}
              onChange={handleChange}
            >
              <option value="" disabled>Select a course</option>
              <option value="Information Systems">Information Systems</option>
              <option value="Tourism Management">Tourism Management</option>
              <option value="Marine Transportation">Marine Transportation</option>
              <option value="Criminology">Criminology</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Education">Education</option>
              <option value="Marine Engineering">Marine Engineering</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Personal Quote</label>
            <input
              type="text"
              name="personalQuote"
              className="input mb-2 w-full"
              value={student.personalQuote}
              onChange={handleChange}
            />

            <label className="block text-sm font-medium mb-2">Career Aspirations</label>
            <input
              type="text"
              name="careerAspirations"
              className="input mb-2 w-full"
              value={student.careerAspirations}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button type="submit" className="btn btn-primary">Update Student</button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;