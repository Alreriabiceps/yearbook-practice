import React, { useEffect, useState } from 'react';
import ProfileCard from '../../../../components/ProfileCard'; // Adjust path if needed
import { useNavigate } from 'react-router'; // Use react-router-dom

const ITEMS_PER_PAGE = 12; // Adjust based on card size and desired density

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const [filterCourse, setFilterCourse] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Fetch Students Data
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/api/students');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Failed to load student data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Filtering Logic
  const filteredStudents = students.filter((student) => {
    const studentName = `${student.firstName} ${student.lastName}`.toLowerCase();
    const studentIdLower = student.studentId?.toLowerCase() || ''; // Handle potential undefined ID

    const matchesCourse = filterCourse ? student.courseMajor === filterCourse : true;
    const matchesSearch =
        studentName.includes(searchQuery.toLowerCase()) ||
        studentIdLower.includes(searchQuery.toLowerCase());

    return matchesCourse && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const indexOfLastStudent = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstStudent = indexOfLastStudent - ITEMS_PER_PAGE;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // --- Handlers ---
  const handleEdit = (student) => {
    navigate(`/students/edit/${student.studentId}`); // Ensure this route exists in App.js
  };

  const handleDelete = (student) => {
    // Implement actual delete logic, likely involving an API call and confirmation
    console.log(`Attempting to delete ${student.firstName} ${student.lastName}`);
    alert(`Deleting ${student.firstName} ${student.lastName} (placeholder)`);
    // Example: Call API -> if success -> refetch students or remove from state
    // setStudents(prev => prev.filter(s => s.studentId !== student.studentId));
  };

  const handleView = (student) => {
     // Navigate to a view page or show a modal
     console.log('View:', student.studentId);
     alert(`Viewing ${student.firstName} ${student.lastName} (placeholder)`);
     // Example: navigate(`/students/view/${student.studentId}`);
  };

   const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };


  // --- Render Logic ---
  if (loading) {
    return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>;
  }

  if (error) {
      return <div className="flex justify-center items-center h-screen"><div className="alert alert-error shadow-lg max-w-md"><div><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Error! {error}</span></div></div></div>;
  }

  return (
    // Use padding, flex column, and ensure height allows scrolling for the grid area
    <div className="p-4 md:p-6 h-screen flex flex-col bg-base-200/30">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-base-content">Student List</h1>

      {/* Controls Area - Using daisyUI form controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 p-3 bg-base-100 rounded-lg shadow-sm">
        {/* Filter Dropdown */}
        <div className="form-control w-full sm:w-auto sm:min-w-[200px]">
          <label className="label pb-1 pt-0">
             <span className="label-text text-xs">Filter by Course</span>
          </label>
          <select
            className="select select-sm select-bordered w-full" // DaisyUI select
            value={filterCourse}
            onChange={(e) => {setFilterCourse(e.target.value); setCurrentPage(1);}} // Reset page on filter change
          >
            <option value="">All Courses</option>
            {/* Dynamically generate options if possible, or list them */}
            <option value="Information Systems">Information Systems</option>
            <option value="Tourism Management">Tourism Management</option>
            <option value="Marine Transportation">Marine Transportation</option>
            <option value="Criminology">Criminology</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Education">Education</option>
            <option value="Marine Engineering">Marine Engineering</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="form-control w-full sm:w-auto sm:min-w-[200px]">
           <label className="label pb-1 pt-0">
             <span className="label-text text-xs">Search</span>
          </label>
          <input
            type="text"
            className="input input-sm input-bordered w-full" // DaisyUI input
            placeholder="Name or ID..."
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}} // Reset page on search change
          />
        </div>
      </div>

      {/* Student Grid Area - Flex grow allows it to take space, overflow makes it scrollable */}
      <div className="flex-grow overflow-y-auto pb-4"> {/* Added padding bottom */}
        {currentStudents.length > 0 ? (
            // Adjusted grid columns for the more compact card
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"> {/* Adjusted columns/gap */}
            {currentStudents.map((student) => (
              <ProfileCard
                key={student.studentId || student._id}
                student={student}
                onView={() => handleView(student)}
                onEdit={() => handleEdit(student)}
                onDelete={() => handleDelete(student)}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
              <p className="text-center text-gray-500 mt-10">No students found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination Controls Area */}
      {totalPages > 1 && (
         <div className="mt-4 flex justify-center items-center"> {/* Reduced top margin */}
             {/* Using daisyUI join for pagination buttons */}
            <div className="join shadow-sm">
               <button
                 onClick={handlePrevPage}
                 disabled={currentPage === 1}
                 className="join-item btn btn-sm btn-outline disabled:opacity-60" // DaisyUI button styles
               >
                  « Prev
               </button>

                {/* Page Numbers (Simplified logic example - enhance if needed) */}
                {[...Array(totalPages).keys()].map((num) => {
                    const pageNumber = num + 1;
                    // Show first, last, and pages near current
                    const showPage = pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 1;
                    // Show ellipsis if needed (basic version)
                    const showEllipsisStart = currentPage > 3 && pageNumber === 2;
                    const showEllipsisEnd = currentPage < totalPages - 2 && pageNumber === totalPages - 1;

                    if (showEllipsisStart || showEllipsisEnd) {
                        return <button key={`ellipsis-${pageNumber}`} className="join-item btn btn-sm btn-disabled btn-outline">...</button>;
                    }

                    if (showPage) {
                       return (
                         <button
                           key={pageNumber}
                           onClick={() => handlePageChange(pageNumber)}
                           className={`join-item btn btn-sm btn-outline ${
                             currentPage === pageNumber ? 'btn-active btn-primary' : '' // Active state
                           }`}
                         >
                           {pageNumber}
                         </button>
                       );
                    }
                    return null;
                })}

               <button
                 onClick={handleNextPage}
                 disabled={currentPage === totalPages}
                 className="join-item btn btn-sm btn-outline disabled:opacity-60"
               >
                  Next »
               </button>
            </div>
         </div>
      )}
    </div>
  );
};

export default StudentList;