import { NavLink, Link } from "react-router-dom";

const Button = ({ 
  to, 
  type = "button", 
  variant = "primary", 
  fullWidth = false, 
  children, 
  onClick,
  className = "" 
}) => {
  const baseStyles = "font-bold transition-all active:scale-95 text-center inline-block";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-orange-500",
    orange: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200",
    outline: "bg-white text-slate-800 border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500",
    ghost: "text-slate-800 hover:text-orange-500"
  };
  const widthStyle = fullWidth ? "w-full" : "px-7 py-2.5";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;
  if (to) {
    return (
      <NavLink to={to} className={combinedClasses}>
        {children}
      </NavLink>
    );
  }
  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;