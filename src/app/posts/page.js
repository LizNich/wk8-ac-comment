// This page shows all the posts

// ADD SORT if I visit /posts?sort=desc, then the searchParams is equal to:
// { sort: "desc" }

import Link from "next/link";
import { db } from "@/utils/db";

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
