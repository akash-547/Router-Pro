import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div className="p-20 text-center font-bold text-slate-300">Loading User...</div>;

  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto">
      {/* Big Main Card */}
      <div className="bg-white border border-slate-100 rounded-[3rem] shadow-xl overflow-hidden">
        
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side: Avatar & Basic Info */}
          <div className="md:w-1/3 bg-slate-50 p-10 flex flex-col items-center justify-center border-r border-slate-100">
            <div className="w-32 h-32 bg-orange-500 rounded-[2.5rem] flex items-center justify-center text-white text-5xl font-black mb-6 shadow-lg shadow-orange-200">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-black text-slate-800 text-center uppercase tracking-tighter">
              {user.name}
            </h2>
            <p className="text-orange-500 font-bold text-sm mt-1">@{user.username}</p>
            
            <button 
              onClick={() => navigate(-1)}
              className="mt-10 px-6 py-2 bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-600 transition-all"
            >
              Back to List
            </button>
          </div>

          {/* Right Side: Detailed Grid */}
          <div className="md:w-2/3 p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              
              {/* Contact Group */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] border-b pb-2">Contact Details</h3>
                <InfoItem label="Email Address" value={user.email} />
                <InfoItem label="Phone Number" value={user.phone} />
                <InfoItem label="Personal Website" value={user.website} />
              </div>

              {/* Location & Work Group */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] border-b pb-2">Company & Address</h3>
                <InfoItem label="Company Name" value={user.company.name} />
                <InfoItem label="Current City" value={user.address.city} />
                <InfoItem label="Zip Code" value={user.address.zipcode} />
              </div>

            </div>

            {/* Catchphrase Box */}
            <div className="mt-12 p-6 bg-orange-50 rounded-3xl border border-orange-100">
              <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest mb-1">Company Motto</p>
              <p className="text-sm italic font-medium text-orange-700">"{user.company.catchPhrase}"</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Sub-component for clean labels
const InfoItem = ({ label, value }) => (
  <div className="text-left">
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-sm font-bold text-slate-700">{value}</p>
  </div>
);

export default UserProfile;