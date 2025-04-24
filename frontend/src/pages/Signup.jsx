import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);
      setLoading(true);
      const res = await axios.post(
        "http://localhost:4000/user/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-xl border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Create Your Account
        </h1>
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <input
              onChange={onChangeHandler}
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              required
            />
          </div>
          <div>
            <input
              onChange={onChangeHandler}
              name="password"
              value={formData.password}
              type="password"
              placeholder="Your password"
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              required
            />
          </div>
          <div>
            <input
              onChange={fileHandler}
              accept="image/*"
              type="file"
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-indigo-600 hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
