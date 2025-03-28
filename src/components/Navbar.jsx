import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Cognizant</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-blue-200 transition cursor-pointer">Home</li>
          <li className="hover:text-blue-200 transition cursor-pointer">About</li>
          <li className="hover:text-blue-200 transition cursor-pointer">Services</li>
          <li className="hover:text-blue-200 transition cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-blue-600 py-4 px-6 space-y-4">
            <li onClick={toggleMenu} className="cursor-pointer">Home</li>
            <li onClick={toggleMenu} className="cursor-pointer">About</li>
            <li onClick={toggleMenu} className="cursor-pointer">Services</li>
            <li onClick={toggleMenu} className="cursor-pointer">Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
