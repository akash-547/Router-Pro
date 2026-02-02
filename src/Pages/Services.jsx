const Services = () => {
  const services = [
    {
      title: "Admin Dashboard",
      desc: "Full-scale professional management panels with real-time data tracking.",
      icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
    },
    {
      title: "Nested Routing",
      desc: "Deeply structured navigation for complex applications and sub-pages.",
      icon: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
    },
    {
      title: "API Integration",
      desc: "Seamless connection with third-party services and dynamic data fetching.",
      icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 3.18a6 6 0 0 1-5.6 15.15"
    },
    {
      title: "Responsive UI",
      desc: "Pixel-perfect designs that work beautifully on mobile, tablet, and desktop.",
      icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    }
  ];

  return (
    <Container>
    <div className="bg-[#f3f4f6] min-h-[85vh] py-12 px-6 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-slate-600 font-medium max-w-xl mx-auto">
            We provide top-notch technical solutions to help you build your digital empire faster.
          </p>
        </div>

        {/* 2. SERVICES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-slate-700 group-hover:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3. SUBTLE CALL TO ACTION */}
        <div className="mt-12 text-center">
          <button className="text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-orange-500 transition-colors">
            Learn more about our workflow →
          </button>
        </div>

      </div>
    </div>
    </Container>
  );
};

export default Services;