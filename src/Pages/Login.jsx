import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { login } = useAuth(); // Ensure login function exists in Context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Sabse important: Taki page reload na ho
    
    console.log("Attempting login with:", email, password);

    // Strict Check: Check if email and password are correct
    if (email === "admin@gmail.com" && password === "admin123") {
      console.log("Login Successful!");
      login(); // Yeh aapki context state update karega
      navigate("/dashboard"); // Redirect
    } else {
      console.log("Login Failed!");
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="bg-[#f3f4f6] min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-sm w-full">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">
            Admin <span className="text-orange-500">Login</span>
          </h1>
        </div>

        <form 
          onSubmit={handleLogin} 
          className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-4"
        >
          {error && (
            <div className="bg-red-50 text-red-600 text-[10px] font-bold p-3 rounded-lg text-center border border-red-100 uppercase">
              {error}
            </div>
          )}

          <input 
            type="email" 
            placeholder="Admin Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:border-orange-500 outline-none text-sm font-medium"
            required
          />

          <input 
            type="password" 
            placeholder="Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl focus:border-orange-500 outline-none text-sm font-medium"
            required
          />

          <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-black text-sm hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;