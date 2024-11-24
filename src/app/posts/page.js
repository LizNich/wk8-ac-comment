// This page shows all the posts with a sort option
//
// and imports a delete post button

import Link from "next/link";
import { db } from "@/utils/db";
import { DeletePost } from "@/components/DeletePost";

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
      <Link href="/posts?sort=asc">Sort A-Z by Villager</Link> |{" "}
      <Link href="/posts?sort=desc">Sort Z-A by Villager</Link>
      <Link href="/posts/new">
        <button>Add a new post</button>
      </Link>
      <h2>
        <strong> So... Who is your favourite Villager... and why? </strong>
      </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <p>
                  <strong>Username: </strong> {post.username}
                </p>
                <p>
                  <strong>Favourite Villager: </strong> {post.villager}
                </p>
                <p>
                  <strong>Why? </strong> {post.reason}
                </p>
                <p>
                  <strong>Click for Comments ❤️ </strong> {}
                </p>
              </Link>
              <DeletePost />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// note - <Link href={`/posts/${post.id}`}> = sets direction for all buttons showing in the Link
