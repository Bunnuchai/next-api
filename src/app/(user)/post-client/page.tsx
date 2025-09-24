"use client";
import { usePosts } from "@/store/posts";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const { items, loading, error, fetchData } = usePosts();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>ผิดพลาด: {error}</p>;

  return (
    <div>
      <h1>Posts-client!!!</h1>
      <ul>
        {items.map((post, index) => (
          <li key={post.id}>
            <h2>{index + 1}. {post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}/comments`}>รายละเอียดเพิ่มเติม...</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
