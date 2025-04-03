import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import GraduateCard from '../components/GraduateCard';

const ClassGallery = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    
    fetchStudents();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <HTMLFlipBook
        width={400}
        height={550}
        className="shadow-lg rounded-lg overflow-hidden"
      >
        <div className="bg-gradient-to-r from-pink-300 to-yellow-300 p-12 text-center text-2xl font-extrabold text-white shadow-lg rounded-lg">
          📖 Cover Page
        </div>

        {students.map((student) => (
          <div key={student.id} className="bg-white p-10 rounded-lg shadow-md text-center text-lg text-gray-700">
            <GraduateCard student={student} />
          </div>
        ))}

        <div className="bg-gradient-to-l from-pink-300 to-yellow-300 p-12 text-center text-2xl font-extrabold text-white shadow-lg rounded-lg">
          📘 Back Cover
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default ClassGallery;
