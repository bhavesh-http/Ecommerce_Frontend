import React from 'react';
import { FaCartPlus, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineHelp, MdOutlineMenuBook } from 'react-icons/md';
import { FcBusinessContact } from 'react-icons/fc';
import { SiVega } from 'react-icons/si';
import './Sidebar.css';

const Sidebar = ({ onPageChange }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the right state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (page) => {
    onPageChange(page);
    if (window.innerWidth <= 700) {
      setIsOpen(false); // Close the sidebar on small screens when an item is clicked
    }
  };

  return (
    <>
      {window.innerWidth <= 700 && (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {isOpen && (
        <div className="sidebar text-dark">
          <ul className="list-unstyled">
            <li onClick={() => handleClick('imageGallery')}>
              <SiVega />
              <span> Vegetables</span>
            </li>
            <li onClick={() => handleClick('electronics')}>
              <FaCartPlus />
              <span> Electronics</span>
            </li>
            <li onClick={() => handleClick('menu')}>
              <MdOutlineMenuBook />
              <span> MENU</span>
            </li>
          
            <li onClick={() => handleClick('contact')}>
              <FcBusinessContact />
              <span> About us</span>
            </li>
            <li onClick={() => handleClick('helpDesk')}>
              <MdOutlineHelp />
              <span> Help</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
