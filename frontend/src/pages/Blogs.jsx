import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { StoreContext } from "../context/StoreContext";

function Blogs() {
  const { blogData } = useContext(StoreContext);

  return (
    <div className="bg-gray-50 py-16">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Explore Our Latest Blogs
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Discover insightful and engaging articles covering various topics, from travel and technology to lifestyle and more. Whether you're looking for tips, inspiration, or in-depth analysis, our blog offers something for everyone.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              id={blog._id}
              title={blog.title}
              image={blog.image}
              category={blog.category}
              author_name={blog.author.name}
              author_image={blog.author.image}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
