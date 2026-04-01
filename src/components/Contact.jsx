const Contact = () => {
  return (
    <div className="bg-white text-black p-6 rounded-xl w-80">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>

      <input className="border p-2 w-full mb-2" placeholder="Name" />
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <textarea className="border p-2 w-full mb-2" placeholder="Message" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
};

export default Contact;