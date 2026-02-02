import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Main Dashboard", path: "/dashboard" },
    { name: "Users List", path: "/dashboard/users" },
    { name: "Analytics", path: "/dashboard/analytics" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white p-6 min-h-screen flex flex-col border-r border-slate-800">
      
      {/* Title Section */}
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-black tracking-tighter uppercase text-white">
          DASH<span className="text-orange-500">BOARD</span>
        </h2>
        <div className="w-8 h-1 bg-orange-500 mt-1 rounded-full"></div>
      </div>

      {/* Main Navigation Links */}
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section: Home Link & Footer */}
      <div className="mt-auto pt-6 border-t border-slate-800 space-y-4">
        <NavLink
          to="/"
          className="flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-slate-400 hover:bg-white hover:text-slate-900 transition-all border border-slate-800"
        >
          ← Exit to Home
        </NavLink>
        
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest text-center">
          © 2026 Admin Panel
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;