import { useEffect, useState } from "react";

import Link from "next/link";

function List({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            <a> {user.username} </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchusers = async () => {
      const req = await fetch("https://api.rwnjs.com/04/users");
      const users = await req.json();
      setData(users);
    };
    fetchusers();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <div>Loading users...</div>}

      {data && <List users={data} />}
    </div>
  );
}

export default Users;
