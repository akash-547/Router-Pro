import { useContext } from "react";
import { Context } from "../../Context/Context";

const Dashboard = () => {
  const { user } = useContext(Context);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
        <h1 className="text-3xl font-black text-slate-800">
          Welcome back, <span className="text-orange-500">{user?.name || "Guest"}</span>!
        </h1>
        <p className="text-slate-500 mt-2 italic">Role: {user?.role || "Visitor"}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-50 p-6 rounded-3xl text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Access Level</p>
            <p className={`text-xl font-black ${user?.role === 'Admin' ? 'text-emerald-500' : 'text-blue-500'}`}>
              {user?.role === "Admin" ? "Full Access" : user?.role === "User" ? "Standard" : "Limited"}
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
            <p className="text-sm font-black text-slate-800 truncate">{user?.email}</p>
          </div>
        </div>

        {/* Info Message Based on Role */}
        <div className="mt-6 p-4 bg-orange-50 rounded-2xl border border-orange-100">
           <p className="text-sm text-orange-700 font-medium">
             {user?.role === "Admin" && "You have full control over the admin panel and analytics."}
             {user?.role === "User" && "You can manage your profile and account settings."}
             {user?.role === "Guest" && "You are viewing the dashboard as a guest visitor."}
           </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;