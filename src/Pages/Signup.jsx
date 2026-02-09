import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../Components/Ui/Button";
import { Context } from "../Context/Context";

const Signup = () => {
  const navigate = useNavigate();
  const { login, user } = useContext(Context);

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User"); 
  const [passwords, setPasswords] = useState({ pass: "", confirm: "" });

  const handleSignup = (e) => {
    e.preventDefault();
    if (passwords.pass !== passwords.confirm) {
      setError("Passwords do not match!");
      return;
    }

    const userData = { name, email, role };
    setShowPopup(true);

    setTimeout(() => {
      login(userData);
      navigate("/dashboard");
    }, 1500);
  };

  if (user) return <Navigate to="/dashboard" />;

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center px-6 relative font-sans">
      {showPopup && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700">
          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-[10px] animate-pulse">✓</div>
          <span className="text-sm font-bold tracking-tight">Account Created Successfully!</span>
        </div>
      )}

      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Create <span className="text-orange-500">Account</span>
          </h1>
          <div className="w-12 h-1.5 bg-orange-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-50">
          <form onSubmit={handleSignup} className="space-y-4">
            <input type="text" placeholder="Full Name" required className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:border-orange-500 outline-none text-sm font-medium transition-all" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email Address" required className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:border-orange-500 outline-none text-sm font-medium transition-all" onChange={(e) => setEmail(e.target.value)} />
            
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Select Your Role</label>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:border-orange-500 outline-none text-sm font-bold text-slate-700 appearance-none cursor-pointer"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Guest">Guest</option>
              </select>
            </div>

            <input type="password" placeholder="Password" required className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:border-orange-500 outline-none text-sm font-medium transition-all" onChange={(e) => setPasswords({ ...passwords, pass: e.target.value })} />
            <input type="password" placeholder="Confirm Password" required className={`w-full bg-slate-50 border p-4 rounded-2xl outline-none text-sm font-medium transition-all ${error ? "border-red-500" : "border-slate-200 focus:border-orange-500"}`} onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })} />
            
            {error && <p className="text-red-500 text-[10px] font-extrabold ml-2 uppercase italic">{error}</p>}
            
            <Button type="submit" fullWidth className="py-4 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-orange-500 transition-colors mt-4">
              Sign Up Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;