import { Link, NavLink } from "react-router-dom";
import Button from "../Components/Ui/Button";
import Container from "./Container/Container";
import HomeSections from "./HomePages/HomeSections";
const Home = () => {
  return (
    <Container>
      <div className="bg-[#f3f4f6] min-h-[85vh] flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* 1. HEADING: Compact and Bold */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
            Everything You Need To Build <br />
            <span className="text-orange-500">Modern Dashboards.</span>
          </h1>

          {/* 2. PARAGRAPH: Reduced Margin */}
          <p className="text-md md:text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-normal">
            Create powerful user interfaces with our highly customizable React
            components. Simple, fast, and perfectly styled.
          </p>

          {/* 3. BUTTONS: Simple & Clean */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button
              to="/signup"
              variant="orange"
              className="px-8 py-3 rounded-xl text-base"
            >
              Get Started
            </Button>
            <Button to="/features" className="px-8 py-3 rounded-xl text-base">
              View Features
            </Button>
          </div>
        </div>
      </div>
      {/* section */}
      <HomeSections />
    </Container>
  );
};

export default Home;
