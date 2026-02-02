import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Active link styling: Text orange ho jayega aur bottom mein ek dot aayega
  const navLinkStyles = ({ isActive }) =>
    `relative font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:text-orange-500 ${
      isActive ? "text-orange-500" : "text-slate-800"
    }`;

  return (
    <nav className="bg-[#f3f4f6] border-b border-gray-300 shadow-sm px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* 1. LOGO SECTION */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <span className="text-white font-black text-xl">O</span>
        </div>
        <span className="text-2xl font-black text-slate-900 tracking-tighter">
          ORANGE<span className="text-orange-500">CORE</span>
        </span>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
        <NavLink to="/about" className={navLinkStyles}>About</NavLink>
        <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
        <NavLink to="/features" className={navLinkStyles}>Features</NavLink>
        <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
      </div>

      {/* 3. BUTTONS SECTION */}
      <div className="flex items-center gap-4">
        <NavLink 
          to="/login" 
          className="text-slate-800 font-bold hover:text-orange-500 transition-colors px-4 py-2"
        >
          LOG IN
        </NavLink>
        
        <NavLink 
          to="/signup" 
          className="bg-slate-900 text-white px-7 py-2.5 rounded-md font-bold hover:bg-orange-500 hover:shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition-all active:scale-95"
        >
          SIGN UP
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;