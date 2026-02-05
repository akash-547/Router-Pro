import { useContext } from "react";
import { Context } from "../../Context/Context";

const Dashboard = () => {
  const { user } = useContext(Context);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
        <h1 className="text-3xl font-black text-slate-800">
          Welcome back, <span className="text-orange-500">{user?.name}</span>!
        </h1>
        <p className="text-slate-500 mt-2">You are managing the system as {user?.email}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-slate-50 p-6 rounded-3xl text-center">
                <p className="text-xs font-bold text-slate-400 uppercase">Status</p>
                <p className="text-xl font-black text-emerald-500">Active</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl text-center">
                <p className="text-xs font-bold text-slate-400 uppercase">Role</p>
                <p className="text-xl font-black text-slate-800">Administrator</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;