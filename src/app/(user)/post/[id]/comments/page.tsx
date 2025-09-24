import axios from "axios";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  params: { id: string };
};

export default async function CommentsPage({ params }: Props) {
  const res = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  );
  const comments = res.data;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">
        💬 Comments for Post #{params.id}
      </h1>
      <ul className="space-y-4">
        {comments.map((c) => (
          <li
            key={c.id}
            className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
          >
            <strong className="text-lg text-gray-800">{c.name}</strong>{" "}
            <span className="text-sm text-gray-500">({c.email})</span>
            <p className="mt-2 text-gray-700">{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
