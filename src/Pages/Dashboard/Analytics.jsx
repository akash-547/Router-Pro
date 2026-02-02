const Analytics = () => {
  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto text-left">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">
          Platform <span className="text-orange-500">Analytics</span>
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Performance Insights</p>
      </div>

      {/* Top Row: Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Views" value="84.2k" growth="+12%" color="bg-orange-500" />
        <StatCard title="Avg. Session" value="4m 32s" growth="+5%" color="bg-slate-900" />
        <StatCard title="Bounce Rate" value="12.4%" growth="-2%" color="bg-slate-400" />
      </div>

      {/* Main Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Simple Growth Chart (Progress Bars) */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">User Acquisition</h3>
          <div className="space-y-6">
            <ProgressBar label="Social Media" percentage="75%" />
            <ProgressBar label="Direct Link" percentage="45%" />
            <ProgressBar label="Search Engine" percentage="90%" />
            <ProgressBar label="Referrals" percentage="30%" />
          </div>
        </div>

        {/* Reports Summary */}
        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200/50">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">System Reports</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-bold text-slate-700 font-mono">REP-00{i}_LOG.pdf</span>
                </div>
                <button className="text-[10px] font-black text-orange-500 uppercase hover:underline">Download</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Sub-Components for Cleanliness ---

const StatCard = ({ title, value, growth, color }) => (
  <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-1 h-full ${color}`}></div>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
    <div className="flex items-baseline gap-2">
      <h2 className="text-2xl font-black text-slate-800">{value}</h2>
      <span className="text-[10px] font-bold text-emerald-500">{growth}</span>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage }) => (
  <div>
    <div className="flex justify-between mb-1.5">
      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tighter">{label}</span>
      <span className="text-[11px] font-black text-slate-900">{percentage}</span>
    </div>
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div 
        className="bg-orange-500 h-full rounded-full transition-all duration-1000" 
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

export default Analytics;