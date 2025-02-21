import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full my-0.5">
        <div className='text-right sm:hidden'>
        <button onClick={toggleMenu} className={`text-white transition-transform duration-300 p-2 rounded-3xl ${isOpen ? 'rotate-180' : ''} active:hover:bg-gray-500 hover:bg-gray-700`}>
          <FontAwesomeIcon icon="fa-solid fa-bars" className='text-2xl'/>
        </button>
        </div>
        <ul className={`overflow-hidden transition-all duration-1000 ${isOpen ? 'max-h-screen' : 'max-h-0'} sm:max-h-screen sm:flex sm:justify-center`}>
        <li className="duration-150 delay-100 hover:bg-gray-700 px-3 py-2 rounded active:hover:bg-gray-500"><a href="#header">Home</a></li>
        <li className="duration-150 delay-200 hover:bg-gray-700 px-3 py-2 rounded active:hover:bg-gray-500"><a href="#about">About</a></li>
        <li className="duration-150 delay-300 hover:bg-gray-700 px-3 py-2 rounded active:hover:bg-gray-500"><a href="#skills">Skills</a></li>
        <li className="duration-150 delay-400 hover:bg-gray-700 px-3 py-2 rounded active:hover:bg-gray-500"><a href="#projects">Projects</a></li>
        <li className="duration-150 delay-500 hover:bg-gray-700 px-3 py-2 rounded active:hover:bg-gray-500"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;