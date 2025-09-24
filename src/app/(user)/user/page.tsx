"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type User = { id: number; name: string; email: string };

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-blue-500">⏳ กำลังโหลด...</p>;
  if (err) return <p className="text-center text-red-500">❌ ผิดพลาด: {err}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">👥 Users (Axios)</h1>
      <ul className="space-y-4">
        {users.map((u) => (
          <li
            key={u.id}
            className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <p className="font-semibold text-gray-800">{u.name}</p>
            <p className="text-gray-600 text-sm">{u.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
