import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Context } from "../Context/Context";
import Button from "./Ui/Button";

const Sidebar = () => {
  const { user, logout } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Common styles for links to keep code clean
  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded-xl text-sm font-bold transition-all ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 flex flex-col justify-between sticky top-0">
      <div>
        <h2 className="text-2xl font-black mb-8 tracking-tight">
          Admin <span className="text-orange-500">Panel</span>
        </h2>

        {/* User Info from Context */}
        <div className="bg-slate-800 p-4 rounded-2xl mb-8 border border-slate-700">
          <p className="text-sm font-bold text-orange-500 truncate">
            {user?.name || "Guest"}
          </p>
          <p className="text-[10px] text-slate-400 truncate uppercase tracking-wider font-semibold">
            {user?.email || "No Email"}
          </p>
        </div>

        <nav className="space-y-2">
          <NavLink to="/dashboard" end className={linkStyle}>
            Dashboard
          </NavLink>

          {/* Isko maine baki links ki tarah style kar diya hai */}
          <NavLink to="/dashboard/profile" className={linkStyle}>
            My Profile
          </NavLink>

          <NavLink to="/dashboard/users" className={linkStyle}>
            Users
          </NavLink>
          <NavLink to="/dashboard/analytics" className={linkStyle}>
            Analytics
          </NavLink>
          <NavLink to="/dashboard/settings" className={linkStyle}>
            Settings
          </NavLink>
        </nav>
      </div>

      <Button
        onClick={handleLogout}
        className="w-full py-3 rounded-xl bg-transparent border-2 border-white/80 text-white font-bold text-sm transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center gap-2 group"
      >
        Logout{" "}
        <span className="group-hover:translate-x-1 transition-transform inline-block">
          →
        </span>
      </Button>
    </aside>
  );
};

export default Sidebar;
