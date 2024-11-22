// This page shows all the posts with a sort option
// and a delete post button

import Link from "next/link";
import { db } from "@/utils/db";
import { DeletePost } from "@/components/delete";

export default async function PostsPage({ searchParams }) {
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;

  if (searchParams.sort === "asc") {
    posts.sort((a, b) => a.villager.localeCompare(b.villager)); // A-Z
  } else if (searchParams.sort === "desc") {
    posts.sort((a, b) => b.villager.localeCompare(a.villager)); // Z-A
  }

  return (
    <div>
      <h2>Posts</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> |{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <p> {post.username}</p>
                <p>{post.villager}</p>
                <p>{post.reason}</p>
                <DeletePost />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/posts/new">
        <button>Add a new post</button>
      </Link>
    </div>
  );
}
