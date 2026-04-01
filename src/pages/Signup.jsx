const Signup = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-80 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Name" />
        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Email" />
        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Password" />

        <button className="w-full bg-green-500 p-2 rounded hover:bg-green-600">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;