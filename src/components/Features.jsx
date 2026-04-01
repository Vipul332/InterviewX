const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-10 mt-20">
      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-white">AI Interview</h2>
        <p className="text-gray-400 mt-2">
          Practice real-time AI interviews.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-white">Resume Analysis</h2>
        <p className="text-gray-400 mt-2">
          Get smart insights from your resume.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-white">Performance Report</h2>
        <p className="text-gray-400 mt-2">
          Improve with detailed feedback.
        </p>
      </div>
    </div>
  );
};

export default Features;