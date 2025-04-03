import React, { useState } from 'react';

const AddStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [courseMajor, setCourseMajor] = useState('');
  const [studentId, setStudentId] = useState('');
  const [personalQuote, setPersonalQuote] = useState('');
  const [careerAspirations, setCareerAspirations] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      middleName,
      lastName,
      courseMajor,
      studentId,
      personalQuote,
      careerAspirations,
    };

    try {
      const response = await fetch('http://localhost:3001/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Student added successfully!');
        // Clear the form
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setCourseMajor('');
        setStudentId('');
        setPersonalQuote('');
        setCareerAspirations('');
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset w-full max-w-4xl bg-base-200 border border-base-300 p-6 rounded-box">
          <legend className="fieldset-legend text-xl font-bold mb-4">Add Student Details</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <label className="fieldsetLabel">First Name</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label className="fieldsetLabel">Middle Name</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />

              <label className="fieldsetLabel">Last Name</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Academic Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
              <label className="fieldsetLabel">Course & Major</label>
              <select
                className="select mb-2 w-full"
                value={courseMajor}
                onChange={(e) => setCourseMajor(e.target.value)}
              >
                <option value="" disabled>Select a course</option>
                <option value="Information Systems">Information System</option>
                <option value="Tourism Management">Tourism Management</option>
                <option value="Marine Transportation">Marine Transportation</option>
                <option value="Criminology">Criminology</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Education">Education</option>
                <option value="Marine Engineering">Marine Engineering</option>
              </select>

              <label className="fieldsetLabel">Student ID</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>

            {/* Additional Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <label className="fieldsetLabel">Personal Quote</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="Personal Quote"
                value={personalQuote}
                onChange={(e) => setPersonalQuote(e.target.value)}
              />

              <label className="fieldsetLabel">Future Career Aspirations</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="Future Career Aspirations"
                value={careerAspirations}
                onChange={(e) => setCareerAspirations(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button type="submit" className="btn btn-neutral">Add Student</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddStudent;