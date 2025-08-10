import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add your sign out logic here
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-200 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-sm">MS</span>
              </div>
              <span className="text-white font-semibold text-lg">Medical Spanish</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/home"
                  className="bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  Conversations
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  Dialects
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  Progress
                </a>
                <a
                  href="#"
                  className="text-blue-200 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  Vocabulary
                </a>
              </div>
            </div>
          </div>

          {/* Right side - notifications and profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Progress indicator */}
            <div className="hidden sm:flex items-center mr-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Level 3</span>
                <div className="w-16 h-2 bg-blue-600 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <button
              type="button"
              className="relative rounded-full bg-blue-800 p-1 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              {/* Notification dot */}
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-400 rounded-full"></span>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JS</span>
                  </div>
                </button>
              </div>

              {isProfileOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1">
                    Study Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1">
                    Achievements
                  </a>
                  <button 
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                    role="menuitem" 
                    tabIndex="-1"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-blue-700">
            <a
              href="/home"
              className="bg-blue-600 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-blue-200 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Conversations
            </a>
            <a
              href="#"
              className="text-blue-200 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Dialects
            </a>
            <a
              href="#"
              className="text-blue-200 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Progress
            </a>
            <a
              href="#"
              className="text-blue-200 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Vocabulary
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}