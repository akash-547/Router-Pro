import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Context } from "../Context/Context";
import Button from "./Ui/Button";

const Sidebar = () => {
  const { user, logout } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/login"); };
  const goToHome = () => navigate("/dashboard");

  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded-xl text-sm font-bold transition-all ${
      isActive ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 flex flex-col justify-between sticky top-0">
      <div>
        <h2 className="text-2xl font-black mb-8">Admin <span className="text-orange-500">Panel</span></h2>

        <div className="bg-slate-800 p-4 rounded-2xl mb-8 border border-slate-700 text-center">
          <p className="text-sm font-bold text-orange-500">{user?.name || "Guest"}</p>
          <span className="text-[9px] bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded-md font-bold uppercase">{user?.role || "Guest"}</span>
        </div>

        <nav className="space-y-2">
          <NavLink to="/dashboard" end className={linkStyle}>Dashboard</NavLink>
          
          {/* Admin: Sab dekh sakta hai */}
          {user?.role === "Admin" && (
            <>
              <NavLink to="/dashboard/profile" className={linkStyle}>My Profile</NavLink>
              <NavLink to="/dashboard/users" className={linkStyle}>Users Details</NavLink>
              <NavLink to="/dashboard/analytics" className={linkStyle}>Analytics</NavLink>
              <NavLink to="/dashboard/settings" className={linkStyle}>Settings</NavLink>
            </>
          )}

          {/* User: Sirf Profile aur Settings */}
          {user?.role === "User" && (
            <>
              <NavLink to="/dashboard/profile" className={linkStyle}>My Profile</NavLink>
              <NavLink to="/dashboard/settings" className={linkStyle}>Settings</NavLink>
            </>
          )}

          {/* Guest: Sirf Profile */}
          {user?.role === "Guest" && (
            <NavLink to="/dashboard/profile" className={linkStyle}>Guest Profile</NavLink>
          )}
        </nav>
      </div>

      <div className="space-y-3 pt-6 border-t border-slate-800">
        <Button onClick={goToHome} to="/" className="w-full py-3 rounded-xl border-2 border-white/80 text-white hover:bg-orange-500">← Go Home</Button>
        <Button onClick={handleLogout} className="w-full py-3 rounded-xl border-2 border-white/20 text-white/60 hover:bg-red-500">Logout →</Button>
      </div>
    </aside>
  );
};

export default Sidebar;