import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-linear-to-br from-secondary-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl mb-4 drop-shadow-lg">Welcome to Home</h1>
        <p className="text-xl mb-12 opacity-90">
          This is the home page of your application.
        </p>
      </div>
    </div>
  );
};

export default Home;
