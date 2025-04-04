import React from 'react';

const GraduateCard = ({ student, className }) => { // Added className propagation
  // Basic validation or default student object
  const validStudent = student || {
      firstName: 'Unknown',
      lastName: 'Student',
      middleName: '',
      courseMajor: 'N/A',
      personalQuote: '...',
      careerAspirations: '...',
      profileImageUrl: '/profile.jpg' // Default profile image
  };

  const {
    firstName,
    lastName,
    middleName,
  
    personalQuote,
    careerAspirations,
    profileImageUrl // Assuming your student object might have an image URL
  } = validStudent;

  // Construct full name, handling potential missing middle name
  const fullName = `${firstName} ${middleName ? middleName.charAt(0) + '.' : ''} ${lastName}`.trim().replace(/\s+/g, ' ');

  return (
    // Card Container: Added flex, fixed height, rounded corners, shadow, and overflow hidden
    // className prop allows passing styles from parent (like hover effects)
    <div className={`card flex flex-col bg-white shadow-md rounded-lg overflow-hidden h-72 w-full max-w-[250px] border border-gray-200 ${className}`}>

      {/* Image Container: Fixed aspect ratio (e.g., 1:1 or 4:3) and ensures image covers */}
      <figure className="w-full h-40 flex-shrink-0 bg-gray-100"> {/* Reduced image height, added bg */}
        <img
          // Use student's specific image URL if available, otherwise fallback
          src={profileImageUrl || '/profile.jpg'}
          alt={`Portrait of ${fullName}`}
          // Ensures image covers the area without distortion, centers it
          className="h-full w-full object-cover object-center"
          // Basic error handling for broken image links
          onError={(e) => { e.target.onerror = null; e.target.src = '/profile.jpg'; }}
        />
      </figure>

      {/* Text Content Area: Takes remaining space, padding, flex column */}
      <div className="card-body p-3 flex-grow flex flex-col justify-between"> {/* Reduced padding slightly, justify-between */}

        {/* Name: Centered, appropriate size, margin bottom */}
        <h2 className="text-base font-semibold text-center text-gray-800 mb-1.5 leading-tight">
          {fullName}
        </h2>

        {/* Details Section: Smaller text, spacing between items */}
        <div className="text-xs text-gray-600 space-y-1 overflow-hidden"> {/* Added overflow-hidden for safety */}

          {/* Course: Simple display */}
          {/* <div>
             <strong>Course:</strong> {courseMajor || 'N/A'}
          </div> */}
          {/* You might not need the course here if the whole section is for one course */}

          {/* Quote: Limited to 2 lines with ellipsis */}
          <div className="quote">
            <strong className="text-gray-700">Quote:</strong>
            <p className="italic line-clamp-2"> {/* Apply line-clamp */}
              {personalQuote || <span className="text-gray-400">No quote provided.</span>}
            </p>
          </div>

          {/* Aspirations: Limited to 2 lines with ellipsis */}
          <div className="aspirations">
             <strong className="text-gray-700">Aspirations:</strong>
             <p className="line-clamp-2"> {/* Apply line-clamp */}
               {careerAspirations || <span className="text-gray-400">No aspirations provided.</span>}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduateCard;