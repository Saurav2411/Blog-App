import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">About</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="text-blue-600 font-semibold">Blog</span><span className="text-black font-semibold">Web</span> is your go-to platform for insightful stories, tips, and trends from the world of technology, travel, lifestyle, and personal growth. Whether you're looking to learn, explore, or simply get inspired — we’re here to fuel your curiosity with authentic and engaging content.
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Email: sauriit1999@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li><Link to="/" className="hover:text-blue-800 transition duration-300">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-800 transition duration-300">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-blue-800 transition duration-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-800 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li><Link to="/category/technology" className="hover:text-blue-800 transition duration-300">Technology</Link></li>
            <li><Link to="/category/travel" className="hover:text-blue-800 transition duration-300">Travel</Link></li>
            <li><Link to="/category/lifestyle" className="hover:text-blue-800 transition duration-300">Lifestyle</Link></li>
            <li><Link to="/category/spiritual" className="hover:text-blue-800 transition duration-300">Spiritual Journeys</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <Link to="/" className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
          <span className="text-blue-800">Blog</span>Web
        </Link>
        <ul className="flex flex-col md:flex-row gap-4 items-center">
          <li><Link to="/privacy-policy" className="hover:text-blue-800">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-blue-800">Terms & Conditions</Link></li>
          <li className="text-gray-500">© {new Date().getFullYear()} Saurav Chauhan</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
