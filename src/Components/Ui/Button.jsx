import { NavLink } from "react-router-dom";

const Button = ({ to, type = "button", variant = "primary", fullWidth = false, children, onClick, className = "" }) => {
  
  // Base Styles: Basic look jo sab pe hoga
  const baseStyles = "font-bold transition-all active:scale-95 flex items-center justify-center text-center";
  
  // Variants: Colors aur Borders
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-orange-500",
    orange: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200",
    outline: "bg-transparent text-slate-400 border border-slate-800 hover:bg-white hover:text-slate-900",
    ghost: "text-slate-800 hover:text-orange-500"
  };

  // Agar fullWidth true ho toh w-full, warna default padding (agar className mein padding na ho)
  const widthClass = fullWidth ? "w-full" : (!className.includes("p-") ? "px-7 py-2.5" : "");

  const finalClass = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return <NavLink to={to} className={finalClass}>{children}</NavLink>;
  }

  return (
    <button type={type} onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
};

export default Button;