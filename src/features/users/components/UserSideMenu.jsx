import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

const UserSideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Navigation handlers
  const handleLandingPage = () => navigate('/landingpage');
  const handleYearBook = () => navigate('/yearbook');
  const handleInformationSystem = () => navigate('/information-system');
  const handleMarineEngineering = () => navigate('/marine-engineering');
  const handleCriminology = () => navigate('/criminology');
  const handleTourismManagement = () => navigate('/tourism-management');

  // Update active section based on current route
  useEffect(() => {
    const pathToSection = {
      '/landingpage': 'landingpage',
      '/yearbook': 'yearbook',
      '/information-system': 'information-system',
      '/marine-engineering': 'marine-engineering',
      '/criminology': 'criminology',
      '/tourism-management': 'tourism-management'
    };
    
    setActiveSection(pathToSection[location.pathname] || '');
  }, [location.pathname]);

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 flex flex-col z-50">
      <div className="px-4 py-6 flex-1 overflow-y-auto">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <button
              onClick={handleLandingPage}
              className={`w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
                activeSection === 'landingpage' ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-700'
              } hover:bg-gray-200 transition-colors`}
            >
              General
            </button>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                <button
                onClick={handleYearBook}
                className="text-sm font-medium">Yearbook</button>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <button
                    onClick={handleInformationSystem}
                    className={`w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
                      activeSection === 'information-system' ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
                    } hover:bg-gray-100 hover:text-gray-700 transition-colors`}
                  >
                    BACHELOR OF INFORMATION SYSTEM
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleTourismManagement}
                    className={`w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
                      activeSection === 'tourism-management' ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
                    } hover:bg-gray-100 hover:text-gray-700 transition-colors`}
                  >
                    BACHELOR OF TOURISM MANAGEMENT
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleCriminology}
                    className={`w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
                      activeSection === 'criminology' ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
                    } hover:bg-gray-100 hover:text-gray-700 transition-colors`}
                  >
                    BACHELOR OF CRIMINOLOGY
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleMarineEngineering}
                    className={`w-full text-left block rounded-lg px-4 py-2 text-sm font-medium ${
                      activeSection === 'marine-engineering' ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
                    } hover:bg-gray-100 hover:text-gray-700 transition-colors`}
                  >
                    BACHELOR OF MARINE ENGINEERING
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center gap-2">
          <img
            alt="User"
            src="/profile.jpg"
            className="size-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs">
              <strong className="block font-medium">Russelle Roxas</strong>
              <span>russelleroxas11@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideMenu;