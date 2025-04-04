import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import GraduateCard from '../../components/GraduateCard'; // Assuming this path is correct

// Helper function to chunk array (useful for pagination)
const chunkArray = (array, size) => {
  const chunkedArr = [];
  if (!array) return chunkedArr; // Guard against undefined array
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

// Renamed component to TourismManagement
const TourismManagement = () => {
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
        // Updated API endpoint for Tourism Management
        const response = await fetch('http://localhost:3001/api/students?course=Tourism%20Management');

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText} (Status: ${response.status})`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('API did not return an array of students.');
        }
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch Tourism Management students:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Pagination Logic ---
  useEffect(() => {
    setStudentPages(chunkArray(students, 4)); // Chunk into groups of 4
  }, [students]);

  // --- Loading State ---
  if (loading) {
    return (
      // Updated ID and theme color
      <div id="tourism-management-loading" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          {/* Updated spinner color */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-600 mx-auto mb-4"></div>
          {/* Updated Text */}
          <p className="text-gray-700 text-lg font-medium">Loading Tourism Management Yearbook...</p>
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      // Updated ID
      <div id="tourism-management-error" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h2>
          {/* Updated Text */}
          <p className="text-gray-600 mb-4">We couldn't load the Tourism Management yearbook data.</p>
          <p className="bg-red-100 text-red-700 p-3 rounded-lg font-mono text-sm text-left break-words max-h-40 overflow-auto">
             <strong>Error:</strong> {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            // Updated button color
            className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // --- Main Content: Yearbook ---
  return (
    // Updated ID and background gradient (warm pink/rose/orange theme)
    <div id="tourism-management" className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Updated Title and Gradient */}
          <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500">
              Bachelor of Science in Tourism Management
            </span>
          </h1>
          {/* Updated Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Celebrating the graduates ready to shape the future of travel and hospitality. Embark on your next adventure! Class of {new Date().getFullYear()}.
          </p>
        </div>

        {/* --- Enhanced Flipbook Container --- */}
        <div className="flex justify-center">
          {/* Book Container */}
          <div
            className="relative w-full max-w-5xl book-container"
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
              style={{
                 backgroundImage: `
                  repeating-linear-gradient(to right, #f0f0f0, #f0f0f0 1px, #e0e0e0 1px, #e0e0e0 2px),
                  linear-gradient(to bottom, #f8f8f8, #d8d8d8)
                 `,
                 backgroundSize: '2px 100%, 100% 100%',
                 boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)',
              }}
            ></div>

            {/* --- HTMLFlipBook Component --- */}
            <HTMLFlipBook
              width={600}
              height={800}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={420}
              maxHeight={1333}
              maxShadowOpacity={0.6}
              showCover={true}
              mobileScrollSupport={true}
              useMouseEvents={true}
              drawShadow={true}
              flippingTime={800}
              className="mx-auto relative z-10 shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* --- Front Cover --- */}
              {/* Updated Cover Gradient and Title (Pink/Rose Theme) */}
              <div className="page !rounded-l-lg bg-gradient-to-br from-rose-800 via-pink-800 to-orange-900 flex flex-col justify-center items-center text-center p-8 relative overflow-hidden border border-black/10 shadow-md">
                {/* Texture overlay can stay or be changed */}
                <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="w-32 h-32 mb-6 rounded-full bg-white/5 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center shadow-xl mx-auto p-1">
                    <img src="/tourism.png" className="w-full h-full object-contain rounded-full" alt="ECA Logo" />
                  </div>
                  <h2 className="text-lg font-light uppercase text-rose-200 mb-4 tracking-widest">
                    Exact College of Asia
                  </h2>
                  {/* Updated Title */}
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-white my-4 leading-tight [text-shadow:_1px_1px_3px_rgba(0,0,0,0.3)]">
                    BS Tourism Management
                  </h1>
                  <div className="mt-6 py-2 px-8 bg-white/10 rounded-full backdrop-blur-sm inline-block border border-white/10">
                    <p className="text-2xl font-light text-white">Class of {new Date().getFullYear()}</p>
                  </div>
                </div>
              </div>

              {/* --- Student Pages --- */}
              {studentPages.map((pageStudents, pageIndex) => (
                <div
                  key={`page-${pageIndex}`}
                  // Updated background - warmer paper tone or relevant texture
                  className="page bg-white p-5 relative overflow-hidden border-x border-gray-300 shadow-inner"
                  style={{
                    // Example: Warm paper tone + optional subtle texture
                    backgroundImage: "linear-gradient(rgba(255, 250, 245, 0.97), rgba(255, 250, 245, 0.97)), url('/textures/subtle-map.png')", // Replace texture or remove
                    backgroundColor: "#FFFAF5", // Warm off-white fallback
                    backgroundSize: "cover", // Adjust as needed
                  }}
                >
                  <div className="flex flex-col h-full">
                    {/* Header with updated color */}
                    <div className="text-center mb-3 pb-2 border-b border-gray-200">
                      <h3 className="text-base font-semibold text-rose-800/90">
                        Graduates {pageIndex * 4 + 1} - {Math.min((pageIndex + 1) * 4, students.length)}
                      </h3>
                    </div>

                    {/* Grid for student cards */}
                    <div className="grid grid-cols-2 gap-3 flex-grow content-start">
                      {pageStudents.map((student) => (
                        <div key={student.studentId || student._id}
                             className="flex justify-center items-start">
                          <div className="w-full max-w-[250px]">
                            <GraduateCard
                              student={student}
                              className="transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg" // Hover effects from parent
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Page Number Footer */}
                    <div className="mt-auto pt-2 text-center border-t border-gray-200">
                      <span className="text-xs text-gray-400 italic">Page {pageIndex + 1}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* --- Closing Page --- */}
              {/* Updated Closing Page Theme and Quote */}
              <div className="page bg-gradient-to-br from-rose-50 to-orange-50 flex items-center justify-center p-6 border-x border-gray-300 shadow-inner">
                <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm w-full h-full flex flex-col justify-center border border-gray-200">
                   <h2 className="text-3xl font-semibold text-rose-800 mb-5 font-serif">Congratulations, Tourism Management Class of {new Date().getFullYear()}!</h2>
                   <p className="text-base text-gray-700 mb-6 leading-relaxed max-w-md mx-auto">
                     The world awaits your expertise! May you create unforgettable experiences, foster cultural understanding, and lead the way in sustainable travel.
                   </p>
                   <div className="my-5">
                     {/* Updated gradient line */}
                     <div className="h-0.5 w-24 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
                   </div>
                   <blockquote className="text-base text-gray-600 italic mt-2">
                     "Travel is the only thing you buy that makes you richer."
                     <p className="text-gray-500 mt-2 text-sm not-italic">— Anonymous</p>
                     {/* Alternative: "The world is a book and those who do not travel read only one page." - Augustine of Hippo */}
                   </blockquote>
                </div>
              </div>

              {/* --- Back Cover --- */}
              {/* Updated Back Cover Theme */}
              <div className="page !rounded-r-lg bg-gradient-to-br from-rose-800 via-pink-800 to-orange-900 flex flex-col justify-between p-6 relative overflow-hidden border border-black/10 shadow-md">
                <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-rose-300/40 flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm shadow-lg">
                    <span className="text-2xl text-rose-200 font-bold [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">ECA</span>
                  </div>
                  <h3 className="text-xl font-semibold text-rose-200 mb-2 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">
                    Exact College of Asia
                  </h3>
                  {/* Updated tagline */}
                  <p className="text-sm text-rose-100/90 mb-6">Guiding Journeys, Creating Experiences.</p>
                  <div className="w-32 h-px bg-rose-300/30 my-4 rounded-full"></div>
                  <p className="text-xs text-rose-200/80 leading-relaxed">
                    Suclayin, Arayat, Pampanga
                    <br />
                    www.eca.edu.ph {/* Update if domain is different */}
                  </p>
                </div>
                <div className="relative z-10 pt-4 mt-auto border-t border-rose-400/20 text-center">
                  <p className="text-[10px] text-rose-200/70 uppercase tracking-wider">
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

// Export the renamed component
export default TourismManagement;