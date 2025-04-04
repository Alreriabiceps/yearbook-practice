import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import GraduateCard from '../../components/GraduateCard'; // Assuming this path is correct
// Optional: Import an icon if needed
// import { CheckCircleIcon } from '@heroicons/react/solid'; // Example using Heroicons

// Helper function to chunk array (useful for pagination)
const chunkArray = (array, size) => {
  const chunkedArr = [];
  if (!array) return chunkedArr;
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const InformationSystem = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentPages, setStudentPages] = useState([]);

  // --- Data Fetching ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/api/students?course=Information%20Systems');
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText} (Status: ${response.status})`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('API did not return an array of students.');
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch Information Systems students:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Pagination Logic ---
  useEffect(() => {
    setStudentPages(chunkArray(students, 4));
  }, [students]);

  // --- Loading State ---
  if (loading) {
    return (
      <div id="information-system-loading" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
        {/* ... loading content ... */}
         <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg font-medium">Loading Information Systems Yearbook...</p>
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div id="information-system-error" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-gray-100 px-4">
         {/* ... error content ... */}
         <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h2>
          <p className="text-gray-600 mb-4">We couldn't load the Information Systems yearbook data.</p>
          <p className="bg-red-100 text-red-700 p-3 rounded-lg font-mono text-sm text-left break-words max-h-40 overflow-auto">
             <strong>Error:</strong> {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // --- Main Content: Yearbook ---
  return (
    // --- Enhanced Background ---
    <div
      id="information-system"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" // Added relative, overflow-hidden
    >
        {/* Background Subtle Pattern Layer */}
        <div className="absolute inset-0 z-0 opacity-20"
             style={{ backgroundImage: "url('/textures/subtle-dots.svg')", backgroundSize: '20px 20px' }} // Adjust size as needed
        ></div>

       {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10"> {/* Added relative z-10 */}
        {/* Header */}
        <div className="text-center mb-16 backdrop-blur-sm bg-white/10 py-4 rounded-lg"> {/* Added backdrop blur for header */}
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Bachelor of Science in Information Systems
            </span>
          </h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto"> {/* Slightly darker text */}
            Celebrating the graduates of the Information Systems program, architecting the digital future. Class of {new Date().getFullYear()}.
          </p>
        </div>

        {/* --- Enhanced Flipbook Container --- */}
        <div className="flex justify-center">
          {/* Book Container */}
          <div
            className="relative w-full max-w-5xl book-container drop-shadow-2xl" // Added drop-shadow
            style={{
              perspective: "2500px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Book Binding Shadow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-10 -ml-5 bg-gradient-to-r from-black/30 via-black/50 to-black/30 z-20 rounded shadow-lg"></div>

            {/* Simulated Page Edges */}
            <div
              className="absolute -left-1 -top-0.5 w-[calc(100%+8px)] h-[calc(100%+4px)] bg-gradient-to-b from-gray-100 to-gray-300 rounded-md shadow-inner z-5 book-edges-background"
              style={{ /* styles for edges */ }}
            ></div>

            {/* --- HTMLFlipBook Component --- */}
            <HTMLFlipBook /* props... */
               width={600} height={800} size="stretch" minWidth={315} maxWidth={1000} minHeight={420} maxHeight={1333}
               maxShadowOpacity={0.6} showCover={true} mobileScrollSupport={true} useMouseEvents={true} drawShadow={true} flippingTime={800}
               className="mx-auto relative z-10 shadow-xl" style={{ transformStyle: "preserve-3d" }}
            >
              {/* --- Front Cover (Enhanced) --- */}
              <div className="page !rounded-l-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 flex flex-col justify-center items-center text-center p-8 relative overflow-hidden border border-black/10 shadow-md">
                 {/* Subtle background elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/10 rounded-full filter blur-xl opacity-50"></div>
                <div className="absolute -bottom-12 -right-12 w-52 h-52 border-2 border-blue-300/10 rounded-lg rotate-12 opacity-30"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('/textures/binary-pattern.svg')] mix-blend-overlay z-0"></div>

                <div className="relative z-10"> {/* Main content */}
                  <div className="w-32 h-32 mb-6 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-xl mx-auto p-1 ring-1 ring-white/20"> {/* Enhanced logo bg */}
                    <img src="/is.png" className="w-full h-full object-contain rounded-full" alt="IS Logo" />
                  </div>
                  <h2 className="text-lg font-semibold uppercase text-blue-200 mb-4 tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]"> {/* Bolder subtitle */}
                    Exact College of Asia
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-white my-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    BS Information Systems
                  </h1>
                  <div className="mt-6 py-2 px-8 bg-white/10 rounded-full backdrop-blur-sm inline-block border border-white/10 shadow">
                    <p className="text-2xl font-light text-white">Class of {new Date().getFullYear()}</p>
                  </div>
                </div>
              </div>

              {/* --- Student Pages (Enhanced) --- */}
              {studentPages.map((pageStudents, pageIndex) => (
                <div
                  key={`page-${pageIndex}`}
                  className="page bg-white p-5 relative overflow-hidden border-x border-gray-300 shadow-inner"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url('/textures/circuit-board-light.svg')", // Keep texture
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col h-full">
                    {/* Header with accent line */}
                    <div className="text-center mb-4 pb-2 relative">
                      <h3 className="text-base font-semibold text-blue-800/90">
                        Graduates {pageIndex * 4 + 1} - {Math.min((pageIndex + 1) * 4, students.length)}
                      </h3>
                      {/* Accent line */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </div>

                    {/* Grid for student cards */}
                    <div className="grid grid-cols-2 gap-4 flex-grow content-start"> {/* Slightly more gap */}
                      {pageStudents.map((student) => (
                        <div key={student.studentId || student._id} className="flex justify-center items-start">
                          <div className="w-full max-w-[250px]">
                            <GraduateCard
                              student={student}
                              className="transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:border-blue-300 border border-gray-200" // Added hover border
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Page Number Footer with border */}
                    <div className="mt-auto pt-3 text-center border-t border-gray-200">
                      <span className="text-xs text-gray-400 italic font-mono">Page {pageIndex + 1}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* --- Closing Page (Enhanced) --- */}
              <div className="page bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center p-6 border-x border-gray-300 shadow-inner relative overflow-hidden">
                 {/* Background Pattern */}
                 <div className="absolute inset-0 z-0 opacity-15"
                      style={{ backgroundImage: "url('/textures/subtle-dots.svg')", backgroundSize: '20px 20px' }}>
                 </div>
                <div className="relative z-10 text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm shadow-md w-full h-full flex flex-col justify-center border border-blue-200/50">
                    {/* Optional Icon */}
                    {/* <CheckCircleIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" /> */}
                    <h2 className="text-3xl font-semibold text-blue-800 mb-5 font-serif">Congratulations, Information Systems Class of {new Date().getFullYear()}!</h2>
                   <p className="text-base text-gray-700 mb-6 leading-relaxed max-w-md mx-auto">
                      You are now architects of the digital future. Use your skills in technology and systems thinking to innovate, solve problems, and drive progress.
                   </p>
                   <div className="my-5">
                     <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                   </div>
                   <blockquote className="text-base text-gray-600 italic mt-2">
                     "The science of today is the technology of tomorrow."
                     <p className="text-gray-500 mt-2 text-sm not-italic">— Edward Teller</p>
                   </blockquote>
                </div>
              </div>

              {/* --- Back Cover (Enhanced) --- */}
              <div className="page !rounded-r-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 flex flex-col justify-between p-6 relative overflow-hidden border border-black/10 shadow-md">
                 {/* Subtle background elements */}
                 <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-400/10 rounded-full filter blur-lg opacity-60"></div>
                 <div className="absolute -bottom-8 -left-8 w-40 h-40 border-t-2 border-l-2 border-blue-400/10 rounded-full rotate-45 opacity-40"></div>
                 <div className="absolute inset-0 opacity-10 bg-[url('/textures/binary-pattern.svg')] mix-blend-overlay z-0"></div>

                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center"> {/* Main content */}
                  <div className="w-24 h-24 rounded-full border-2 border-blue-300/40 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-md shadow-lg ring-1 ring-white/20"> {/* Enhanced logo bg */}
                    <span className="text-2xl text-blue-200 font-bold [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">ECA</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-200 mb-2 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">
                    Exact College of Asia
                  </h3>
                  <p className="text-sm text-blue-100/90 mb-6">Innovating Systems, Empowering Futures.</p>
                  <div className="w-32 h-px bg-blue-300/30 my-4 rounded-full"></div>
                  <p className="text-xs text-blue-200/80 leading-relaxed">
                    Suclayin, Arayat, Pampanga
                    <br />
                    www.eca.edu.ph
                  </p>
                </div>
                <div className="relative z-10 pt-4 mt-auto border-t border-blue-400/20 text-center">
                  <p className="text-[10px] text-blue-200/70 uppercase tracking-wider">
                    © {new Date().getFullYear()} Exact College of Asia. All Rights Reserved.
                  </p>
                </div>
              </div>
            </HTMLFlipBook>
          </div> {/* End Book Container */}
        </div> {/* End Flex Center Wrapper */}
      </div> {/* End Max Width Container */}
    </div> // End Main Component Div
  );
};

export default InformationSystem;