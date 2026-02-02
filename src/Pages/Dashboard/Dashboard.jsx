import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Simple Header */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold tracking-tight">
            Admin <span className="text-orange-500">Panel</span>
          </h1>
          <button 
            onClick={() => { logout(); navigate("/login"); }}
            className="text-sm font-semibold text-slate-500 hover:text-orange-600 transition-colors"
          >
            Logout →
          </button>
        </div>

        {/* 3 Simple Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Users</p>
            <h2 className="text-3xl font-bold">1,240</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Tasks</p>
            <h2 className="text-3xl font-bold">64</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Active</p>
            <h2 className="text-3xl font-bold text-green-500">Online</h2>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Welcome back, Admin</h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            Your system is healthy and all services are running normally. 
            You can manage your data and view reports from this panel.
          </p>
          
          {/* Subtle Action Link */}
          <div className="pt-6 border-t border-slate-50">
            <button className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all">
              View All Reports
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;