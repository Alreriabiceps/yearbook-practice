// src/components/BookCoverCard.js (adjust path as needed)
import React from 'react';
import { Link } from 'react-router';

// Define simple theme colors for borders or backgrounds
const themeColors = {
  criminology: 'border-red-600',
  'information-systems': 'border-blue-600',
  'tourism-management': 'border-pink-600',
  'marine-engineering': 'border-cyan-600', // Matched marine theme
  default: 'border-gray-400'
};

const BookCoverCard = ({ title, courseSlug, imageUrl, linkTo }) => {
  const borderColor = themeColors[courseSlug] || themeColors.default;

  return (
    <Link
      to={linkTo}
      className={`
        book-cover-card group relative block bg-gray-200 /* Light background */
        rounded-lg shadow-lg overflow-hidden
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:scale-[1.03]
        border-4 ${borderColor}
        aspect-[3/4] /* Try keeping aspect ratio */
        w-full max-w-xs /* Control width */
        h-auto /* Let aspect ratio determine height */
        flex flex-col /* Use flex to position content */
        min-h-[20rem] /* !! ADD MINIMUM HEIGHT !! to prevent collapse */
        mx-auto /* Center if needed */
      `}
    >
      {/* Image Container (attempts to load image) */}
      <div className="relative w-full h-0 flex-grow"> {/* Takes up available space */}
          <img
              src={imageUrl}
              alt={`${title} Cover`}
              className="absolute inset-0 w-full h-full object-cover z-0" // Image covers the space
              // Simple error display (optional)
              onError={(e) => {
                  e.target.style.display = 'none'; // Hide broken image icon
                  // Optionally add text/placeholder in case of error
                  const parent = e.target.parentElement;
                  if(parent && !parent.querySelector('.img-error-msg')) {
                      const errorMsg = document.createElement('p');
                      errorMsg.textContent = 'Image not found';
                      errorMsg.className = 'img-error-msg absolute inset-0 flex items-center justify-center text-gray-500 text-sm bg-gray-100 z-10';
                      parent.appendChild(errorMsg);
                  }
              }}
          />
      </div>

      {/* Title Overlay (Always visible at the bottom) */}
      <div className="relative p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-20 mt-auto"> {/* mt-auto pushes to bottom */}
         <h3 className="text-white text-base md:text-lg font-semibold leading-tight text-shadow">
             {title}
         </h3>
         <p className="text-sm text-gray-200 mt-1 capitalize">{courseSlug.replace(/-/g, ' ')}</p>
      </div>

       {/* Optional: Subtle "Open" indicator on hover */}
       <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <span className="text-white text-lg font-bold uppercase tracking-wider">Open</span>
       </div>
    </Link>
  );
};

export default BookCoverCard;