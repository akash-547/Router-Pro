import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Ui/Button";
import { Context } from "../Context/Context"; // ✅ IMPORTANT

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(Context); // ✅ ab sahi hai
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // simple demo check
    if (email === "kashhussain512@gmail.com" && password === "123") {
      // ✅ user data pass karna zaroori hai
      login({
        name: "Admin User",
        email: email,
      });

      navigate("/dashboard");
    } else {
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
          className="bg-white p-8 rounded-4xl shadow-xl border border-gray-100 space-y-4"
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

          <Button
            type="submit"
            variant="orange"
            fullWidth
            className="py-3.5 rounded-xl text-sm"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
