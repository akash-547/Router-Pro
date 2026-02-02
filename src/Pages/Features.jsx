const Features = () => {
  const features = [
    { title: "Fast Performance", desc: "Optimized load times for a seamless user experience." },
    { title: "User-Friendly UI", desc: "Intuitive designs that anyone can navigate with ease." },
    { title: "Responsive Design", desc: "Looks perfect on everything from mobile to desktop." },
    { title: "Real-Time Data", desc: "Instant updates without refreshing your browser page." }
  ];

  return (
    <div className="bg-[#f3f4f6] min-h-[80vh] flex items-center py-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* 1. SECTION HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tighter">
            Core <span className="text-orange-500">Features</span>
          </h1>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* 2. FEATURES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="relative bg-white p-8 rounded-4xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Background Number Decoration */}
              <span className="absolute -top-4 -right-2 text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                0{i + 1}
              </span>

              {/* Icon/Circle Indicator */}
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <div className="w-3 h-3 bg-orange-500 rounded-full group-hover:bg-white"></div>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3">
                {f.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3. SUBTLE BOTTOM MARGIN FOR FOOTER SPACE */}
        <div className="mt-16 border-t border-gray-200 opacity-50"></div>
      </div>
    </div>
  );
};

export default Features;