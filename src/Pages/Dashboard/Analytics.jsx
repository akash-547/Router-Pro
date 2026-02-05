const Analytics = () => {
  return (
    // h-screen aur overflow-hidden use kiya hai taaki scroll na ho
    <div className="h-full max-w-6xl mx-auto flex flex-col justify-center p-4">
      
      {/* Header - Margins reduced */}
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
          Platform <span className="text-orange-500">Analytics</span>
        </h1>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Insights</p>
      </div>

      {/* Top Row: Quick Stats - Grid gaps reduced */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Views" value="84.2k" growth="+12%" color="bg-orange-500" />
        <StatCard title="Avg. Session" value="4m 32s" growth="+5%" color="bg-slate-900" />
        <StatCard title="Bounce Rate" value="12.4%" growth="-2%" color="bg-slate-400" />
      </div>

      {/* Main Content - Tight layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Simple Growth Chart */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Acquisition</h3>
          <div className="space-y-4">
            <ProgressBar label="Social" percentage="75%" />
            <ProgressBar label="Direct" percentage="45%" />
            <ProgressBar label="Search" percentage="90%" />
            <ProgressBar label="Refer" percentage="30%" />
          </div>
        </div>

        {/* Reports Summary */}
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200/50">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Reports</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span className="text-[11px] font-bold text-slate-700 font-mono">LOG-00{i}.pdf</span>
                </div>
                <button className="text-[9px] font-black text-orange-500 uppercase">Get</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Sub-Components (Small Size) ---

const StatCard = ({ title, value, growth, color }) => (
  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
    <div className={`absolute top-0 right-0 w-1 h-full ${color}`}></div>
    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">{title}</p>
    <div className="flex items-baseline gap-2">
      <h2 className="text-xl font-black text-slate-800">{value}</h2>
      <span className="text-[9px] font-bold text-emerald-500">{growth}</span>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-[9px] font-bold text-slate-600 uppercase">{label}</span>
      <span className="text-[9px] font-black text-slate-900">{percentage}</span>
    </div>
    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
      <div 
        className="bg-orange-500 h-full transition-all duration-1000" 
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

export default Analytics;