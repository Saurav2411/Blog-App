import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const token = localStorage.getItem("token");
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const API_BASE_URL = import.meta.env.VITE_API_URL  || "http://localhost:4000";
      const res = await axios.post(
        `${API_BASE_URL}/user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res", res);
      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message);
        navigate("/");
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
          Login into Your Account
        </h1>
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              required
            />
          </div>
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Your password"
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              {loading ? "Loading..." : "Log In"}
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-indigo-600 hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
