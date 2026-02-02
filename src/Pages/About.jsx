import Container from "./Container/Container";

const About = () => {
  return (
    <Container>
    <div className="bg-[#f3f4f6] min-h-[80vh] flex items-center justify-center py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* 1. MAIN HEADING: Centered */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
          Our <span className="text-orange-500">Mission</span>
        </h1>

        {/* 2. MAIN PARAGRAPH: Centered and Balanced */}
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-8">
          This dashboard is a high-performance demonstration of modern web power. 
          We specialize in building seamless interfaces using 
          <span className="text-orange-600 font-bold"> React + Tailwind CSS</span> 
          to deliver professional, scalable, and beautiful user experiences.
        </p>

        {/* 3. CORE VALUES: Simple horizontal list instead of boxes */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
            <span className="text-slate-800 font-bold uppercase text-sm tracking-widest">100% React Driven</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
            <span className="text-slate-800 font-bold uppercase text-sm tracking-widest">API Integrated</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
            <span className="text-slate-800 font-bold uppercase text-sm tracking-widest">Ultra Fast</span>
          </div>
        </div>

        {/* 4. SECONDARY DESCRIPTION */}
        <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto border-t border-gray-300 pt-8">
          Whether it's nested routing, complex API calls, or dynamic route parameters, 
          our architecture ensures that your application stays fast and maintainable. 
          We believe in clean code and even cleaner design.
        </p>

      </div>
    </div>
    </Container>
  );
};

export default About;