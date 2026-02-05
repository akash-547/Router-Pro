import React from 'react';  
import Container from '../../Container/Container';
const HowItWorks = () => {
  const steps = [
    { 
      id: "01", 
      title: "Plan & Research", 
      desc: "Hum aapke idea ko samajhte hain aur ek solid architecture taiyar karte hain.",
      icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" 
    },
    { 
      id: "02", 
      title: "Design & Build", 
      desc: "React aur Tailwind CSS ka istemal karte hue pixel-perfect interface banaya jata hai.",
      icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    },
    { 
      id: "03", 
      title: "Launch & Scale", 
      desc: "App ko live kiya jata hai aur performance ko optimize kiya jata hai.",
      icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 3.18a14.98 14.98 0 00-6.15 12.13 14.98 14.98 0 006.16 12.12"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Working <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium">
            3 asan steps mein apne khwab ko haqiqat mein badlein.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-16 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10"></div>

          {steps.map((step) => (
            <div key={step.id} className="group flex flex-col items-center text-center">
              
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-white border-4 border-[#f3f4f6] rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:border-orange-500 transition-all duration-300 transform group-hover:-translate-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </div>

              {/* Step Number Tag */}
              <span className="bg-orange-100 text-orange-600 text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                Step {step.id}
              </span>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;