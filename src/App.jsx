import './App.css';

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-400 p-6">
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center black">
            Signup Form
          </h2>

          <label className="block mb-3 text-gray-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:black"
          />
          <label className="block mb-3 text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:black"
          />
          <label className="block mb-3 text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:black"
          />
          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-semibold py-2 px-4 rounded mt-4  "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
