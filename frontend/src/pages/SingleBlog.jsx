import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  const blog = blogData.find((b) => b._id === id);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(123); 
  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link.");
    }
  };

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"; // Dynamic URL for local or live server

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl border border-gray-200 my-10">
      {/* Blog Image */}
      <div className="overflow-hidden rounded-lg mb-6">
        <img
          className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
          src={`${API_BASE_URL}/images/${blog.image}`} 
          alt={blog.title}
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-3">{blog.title}</h1>

      {/* Blog Category */}
      <p className="text-indigo-600 font-medium text-xl">{blog.category}</p>

      {/* Blog Description */}
      <p className="text-gray-700 text-lg mt-5">{blog.description}</p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-8">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={`${API_BASE_URL}/images/${blog.author.image}`} 
          alt={blog.author.name}
        />
        <div>
          <p className="text-lg font-semibold text-gray-900">{blog.author.name}</p>
          <p className="text-sm text-gray-500 mt-1">
            Posted on{" "}
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Like & Share Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={handleLike}
          className={`px-6 py-2 rounded-md text-white transition duration-300 ${
            liked ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          {liked ? "Liked ❤️" : "Like ❤️"} ({likeCount})
        </button>
        <button
          onClick={handleShare}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Share 🔗
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
