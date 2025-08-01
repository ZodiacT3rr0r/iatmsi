import React, { useState } from 'react';

function SubNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownData = {
    about: [
      "About IATMSI-2026",
      "IATMSI History", 
      "IATMSI Committees",
      "Track Chairs"
    ],
    forAuthors: [
      "Instructions for Camera Ready",
      "Paper Submission",
      "Oral Presenter's Guidelines",
      "Poster Presenter's Guidelines", 
      "Conference Program",
      "Venue/Travel",
      "Gallery"
    ]
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-gray-800 border-t border-b border-gray-700 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Single Row */}
        <div className="flex justify-center space-x-4 py-3 text-xs font-medium">
          <div className="relative">
            <button 
              onClick={() => handleDropdownToggle('about')}
              className="text-white hover:text-gray-200 px-2 py-2 flex items-center relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md"
            >
              <span className="relative z-10">ABOUT</span>
              <svg className={`w-2 h-2 ml-1 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* ABOUT Dropdown */}
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                <div className="py-1">
                  {dropdownData.about.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => handleDropdownToggle('forAuthors')}
              className="text-white hover:text-gray-200 px-2 py-2 flex items-center relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md"
            >
              <span className="relative z-10">FOR AUTHORS</span>
              <svg className={`w-2 h-2 ml-1 transition-transform duration-300 ${activeDropdown === 'forAuthors' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* FOR AUTHORS Dropdown */}
            {activeDropdown === 'forAuthors' && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-600">
                <div className="py-1">
                  {dropdownData.forAuthors.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            CALL FOR PAPERS
          </a>
          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            PAPER SUBMISSION
          </a>
          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            SPONSORSHIP/EXHIBITS
          </a>
          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            IMPORTANT DATES
          </a>
          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            CALL FOR REVIEWERS
          </a>
          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            KEYNOTE TALKS/TUTORIALS
          </a>
          <a href="#" className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md">
            AWARDS/GRANTS
          </a>
          <div className="relative">
            <button 
              onClick={() => handleDropdownToggle('help')}
              className="text-white hover:text-gray-200 px-2 py-2 flex items-center relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md"
            >
              <span className="relative z-10">HELP</span>
              <svg className={`w-2 h-2 ml-1 transition-transform duration-300 ${activeDropdown === 'help' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* HELP Dropdown */}
            {activeDropdown === 'help' && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    FAQ
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    Contact Support
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    User Guide
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
}

export default SubNavbar; 