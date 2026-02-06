import { NavLink } from "react-router-dom";
import Button from "./Ui/Button";
import Container from "../Pages/Container/Container";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    `relative font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:text-orange-500 ${
      isActive ? "text-orange-500" : "text-slate-800"
    }`;

      const isAuthenticated = localStorage.getItem("token");



  return (
    
    <nav className="bg-[#f3f4f6] w-full border-b border-gray-300 sticky top-0 z-50">
      <Container>
        <div className="py-4 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              <span className="text-orange-500">LOGO</span>
            </span>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/about" className={navLinkStyles}>About</NavLink>
            <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
            <NavLink to="/features" className={navLinkStyles}>Features</NavLink>
            <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
          </div>

          {/* BUTTONS SECTION */}
          {!isAuthenticated ?
          <div className="flex items-center gap-2">
            <Button to="/login" variant="ghost" className="px-4 py-2 text-xs">
              LOG IN
            </Button>
            <Button to="/signup" primary className="px-6 py-2.5 rounded-md shadow-md text-xs">
              SIGN UP
            </Button>
          </div>
          :
           <Button to="/dashboard" primary className="px-6 py-2.5 rounded-md shadow-md text-xs">
              Dashboard
            </Button>
          }


        </div>
      </Container>
    </nav>
  );
};
export default Navbar;