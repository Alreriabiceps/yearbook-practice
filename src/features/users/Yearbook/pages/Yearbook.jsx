// src/features/users/Yearbook/pages/Yearbook.js (adjust path if needed)
import React from 'react';
// !! Ensure this path correctly points to your modified BookCoverCard.js !!
import BookCoverCard from '../../components/BookCoverCard';

const yearbooks = [
  {
    title: 'BS Criminology',
    courseSlug: 'criminology',
    imageUrl: '/crime.png', // Needs to be in public/crime.png
    linkTo: '/criminology',
  },
  {
    title: 'BS Information Systems',
    courseSlug: 'information-system',
    imageUrl: '/is.png', // Needs to be in public/is.png
    linkTo: '/information-system',
  },
  {
    title: 'BS Tourism Management',
    courseSlug: 'tourism-management',
    imageUrl: '/tourism.png', // Needs to be in public/tourism.png
    linkTo: '/tourism-management',
  },
  {
    title: 'BS Marine Engineering',
    courseSlug: 'marine-engineering',
    imageUrl: '/marine.png', // Needs to be in public/marine.png (Note: you had /covers/ before, adjust if needed)
    linkTo: '/marine-engineering',
  },
];

const Yearbook = () => {
  return (
    <div id="yearbook-selection" className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Exact College of Asia
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 mb-4">
             Yearbook Collection {new Date().getFullYear()}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a yearbook to view the graduating class for each program.
          </p>
        </div>

        {/* Grid layout for the book covers */}
        {/* Removed temporary yellow background/border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {yearbooks.map((book) => (
            <BookCoverCard
              key={book.courseSlug}
              title={book.title}
              courseSlug={book.courseSlug}
              imageUrl={book.imageUrl}
              linkTo={book.linkTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Yearbook;