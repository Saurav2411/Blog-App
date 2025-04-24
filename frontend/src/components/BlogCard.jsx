import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
      <Link to={`/blog/${id}`}>
        <div className="relative w-full h-56">
          <img
            src={`${API_BASE_URL}/images/${image}`}
            alt={title}
            className="w-[90%] h-full object-cover mx-auto rounded-t-xl transform transition-all duration-300 hover:scale-110"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent p-4 text-white w-full h-full flex items-end justify-start opacity-80">
            <p className="text-lg font-semibold">{category}</p>
          </div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        {/* Title */}
        <Link to={`/blog/${id}`} >
        <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300">{title}</h2>
        </Link>
        {/* Author & Date */}
        <div className="flex items-center gap-4 text-gray-600">
          <img
            className="w-12 h-12 rounded-full border-2 border-blue-500"
            src={`${API_BASE_URL}/images/${author_image}`} 
          />
          <div>
            <p className="font-semibold">{author_name}</p>
            <p className="text-sm">
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-2 text-right">
        <Link to={`/blog/${id}`} className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
