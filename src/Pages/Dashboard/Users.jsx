import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-10 text-center text-slate-400 animate-pulse">Loading Grid...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Mini Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">
          Users <span className="text-orange-500">Grid</span>
        </h2>
        <input
          type="text"
          placeholder="Filter..."
          className="bg-slate-100 border-none px-4 py-1.5 rounded-lg text-xs w-40 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Compact Grid: 4 columns on large screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((user) => (
          <Link
            key={user.id}
            to={`/dashboard/users/${user.id}`}
            className="bg-white border border-slate-100 p-3 rounded-xl hover:shadow-md hover:border-orange-200 transition-all group text-center"
          >
            {/* Tiny Avatar */}
            <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-2 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all text-sm">
              {user.name.charAt(0)}
            </div>
            
            {/* Name & Username */}
            <h3 className="font-bold text-slate-800 text-xs truncate leading-tight">
              {user.name}
            </h3>
            <p className="text-[9px] text-slate-400 truncate">@{user.username}</p>
            
            <div className="mt-2 text-[8px] font-black uppercase text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
              View Profile
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;