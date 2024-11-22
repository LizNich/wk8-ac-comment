// This page shows all the posts

// ADD SORT if I visit /posts?sort=desc, then the searchParams is equal to:
// { sort: "desc" }

import Link from "next/link";
import { db } from "@/utils/db";

export default async function PostsPage() {
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h3>{post.username}</h3>
                <p>{post.villager}</p>
                <p>{post.reason}</p>
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
