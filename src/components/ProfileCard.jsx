import React from 'react';
// Using react-icons for better iconography
import { FaRegIdCard, FaBookOpen, FaQuoteLeft, FaBullseye, FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const ProfileCard = ({ student, onView, onEdit, onDelete }) => {
  // Format name, handle potential missing middle initial
  const fullName = `${student.firstName} ${student.middleName ? student.middleName.charAt(0) + '.' : ''} ${student.lastName}`.trim();

  // Provide safe defaults for potentially missing student data
  const safeStudent = student || {};
  const {
      studentId = 'N/A',
      courseMajor = 'N/A',
      personalQuote = '',
      careerAspirations = '',
      profileImageUrl // Assuming this might be available in student data
  } = safeStudent;

  return (
    // Use card-side for horizontal layout, add subtle border and shadow
    <div className="card card-side bg-base-100 shadow border border-base-300/50 rounded-lg overflow-hidden w-full hover:shadow-md transition-shadow duration-200">

      {/* Image Section */}
      <figure className="w-20 h-auto flex-shrink-0 bg-base-200"> {/* Slightly smaller image width */}
        <img
          // Use dynamic image or fallback
          src={profileImageUrl || "/senku.jpg"}
          alt={`Profile of ${fullName}`}
          className="h-full w-full object-cover" // Ensures image fills the area
          onError={(e) => { e.target.onerror = null; e.target.src = '/33.jpg'; }} // Fallback on error
        />
      </figure>

      {/* Details and Actions Section */}
      <div className="card-body p-2.5 flex flex-col justify-between flex-grow gap-1"> {/* Adjusted padding & gap */}

        {/* Student Info Section */}
        <div>
          {/* Name - More prominent */}
          <h2 className="text-sm font-bold mb-1 text-base-content leading-tight truncate" title={fullName}>
            {fullName}
          </h2>

          {/* Details List - Using icons for better scanning */}
          <ul className="space-y-0.5 text-xs text-base-content/80">
            <li className="flex items-center gap-1.5 truncate">
              <FaRegIdCard className="w-3 h-3 text-base-content/50 flex-shrink-0" />
              <span className="font-medium">ID:</span>
              <span className="truncate" title={studentId}>{studentId}</span>
            </li>
            <li className="flex items-center gap-1.5 truncate">
              <FaBookOpen className="w-3 h-3 text-base-content/50 flex-shrink-0" />
              <span className="font-medium">Course:</span>
              <span className="truncate" title={courseMajor}>{courseMajor}</span>
            </li>
             {/* Optional Quote/Aspiration - only render if present */}
             {personalQuote && (
                 <li className="flex items-start gap-1.5"> {/* Use items-start for multi-line text */}
                   <FaQuoteLeft className="w-3 h-3 text-base-content/50 flex-shrink-0 mt-0.5" />
                   {/* Requires @tailwindcss/line-clamp plugin */}
                   <span className="italic line-clamp-1" title={personalQuote}>{personalQuote}</span>
                 </li>
             )}
              {careerAspirations && (
                 <li className="flex items-start gap-1.5">
                   <FaBullseye className="w-3 h-3 text-base-content/50 flex-shrink-0 mt-0.5" />
                    {/* Requires @tailwindcss/line-clamp plugin */}
                   <span className="line-clamp-1" title={careerAspirations}>{careerAspirations}</span>
                 </li>
              )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="card-actions flex justify-end items-center gap-1 mt-auto pt-1.5 border-t border-base-200"> {/* Added items-center */}
           {/* Buttons use btn-xs for size, btn-ghost for subtle look, specific colors on hover/focus */}
          <button
            className="btn btn-xs btn-ghost text-info hover:bg-info/10 focus:bg-info/10 p-1 tooltip tooltip-bottom" // Added tooltip class
            data-tip="View Details" // Tooltip text
            onClick={() => onView(student)}
          >
            <FaEye className="h-3.5 w-3.5" />
          </button>
          <button
            className="btn btn-xs btn-ghost text-warning hover:bg-warning/10 focus:bg-warning/10 p-1 tooltip tooltip-bottom"
            data-tip="Edit Student"
            onClick={() => onEdit(student)}
          >
            <FaEdit className="h-3.5 w-3.5" />
          </button>
          <button
            className="btn btn-xs btn-ghost text-error hover:bg-error/10 focus:bg-error/10 p-1 tooltip tooltip-bottom"
            data-tip="Delete Student"
            onClick={() => onDelete(student)}
          >
            <FaTrashAlt className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;