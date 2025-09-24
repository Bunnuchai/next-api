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
    <div>
      <h1>Comments for Post #{params.id}</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong> ({c.email})
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}