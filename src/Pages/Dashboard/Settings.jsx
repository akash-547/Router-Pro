import { useState } from "react";
import Button from "../../Components/Ui/Button";
const Settings = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  // --- Logic: Check errors ONLY when isSubmitted is true ---
  const isNameEmpty = isSubmitted && !formData.name.trim();
  const isEmailEmpty = isSubmitted && !formData.email.trim();
  const isPassEmpty = isSubmitted && !formData.newPassword.trim();
  const isConfirmEmpty = isSubmitted && !formData.confirmPassword.trim();
  const isPasswordMismatch =
    isSubmitted && formData.newPassword !== formData.confirmPassword;

  const isValid =
    !isNameEmpty &&
    !isEmailEmpty &&
    !isPassEmpty &&
    !isConfirmEmpty &&
    !isPasswordMismatch;

  const handleSave = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Error dikhana shuru karo sirf ab

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.newPassword.trim() ||
      formData.newPassword !== formData.confirmPassword
    ) {
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setIsSubmitted(false); // Reset errors after success
      setFormData({
        name: formData.name,
        email: formData.email,
        newPassword: "",
        confirmPassword: "",
      });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] px-4 font-sans">
      {showSuccess && (
        <div className="fixed top-10 bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-widest shadow-xl z-50 animate-in slide-in-from-top-5">
          ✓ PROFILE UPDATED
        </div>
      )}

      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSave}
          className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 space-y-4"
        >
          <div className="text-center pb-2">
            <h1 className="text-xl font-black text-orange-500 uppercase tracking-tighter">
              Update Profile
            </h1>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className={`w-full p-4 rounded-2xl border-2 outline-none transition-all text-sm ${
                isNameEmpty
                  ? "border-red-400 bg-red-50"
                  : "border-slate-100 bg-slate-50 focus:border-orange-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className={`w-full p-4 rounded-2xl border-2 outline-none transition-all text-sm ${
                isEmailEmpty
                  ? "border-red-400 bg-red-50"
                  : "border-slate-100 bg-slate-50 focus:border-orange-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="pt-2 space-y-3">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-2">
              Security
            </p>

            <input
              type="password"
              placeholder="New Password"
              value={formData.newPassword}
              className={`w-full p-4 rounded-2xl border-2 outline-none transition-all text-sm ${
                isPassEmpty
                  ? "border-red-400 bg-red-50"
                  : "border-slate-100 bg-slate-50 focus:border-orange-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className={`w-full border-2 p-4 rounded-2xl outline-none transition-all text-sm ${
                isConfirmEmpty || isPasswordMismatch
                  ? "border-red-400 bg-red-50"
                  : "border-slate-100 bg-slate-50 focus:border-orange-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />

            {/* Error Messages (Only visible after clicking Save) */}
            {isPasswordMismatch && !isConfirmEmpty && (
              <p className="text-red-500 text-[10px] font-bold ml-2 italic animate-pulse">
                ⚠ Passwords don't match!
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isSaving} // isSaving state yahan pass karein
            className="py-4 rounded-2xl text-xs mt-2"
          >
            Save Settings
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
