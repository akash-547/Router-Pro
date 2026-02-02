import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f3f4f6] min-h-[85vh] flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* 1. HEADING: Compact and Bold */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
          Everything You Need To Build <br />
          <span className="text-orange-500">Modern Dashboards.</span>
        </h1>

        {/* 2. PARAGRAPH: Reduced Margin */}
        <p className="text-md md:text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-normal">
          Create powerful user interfaces with our highly customizable 
          React components. Simple, fast, and perfectly styled.
        </p>

        {/* 3. BUTTONS: Simple & Clean */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <Link 
            to="/signup" 
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all active:scale-95"
          >
            Get Started
          </Link>
          
          <Link 
            to="/features" 
            className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-3 rounded-xl font-bold text-base hover:border-orange-500 hover:text-orange-500 transition-all"
          >
            View Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;