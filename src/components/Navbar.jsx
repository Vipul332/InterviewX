import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-950 text-white shadow-md">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        InterviewX
      </h1>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;