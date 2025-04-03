import React, { useEffect, useState } from 'react';
import ProfileCard from '../../../../components/ProfileCard';
import { useNavigate } from 'react-router';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filterCourse, setFilterCourse] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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

  // Filter and search logic
  const filteredStudents = students.filter((student) => {
    const matchesCourse = filterCourse ? student.courseMajor === filterCourse : true;
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  const handleEdit = (student) => {
    navigate(`/students/edit/${student.studentId}`); // Navigate to the edit page
  };

  const handleDelete = (student) => {
    alert(`Deleting ${student.firstName} ${student.lastName}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Student List</h1>

      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        {/* Filter by Course */}
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium mb-2">Filter by Course</label>
          <select
            className="select w-full"
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
          >
            <option value="">All Courses</option>
            <option value="Information Systems">Information Systems</option>
            <option value="Tourism Management">Tourism Management</option>
            <option value="Marine Transportation">Marine Transportation</option>
            <option value="Criminology">Criminology</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Education">Education</option>
            <option value="Marine Engineering">Marine Engineering</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-2/3">
          <label className="block text-sm font-medium mb-2">Search by Name or Student ID</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Student List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <ProfileCard
              key={student.studentId}
              student={student}
              onView={() => alert(`Viewing ${student.firstName} ${student.lastName}`)}
              onEdit={() => handleEdit(student)}
              onDelete={() => handleDelete(student)}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;