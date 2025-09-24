"use client";
import { usePosts } from "@/store/posts";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const { items, loading, error, fetchData } = usePosts();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <p className="text-center text-blue-500">⏳ กำลังโหลด...</p>;
  if (error) return <p className="text-center text-red-500">❌ ผิดพลาด: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">📑 Posts-client</h1>
      <ul className="space-y-6">
        {items.map((post, index) => (
          <li
            key={post.id}
            className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {index + 1}. {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
            <Link
              href={`/post/${post.id}/comments`}
              className="inline-block mt-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              รายละเอียดเพิ่มเติม →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
