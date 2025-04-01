import React from 'react';



const ProfileCard = ({ student, onView, onEdit, onDelete }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
      <figure className="w-full aspect-square overflow-hidden flex justify-center items-center bg-gray-200">
        <img
          src="/profile.jpg"
          alt={`${student.firstName} ${student.lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold mb-2">{`${student.firstName} ${student.middleName || ''} ${student.lastName}`}</h2>
        <p className="text-sm"><strong>Student ID:</strong> {student.studentId}</p>
        <p className="text-sm"><strong>Course & Major:</strong> {student.courseMajor}</p>
        <p className="text-sm"><strong>Personal Quote:</strong> {student.personalQuote || 'No quote provided.'}</p>
        <p className="text-sm"><strong>Career Aspirations:</strong> {student.careerAspirations || 'No aspirations provided.'}</p>
        <div className="card-actions flex justify-end mt-4">
          <button className="btn btn-primary btn-sm" onClick={() => onView(student)}>View</button>
          <button className="btn btn-secondary btn-sm" onClick={() => onEdit(student)}>Edit</button>
          <button className="btn btn-error btn-sm" onClick={() => onDelete(student)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;