const Contact = () => {
  return (
    <div className="bg-[#f3f4f6] min-h-[75vh] flex items-center justify-center px-6">
      <div className="max-w-sm w-full">
        
        {/* HEADER: Small & Center */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">
            Say <span className="text-orange-500">Hello</span>
          </h1>
        </div>

        {/* COMPACT FORM */}
        <form 
          className="bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-gray-100 space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all text-sm"
          />

          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all text-sm"
          />

          <textarea 
            rows="3"
            placeholder="Message" 
            className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all text-sm resize-none"
          ></textarea>

          <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all active:scale-95 shadow-md shadow-orange-100"
          >
            Send Message
          </button>
        </form>
    

      </div>
    </div>
  );
};

export default Contact;