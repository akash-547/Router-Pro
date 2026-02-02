import { NavLink } from "react-router-dom";
import Button from "./Ui/Button";
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
        <span className="text-2xl font-black text-slate-900 tracking-tighter">
          <span className="text-orange-500">LOGO</span>
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
    <div className="flex items-center gap-2">
  <Button to="/login" variant="ghost">
    LOG IN
  </Button>
  
  <Button to="/signup" className="rounded-md shadow-md">
    SIGN UP
  </Button>
</div>
    </nav>
  );
};

export default Navbar;