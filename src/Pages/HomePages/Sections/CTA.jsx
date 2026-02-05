import React from "react";
import Container from "../../Container/Container";
import Button from "../../../Components/Ui/Button";

const CTA = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32"></div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Ready to Build Your <span className="text-orange-500">Next Big Thing?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join 1000+ developers and businesses building high-performance apps today.
          </p>

          <div className="flex justify-center">
            <Button 
              title="Start Your Free Trial" 
              to="/signup" 
              className="bg-orange-500 hover:bg-orange-600 px-12 py-4 rounded-2xl text-xl shadow-2xl shadow-orange-500/20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;