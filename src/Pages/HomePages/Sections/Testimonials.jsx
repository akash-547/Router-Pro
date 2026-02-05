import React from 'react'
import Container from '../../Container/Container'
const Testimonials = () => {
  const reviews = [
    { name: "Ahmed Ali", role: "Startup Founder", text: "Is dashboard ne hamari productivity ko 200% barha diya hai. UI bilkul smooth hai!" },
    { name: "Sara Khan", role: "ProducManager", text: "React aur Tailwind ka itna behtareen istemal maine pehle kabhi nahi dekha. Highly recommended!" },
    { name: "Zain Kabir", role: "Software Engineer", text: "Clean code aur fast performance. API integration ne hamara kaam bahut asan kar diya." }
  ];

  return (
    <section className="py-24 bg-[#f3f4f6]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            What People <span className="text-orange-500">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-orange-500 transition-all duration-300">
              <div className="flex gap-1 text-orange-500 mb-4 text-xl">★★★★★</div>
              <p className="text-slate-600 italic mb-6">"{r.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{r.name}</h4>
                <p className="text-sm text-slate-400">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;