import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Features />

      <div className="flex justify-center pb-20">
        <Contact />
      </div>
    </div>
  );
};

export default Home;