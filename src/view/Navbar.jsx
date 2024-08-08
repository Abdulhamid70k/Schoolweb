import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = ({ isLoggedIn, scrollToContact }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', dropdown: null, path: '/' },
    { name: 'About Us', dropdown: [`ST. Andrew's Society`, 'Mission & Vision/Philosophy', 'School Information'], path: '/about-us' },
    { name: 'Admission', dropdown: ['Fee Structure', 'Admission Enquiry', 'Admission Guidelines'], path: '/admission' },
    { name: 'Calendar', dropdown: null, path: '/Calendar' },
    { name: 'Time Table', dropdown: null, path: isLoggedIn ? '/SchoolTimetable' : '/StudentTimetable' },
    { name: 'CONTACT US', dropdown: ['Contacts', 'Feedback/Suggestions'], path: '/contact-us', action: scrollToContact },
  ];

  const handleItemClick = (index, path, action) => {
    if (action) {
      action();
    } else if (navItems[index].dropdown) {
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const handleSubItemClick = (item, subItem) => {
    const subItemPathMap = {
      'About Us': {
        "ST. Andrew's Society": '/St_Society',
        'Mission & Vision/Philosophy': '/Vision',
        'School Information': '/SchoolInfo'
      },
      'Admission': {
        'Fee Structure': '/FeeStructure',
        'Admission Enquiry': '/AdmissionEnquiry',
        'Admission Guidelines': '/AdmissionGuidelines'
      }
    };

    const path = subItemPathMap[item.name]?.[subItem];
    if (path) {
      navigate(path);
    } else if (item.name === 'CONTACT US') {
      scrollToContact();
    } else {
      navigate(`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`);
    }

    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8 sm:h-10" alt="School Logo" />
            <span className="self-center text-sm sm:text-lg md:text-xl font-semibold whitespace-nowrap dark:text-white">St.Andrew's High School</span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-1 absolute md:relative top-16 left-0 right-0 md:top-0 bg-white md:bg-transparent shadow-md md:shadow-none z-20`}>
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => handleItemClick(index, item.path, item.action)}
                  className={`w-full md:w-auto px-4 py-2 text-xs sm:text-sm md:text-base flex justify-between items-center ${location.pathname.startsWith(item.path) ? 'bg-gray-100 text-blue-700' : 'text-gray-900'} hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                </button>
                {item.dropdown && activeDropdown === index && (
                  <div className="md:absolute left-0 mt-2 w-full md:w-48 bg-white rounded-md shadow-lg dark:bg-gray-700 z-30">
                    {item.dropdown.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => handleSubItemClick(item, subItem)}
                        className="block w-full text-left px-4 py-2 text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/apply" className="block md:inline-block w-full md:w-auto px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 mt-2 md:mt-0">
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;