import { useState } from "react";

const Settings = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleSave = (e) => {
    e.preventDefault();
    setPasswordError("");

    // 1. Password Match Check
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    setIsSaving(true);
    setShowSuccess(false);

    // Fake API Call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setFormData({ ...formData, newPassword: "", confirmPassword: "" }); // Reset passwords
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] px-4 relative font-sans">
      
      {/* Success Notification */}
      {showSuccess && (
        <div className="absolute top-10 bg-green-500 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-green-100 animate-in fade-in slide-in-from-top-4 duration-300">
          ✓ Profile Updated Successfully!
        </div>
      )}

      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
            Security <span className="text-orange-500">Settings</span>
          </h2>
        </div>

        <form 
          onSubmit={handleSave}
          className="bg-white p-7 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-50 space-y-3"
        >
          {/* Basic Info */}
          <div className="space-y-3 pb-4 border-b border-slate-50">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:border-orange-500 text-sm outline-none transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:border-orange-500 text-sm outline-none transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Password Section */}
          <div className="pt-2 space-y-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Change Password</p>
            
            <input 
              type="password" 
              placeholder="New Password" 
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-2xl focus:border-orange-500 text-sm outline-none transition-all"
              value={formData.newPassword}
              onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
            />

            <input 
              type="password" 
              placeholder="Confirm Password" 
              className={`w-full bg-slate-50 border p-3 rounded-2xl text-sm outline-none transition-all ${passwordError ? 'border-red-500 ring-1 ring-red-100' : 'border-slate-200 focus:border-orange-500'}`}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            
            {passwordError && (
              <p className="text-red-500 text-[10px] font-bold ml-2 italic">{passwordError}</p>
            )}
          </div>

          {/* Action Button */}
          <button 
            type="submit"
            disabled={isSaving}
            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 flex items-center justify-center mt-4 disabled:bg-slate-300"
          >
            {isSaving ? "Saving..." : "Save Settings"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;