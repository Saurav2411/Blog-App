import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const { user, logoutUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleLogout = () => {
    logoutUser();
    toast.success("Successfully logged out!");
    navigate("/login");
  };

  const handleMobileLogout = () => {
    handleLogout();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <p className="text-2xl font-bold text-gray-800">
            <span className="text-blue-800">Blog</span>Web
          </p>
        </Link>

        {/* Hamburger Icon */}
        <div
          ref={iconRef}
          className="lg:hidden flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-600 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-800 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-800 transition duration-300">Blogs</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-800 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-800 transition duration-300">Contact</Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        {user ? (
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/dashboard"
              className="bg-indigo-600 px-6 py-2 rounded-full text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-rose-600 px-6 py-2 rounded-full text-white hover:bg-rose-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
              Log-In
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-md p-6 z-50"
        >
          <ul className="space-y-4 text-lg font-medium text-gray-600">
            <li>
              <Link
                to="/"
                className="block hover:text-blue-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block hover:text-blue-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-blue-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-blue-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 text-white bg-indigo-600 rounded-lg text-center mt-4 transition duration-300 hover:bg-indigo-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleMobileLogout}
                    className="block w-full py-2 text-white bg-rose-600 rounded-lg text-center mt-2 transition duration-300 hover:bg-rose-700"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block py-2 text-white bg-blue-800 rounded-lg text-center mt-4 transition duration-300 hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log-In
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
