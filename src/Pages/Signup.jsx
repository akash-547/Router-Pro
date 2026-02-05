import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Ui/Button";
import { Context } from "../Context/Context";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useContext(Context);

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [passwords, setPasswords] = useState({ pass: "", confirm: "" });

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (passwords.pass !== passwords.confirm) {
      setError("Passwords do not match!");
      return;
    }

    const userData = {
      name: "Admin User",
      email: "admin@gmail.com",
    };

    setShowPopup(true);

    setTimeout(() => {
      login(userData);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center px-6 relative overflow-hidden font-sans">
      {/* TOP SUCCESS POPUP */}
      {showPopup && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-10 duration-500 border border-slate-700">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px]">
            ✓
          </div>
          <span className="text-sm font-bold tracking-tight">
            Success! Redirecting to Dashboard...
          </span>
        </div>
      )}

      <div className="w-full max-w-sm">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
            Create <span className="text-orange-500">Account</span>
          </h1>
          <div className="w-10 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl focus:border-orange-500 outline-none text-sm font-medium transition-all"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl focus:border-orange-500 outline-none text-sm font-medium transition-all"
              />
            </div>

            {/* Passwords */}
            <div className="pt-2 space-y-3">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 italic">
                Security
              </p>

              <input
                type="password"
                placeholder="Password"
                required
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl focus:border-orange-500 outline-none text-sm font-medium transition-all"
                onChange={(e) =>
                  setPasswords({ ...passwords, pass: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Confirm Password"
                required
                className={`w-full bg-slate-50 border p-3.5 rounded-2xl outline-none text-sm font-medium transition-all ${
                  error
                    ? "border-red-500 ring-2 ring-red-50"
                    : "border-slate-200 focus:border-orange-500"
                }`}
                onChange={(e) =>
                  setPasswords({ ...passwords, confirm: e.target.value })
                }
              />

              {error && (
                <p className="text-red-500 text-[10px] font-bold ml-2 italic">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              fullWidth
              variant="primary"
              className="py-4 rounded-2xl text-xs uppercase tracking-widest mt-4"
            >
              Sign Up Now
            </Button>
          </form>
        </div>

        {/* Login Link */}
        <p className="text-center mt-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
