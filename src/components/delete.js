// This component goes in teh posts page.js = App/posts/page.js

"use client";
import { useRouter } from "next/navigation";

export function DeletePost({ post }) {
  const router = useRouter();

  const deletePost = async (id) => {
    const response = await fetch(`/posts/${id}`, { method: "DELETE" });
    const data = await response.json();
    router.push("/posts");
  };

  return (
    <div>
      <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </div>
  );
}
