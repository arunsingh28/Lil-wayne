import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";

const Index = () => {
  return (
    <div className="h-screen bg-dark text-white px-20 antialiased">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
