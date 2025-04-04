import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router'; // Added Link

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [isYearbookDropdownOpen, setIsYearbookDropdownOpen] = useState(false);
  const yearbookDropdownRef = useRef(null); // Ref for yearbook dropdown

  // --- Simplified Navigation Handler ---
  const handleNavigate = (path) => {
    navigate(path);
    setIsYearbookDropdownOpen(false); // Close dropdown on navigation
  };

  // --- Update active main section based on current route ---
  useEffect(() => {
    const path = location.pathname;
    if (path === '/landingpage') {
      setActiveSection('landingpage');
    } else if (path === '/yearbook' || path.startsWith('/yearbook/')) {
       // Highlight main "Yearbook" if on home or any subpage
      setActiveSection('yearbook');
    } else {
      setActiveSection(''); // Reset for other routes if any
    }
  }, [location.pathname]);

  // --- Close yearbook dropdown when clicking outside ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearbookDropdownRef.current && !yearbookDropdownRef.current.contains(event.target)) {
        setIsYearbookDropdownOpen(false);
      }
    };
    if (isYearbookDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isYearbookDropdownOpen]);

  // Helper to check active sub-page for dropdown styling
  const isYearbookSubpageActive = (subpath) => {
      return location.pathname === `/yearbook${subpath}`;
  }

  return (
    // Added sticky and z-index
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* --- NAVBAR START --- */}
      <div className="navbar-start">
        {/* Logo */}
        <Link to="/landingpage" className="btn btn-ghost text-xl px-2"> {/* Adjusted padding */}
          {/* Replace with your actual Logo component or img tag */}
          <span className="grid h-10 w-auto px-3 place-content-center rounded-lg text-xs text-gray-600">
            <img src="/Logo.png" alt="Logo" className="h-13 w-auto" /> {/* Adjusted size */}
          </span>
        </Link>

        {/* Desktop Main Nav Links (Hidden on smaller screens) */}
        <ul className="menu menu-horizontal px-1 hidden md:flex ml-2">
          <li>
             <button
                onClick={() => handleNavigate('/landingpage')}
                className={`text-sm font-medium rounded-lg ${
                   activeSection === 'landingpage' ? 'bg-base-200 text-base-content' : ''
                }`}
             >
                General
             </button>
          </li>
          {/* Yearbook Dropdown Trigger */}
          <li ref={yearbookDropdownRef}> {/* Attach ref to the list item for outside click */}
            <details onToggle={(e) => setIsYearbookDropdownOpen(e.currentTarget.open)} open={isYearbookDropdownOpen}>
              <summary
                 className={`text-sm font-medium rounded-lg ${
                    activeSection === 'yearbook' ? 'bg-base-200 text-base-content' : ''
                 }`}
              >
                Yearbook
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none z-[1] shadow w-60"> {/* Dropdown Content */}
                 <li>
                    <button
                       onClick={() => handleNavigate('/yearbook')}
                       className={`text-sm ${location.pathname === '/yearbook' ? 'font-semibold' : ''}`}
                    >
                       Yearbook Home
                    </button>
                 </li>
                 <li>
                    <button
                       onClick={() => handleNavigate('/information-system')}
                       className={`text-sm ${isYearbookSubpageActive('/information-system') ? 'font-semibold' : ''}`}
                    >
                       BS Information Systems
                    </button>
                 </li>
                 <li>
                    <button
                       onClick={() => handleNavigate('/tourism-management')}
                       className={`text-sm ${isYearbookSubpageActive('/tourism-management') ? 'font-semibold' : ''}`}
                    >
                       BS Tourism Management
                    </button>
                 </li>
                 <li>
                    <button
                       onClick={() => handleNavigate('/criminology')}
                       className={`text-sm ${isYearbookSubpageActive('/criminology') ? 'font-semibold' : ''}`}
                    >
                       BS Criminology
                    </button>
                 </li>
                 <li>
                    <button
                       onClick={() => handleNavigate('/marine-engineering')}
                       className={`text-sm ${isYearbookSubpageActive('/marine-engineering') ? 'font-semibold' : ''}`}
                    >
                       BS Marine Engineering
                    </button>
                 </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

       {/* --- NAVBAR CENTER (Mobile Hamburger) --- */}
      {/* On medium screens and up, this hamburger is hidden */}
      <div className="navbar-center md:hidden">
         <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
             {/* Mobile Dropdown Menu */}
            <ul
               tabIndex={0}
               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
               <li><button onClick={() => handleNavigate('/landingpage')}>General</button></li>
               <li> {/* Nested details for Yearbook on mobile */}
                  <details>
                     <summary>Yearbook</summary>
                     <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><button onClick={() => handleNavigate('/yearbook')}>Yearbook Home</button></li>
                        <li><button onClick={() => handleNavigate('/yearbook/information-systems')}>BS Info Systems</button></li>
                        <li><button onClick={() => handleNavigate('/yearbook/tourism-management')}>BS Tourism</button></li>
                        <li><button onClick={() => handleNavigate('/yearbook/criminology')}>BS Criminology</button></li>
                        <li><button onClick={() => handleNavigate('/yearbook/marine-engineering')}>BS Marine Eng.</button></li>
                     </ul>
                  </details>
               </li>
               {/* Add other mobile links if needed */}
            </ul>
         </div>
      </div>

       {/* --- NAVBAR END --- */}
      <div className="navbar-end">
         {/* Search Icon Button */}
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        </button>
         {/* Notification Icon Button */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
         {/* User Profile Display */}
         <div className="dropdown dropdown-end ml-2">
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
               <div className="w-8 rounded-full"> {/* Smaller avatar for navbar */}
                 <img
                   alt="User Profile"
                   src="/profile.jpg" // Ensure path relative to public folder
                 />
               </div>
             </div>
             <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <li className="p-2">
                 <strong className="block font-medium text-sm">Russelle Roxas</strong>
                 <span className="text-xs text-base-content/70">russelleroxas11@gmail.com</span>
               </li>
               <li><a>Profile</a></li> {/* Add actual links/handlers */}
               <li><a>Settings</a></li>
               <li><a>Logout</a></li>
             </ul>
          </div>
      </div>
    </div>
  );
};

export default NavBar;