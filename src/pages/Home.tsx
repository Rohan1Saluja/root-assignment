import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] p-8 bg-linear-to-br from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl mb-4 drop-shadow-lg">Welcome to Home</h1>
        <p className="text-xl mb-12 opacity-90">
          This is the home page of your application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-2xl mb-4 text-white">Feature 1</h3>
            <p>Describe your first feature here.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-2xl mb-4 text-white">Feature 2</h3>
            <p>Describe your second feature here.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-2xl mb-4 text-white">Feature 3</h3>
            <p>Describe your third feature here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
