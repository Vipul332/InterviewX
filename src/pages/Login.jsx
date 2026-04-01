const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-80 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Email" />
        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Password" />

        <button className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;