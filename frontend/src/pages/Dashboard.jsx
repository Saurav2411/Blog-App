import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaTrashAlt, FaEdit } from "react-icons/fa"; 

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await axios.post(`${API_BASE_URL}/blog/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.message);
      setFormData({ title: "", category: "", description: "", image: null });
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/blog/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data.blogs);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };
    allBlogs();
  }, [token]);

  const removeBlog = async (blogId) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/blog/delete/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.message);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (e) => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && !sidebar.contains(e.target) && !e.target.closest("#toggle-btn")) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`w-64 bg-indigo-800 text-white p-4 shadow-lg transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64 fixed inset-0 z-50 md:z-auto md:relative`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Dashboard</h2>
        <div className="space-y-4">
          <button
            className={`w-full py-3 px-4 rounded-md text-left ${activeTab === "post" ? "bg-indigo-700" : "bg-indigo-800"} hover:bg-indigo-700 transition`}
            onClick={() => setActiveTab("post")}
          >
            <span className="font-medium text-sm">Post a Blog</span>
          </button>
          <button
            className={`w-full py-3 px-4 rounded-md text-left ${activeTab === "list" ? "bg-indigo-700" : "bg-indigo-800"} hover:bg-indigo-700 transition`}
            onClick={() => setActiveTab("list")}
          >
            <span className="font-medium text-sm">List of Blogs</span>
          </button>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        id="toggle-btn"
        onClick={toggleSidebar}
        className="md:hidden text-indigo-800 p-4 absolute top-16 text-4xl z-50"
      >
        &#9776;
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 overflow-hidden flex flex-col">
        {activeTab === "post" ? (
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-xl font-semibold mb-6 text-indigo-700">Post a New Blog</h2>
            <form onSubmit={submitHandler} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-gray-700">Blog Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Enter blog title"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Enter category"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={onChangeHandler}
                  placeholder="Write your blog content here..."
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  rows="4"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium text-gray-700">Upload Image</label>
                <input
                  id="image"
                  onChange={fileHandler}
                  type="file"
                  accept="image/*"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
                >
                  {loading ? "Posting..." : "Post Blog"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-xl font-semibold mb-6 text-indigo-700">List of Blogs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-indigo-600">Title</th>
                    <th className="px-4 py-2 text-left text-indigo-600">Category</th>
                    <th className="px-4 py-2 text-left text-indigo-600">Image</th>
                    <th className="px-4 py-2 text-left text-indigo-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{blog.title}</td>
                      <td className="px-4 py-2">{blog.category}</td>
                      <td className="px-4 py-2">
                        <img
                          src={`${API_BASE_URL}/images/${blog.image}`}
                          alt={blog.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-4 py-2 space-x-3">
                        <button
                          onClick={() => removeBlog(blog._id)}
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <FaTrashAlt className="text-lg" />
                        </button>
                        <button
                          onClick={() => console.log("Edit feature coming soon")}
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          <FaEdit className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
