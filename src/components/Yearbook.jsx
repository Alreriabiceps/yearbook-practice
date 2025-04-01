import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const Yearbook = () => {
  const [students, setStudents] = useState([]);

  // Fetch student data from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/students'); // Replace with your backend API URL
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Yearbook</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <ProfileCard key={student.studentId} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Yearbook;