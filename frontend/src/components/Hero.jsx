import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative my-6 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      {/* Darker Gradient Overlay to enhance contrast */}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

      <div className="relative z-10 text-center px-6 sm:px-12 py-16">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4 text-shadow-lg"
        >
          Unlock a World of Stories, Knowledge, and Inspiration
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6 text-shadow-lg">
          Dive into the world of thought-provoking articles, from tech to travel, and everything in between.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Join Us Today
          </Link>
          <Link
            to="/blogs"
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
