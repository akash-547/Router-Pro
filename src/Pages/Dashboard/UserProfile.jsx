import { useContext } from "react";
import { Context } from "../../Context/Context";

const UserProfile = () => {
  const { user } = useContext(Context);

  if (!user) return <div className="p-10 text-center font-bold text-slate-400">Loading User...</div>;

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-4xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Compact Header/Banner */}
        <div className="h-24 bg-orange-500 flex items-end justify-center pb-4">
           <div className="w-20 h-20 rounded-2xl bg-slate-900 border-4 border-white flex items-center justify-center text-white text-3xl font-bold translate-y-10 shadow-md">
              {user.name.charAt(0)}
           </div>
        </div>

        <div className="p-8 pt-12 text-center">
          <h2 className="text-xl font-black text-slate-800">{user.name}</h2>
          <p className="text-xs text-orange-600 font-bold uppercase tracking-widest">Administrator</p>

          <div className="grid grid-cols-2 gap-4 mt-8 text-left">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] block text-slate-400 font-bold uppercase">Email</span>
              <span className="text-sm font-bold text-slate-700">{user.email}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] block text-slate-400 font-bold uppercase">Status</span>
              <span className="text-sm font-bold text-green-600">Active</span>
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-slate-800 transition">
              Edit Details
            </button>
            <button className="flex-1 border border-slate-200 text-slate-600 py-3 rounded-xl font-bold text-xs hover:bg-slate-50 transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;