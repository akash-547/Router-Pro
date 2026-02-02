import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); });
  }, []);

  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input placeholder="Search user..." className="border p-2 mb-4 w-full" onChange={e => setSearch(e.target.value)} />
      {filtered.map(user => (
        <Link key={user.id} to={`/dashboard/users/${user.id}`} className="block bg-white p-4 mb-2 rounded shadow">{user.name}</Link>
      ))}
    </div>
  );
};

export default Users;